import "./Main.scss";

function Main() {
  return (
    <section className="main">
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__object">
            <img
              src={require("../assets/images/main.jpg")}
              alt="Main image"
              className="main__image"
            />
          </div>
          <div className="main__text container">
            <div className="main__animation-block">
              <h1 className="main__title">Web-developer</h1>
              <div className="main__animation-wrapper">
                <div className="main__animation"></div>
              </div>
            </div>
            <p className="main__subtitle">
              Do you want to get a new website? Do you need to edit an existing
              site? Add content? Okay, text me and I'll solve your case.
            </p>
            <button className="main__button">Request</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
