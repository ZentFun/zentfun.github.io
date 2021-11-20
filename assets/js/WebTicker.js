 $(document).ready(function () {

        // Calling WebTicker on the target element
        var ticker = $('#webticker');
        ticker.webTicker();

        // Back to top scroll script
        $('#scroll').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 900);
            return false;
        });

        var t = jQuery(".login-dialog-wrapper"),
            e = jQuery(".login-btn"),
            r = jQuery(".form-wrapper i.fa-close"),
            o = jQuery(".navbar-wrapper");
        e.click(function () {
            t.fadeTo("fast", 1, function () {
                jQuery(this).css("top", "50%"), o.css("z-index", "1000")
            })
        }), r.on("click", function () {
            t.fadeTo("fast", 0, function () {
                jQuery(this).css("top", "-5000px"), o.css("z-index", "99999999")
            })
        })
    });