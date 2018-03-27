$(function () {
    var
        colorThemes = {  //Color themes
            red: ["darkred", "red", "salmon"],
            pink: ["mediumvioletred", "deeppink", "pink"],
            yellow: ["darkkhaki", "gold", "yellow"],
            purple: ["indigo", "magenta", "lavender"],
            green: ["darkgreen", "limegreen", "lime"],
            blue: ["blue", "deepskyblue", "aqua"],
            brown: ["saddlebrown", "peru", "bisque"],
            gray: ["darkslategray", "lightslategray", "lightgray"]
        },
        colors = Object.getOwnPropertyNames(colorThemes), //Get colorThemes property names as array
        fontsThemes = [ //Fonts array
            ["Georgia", "Times", "serif"],
            ["'Palatino Linotype'", "Palatino", "serif"],
            ["'Times New Roman'", "Times", "serif"],
            ["Arial", "Helvetica", "sans-serif"],
            ["'Comic Sans MS'", "cursive", "sans-serif"],
            ["Tahoma", "Geneva", "sans-serif"],
            ["'Courier New'", "Courier", "monospace"],
            ["'Lucida Console'", "Monaco", "monospace"]
        ],
        photo = ["west.jpg", "bychara.jpg", "pepsi.jpg", "AlexeyRozdobudko.jpg"],

        $sideNav = $("#sideNav"), //Navigation panel
        $colorButtonMenu = $("#colorButtonMenu"), //Color button menu
        $photoAva = $("#photo_ava"), // Photo
        $fontButtonMenu = $("#fontButtonMenu"), // Font button menu
        $fullName = $("#fullname"), //Full name area
        $newColor = $(".text-primary, .simpleLinkStyle, .mycolor"),//Font change
        $exampleModal = $("#exampleModal"), //Modal window for font and color

        photoClicked = false, //Photo is not clicked yet
        themesClicked = false, //Color and font menu is not clicked yet
        nameClicked = false, //Name area is not clicked or overing yet;
        count = 0,

        i, j, //Iterators
        isMobile, isDesktop, isTablet, //Define window
        currentColor; //

    //Create list of colors.
    for (i = 0; i < colors.length; i++) {
        $colorButtonMenu.append('<a id="ct_' + colors[i] + '" ' +
            'class = "dropdown-item" style="text-transform: capitalize; ' +
            'background-color:' + colors[i] + '">' + colors[i] + '</a>');
    }

    //Create list of fonts.
    for (j = 0; j < fontsThemes.length; j++) {
        if (fontsThemes[j][0].charAt(0) === "'") {
            fontsThemes[j][0] = fontsThemes[j][0].substring(1, fontsThemes[j][0].length - 1);
        }
        $fontButtonMenu.append('<a id="ft_' + j + '" ' +
            'class="dropdown-item" ' + 'style="font-family:' +
            fontsThemes[j][0] + ', ' + fontsThemes[j][1] + ', ' + fontsThemes[j][2] +
            '"' + '>' + fontsThemes[j][0] + '</a>');
    }

    //Opening of modal window
    $sideNav.click(function () {
        themesClicked = true;
        $exampleModal.modal('show');
        $sideNav.tooltip('dispose')
            .tooltip('disable');
    });

    //Apply new color
    $colorButtonMenu.click(function (event) {
        for (i = 0; i < colors.length; i++) {
            if (colors[i] === event.target.id.substring(3)) {
                currentColor = colorThemes[colors[i]][1] + " !important";
                $sideNav.attr("style", "background-color: " + currentColor);
                $newColor.attr("style", "color: " + currentColor);
            }
        }
    });

    //Apply new font
    $fontButtonMenu.click(function (event) {
        for (j = 0; j < fontsThemes.length; j++) {
            if (j == event.target.id.substring(3)) {
                $("body, h1, h2, h3, h4, h5, h6, .subheading").attr("style", "font-family: " +
                    fontsThemes[j][0] + ', ' + fontsThemes[j][1] + ', ' + fontsThemes[j][2]);
            }
        }
    });

    //Hover for social icons and skills icons
    $(".toChange").hover(
        function () {
            $(this).attr("style", "color: " + currentColor);
        }, function () {
            var colorBack = "#868e96";
            if ($(this)[0].tagName === "SPAN") { //for social icons
                colorBack = "#495057";
            }
            $(this).attr("style", "color: " + colorBack);
        }
    );

    // Name and surname replacing
    $fullName.mouseenter(function () {
        var $xName = $("#name"),
            $xSurname = $("#surname"),
            temp = $xName.text();
        nameClicked = true;
        $xName.text($xSurname.text());
        $xSurname.text(temp);
        $fullName.tooltip('dispose')
            .tooltip('disable');
    });

    // onclick Photo replacing
    $photoAva.click(function () {
        photoClicked = true;
        $photoAva.attr("src", "img/" + photo[count % photo.length])
            .tooltip('dispose')
            .tooltip('disable');
        return count++;
    });

    function detectScreen() {
        innerW = window.innerWidth;
        isDesktop = false;
        isTablet = false;
        isMobile = false;
        if (innerW >= 768 && innerW <= 979) {
            isTablet = true;
        } else if (innerW > 979) {
            isDesktop = true;
        } else {
            isMobile = true;
        }
        return innerW;
    }

    detectScreen();

    //tooltips timer
    setTimeout(func_name, 4000);
    setTimeout(func_photo, 8000);
    setTimeout(func_themes, 12000);

    //Tooltips only for desktop
    function func_name() {
        if (nameClicked === false && isDesktop) {
            $fullName.tooltip('show');
        }
    }

    function func_photo() {
        if (photoClicked === false && isDesktop) {
            $photoAva.tooltip('show');
        }
    }

    function func_themes() {
        if (themesClicked === false && isDesktop) {
            $sideNav.tooltip('show');
        }
    }
});
