const menu_icon = document.querySelector('.navbar_menu_icon');
      const menu = document.querySelector('.navbar_menu');
      const log = document.querySelector('.navbar_log');

      menu_icon.addEventListener('click', () => {
        menu.classList.toggle('active');
        log.classList.toggle('active');
      })