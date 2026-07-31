type InstallMode = 'oneliner' | 'macos';
type OperatingSystem = 'unix' | 'windows';
type ReleaseChannel = 'stable' | 'beta';

type QuickStartState = {
  mode: InstallMode;
  operatingSystem: OperatingSystem;
  beta: boolean;
};

const WINDOWS_COMMANDS = {
  stable: 'iex (irm https://kova-agent.neuralstudio.in/install.ps1)',
  beta: '& ([scriptblock]::Create((irm https://kova-agent.neuralstudio.in/install.ps1))) -Tag beta',
} as const;

const UNIX_COMMANDS = {
  stable: 'curl -fsSL https://kova-agent.neuralstudio.in/install.sh | sh',
  beta: 'curl -fsSL https://kova-agent.neuralstudio.in/install.sh | sh -s -- --beta',
} as const;

const COMMENTS = {
  oneliner: {
    stable: "# Works everywhere. Installs everything. You're welcome. 🦞",
    beta: '# Living on the edge. Bugs are features you found first. 🦞',
  },
} as const;

const MODES: InstallMode[] = ['oneliner', 'macos'];
const OPERATING_SYSTEMS: OperatingSystem[] = ['unix', 'windows'];

const isOneOf = <Value extends string>(value: string | undefined, options: Value[]): value is Value =>
  value !== undefined && options.includes(value as Value);

const setText = (elements: Iterable<Element>, value: string) => {
  for (const element of elements) element.textContent = value;
};

const setActive = <Button extends HTMLButtonElement>(
  buttons: Button[],
  active: (button: Button) => boolean,
) => {
  buttons.forEach((button) => {
    const isActive = active(button);
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const detectedOperatingSystem = (): OperatingSystem => {
  const navigatorWithPlatform = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  return navigatorWithPlatform.userAgentData?.platform === 'Windows'
    || navigator.userAgent.toLowerCase().includes('windows')
    ? 'windows'
    : 'unix';
};

const channelFor = (state: QuickStartState): ReleaseChannel => state.beta ? 'beta' : 'stable';

const onelinerCommand = (state: QuickStartState) =>
  state.operatingSystem === 'windows'
    ? WINDOWS_COMMANDS[channelFor(state)]
    : UNIX_COMMANDS[channelFor(state)];

const copyText = async (value: string): Promise<boolean> => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }

    const textArea = document.createElement('textarea');
    textArea.value = value;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.append(textArea);
    try {
      textArea.select();
      return document.execCommand('copy');
    } finally {
      textArea.remove();
    }
  } catch (error) {
    console.error('Failed to copy quick-start command:', error);
    return false;
  }
};

export function initQuickStart(root: HTMLElement): () => void {
  const state: QuickStartState = {
    mode: 'oneliner',
    operatingSystem: detectedOperatingSystem(),
    beta: false,
  };
  const abortController = new AbortController();
  const { signal } = abortController;
  const feedbackTimers = new Set<number>();

  const operatingSystemButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('.os-btn'));
  const modeButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('.mode-btn'));
  const betaButton = root.querySelector<HTMLButtonElement>('#beta-btn');

  const sections = {
    oneliner: root.querySelector<HTMLElement>('#code-oneliner'),
    macos: root.querySelector<HTMLElement>('#code-macos'),
  };
  const controls = {
    operatingSystem: root.querySelector<HTMLElement>('#os-switch'),
    beta: root.querySelector<HTMLElement>('#beta-switch'),
    placeholder: root.querySelector<HTMLElement>('#switch-placeholder'),
  };
  const comments = {
    oneliner: root.querySelector<HTMLElement>('#oneliner-comment'),
  };

  const render = () => {
    const channel = channelFor(state);
    const showOperatingSystem = state.mode === 'oneliner';
    const showBeta = state.mode === 'oneliner';

    Object.entries(sections).forEach(([mode, section]) => {
      if (section) section.hidden = state.mode !== mode;
    });
    if (controls.operatingSystem) controls.operatingSystem.hidden = !showOperatingSystem;
    if (controls.beta) controls.beta.hidden = !showBeta;
    if (controls.placeholder) {
      controls.placeholder.hidden = showOperatingSystem || showBeta;
    }

    setActive(modeButtons, (button) => button.dataset.mode === state.mode);
    setActive(operatingSystemButtons, (button) => button.dataset.os === state.operatingSystem);
    if (betaButton) {
      betaButton.classList.toggle('active', state.beta);
      betaButton.dataset.beta = String(state.beta);
      betaButton.setAttribute('aria-pressed', String(state.beta));
    }

    setText(root.querySelectorAll('.os-cmd'), onelinerCommand(state));
    if (comments.oneliner) comments.oneliner.textContent = COMMENTS.oneliner[channel];
  };

  betaButton?.addEventListener('click', () => {
    state.beta = !state.beta;
    render();
  }, { signal });

  operatingSystemButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!isOneOf(button.dataset.os, OPERATING_SYSTEMS)) return;
      state.operatingSystem = button.dataset.os;
      render();
    }, { signal });
  });

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!isOneOf(button.dataset.mode, MODES)) return;
      state.mode = button.dataset.mode;
      render();
    }, { signal });
  });

  const copyCommands: Record<string, () => string> = {
    oneliner: () => onelinerCommand(state),
  };

  root.querySelectorAll<HTMLButtonElement>('.copy-line-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const command = button.dataset.cmd ? copyCommands[button.dataset.cmd] : undefined;
      if (!command) return;

      const success = await copyText(command());
      const copyIcon = button.querySelector<SVGElement>('.copy-icon');
      const checkIcon = button.querySelector<SVGElement>('.check-icon');
      button.classList.toggle('copied', success);
      button.classList.toggle('copy-failed', !success);
      copyIcon?.toggleAttribute('hidden', success);
      checkIcon?.toggleAttribute('hidden', !success);

      const timer = window.setTimeout(() => {
        button.classList.remove('copied', 'copy-failed');
        copyIcon?.removeAttribute('hidden');
        checkIcon?.setAttribute('hidden', '');
        feedbackTimers.delete(timer);
      }, success ? 2000 : 1000);
      feedbackTimers.add(timer);
    }, { signal });
  });

  render();

  const destroy = () => {
    abortController.abort();
    feedbackTimers.forEach(window.clearTimeout);
    feedbackTimers.clear();
  };
  document.addEventListener('astro:before-swap', destroy, { once: true, signal });
  return destroy;
}
