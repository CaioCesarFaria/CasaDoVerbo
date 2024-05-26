
      document.addEventListener("DOMContentLoaded", function () {
        const title = "CASA DO VERBO - Comunicação Estratégica & Mkt Digital    ";
        let position = 0;

        function scrollTitle() {
          document.title = title.slice(position) + " " + title.slice(0, position);
          position = (position + 1) % title.length;
        }

        setInterval(scrollTitle, 100);
      });

