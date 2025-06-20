function MainVisual() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="main_visual">
      <div className="inner">
        <img src={`${baseUrl}images/main_visual.jpg`} alt="" />
      </div>
    </section>
  );
}

export default MainVisual;
