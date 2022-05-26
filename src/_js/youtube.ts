const youtubeVideos = document.querySelectorAll(".video-preview-hover");
Array.prototype.forEach.call(youtubeVideos, function (item: HTMLElement) {
  item.addEventListener("click", function (e) {
    try {
      const currentTarget: HTMLElement | null = e.currentTarget as HTMLElement;
      const parent = currentTarget?.parentElement;
      if (parent && !parent.classList.contains("playing")) {
        const dataset = currentTarget?.dataset;
        const id = dataset.id;
        const title = dataset.title;
        const iframe = `<iframe title="${title}" class="video-iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&wmode=transparent" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        parent.classList.add("playing");
        const container = document.createElement("div");
        container.innerHTML = iframe;
        parent.appendChild(container.firstElementChild as Node);
      }
      e.preventDefault();
    } catch (error) {}
  });
});
