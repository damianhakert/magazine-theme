!function(e){"use strict";function a(){e(".offcanvas-sidebar-overlay").addClass("active")}function i(){e(".offcanvas-sidebar-overlay").on("click",function(){e(this).removeClass("active"),e.sidr("close","offcanvas-sidebar")})}function s(){e(".offcanvas-sidebar-overlay").removeClass("active")}Drupal.behaviors.themagSidrOffCanvasMainMenu={attach:function(n){e(n).find("#offcanvas-sidebar").once().css("display","block"),e(n).find(".js-toggle-offcanvas-sidebar").once().sidr({name:"offcanvas-sidebar",renaming:!1,side:"left",displace:!0,onOpen:a,onOpenEnd:i,onClose:s}),e(n).find(".sidr li.menu-item--expanded").once().each(function(n,a){e(a).find("> a, > .nolink").on("click",function(n){n.preventDefault(),e(a).toggleClass("active"),e(a).find("> ul.menu").toggleClass("open")})})}},e(window).resize(function(){e.sidr("close","offcanvas-sidebar")})}(jQuery);