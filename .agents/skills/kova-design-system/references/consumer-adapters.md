This compatibility reference uses the legacy `@kova/design-system`
package name. If the project's package manifest or lock, or agent skill
manifest already installs `@kova/carapace`, use that package name for the
Carapace foundation. If the project still installs `@kova/design-system`,
use the legacy specifier here.

```css
/* Complete foundation */
@import "@kova/design-system";
```

```css
/* Focused imports (CSS layer order: tokens → themes → typography → components) */
@import "@kova/design-system/tokens.css";
@import "@kova/design-system/themes.css";
@import "@kova/design-system/typography.css";
@import "@kova/design-system/components.css";
@import "@kova/design-system/themes/product.css";
@import "@kova/design-system/compat/clawhub.css";
@import "@kova/design-system/tailwind.css";
```
