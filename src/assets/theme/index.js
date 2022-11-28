const theme = {
  color: {
    primaryColor: "#FF385C",
    secondaryColor: "#00848A",
    textColor: "#484848",
    textColorSecondary: "#222222"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18)
      }
    `
  }
};

export default theme;
