$(window).bind('mousewheel DOMMouseScroll', function (event) {
    if ($(window).scrollTop() >= 100) {
        $(".logo-name").css('display', 'none');
        $(".logo-img").css('display', 'block');
    }
    if ($(window).scrollTop() >= 640) {
        $("header").css('background', '#222222');
    } else {
        $("header").css('background', 'transparent');
        $(".logo-img").css('display', 'none');
        $(".logo-name").css('display', 'block');
    }
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        console.log($(window).scrollTop());
        $('header').removeClass('scrolledup');
    } else {
        console.log($(window).scrollTop());
        $('header').addClass('scrolledup');
    }
});

$(document).ready(function () {
    
    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    /* Fullscreen */
    renderer.setSize(window.innerWidth, window.innerHeight);
    /* Append to HTML */
    document.getElementById("banner").appendChild(renderer.domElement);
    var onRenderFcts = [];
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 1000);
    /* Play around with camera positioning */
    camera.position.z = 15;
    camera.position.y = 2;
    /* Fog provides depth to the landscape*/
    scene.fog = new THREE.Fog(0x000, 0, 45);;
    (function () {
        var light = new THREE.AmbientLight(0x202020)
        scene.add(light)
        var light = new THREE.DirectionalLight('white', 5)
        light.position.set(0.5, 0.0, 2)
        scene.add(light)
        var light = new THREE.DirectionalLight('white', 0.75 * 2)
        light.position.set(-0.5, -0.5, -2)
        scene.add(light)
    })()
    var heightMap = THREEx.Terrain.allocateHeightMap(256, 256)
    THREEx.Terrain.simplexHeightMap(heightMap)
    var geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
    THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)
    /* Wireframe built-in color is white, no need to change that */
    var material = new THREE.MeshBasicMaterial({
        wireframe: true
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.lookAt(new THREE.Vector3(0, 1, 0));
    /* Play around with the scaling */
    mesh.scale.y = 3.5;
    mesh.scale.x = 3;
    mesh.scale.z = 0.20;
    mesh.scale.multiplyScalar(10);
    /* Play around with the camera */
    onRenderFcts.push(function (delta, now) {
        mesh.rotation.z += 0.2 * delta;
    })
    onRenderFcts.push(function () {
        renderer.render(scene, camera);
    })
    var lastTimeMsec = null
    requestAnimationFrame(function animate(nowMsec) {
        requestAnimationFrame(animate);
        lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
        var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
        lastTimeMsec = nowMsec
        onRenderFcts.forEach(function (onRenderFct) {
            onRenderFct(deltaMsec / 1000, nowMsec / 1000)
        })
    })

    /*script for fullpage scroll*/
    /*$(".main").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                         // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                         // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
     });
*/

});

$(window).scroll(function(){
	var winScroll = $(window).scrollTop();
	if(winScroll >= 650 && winScroll < 1000){
		$('.animated-text').css({'left':'40%','transition':'left linear 1.2s'});
	}
	else
		$('.animated-text').css({'left':'36%','transition':'left linear 1.2s'});

});

