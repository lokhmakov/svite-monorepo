<script>
  // @link https://codepen.io/viduthalai1947/pen/JkhDK
</script>

<style>
  div {
    width: 24px;
    height: 24px;
    background-color: transparent;
    box-shadow: inset 0px 0px 0px 2px #fff;
    border-radius: 50%;
    position: relative;
  }
  div:after,
  div:before {
    position: absolute;
    content: '';
    background-color: #fff;
  }
  div:after {
    width: 10px;
    height: 2px;
    top: 11px;
    left: 11px;
    transform-origin: 1px 1px;
    animation: minhand 2s linear infinite;
  }

  div:before {
    width: 8px;
    height: 2px;
    top: 11px;
    left: 11px;
    transform-origin: 1px 1px;
    animation: hrhand 8s linear infinite;
  }

  @keyframes minhand {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes hrhand {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div />
