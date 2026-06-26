# Accounting Hero

Optimized single-file React hero component with canvas background effects.

## Usage

```tsx
import AccountingHero from "./AccountingHero.single";

<AccountingHero
  heading="Modern Accounting Solutions"
  subheading="Streamline your finances with intelligent automation."
  buttonText="Get Started"
/>
```

## Dependencies

- `react`
- `framer-motion`

## Performance notes

- No external font imports or global body styles
- Canvas layers reduced to 2 with frame skipping and DPR cap
- Animations pause when off-screen or tab is hidden
- White text via props (no gradient/shine animations)
