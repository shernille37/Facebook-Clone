const Widgets = () => {
  return (
    <div className="hidden lg:block">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        className="border-none overflow-hidden"
        allowtransparency="true"
        allow="encrypted-media"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Widgets;
