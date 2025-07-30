export const stylePreloader = `
  .preload {
    --size-mask: 0%;

    height: 100%;
    width: 100%;
    background-color: #7b7c5d;
    position: fixed;
    z-index: 90;
    color: #D7E4F0;
    display: flex;
    align-items: center;
    justify-content: center;
    mask-image: radial-gradient(circle at center, transparent calc(var(--size-mask) - 1px), black var(--size-mask));
    mask-repeat: no-repeat;
    mask-position: center;
  }

  .preload::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url("/image/bg/bg-footer.png");
    mix-blend-mode: color-burn;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.7;
    position: absolute;
  }

  .preload__main {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 60px;
    justify-items: center;
  }

  .preload__img {
    width: 200px;
    height: 204px;
  }

  .preload__img svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .preload__img .is-hide {
    opacity: 0;
  }

  .preload__img path {
    transition: opacity 0.3s cubic-bezier(.78,.01,.83,.67);
  }
`
