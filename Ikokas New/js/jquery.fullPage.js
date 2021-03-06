/*!
 * fullPage 2.9.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, n) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], function(o) { return n(o, e, e.document, e.Math) }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math) }("undefined" != typeof window ? window : this, function(e, n, o, t, i) { "use strict"; var a = "fullpage-wrapper",
        l = "." + a,
        s = "fp-responsive",
        r = "fp-notransition",
        c = "fp-destroyed",
        d = "fp-enabled",
        f = "fp-viewing",
        u = "active",
        h = "." + u,
        v = "fp-completely",
        p = "." + v,
        g = "fp-section",
        m = "." + g,
        w = m + h,
        S = m + ":first",
        x = m + ":last",
        b = "fp-tableCell",
        y = "." + b,
        C = "fp-auto-height",
        T = "fp-normal-scroll",
        k = "fp-nav",
        L = "#" + k,
        A = "fp-tooltip",
        O = "." + A,
        I = "fp-show-active",
        E = "fp-slide",
        M = "." + E,
        B = M + h,
        R = "fp-slides",
        z = "." + R,
        H = "fp-slidesContainer",
        D = "." + H,
        P = "fp-table",
        q = "fp-slidesNav",
        F = "." + q,
        V = F + " a",
        j = "fp-controlArrow",
        Y = "." + j,
        N = "fp-prev",
        X = j + " " + N,
        U = Y + ("." + N),
        W = "fp-next",
        K = j + " " + W,
        _ = Y + ".fp-next",
        Q = e(n),
        G = e(o);
    e.fn.fullpage = function(j) { if (e("html").hasClass(d)) $n();
        else { var W = e("html, body"),
                J = e("body"),
                Z = e.fn.fullpage;
            j = e.extend({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null, scrollOverflowOptions: null, touchSensitivity: 5, normalScrollElementTouchThreshold: 5, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, j); var $, ee, ne, oe, te = !1,
                ie = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                ae = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                le = e(this),
                se = Q.height(),
                re = !1,
                ce = !0,
                de = !0,
                fe = [],
                ue = { m: { up: !0, down: !0, left: !0, right: !0 } };
            ue.k = e.extend(!0, {}, ue.m); var he, ve, pe, ge, me, we, Se, xe = function() { var e;
                    e = n.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" }; return e }(),
                be = { touchmove: "ontouchmove" in n ? "touchmove" : xe.move, touchstart: "ontouchstart" in n ? "touchstart" : xe.down },
                ye = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                Ce = e.extend(!0, {}, j);
            $n(), e.extend(e.easing, { easeInOutCubic: function(e, n, o, t, i) { return (n /= i / 2) < 1 ? t / 2 * n * n * n + o : t / 2 * ((n -= 2) * n * n + 2) + o } }), e(this).length && (Z.version = "2.9.5", Z.setAutoScrolling = ze, Z.setRecordHistory = He, Z.setScrollingSpeed = De, Z.setFitToSection = Pe, Z.setLockAnchors = function(e) { j.lockAnchors = e }, Z.setMouseWheelScrolling = qe, Z.setAllowScrolling = Fe, Z.setKeyboardScrolling = Ve, Z.moveSectionUp = je, Z.moveSectionDown = Ye, Z.silentMoveTo = Ne, Z.moveTo = Xe, Z.moveSlideRight = Ue, Z.moveSlideLeft = We, Z.fitToSection = Je, Z.reBuild = Ke, Z.setResponsive = _e, Z.destroy = function(n) { ze(!1, "internal"), Fe(!1), Ve(!1), le.addClass(c), clearTimeout(ge), clearTimeout(pe), clearTimeout(ve), clearTimeout(me), clearTimeout(we), Q.off("scroll", Ge).off("hashchange", mn).off("resize", Mn), G.off("click touchstart", L + " a").off("mouseenter", L + " li").off("mouseleave", L + " li").off("click touchstart", V).off("mouseover", j.normalScrollElements).off("mouseout", j.normalScrollElements), e(m).off("click touchstart", Y), clearTimeout(ge), clearTimeout(pe), n && function() { Qn(0), le.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() { dn(e(this), "src") }), le.find("img[data-srcset]").each(function() { dn(e(this), "srcset") }), e(L + ", " + F + ", " + Y).remove(), e(m).css({ height: "", "background-color": "", padding: "" }), e(M).css({ width: "" }), le.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), W.css({ overflow: "", height: "" }), e("html").removeClass(d), J.removeClass(s), e.each(J.get(0).className.split(/\s+/), function(e, n) { 0 === n.indexOf(f) && J.removeClass(n) }), e(m + ", " + M).each(function() { j.scrollOverflowHandler && j.scrollOverflowHandler.remove(e(this)), e(this).removeClass(P + " " + u), e(this).attr("style", e(this).data("fp-styles")) }), zn(le), le.find(y + ", " + D + ", " + z).each(function() { e(this).replaceWith(this.childNodes) }), le.css({ "-webkit-transition": "none", transition: "none" }), W.scrollTop(0); var n = [g, E, H];
                    e.each(n, function(n, o) { e("." + o).removeClass(o) }) }() }, Z.shared = { afterRenderActions: Qe }, function() { j.css3 && (j.css3 = function() { var e, t = o.createElement("p"),
                        a = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" }; for (var l in o.body.insertBefore(t, null), a) t.style[l] !== i && (t.style[l] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(t).getPropertyValue(a[l])); return o.body.removeChild(t), e !== i && e.length > 0 && "none" !== e }());
                j.scrollBar = j.scrollBar || j.hybrid, t = le.find(j.sectionSelector), j.anchors.length || (j.anchors = t.filter("[data-anchor]").map(function() { return e(this).data("anchor").toString() }).get()), j.navigationTooltips.length || (j.navigationTooltips = t.filter("[data-tooltip]").map(function() { return e(this).data("tooltip").toString() }).get()), le.css({ height: "100%", position: "relative" }), le.addClass(a), e("html").addClass(d), se = Q.height(), le.removeClass(c), le.find(j.sectionSelector).addClass(g), le.find(j.slideSelector).addClass(E), e(m).each(function(n) { var o, t, i, a, s = e(this),
                        r = s.find(M),
                        c = r.length;
                    s.data("fp-styles", s.attr("style")), i = s, (a = n) || 0 !== e(w).length || i.addClass(u), oe = e(w), i.css("height", se + "px"), j.paddingTop && i.css("padding-top", j.paddingTop), j.paddingBottom && i.css("padding-bottom", j.paddingBottom), void 0 !== j.sectionsColor[a] && i.css("background-color", j.sectionsColor[a]), void 0 !== j.anchors[a] && i.attr("data-anchor", j.anchors[a]), o = s, t = n, void 0 !== j.anchors[t] && o.hasClass(u) && Hn(j.anchors[t], t), j.menu && j.css3 && e(j.menu).closest(l).length && e(j.menu).appendTo(J), c > 0 ? function(n, o, t) { var i, a = 100 * t,
                            l = 100 / t;
                        o.wrapAll('<div class="' + H + '" />'), o.parent().wrap('<div class="' + R + '" />'), n.find(D).css("width", a + "%"), t > 1 && (j.controlArrows && ((i = n).find(z).after('<div class="' + X + '"></div><div class="' + K + '"></div>'), "#fff" != j.controlArrowColor && (i.find(_).css("border-color", "transparent transparent transparent " + j.controlArrowColor), i.find(U).css("border-color", "transparent " + j.controlArrowColor + " transparent transparent")), j.loopHorizontal || i.find(U).hide()), j.slidesNavigation && function(e, n) { e.append('<div class="' + q + '"><ul></ul></div>'); var o = e.find(F);
                            o.addClass(j.slidesNavPosition); for (var t = 0; t < n; t++) o.find("ul").append('<li><a href="#"><span></span></a></li>');
                            o.css("margin-left", "-" + o.width() / 2 + "px"), o.find("li").first().find("a").addClass(u) }(n, t)), o.each(function(n) { e(this).css("width", l + "%"), j.verticalCentered && Pn(e(this)) }); var s = n.find(B);
                        s.length && (0 !== e(w).index(m) || 0 === e(w).index(m) && 0 !== s.index()) ? _n(s, "internal") : o.eq(0).addClass(u) }(s, r, c) : j.verticalCentered && Pn(s) }), j.fixedElements && j.css3 && e(j.fixedElements).appendTo(J), j.navigation && function() { J.append('<div id="' + k + '"><ul></ul></div>'); var n = e(L);
                    n.addClass(function() { return j.showActiveTooltip ? I + " " + j.navigationPosition : j.navigationPosition }); for (var o = 0; o < e(m).length; o++) { var t = "";
                        j.anchors.length && (t = j.anchors[o]); var i = '<li><a href="#' + t + '"><span></span></a>',
                            a = j.navigationTooltips[o];
                        void 0 !== a && "" !== a && (i += '<div class="' + A + " " + j.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i) }
                    e(L).css("margin-top", "-" + e(L).height() / 2 + "px"), e(L).find("li").eq(e(w).index(m)).find("a").addClass(u) }(), le.find('iframe[src*="youtube.com/embed/"]').each(function() { var n, o, t;
                    n = e(this), o = "enablejsapi=1", t = n.attr("src"), n.attr("src", t + (/\?/.test(t) ? "&" : "?") + o) }), j.scrollOverflow ? he = j.scrollOverflowHandler.init(j) : Qe(), Fe(!0), ze(j.autoScrolling, "internal"), Bn(), Wn(), "complete" === o.readyState && gn(); var t;
                Q.on("load", gn) }(), Q.on("scroll", Ge).on("hashchange", mn).blur(kn).resize(Mn), G.keydown(Sn).keyup(bn).on("click touchstart", L + " a", Ln).on("click touchstart", V, An).on("click", O, xn), e(m).on("click touchstart", Y, Tn), j.normalScrollElements && (G.on("mouseenter touchstart", j.normalScrollElements, function() { Fe(!1) }), G.on("mouseleave touchend", j.normalScrollElements, function() { Fe(!0) }))); var Te = !1,
                ke = 0,
                Le = 0,
                Ae = 0,
                Oe = 0,
                Ie = 0,
                Ee = (new Date).getTime(),
                Me = 0,
                Be = 0,
                Re = se }

        function ze(n, o) { n || Qn(0), Zn("autoScrolling", n, o); var t = e(w);
            j.autoScrolling && !j.scrollBar ? (W.css({ overflow: "hidden", height: "100%" }), He(Ce.recordHistory, "internal"), le.css({ "-ms-touch-action": "none", "touch-action": "none" }), t.length && Qn(t.position().top)) : (W.css({ overflow: "visible", height: "initial" }), He(!1, "internal"), le.css({ "-ms-touch-action": "", "touch-action": "" }), t.length && W.scrollTop(t.position().top)) }

        function He(e, n) { Zn("recordHistory", e, n) }

        function De(e, n) { Zn("scrollingSpeed", e, n) }

        function Pe(e, n) { Zn("fitToSection", e, n) }

        function qe(e) { e ? (! function() { var e, t = "";
                n.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on"); var a = "onwheel" in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll"; "DOMMouseScroll" == a ? o[e](t + "MozMousePixelScroll", an, !1) : o[e](t + a, an, !1) }(), le.on("mousedown", yn).on("mouseup", Cn)) : (o.addEventListener ? (o.removeEventListener("mousewheel", an, !1), o.removeEventListener("wheel", an, !1), o.removeEventListener("MozMousePixelScroll", an, !1)) : o.detachEvent("onmousewheel", an), le.off("mousedown", yn).off("mouseup", Cn)) }

        function Fe(n, o) { void 0 !== o ? (o = o.replace(/ /g, "").split(","), e.each(o, function(e, o) { Jn(n, o, "m") })) : (Jn(n, "all", "m"), n ? (qe(!0), (ie || ae) && (j.autoScrolling && J.off(be.touchmove).on(be.touchmove, $e), e(l).off(be.touchstart).on(be.touchstart, on).off(be.touchmove).on(be.touchmove, en))) : (qe(!1), (ie || ae) && (j.autoScrolling && J.off(be.touchmove), e(l).off(be.touchstart).off(be.touchmove)))) }

        function Ve(n, o) { void 0 !== o ? (o = o.replace(/ /g, "").split(","), e.each(o, function(e, o) { Jn(n, o, "k") })) : (Jn(n, "all", "k"), j.keyboardScrolling = n) }

        function je() { var n = e(w).prev(m);
            n.length || !j.loopTop && !j.continuousVertical || (n = e(m).last()), n.length && rn(n, null, !0) }

        function Ye() { var n = e(w).next(m);
            n.length || !j.loopBottom && !j.continuousVertical || (n = e(m).first()), n.length && rn(n, null, !1) }

        function Ne(e, n) { De(0, "internal"), Xe(e, n), De(Ce.scrollingSpeed, "internal") }

        function Xe(e, n) { var o = Vn(e);
            void 0 !== n ? jn(e, n) : o.length > 0 && rn(o) }

        function Ue(e) { ln("right", e) }

        function We(e) { ln("left", e) }

        function Ke(n) { if (!le.hasClass(c)) { re = !0, se = Q.height(), e(m).each(function() { var n = e(this).find(z),
                        o = e(this).find(M);
                    j.verticalCentered && e(this).find(y).css("height", qn(e(this)) + "px"), e(this).css("height", se + "px"), o.length > 1 && In(n, n.find(B)) }), j.scrollOverflow && he.createScrollBarForAll(); var o = e(w).index(m);
                o && Ne(o + 1), re = !1, e.isFunction(j.afterResize) && n && j.afterResize.call(le), e.isFunction(j.afterReBuild) && !n && j.afterReBuild.call(le) } }

        function _e(n) { var o = J.hasClass(s);
            n ? o || (ze(!1, "internal"), Pe(!1, "internal"), e(L).hide(), J.addClass(s), e.isFunction(j.afterResponsive) && j.afterResponsive.call(le, n)) : o && (ze(Ce.autoScrolling, "internal"), Pe(Ce.autoScrolling, "internal"), e(L).show(), J.removeClass(s), e.isFunction(j.afterResponsive) && j.afterResponsive.call(le, n)) }

        function Qe() { var n, o = e(w);
            o.addClass(v), fn(o), un(o), j.scrollOverflow && j.scrollOverflowHandler.afterLoad(), (!(n = Vn(wn().section)) || n.length && n.index() === oe.index()) && e.isFunction(j.afterLoad) && j.afterLoad.call(o, o.data("anchor"), o.index(m) + 1), e.isFunction(j.afterRender) && j.afterRender.call(le) }

        function Ge() { var n, t, i; if (!j.autoScrolling || j.scrollBar) { var a = Q.scrollTop(),
                    l = (i = (t = a) > ke ? "down" : "up", ke = t, Me = t, i),
                    s = 0,
                    r = a + Q.height() / 2,
                    c = J.height() - Q.height() === a,
                    d = o.querySelectorAll(m); if (c) s = d.length - 1;
                else if (a)
                    for (var f = 0; f < d.length; ++f) { d[f].offsetTop <= r && (s = f) } else s = 0; if (function(n) { var o = e(w).position().top,
                            t = o + Q.height(); if ("up" == n) return t >= Q.scrollTop() + Q.height(); return o <= Q.scrollTop() }(l) && (e(w).hasClass(v) || e(w).addClass(v).siblings().removeClass(v)), !(n = e(d).eq(s)).hasClass(u)) { Te = !0; var h, p, g = e(w),
                        S = g.index(m) + 1,
                        x = Dn(n),
                        b = n.data("anchor"),
                        y = n.index(m) + 1,
                        C = n.find(B);
                    C.length && (p = C.data("anchor"), h = C.index()), de && (n.addClass(u).siblings().removeClass(u), e.isFunction(j.onLeave) && j.onLeave.call(g, S, y, x), e.isFunction(j.afterLoad) && j.afterLoad.call(n, b, y), vn(g), fn(n), un(n), Hn(b, y - 1), j.anchors.length && ($ = b), Nn(h, p, b, y)), clearTimeout(me), me = setTimeout(function() { Te = !1 }, 100) }
                j.fitToSection && (clearTimeout(we), we = setTimeout(function() { j.fitToSection && e(w).outerHeight() <= se && Je() }, j.fitToSectionDelay)) } }

        function Je() { de && (re = !0, rn(e(w)), re = !1) }

        function Ze(n) { if (ue.m[n]) { var o = "down" === n ? Ye : je; if (j.scrollOverflow) { var t = j.scrollOverflowHandler.scrollable(e(w)),
                        i = "down" === n ? "bottom" : "top"; if (t.length > 0) { if (!j.scrollOverflowHandler.isScrolled(i, t)) return !0;
                        o() } else o() } else o() } }

        function $e(e) { var n = e.originalEvent;
            j.autoScrolling && nn(n) && e.preventDefault() }

        function en(n) { var o = n.originalEvent,
                i = e(o.target).closest(m); if (nn(o)) { j.autoScrolling && n.preventDefault(); var a = Kn(o);
                Oe = a.y, Ie = a.x, i.find(z).length && t.abs(Ae - Ie) > t.abs(Le - Oe) ? !te && t.abs(Ae - Ie) > Q.outerWidth() / 100 * j.touchSensitivity && (Ae > Ie ? ue.m.right && Ue(i) : ue.m.left && We(i)) : j.autoScrolling && de && t.abs(Le - Oe) > Q.height() / 100 * j.touchSensitivity && (Le > Oe ? Ze("down") : Oe > Le && Ze("up")) } }

        function nn(e) { return void 0 === e.pointerType || "mouse" != e.pointerType }

        function on(e) { var n = e.originalEvent; if (j.fitToSection && W.stop(), nn(n)) { var o = Kn(n);
                Le = o.y, Ae = o.x } }

        function tn(e, n) { for (var o = 0, i = e.slice(t.max(e.length - n, 1)), a = 0; a < i.length; a++) o += i[a]; return t.ceil(o / n) }

        function an(o) { var i = (new Date).getTime(),
                a = e(p).hasClass(T); if (j.autoScrolling && !ne && !a) { var l = (o = o || n.event).wheelDelta || -o.deltaY || -o.detail,
                    s = t.max(-1, t.min(1, l)),
                    r = void 0 !== o.wheelDeltaX || void 0 !== o.deltaX,
                    c = t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) || t.abs(o.deltaX) < t.abs(o.deltaY) || !r;
                fe.length > 149 && fe.shift(), fe.push(t.abs(l)), j.scrollBar && (o.preventDefault ? o.preventDefault() : o.returnValue = !1); var d = i - Ee; if (Ee = i, d > 200 && (fe = []), de) tn(fe, 10) >= tn(fe, 70) && c && Ze(s < 0 ? "down" : "up"); return !1 }
            j.fitToSection && W.stop() }

        function ln(n, o) { var t = (void 0 === o ? e(w) : o).find(z),
                i = t.find(M).length; if (!(!t.length || te || i < 2)) { var a = t.find(B),
                    l = null; if (!(l = "left" === n ? a.prev(M) : a.next(M)).length) { if (!j.loopHorizontal) return;
                    l = "left" === n ? a.siblings(":last") : a.siblings(":first") }
                te = !0, In(t, l, n) } }

        function sn() { e(B).each(function() { _n(e(this), "internal") }) }

        function rn(n, o, i) { if (void 0 !== n) { var a, s, r, c, d, f, h, v, p = { element: n, callback: o, isMovementUp: i, dtop: (s = (a = n).position(), r = s.top, c = s.top > Me, d = r - se + a.outerHeight(), f = j.bigSectionsDestination, a.outerHeight() > se ? (c || f) && "bottom" !== f || (r = d) : (c || re && a.is(":last-child")) && (r = d), Me = r, r), yMovement: Dn(n), anchorLink: n.data("anchor"), sectionIndex: n.index(m), activeSlide: n.find(B), activeSection: e(w), leavingSection: e(w).index(m) + 1, localIsResizing: re };
                p.activeSection.is(n) && !re || j.scrollBar && Q.scrollTop() === p.dtop && !n.hasClass(C) || (p.activeSlide.length && (h = p.activeSlide.data("anchor"), v = p.activeSlide.index()), e.isFunction(j.onLeave) && !p.localIsResizing && !1 === j.onLeave.call(p.activeSection, p.leavingSection, p.sectionIndex + 1, p.yMovement) || (j.autoScrolling && j.continuousVertical && void 0 !== p.isMovementUp && (!p.isMovementUp && "up" == p.yMovement || p.isMovementUp && "down" == p.yMovement) && (p = function(n) { n.isMovementUp ? e(w).before(n.activeSection.nextAll(m)) : e(w).after(n.activeSection.prevAll(m).get().reverse()); return Qn(e(w).position().top), sn(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = Dn(n.element), n.leavingSection = n.activeSection.index(m) + 1, n.sectionIndex = n.element.index(m), n }(p)), p.localIsResizing || vn(p.activeSection), j.scrollOverflow && j.scrollOverflowHandler.beforeLeave(), n.addClass(u).siblings().removeClass(u), fn(n), j.scrollOverflow && j.scrollOverflowHandler.onLeave(), de = !1, Nn(v, h, p.anchorLink, p.sectionIndex), function(n) { if (j.css3 && j.autoScrolling && !j.scrollBar) { var o = "translate3d(0px, -" + t.round(n.dtop) + "px, 0px)";
                        Fn(o, !0), j.scrollingSpeed ? (clearTimeout(pe), pe = setTimeout(function() { cn(n) }, j.scrollingSpeed)) : cn(n) } else { var i = function(e) { var n = {};
                            j.autoScrolling && !j.scrollBar ? (n.options = { top: -e.dtop }, n.element = l) : (n.options = { scrollTop: e.dtop }, n.element = "html, body"); return n }(n);
                        e(i.element).animate(i.options, j.scrollingSpeed, j.easing).promise().done(function() { j.scrollBar ? setTimeout(function() { cn(n) }, 30) : cn(n) }) } }(p), $ = p.anchorLink, Hn(p.anchorLink, p.sectionIndex))) } }

        function cn(n) { var o;
            (o = n).wrapAroundElements && o.wrapAroundElements.length && (o.isMovementUp ? e(S).before(o.wrapAroundElements) : e(x).after(o.wrapAroundElements), Qn(e(w).position().top), sn()), e.isFunction(j.afterLoad) && !n.localIsResizing && j.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), j.scrollOverflow && j.scrollOverflowHandler.afterLoad(), n.localIsResizing || un(n.element), n.element.addClass(v).siblings().removeClass(v), de = !0, e.isFunction(n.callback) && n.callback.call(this) }

        function dn(e, n) { e.attr(n, e.data(n)).removeAttr("data-" + n) }

        function fn(n) { var o;
            j.lazyLoading && pn(n).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function() { if (o = e(this), e.each(["src", "srcset"], function(e, n) { var t = o.attr("data-" + n);
                        void 0 !== t && t && dn(o, n) }), o.is("source")) { var n = o.closest("video").length ? "video" : "audio";
                    o.closest(n).get(0).load() } }) }

        function un(n) { var o = pn(n);
            o.find("video, audio").each(function() { var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play() }), o.find('iframe[src*="youtube.com/embed/"]').each(function() { var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && hn(n), n.onload = function() { n.hasAttribute("data-autoplay") && hn(n) } }) }

        function hn(e) { e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") }

        function vn(n) { var o = pn(n);
            o.find("video, audio").each(function() { var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause() }), o.find('iframe[src*="youtube.com/embed/"]').each(function() { var n = e(this).get(0); /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") }) }

        function pn(n) { var o = n.find(B); return o.length && (n = e(o)), n }

        function gn() { var e = wn(),
                n = e.section,
                o = e.slide;
            n && (j.animateAnchor ? jn(n, o) : Ne(n, o)) }

        function mn() { if (!Te && !j.lockAnchors) { var e = wn(),
                    n = e.section,
                    o = e.slide,
                    t = void 0 === $,
                    i = void 0 === $ && void 0 === o && !te;
                n && n.length && (n && n !== $ && !t || i || !te && ee != o) && jn(n, o) } }

        function wn() { var e, o, t = n.location.hash; if (t.length) { var i = t.replace("#", "").split("/"),
                    a = t.indexOf("#/") > -1;
                e = a ? "/" + i[1] : decodeURIComponent(i[0]); var l = a ? i[2] : i[1];
                l && l.length && (o = decodeURIComponent(l)) } return { section: e, slide: o } }

        function Sn(n) { clearTimeout(Se); var o = e(":focus"),
                t = n.which; if (9 === t) ! function(n) { var o = n.shiftKey,
                    t = e(":focus"),
                    i = e(w),
                    a = i.find(B),
                    l = (a.length ? a : i).find(ye).not('[tabindex="-1"]');

                function s(e) { return e.preventDefault(), l.first().focus() }
                t.length ? t.closest(w, B).length || (t = s(n)) : s(n);
                (!o && t.is(l.last()) || o && t.is(l.first())) && n.preventDefault() }(n);
            else if (!o.is("textarea") && !o.is("input") && !o.is("select") && "true" !== o.attr("contentEditable") && "" !== o.attr("contentEditable") && j.keyboardScrolling && j.autoScrolling) { e.inArray(t, [40, 38, 32, 33, 34]) > -1 && n.preventDefault(), ne = n.ctrlKey, Se = setTimeout(function() {! function(n) { var o = n.shiftKey; if (!de && [37, 39].indexOf(n.which) < 0) return; switch (n.which) {
                            case 38:
                            case 33:
                                ue.k.up && je(); break;
                            case 32:
                                if (o && ue.k.up) { je(); break }
                            case 40:
                            case 34:
                                ue.k.down && Ye(); break;
                            case 36:
                                ue.k.up && Xe(1); break;
                            case 35:
                                ue.k.down && Xe(e(m).length); break;
                            case 37:
                                ue.k.left && We(); break;
                            case 39:
                                ue.k.right && Ue(); break;
                            default:
                                ; } }(n) }, 150) } }

        function xn() { e(this).prev().trigger("click") }

        function bn(e) { ce && (ne = e.ctrlKey) }

        function yn(e) { 2 == e.which && (Be = e.pageY, le.on("mousemove", On)) }

        function Cn(e) { 2 == e.which && le.off("mousemove") }

        function Tn() { var n = e(this).closest(m);
            e(this).hasClass(N) ? ue.m.left && We(n) : ue.m.right && Ue(n) }

        function kn() { ce = !1, ne = !1 }

        function Ln(n) { n.preventDefault(); var o = e(this).parent().index();
            rn(e(m).eq(o)) }

        function An(n) { n.preventDefault(); var o = e(this).closest(m).find(z);
            In(o, o.find(M).eq(e(this).closest("li").index())) }

        function On(e) { de && (e.pageY < Be && ue.m.up ? je() : e.pageY > Be && ue.m.down && Ye()), Be = e.pageY }

        function In(n, o, i) { var a = n.closest(m),
                l = { slides: n, destiny: o, direction: i, destinyPos: o.position(), slideIndex: o.index(), section: a, sectionIndex: a.index(m), anchorLink: a.data("anchor"), slidesNav: a.find(F), slideAnchor: Un(o), prevSlide: a.find(B), prevSlideIndex: a.find(B).index(), localIsResizing: re };
            l.xMovement = function(e, n) { if (e == n) return "none"; if (e > n) return "left"; return "right" }(l.prevSlideIndex, l.slideIndex), l.localIsResizing || (de = !1), j.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && e.isFunction(j.onSlideLeave) && !1 === j.onSlideLeave.call(l.prevSlide, l.anchorLink, l.sectionIndex + 1, l.prevSlideIndex, l.direction, l.slideIndex) ? te = !1 : (o.addClass(u).siblings().removeClass(u), l.localIsResizing || (vn(l.prevSlide), fn(o)), !j.loopHorizontal && j.controlArrows && (a.find(U).toggle(0 !== l.slideIndex), a.find(_).toggle(!o.is(":last-child"))), a.hasClass(u) && !l.localIsResizing && Nn(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), function(e, n, o) { var i = n.destinyPos; if (j.css3) { var a = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
                    Rn(e.find(D)).css(Gn(a)), ge = setTimeout(function() { o && En(n) }, j.scrollingSpeed, j.easing) } else e.animate({ scrollLeft: t.round(i.left) }, j.scrollingSpeed, j.easing, function() { o && En(n) }) }(n, l, !0)) }

        function En(n) { var o, t;
            o = n.slidesNav, t = n.slideIndex, o.find(h).removeClass(u), o.find("li").eq(t).find("a").addClass(u), n.localIsResizing || (e.isFunction(j.afterSlideLoad) && j.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), de = !0, un(n.destiny)), te = !1 }

        function Mn() { if (Bn(), ie) { var n = e(o.activeElement); if (!n.is("textarea") && !n.is("input") && !n.is("select")) { var i = Q.height();
                    t.abs(i - Re) > 20 * t.max(Re, i) / 100 && (Ke(!0), Re = i) } } else clearTimeout(ve), ve = setTimeout(function() { Ke(!0) }, 350) }

        function Bn() { var e = j.responsive || j.responsiveWidth,
                n = j.responsiveHeight,
                o = e && Q.outerWidth() < e,
                t = n && Q.height() < n;
            e && n ? _e(o || t) : e ? _e(o) : n && _e(t) }

        function Rn(e) { var n = "all " + j.scrollingSpeed + "ms " + j.easingcss3; return e.removeClass(r), e.css({ "-webkit-transition": n, transition: n }) }

        function zn(e) { return e.addClass(r) }

        function Hn(n, o) { var t, i, a;
            t = n, j.menu && (e(j.menu).find(h).removeClass(u), e(j.menu).find('[data-menuanchor="' + t + '"]').addClass(u)), i = n, a = o, j.navigation && (e(L).find(h).removeClass(u), i ? e(L).find('a[href="#' + i + '"]').addClass(u) : e(L).find("li").eq(a).find("a").addClass(u)) }

        function Dn(n) { var o = e(w).index(m),
                t = n.index(m); return o == t ? "none" : o > t ? "up" : "down" }

        function Pn(e) { e.hasClass(P) || e.addClass(P).wrapInner('<div class="' + b + '" style="height:' + qn(e) + 'px;" />') }

        function qn(e) { var n = se; if (j.paddingTop || j.paddingBottom) { var o = e;
                o.hasClass(g) || (o = e.closest(m)); var t = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
                n = se - t } return n }

        function Fn(e, n) { n ? Rn(le) : zn(le), le.css(Gn(e)), setTimeout(function() { le.removeClass(r) }, 10) }

        function Vn(n) { var o = le.find(m + '[data-anchor="' + n + '"]'); if (!o.length) { var t = void 0 !== n ? n - 1 : 0;
                o = e(m).eq(t) } return o }

        function jn(e, n) { var o = Vn(e); if (o.length) { var t, i, a, l = (t = n, (a = (i = o).find(M + '[data-anchor="' + t + '"]')).length || (t = void 0 !== t ? t : 0, a = i.find(M).eq(t)), a);
                e === $ || o.hasClass(u) ? Yn(l) : rn(o, function() { Yn(l) }) } }

        function Yn(e) { e.length && In(e.closest(z), e) }

        function Nn(e, n, o, t) { var i = "";
            j.anchors.length && !j.lockAnchors && (e ? (void 0 !== o && (i = o), void 0 === n && (n = e), ee = n, Xn(i + "/" + n)) : void 0 !== e ? (ee = n, Xn(o)) : Xn(o)), Wn() }

        function Xn(e) { if (j.recordHistory) location.hash = e;
            else if (ie || ae) n.history.replaceState(i, i, "#" + e);
            else { var o = n.location.href.split("#")[0];
                n.location.replace(o + "#" + e) } }

        function Un(e) { var n = e.data("anchor"),
                o = e.index(); return void 0 === n && (n = o), n }

        function Wn() { var n = e(w),
                o = n.find(B),
                t = Un(n),
                i = Un(o),
                a = String(t);
            o.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", ""); var l = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
            J[0].className = J[0].className.replace(l, ""), J.addClass(f + "-" + a) }

        function Kn(e) { var n = []; return n.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, ae && nn(e) && (j.scrollBar || !j.autoScrolling) && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n }

        function _n(e, n) { De(0, "internal"), void 0 !== n && (re = !0), In(e.closest(z), e), void 0 !== n && (re = !1), De(Ce.scrollingSpeed, "internal") }

        function Qn(e) { var n = t.round(e);
            j.css3 && j.autoScrolling && !j.scrollBar ? Fn("translate3d(0px, -" + n + "px, 0px)", !1) : j.autoScrolling && !j.scrollBar ? le.css("top", -n) : W.scrollTop(n) }

        function Gn(e) { return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

        function Jn(n, o, t) { "all" !== o ? ue[t][o] = n : e.each(Object.keys(ue[t]), function(e, o) { ue[t][o] = n }) }

        function Zn(e, n, o) { j[e] = n, "internal" !== o && (Ce[e] = n) }

        function $n() { e("html").hasClass(d) ? eo("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (j.continuousVertical && (j.loopTop || j.loopBottom) && (j.continuousVertical = !1, eo("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), j.scrollBar && j.scrollOverflow && eo("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !j.continuousVertical || !j.scrollBar && j.autoScrolling || (j.continuousVertical = !1, eo("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), j.scrollOverflow && !j.scrollOverflowHandler && (j.scrollOverflow = !1, eo("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), e.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"], function(e, n) { j[n] && eo("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n) }), e.each(j.anchors, function(n, o) { var t = G.find("[name]").filter(function() { return e(this).attr("name") && e(this).attr("name").toLowerCase() == o.toLowerCase() }),
                    i = G.find("[id]").filter(function() { return e(this).attr("id") && e(this).attr("id").toLowerCase() == o.toLowerCase() });
                (i.length || t.length) && (eo("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && eo("error", '"' + o + '" is is being used by another element `id` property'), t.length && eo("error", '"' + o + '" is is being used by another element `name` property')) })) }

        function eo(e, n) { console && console[e] && console[e]("fullPage: " + n) } } });
//# sourceMappingURL=jquery.fullpage.min.js.map