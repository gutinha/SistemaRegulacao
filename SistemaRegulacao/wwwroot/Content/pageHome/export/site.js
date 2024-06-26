/*!
 jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
! function (d, G) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? G(d, !0) : function (d) {
        if (!d.document) throw Error("jQuery requires a window with a document");
        return G(d)
    } : G(d)
}("undefined" != typeof window ? window : this, function (d, G) {
    function q(h) {
        var a = !!h && "length" in h && h.length,
            b = e.type(h);
        return "function" === b || e.isWindow(h) ? !1 : "array" === b || 0 === a || "number" == typeof a && 0 < a && a - 1 in h
    }

    function n(h, a, b) {
        if (e.isFunction(a)) return e.grep(h, function (h, e) {
            return !!a.call(h, e, h) !==
                b
        });
        if (a.nodeType) return e.grep(h, function (h) {
            return h === a !== b
        });
        if ("string" == typeof a) {
            if (Ca.test(a)) return e.filter(a, h, b);
            a = e.filter(a, h)
        }
        return e.grep(h, function (h) {
            return -1 < e.inArray(h, a) !== b
        })
    }

    function s(h, a) {
        do h = h[a]; while (h && 1 !== h.nodeType);
        return h
    }

    function H() {
        D.addEventListener ? (D.removeEventListener("DOMContentLoaded", v), d.removeEventListener("load", v)) : (D.detachEvent("onreadystatechange", v), d.detachEvent("onload", v))
    }

    function v() {
        (D.addEventListener || "load" === d.event.type || "complete" ===
            D.readyState) && (H(), e.ready())
    }

    function P(h, a, b) {
        if (void 0 === b && 1 === h.nodeType) {
            var N = "data-" + a.replace(m, "-$1").toLowerCase();
            if (b = h.getAttribute(N), "string" == typeof b) {
                try {
                    b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : f.test(b) ? e.parseJSON(b) : b
                } catch (c) { }
                e.data(h, a, b)
            } else b = void 0
        }
        return b
    }

    function V(h) {
        for (var a in h)
            if (("data" !== a || !e.isEmptyObject(h[a])) && "toJSON" !== a) return !1;
        return !0
    }

    function E(h, a, b, N) {
        if (k(h)) {
            var c, g, f = e.expando,
                d = h.nodeType,
                m = d ? e.cache : h,
                l = d ? h[f] : h[f] && f;
            if (l && m[l] && (N || m[l].data) || void 0 !== b || "string" != typeof a) return l || (l = d ? h[f] = La.pop() || e.guid++ : f), m[l] || (m[l] = d ? {} : {
                toJSON: e.noop
            }), ("object" == typeof a || "function" == typeof a) && (N ? m[l] = e.extend(m[l], a) : m[l].data = e.extend(m[l].data, a)), g = m[l], N || (g.data || (g.data = {}), g = g.data), void 0 !== b && (g[e.camelCase(a)] = b), "string" == typeof a ? (c = g[a], null == c && (c = g[e.camelCase(a)])) : c = g, c
        }
    }

    function U(h, a, b) {
        if (k(h)) {
            var N, c, g = h.nodeType,
                f = g ? e.cache : h,
                d = g ? h[e.expando] : e.expando;
            if (f[d]) {
                if (a && (N = b ? f[d] : f[d].data)) {
                    e.isArray(a) ?
                        a = a.concat(e.map(a, e.camelCase)) : a in N ? a = [a] : (a = e.camelCase(a), a = a in N ? [a] : a.split(" "));
                    for (c = a.length; c--;) delete N[a[c]];
                    if (b ? !V(N) : !e.isEmptyObject(N)) return
                } (b || (delete f[d].data, V(f[d]))) && (g ? e.cleanData([h], !0) : C.deleteExpando || f != f.window ? delete f[d] : f[d] = void 0)
            }
        }
    }

    function M(h, a, b, N) {
        var c, g = 1,
            f = 20,
            k = N ? function () {
                return N.cur()
            } : function () {
                return e.css(h, a, "")
            },
            d = k(),
            m = b && b[3] || (e.cssNumber[a] ? "" : "px"),
            l = (e.cssNumber[a] || "px" !== m && +d) && F.exec(e.css(h, a));
        if (l && l[3] !== m) {
            m = m || l[3];
            b = b || [];
            l = +d || 1;
            do g = g || ".5", l /= g, e.style(h, a, l + m); while (g !== (g = k() / d) && 1 !== g && --f)
        }
        return b && (l = +l || +d || 0, c = b[1] ? l + (b[1] + 1) * b[2] : +b[2], N && (N.unit = m, N.start = l, N.end = c)), c
    }

    function w(h) {
        var a = Yc.split("|"),
            h = h.createDocumentFragment();
        if (h.createElement)
            for (; a.length;) h.createElement(a.pop());
        return h
    }

    function p(h, a) {
        var b, N, c = 0,
            g = "undefined" != typeof h.getElementsByTagName ? h.getElementsByTagName(a || "*") : "undefined" != typeof h.querySelectorAll ? h.querySelectorAll(a || "*") : void 0;
        if (!g) {
            g = [];
            for (b = h.childNodes ||
                h; null != (N = b[c]) ; c++) !a || e.nodeName(N, a) ? g.push(N) : e.merge(g, p(N, a))
        }
        return void 0 === a || a && e.nodeName(h, a) ? e.merge([h], g) : g
    }

    function j(h, a) {
        for (var b, N = 0; null != (b = h[N]) ; N++) e._data(b, "globalEval", !a || e._data(a[N], "globalEval"))
    }

    function o(h) {
        Sb.test(h.type) && (h.defaultChecked = h.checked)
    }

    function i(h, a, b, N, c) {
        for (var g, f, k, d, m, l, r, i = h.length, F = w(a), x = [], B = 0; i > B; B++)
            if (f = h[B], f || 0 === f)
                if ("object" === e.type(f)) e.merge(x, f.nodeType ? [f] : f);
                else if (yd.test(f)) {
                    d = d || F.appendChild(a.createElement("div"));
                    m = (z.exec(f) || ["", ""])[1].toLowerCase();
                    r = Ma[m] || Ma._default;
                    d.innerHTML = r[1] + e.htmlPrefilter(f) + r[2];
                    for (g = r[0]; g--;) d = d.lastChild;
                    if (!C.leadingWhitespace && Fc.test(f) && x.push(a.createTextNode(Fc.exec(f)[0])), !C.tbody)
                        for (g = (f = "table" !== m || Zc.test(f) ? "<table>" !== r[1] || Zc.test(f) ? 0 : d : d.firstChild) && f.childNodes.length; g--;) e.nodeName(l = f.childNodes[g], "tbody") && !l.childNodes.length && f.removeChild(l);
                    e.merge(x, d.childNodes);
                    for (d.textContent = ""; d.firstChild;) d.removeChild(d.firstChild);
                    d = F.lastChild
                } else x.push(a.createTextNode(f));
        d && F.removeChild(d);
        C.appendChecked || e.grep(p(x, "input"), o);
        for (B = 0; f = x[B++];)
            if (N && -1 < e.inArray(f, N)) c && c.push(f);
            else if (k = e.contains(f.ownerDocument, f), d = p(F.appendChild(f), "script"), k && j(d), b)
                for (g = 0; f = d[g++];) $c.test(f.type || "") && b.push(f);
        return F
    }

    function t() {
        return !0
    }

    function I() {
        return !1
    }

    function Y() {
        try {
            return D.activeElement
        } catch (h) { }
    }

    function u(h, a, b, N, c, g) {
        var f, k;
        if ("object" == typeof a) {
            "string" != typeof b && (N = N || b, b = void 0);
            for (k in a) u(h, k, b, N, a[k], g);
            return h
        }
        if (null == N && null == c ? (c =
                b, N = b = void 0) : null == c && ("string" == typeof b ? (c = N, N = void 0) : (c = N, N = b, b = void 0)), !1 === c) c = I;
        else if (!c) return h;
        return 1 === g && (f = c, c = function (h) {
            return e().off(h), f.apply(this, arguments)
        }, c.guid = f.guid || (f.guid = e.guid++)), h.each(function () {
            e.event.add(this, a, c, N, b)
        })
    }

    function ma(h, a) {
        return e.nodeName(h, "table") && e.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? h.getElementsByTagName("tbody")[0] || h.appendChild(h.ownerDocument.createElement("tbody")) : h
    }

    function y(h) {
        return h.type = (null !== e.find.attr(h,
            "type")) + "/" + h.type, h
    }

    function Da(h) {
        var a = zd.exec(h.type);
        return a ? h.type = a[1] : h.removeAttribute("type"), h
    }

    function S(h, a) {
        if (1 === a.nodeType && e.hasData(h)) {
            var b, c, g;
            c = e._data(h);
            var f = e._data(a, c),
                k = c.events;
            if (k)
                for (b in delete f.handle, f.events = {}, k) {
                    c = 0;
                    for (g = k[b].length; g > c; c++) e.event.add(a, b, k[b][c])
                }
            f.data && (f.data = e.extend({}, f.data))
        }
    }

    function B(h, a, b, c) {
        var a = Bb.apply([], a),
            g, f, k, d, m = 0,
            l = h.length,
            r = l - 1,
            F = a[0],
            x = e.isFunction(F);
        if (x || 1 < l && "string" == typeof F && !C.checkClone && Ad.test(F)) return h.each(function (e) {
            var g =
                h.eq(e);
            x && (a[0] = F.call(this, e, g.html()));
            B(g, a, b, c)
        });
        if (l && (d = i(a, h[0].ownerDocument, !1, h, c), g = d.firstChild, 1 === d.childNodes.length && (d = g), g || c)) {
            k = e.map(p(d, "script"), y);
            for (f = k.length; l > m; m++) g = d, m !== r && (g = e.clone(g, !0, !0), f && e.merge(k, p(g, "script"))), b.call(h[m], g, m);
            if (f) {
                d = k[k.length - 1].ownerDocument;
                e.map(k, Da);
                for (m = 0; f > m; m++) g = k[m], $c.test(g.type || "") && !e._data(g, "globalEval") && e.contains(d, g) && (g.src ? e._evalUrl && e._evalUrl(g.src) : e.globalEval((g.text || g.textContent || g.innerHTML || "").replace(Bd,
                    "")))
            }
            d = g = null
        }
        return h
    }

    function ea(h, a, b) {
        for (var c = a ? e.filter(a, h) : h, g = 0; null != (a = c[g]) ; g++) b || 1 !== a.nodeType || e.cleanData(p(a)), a.parentNode && (b && e.contains(a.ownerDocument, a) && j(p(a, "script")), a.parentNode.removeChild(a));
        return h
    }

    function L(h, a) {
        var b = e(a.createElement(h)).appendTo(a.body),
            c = e.css(b[0], "display");
        return b.detach(), c
    }

    function fa(h) {
        var a = D,
            b = ad[h];
        return b || (b = L(h, a), "none" !== b && b || (Tb = (Tb || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement), a = (Tb[0].contentWindow ||
            Tb[0].contentDocument).document, a.write(), a.close(), b = L(h, a), Tb.detach()), ad[h] = b), b
    }

    function ra(h, a) {
        return {
            get: function () {
                return h() ? void delete this.get : (this.get = a).apply(this, arguments)
            }
        }
    }

    function Na(h) {
        if (h in bd) return h;
        for (var a = h.charAt(0).toUpperCase() + h.slice(1), b = cd.length; b--;)
            if (h = cd[b] + a, h in bd) return h
    }

    function Ea(h, a) {
        for (var b, c, g, f = [], k = 0, d = h.length; d > k; k++) c = h[k], c.style && (f[k] = e._data(c, "olddisplay"), b = c.style.display, a ? (f[k] || "none" !== b || (c.style.display = ""), "" === c.style.display &&
            ua(c) && (f[k] = e._data(c, "olddisplay", fa(c.nodeName)))) : (g = ua(c), (b && "none" !== b || !g) && e._data(c, "olddisplay", g ? b : e.css(c, "display"))));
        for (k = 0; d > k; k++) c = h[k], c.style && (a && "none" !== c.style.display && "" !== c.style.display || (c.style.display = a ? f[k] || "" : "none"));
        return h
    }

    function W(h, a, b) {
        return (h = Cd.exec(a)) ? Math.max(0, h[1] - (b || 0)) + (h[2] || "px") : a
    }

    function Fa(h, a, b, c, g) {
        for (var a = b === (c ? "border" : "content") ? 4 : "width" === a ? 1 : 0, f = 0; 4 > a; a += 2) "margin" === b && (f += e.css(h, b + x[a], !0, g)), c ? ("content" === b && (f -= e.css(h,
            "padding" + x[a], !0, g)), "margin" !== b && (f -= e.css(h, "border" + x[a] + "Width", !0, g))) : (f += e.css(h, "padding" + x[a], !0, g), "padding" !== b && (f += e.css(h, "border" + x[a] + "Width", !0, g)));
        return f
    }

    function Ua(h, a, b) {
        var c = !0,
            g = "width" === a ? h.offsetWidth : h.offsetHeight,
            f = pb(h),
            k = C.boxSizing && "border-box" === e.css(h, "boxSizing", !1, f);
        if (D.msFullscreenElement && d.top !== d && h.getClientRects().length && (g = Math.round(100 * h.getBoundingClientRect()[a])), 0 >= g || null == g) {
            if (g = hb(h, a, f), (0 > g || null == g) && (g = h.style[a]), ic.test(g)) return g;
            c = k && (C.boxSizingReliable() || g === h.style[a]);
            g = parseFloat(g) || 0
        }
        return g + Fa(h, a, b || (k ? "border" : "content"), c, f) + "px"
    }

    function ja(h, a, b, c, e) {
        return new ja.prototype.init(h, a, b, c, e)
    }

    function ya() {
        return d.setTimeout(function () {
            Cb = void 0
        }), Cb = e.now()
    }

    function va(h, a) {
        for (var b, c = {
            height: h
        }, e = 0, a = a ? 1 : 0; 4 > e; e += 2 - a) b = x[e], c["margin" + b] = c["padding" + b] = h;
        return a && (c.opacity = c.width = h), c
    }

    function Ub(h, a, b) {
        for (var c, e = (ka.tweeners[a] || []).concat(ka.tweeners["*"]), g = 0, f = e.length; f > g; g++)
            if (c = e[g].call(b, a,
                    h)) return c
    }

    function ka(h, a, b) {
        var c, g, f = 0,
            k = ka.prefilters.length,
            d = e.Deferred().always(function () {
                delete m.elem
            }),
            m = function () {
                if (g) return !1;
                for (var a = Cb || ya(), a = Math.max(0, l.startTime + l.duration - a), b = 1 - (a / l.duration || 0), J = 0, c = l.tweens.length; c > J; J++) l.tweens[J].run(b);
                return d.notifyWith(h, [l, b, a]), 1 > b && c ? a : (d.resolveWith(h, [l]), !1)
            },
            l = d.promise({
                elem: h,
                props: e.extend({}, a),
                opts: e.extend(!0, {
                    specialEasing: {},
                    easing: e.easing._default
                }, b),
                originalProperties: a,
                originalOptions: b,
                startTime: Cb || ya(),
                duration: b.duration,
                tweens: [],
                createTween: function (a, b) {
                    var J = e.Tween(h, l.opts, a, b, l.opts.specialEasing[a] || l.opts.easing);
                    return l.tweens.push(J), J
                },
                stop: function (a) {
                    var b = 0,
                        J = a ? l.tweens.length : 0;
                    if (g) return this;
                    for (g = !0; J > b; b++) l.tweens[b].run(1);
                    return a ? (d.notifyWith(h, [l, 1, 0]), d.resolveWith(h, [l, a])) : d.rejectWith(h, [l, a]), this
                }
            }),
            a = l.props,
            b = l.opts.specialEasing,
            r, i, F, x;
        for (c in a)
            if (r = e.camelCase(c), i = b[r], F = a[c], e.isArray(F) && (i = F[1], F = a[c] = F[0]), c !== r && (a[r] = F, delete a[c]), x = e.cssHooks[r],
                x && "expand" in x)
                for (c in F = x.expand(F), delete a[r], F) c in a || (a[c] = F[c], b[c] = i);
            else b[r] = i;
        for (; k > f; f++)
            if (c = ka.prefilters[f].call(l, h, a, l.opts)) return e.isFunction(c.stop) && (e._queueHooks(l.elem, l.opts.queue).stop = e.proxy(c.stop, c)), c;
        return e.map(a, Ub, l), e.isFunction(l.opts.start) && l.opts.start.call(h, l), e.fx.timer(e.extend(m, {
            elem: h,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function Oa(h) {
        return e.attr(h,
            "class") || ""
    }

    function qb(h) {
        return function (a, b) {
            "string" != typeof a && (b = a, a = "*");
            var c, g = 0,
                f = a.toLowerCase().match(Ga) || [];
            if (e.isFunction(b))
                for (; c = f[g++];) "+" === c.charAt(0) ? (c = c.slice(1) || "*", (h[c] = h[c] || []).unshift(b)) : (h[c] = h[c] || []).push(b)
        }
    }

    function Vb(h, a, b, c) {
        function g(d) {
            var m;
            return f[d] = !0, e.each(h[d] || [], function (h, e) {
                var d = e(a, b, c);
                return "string" != typeof d || k || f[d] ? k ? !(m = d) : void 0 : (a.dataTypes.unshift(d), g(d), !1)
            }), m
        }
        var f = {},
            k = h === Gc;
        return g(a.dataTypes[0]) || !f["*"] && g("*")
    }

    function Db(h,
        a) {
        var b, c, g = e.ajaxSettings.flatOptions || {};
        for (c in a) void 0 !== a[c] && ((g[c] ? h : b || (b = {}))[c] = a[c]);
        return b && e.extend(!0, h, b), h
    }

    function Eb(h, a, b, c) {
        var g;
        if (e.isArray(a)) e.each(a, function (a, J) {
            b || Dd.test(h) ? c(h, J) : Eb(h + "[" + ("object" == typeof J && null != J ? a : "") + "]", J, b, c)
        });
        else if (b || "object" !== e.type(a)) c(h, a);
        else
            for (g in a) Eb(h + "[" + g + "]", a[g], b, c)
    }

    function ib() {
        try {
            return new d.XMLHttpRequest
        } catch (h) { }
    }

    function Wb() {
        try {
            return new d.ActiveXObject("Microsoft.XMLHTTP")
        } catch (h) { }
    }

    function jb(h) {
        return e.isWindow(h) ?
            h : 9 === h.nodeType ? h.defaultView || h.parentWindow : !1
    }
    var La = [],
        D = d.document,
        Ra = La.slice,
        Bb = La.concat,
        Fb = La.push,
        Xb = La.indexOf,
        rb = {},
        jc = rb.toString,
        Xa = rb.hasOwnProperty,
        C = {},
        e = function (h, a) {
            return new e.fn.init(h, a)
        },
        Gb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Yb = /^-ms-/,
        kc = /-([\da-z])/gi,
        lc = function (h, a) {
            return a.toUpperCase()
        };
    e.fn = e.prototype = {
        jquery: "1.12.0",
        constructor: e,
        selector: "",
        length: 0,
        toArray: function () {
            return Ra.call(this)
        },
        get: function (h) {
            return null != h ? 0 > h ? this[h + this.length] : this[h] : Ra.call(this)
        },
        pushStack: function (h) {
            h = e.merge(this.constructor(), h);
            return h.prevObject = this, h.context = this.context, h
        },
        each: function (h) {
            return e.each(this, h)
        },
        map: function (h) {
            return this.pushStack(e.map(this, function (a, b) {
                return h.call(a, b, a)
            }))
        },
        slice: function () {
            return this.pushStack(Ra.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (h) {
            var a = this.length,
                h = +h + (0 > h ? a : 0);
            return this.pushStack(0 <= h && a > h ? [this[h]] : [])
        },
        end: function () {
            return this.prevObject ||
                this.constructor()
        },
        push: Fb,
        sort: La.sort,
        splice: La.splice
    };
    e.extend = e.fn.extend = function () {
        var h, a, b, c, g, f, k = arguments[0] || {},
            d = 1,
            m = arguments.length,
            l = !1;
        "boolean" == typeof k && (l = k, k = arguments[d] || {}, d++);
        "object" == typeof k || e.isFunction(k) || (k = {});
        for (d === m && (k = this, d--) ; m > d; d++)
            if (null != (g = arguments[d]))
                for (c in g) h = k[c], b = g[c], k !== b && (l && b && (e.isPlainObject(b) || (a = e.isArray(b))) ? (a ? (a = !1, f = h && e.isArray(h) ? h : []) : f = h && e.isPlainObject(h) ? h : {}, k[c] = e.extend(l, f, b)) : void 0 !== b && (k[c] = b));
        return k
    };
    e.extend({
        expando: "jQuery" +
            ("1.12.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (h) {
            throw Error(h);
        },
        noop: function () { },
        isFunction: function (h) {
            return "function" === e.type(h)
        },
        isArray: Array.isArray || function (h) {
            return "array" === e.type(h)
        },
        isWindow: function (h) {
            return null != h && h == h.window
        },
        isNumeric: function (h) {
            var a = h && h.toString();
            return !e.isArray(h) && 0 <= a - parseFloat(a) + 1
        },
        isEmptyObject: function (h) {
            for (var a in h) return !1;
            return !0
        },
        isPlainObject: function (h) {
            var a;
            if (!h || "object" !== e.type(h) || h.nodeType || e.isWindow(h)) return !1;
            try {
                if (h.constructor && !Xa.call(h, "constructor") && !Xa.call(h.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            if (!C.ownFirst)
                for (a in h) return Xa.call(h, a);
            for (a in h);
            return void 0 === a || Xa.call(h, a)
        },
        type: function (h) {
            return null == h ? h + "" : "object" == typeof h || "function" == typeof h ? rb[jc.call(h)] || "object" : typeof h
        },
        globalEval: function (h) {
            h && e.trim(h) && (d.execScript || function (h) {
                d.eval.call(d, h)
            })(h)
        },
        camelCase: function (h) {
            return h.replace(Yb, "ms-").replace(kc, lc)
        },
        nodeName: function (h,
            a) {
            return h.nodeName && h.nodeName.toLowerCase() === a.toLowerCase()
        },
        each: function (h, a) {
            var b, c = 0;
            if (q(h))
                for (b = h.length; b > c && !1 !== a.call(h[c], c, h[c]) ; c++);
            else
                for (c in h)
                    if (!1 === a.call(h[c], c, h[c])) break; return h
        },
        trim: function (h) {
            return null == h ? "" : (h + "").replace(Gb, "")
        },
        makeArray: function (h, a) {
            var b = a || [];
            return null != h && (q(Object(h)) ? e.merge(b, "string" == typeof h ? [h] : h) : Fb.call(b, h)), b
        },
        inArray: function (h, a, b) {
            var c;
            if (a) {
                if (Xb) return Xb.call(a, h, b);
                c = a.length;
                for (b = b ? 0 > b ? Math.max(0, c + b) : b : 0; c > b; b++)
                    if (b in
                        a && a[b] === h) return b
            }
            return -1
        },
        merge: function (h, a) {
            for (var b = +a.length, c = 0, e = h.length; b > c;) h[e++] = a[c++];
            if (b !== b)
                for (; void 0 !== a[c];) h[e++] = a[c++];
            return h.length = e, h
        },
        grep: function (h, a, b) {
            for (var c = [], e = 0, g = h.length, f = !b; g > e; e++) b = !a(h[e], e), b !== f && c.push(h[e]);
            return c
        },
        map: function (h, a, b) {
            var c, e, g = 0,
                f = [];
            if (q(h))
                for (c = h.length; c > g; g++) e = a(h[g], g, b), null != e && f.push(e);
            else
                for (g in h) e = a(h[g], g, b), null != e && f.push(e);
            return Bb.apply([], f)
        },
        guid: 1,
        proxy: function (h, a) {
            var b, c, g;
            return "string" == typeof a &&
                (g = h[a], a = h, h = g), e.isFunction(h) ? (b = Ra.call(arguments, 2), c = function () {
                    return h.apply(a || this, b.concat(Ra.call(arguments)))
                }, c.guid = h.guid = h.guid || e.guid++, c) : void 0
        },
        now: function () {
            return +new Date
        },
        support: C
    });
    "function" == typeof Symbol && (e.fn[Symbol.iterator] = La[Symbol.iterator]);
    e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (h, a) {
        rb["[object " + a + "]"] = a.toLowerCase()
    });
    var Sa, Hb = d,
        R = function (h, a, b, c) {
            var e, g, f, k, d, m = a && a.ownerDocument,
                l = a ? a.nodeType :
                9;
            if (b = b || [], "string" != typeof h || !h || 1 !== l && 9 !== l && 11 !== l) return b;
            if (!c && ((a ? a.ownerDocument || a : za) !== X && Ha(a), a = a || X, A)) {
                if (11 !== l && (k = Hc.exec(h)))
                    if (e = k[1])
                        if (9 === l) {
                            if (!(g = a.getElementById(e))) return b;
                            if (g.id === e) return b.push(g), b
                        } else {
                            if (m && (g = m.getElementById(e)) && aa(a, g) && g.id === e) return b.push(g), b
                        } else {
                        if (k[2]) return Aa.apply(b, a.getElementsByTagName(h)), b;
                        if ((e = k[3]) && ba.getElementsByClassName && a.getElementsByClassName) return Aa.apply(b, a.getElementsByClassName(e)), b
                    }
                if (ba.qsa && !kb[h +
                        " "] && (!T || !T.test(h))) {
                    if (1 !== l) m = a, d = h;
                    else if ("object" !== a.nodeName.toLowerCase()) {
                        (f = a.getAttribute("id")) ? f = f.replace(Zb, "\\$&") : a.setAttribute("id", f = ca);
                        k = Ya(h);
                        e = k.length;
                        for (g = mc.test(f) ? "#" + f : "[id='" + f + "']"; e--;) k[e] = g + " " + sb(k[e]);
                        d = k.join(",");
                        m = Ib.test(h) && Va(a.parentNode) || a
                    }
                    if (d) try {
                        return Aa.apply(b, m.querySelectorAll(d)), b
                    } catch (r) { } finally {
                        f === ca && a.removeAttribute("id")
                    }
                }
            }
            return da(h.replace(oa, "$1"), a, b, c)
        },
        Jb = function () {
            function h(b, c) {
                return a.push(b + " ") > O.cacheLength && delete h[a.shift()],
                    h[b + " "] = c
            }
            var a = [];
            return h
        },
        sa = function (h) {
            return h[ca] = !0, h
        },
        na = function (h) {
            var a = X.createElement("div");
            try {
                return !!h(a)
            } catch (b) {
                return !1
            } finally {
                a.parentNode && a.parentNode.removeChild(a)
            }
        },
        tb = function (h, a) {
            for (var b = h.split("|"), c = b.length; c--;) O.attrHandle[b[c]] = a
        },
        ac = function (h, a) {
            var b = a && h,
                c = b && 1 === h.nodeType && 1 === a.nodeType && (~a.sourceIndex || $b) - (~h.sourceIndex || $b);
            if (c) return c;
            if (b)
                for (; b = b.nextSibling;)
                    if (b === a) return -1;
            return h ? 1 : -1
        },
        nc = function (h) {
            return function (a) {
                return "input" ===
                    a.nodeName.toLowerCase() && a.type === h
            }
        },
        oc = function (h) {
            return function (a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b || "button" === b) && a.type === h
            }
        },
        Z = function (h) {
            return sa(function (a) {
                return a = +a, sa(function (b, c) {
                    for (var e, g = h([], b.length, a), f = g.length; f--;) b[e = g[f]] && (b[e] = !(c[e] = b[e]))
                })
            })
        },
        Va = function (h) {
            return h && "undefined" != typeof h.getElementsByTagName && h
        },
        bc = function () { },
        sb = function (h) {
            for (var a = 0, b = h.length, c = ""; b > a; a++) c += h[a].value;
            return c
        },
        ub = function (h, a, b) {
            var c = a.dir,
                e = b && "parentNode" ===
                c,
                g = Ic++;
            return a.first ? function (a, b, J) {
                for (; a = a[c];)
                    if (1 === a.nodeType || e) return h(a, b, J)
            } : function (a, b, J) {
                var f, ga, k, d = [wa, g];
                if (J)
                    for (; a = a[c];) {
                        if ((1 === a.nodeType || e) && h(a, b, J)) return !0
                    } else
                    for (; a = a[c];)
                        if (1 === a.nodeType || e) {
                            if (k = a[ca] || (a[ca] = {}), ga = k[a.uniqueID] || (k[a.uniqueID] = {}), (f = ga[c]) && f[0] === wa && f[1] === g) return d[2] = f[2];
                            if (ga[c] = d, d[2] = h(a, b, J)) return !0
                        }
            }
        },
        vb = function (h) {
            return 1 < h.length ? function (a, b, c) {
                for (var e = h.length; e--;)
                    if (!h[e](a, b, c)) return !1;
                return !0
            } : h[0]
        },
        Za = function (h,
            a, b, c, e) {
            for (var g, f = [], k = 0, d = h.length, m = null != a; d > k; k++) (g = h[k]) && (!b || b(g, c, e)) && (f.push(g), m && a.push(k));
            return f
        },
        Kb = function (h, a, b, c, e, g) {
            return c && !c[ca] && (c = Kb(c)), e && !e[ca] && (e = Kb(e, g)), sa(function (g, f, k, d) {
                var m, l, ob = [],
                    r = [],
                    F = f.length,
                    i;
                if (!(i = g)) {
                    i = a || "*";
                    for (var x = k.nodeType ? [k] : k, j = [], B = 0, o = x.length; o > B; B++) R(i, x[B], j);
                    i = j
                }
                i = !h || !g && a ? i : Za(i, ob, h, k, d);
                x = b ? e || (g ? h : F || c) ? [] : f : i;
                if (b && b(i, x, k, d), c) {
                    m = Za(x, r);
                    c(m, [], k, d);
                    for (k = m.length; k--;) (l = m[k]) && (x[r[k]] = !(i[r[k]] = l))
                }
                if (g) {
                    if (e || h) {
                        if (e) {
                            m = [];
                            for (k = x.length; k--;) (l = x[k]) && m.push(i[k] = l);
                            e(null, x = [], m, d)
                        }
                        for (k = x.length; k--;) (l = x[k]) && -1 < (m = e ? Wa(g, l) : ob[k]) && (g[m] = !(f[m] = l))
                    }
                } else x = Za(x === f ? x.splice(F, x.length) : x), e ? e(null, f, x, d) : Aa.apply(f, x)
            })
        },
        mb = function (h) {
            var a, b, c, e = h.length,
                g = O.relative[h[0].type];
            b = g || O.relative[" "];
            for (var f = g ? 1 : 0, k = ub(function (h) {
                    return h === a
            }, b, !0), d = ub(function (h) {
                    return -1 < Wa(a, h)
            }, b, !0), m = [function (h, b, c) {
                    h = !g && (c || b !== lb) || ((a = b).nodeType ? k(h, b, c) : d(h, b, c));
                    return a = null, h
            }]; e > f; f++)
                if (b = O.relative[h[f].type]) m = [ub(vb(m), b)];
                else {
                    if (b = O.filter[h[f].type].apply(null, h[f].matches), b[ca]) {
                        for (c = ++f; e > c && !O.relative[h[c].type]; c++);
                        return Kb(1 < f && vb(m), 1 < f && sb(h.slice(0, f - 1).concat({
                            value: " " === h[f - 2].type ? "*" : ""
                        })).replace(oa, "$1"), b, c > f && mb(h.slice(f, c)), e > c && mb(h = h.slice(c)), e > c && sb(h))
                    }
                    m.push(b)
                }
            return vb(m)
        },
        $a, ba, O, ta, cc, Ya, pa, da, lb, Pa, la, Ha, X, Ba, A, T, Q, K, aa, ca = "sizzle" + 1 * new Date,
        za = Hb.document,
        wa = 0,
        Ic = 0,
        pc = Jb(),
        qc = Jb(),
        kb = Jb(),
        Ia = function (h, a) {
            return h === a && (la = !0), 0
        },
        $b = -2147483648,
        rc = {}.hasOwnProperty,
        Ta = [],
        sc = Ta.pop,
        xa = Ta.push,
        Aa = Ta.push,
        ab = Ta.slice,
        Wa = function (h, a) {
            for (var b = 0, c = h.length; c > b; b++)
                if (h[b] === a) return b;
            return -1
        },
        Lb = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
        oa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
        wb = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        nb = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        dc = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
        Mb = RegExp(":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        mc = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        Nb = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                "i")
        },
        ec = /^(?:input|select|textarea|button)$/i,
        tc = /^h\d$/i,
        ha = /^[^{]+\{\s*\[native \w/,
        Hc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Ib = /[+~]/,
        Zb = /'|\\/g,
        Ja = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
        Ka = function (h, a, b) {
            h = "0x" + a - 65536;
            return h !== h || b ? a : 0 > h ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, 1023 & h | 56320)
        },
        xb = function () {
            Ha()
        };
    try {
        Aa.apply(Ta = ab.call(za.childNodes), za.childNodes), Ta[za.childNodes.length].nodeType
    } catch (uc) {
        Aa = {
            apply: Ta.length ? function (h,
                a) {
                xa.apply(h, ab.call(a))
            } : function (h, a) {
                for (var b = h.length, c = 0; h[b++] = a[c++];);
                h.length = b - 1
            }
        }
    }
    ba = R.support = {};
    cc = R.isXML = function (h) {
        return (h = h && (h.ownerDocument || h).documentElement) ? "HTML" !== h.nodeName : !1
    };
    Ha = R.setDocument = function (h) {
        var a, b, h = h ? h.ownerDocument || h : za;
        return h !== X && 9 === h.nodeType && h.documentElement ? (X = h, Ba = X.documentElement, A = !cc(X), (b = X.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", xb, !1) : b.attachEvent && b.attachEvent("onunload", xb)), ba.attributes = na(function (h) {
            return h.className =
                "i", !h.getAttribute("className")
        }), ba.getElementsByTagName = na(function (h) {
            return h.appendChild(X.createComment("")), !h.getElementsByTagName("*").length
        }), ba.getElementsByClassName = ha.test(X.getElementsByClassName), ba.getById = na(function (h) {
            return Ba.appendChild(h).id = ca, !X.getElementsByName || !X.getElementsByName(ca).length
        }), ba.getById ? (O.find.ID = function (h, a) {
            if ("undefined" != typeof a.getElementById && A) {
                var b = a.getElementById(h);
                return b ? [b] : []
            }
        }, O.filter.ID = function (h) {
            var a = h.replace(Ja, Ka);
            return function (h) {
                return h.getAttribute("id") ===
                    a
            }
        }) : (delete O.find.ID, O.filter.ID = function (h) {
            var a = h.replace(Ja, Ka);
            return function (h) {
                return (h = "undefined" != typeof h.getAttributeNode && h.getAttributeNode("id")) && h.value === a
            }
        }), O.find.TAG = ba.getElementsByTagName ? function (h, a) {
            return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(h) : ba.qsa ? a.querySelectorAll(h) : void 0
        } : function (h, a) {
            var b, c = [],
                J = 0,
                e = a.getElementsByTagName(h);
            if ("*" === h) {
                for (; b = e[J++];) 1 === b.nodeType && c.push(b);
                return c
            }
            return e
        }, O.find.CLASS = ba.getElementsByClassName &&
            function (h, a) {
                return "undefined" != typeof a.getElementsByClassName && A ? a.getElementsByClassName(h) : void 0
            }, Q = [], T = [], (ba.qsa = ha.test(X.querySelectorAll)) && (na(function (h) {
                Ba.appendChild(h).innerHTML = "<a id='" + ca + "'></a><select id='" + ca + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                h.querySelectorAll("[msallowcapture^='']").length && T.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                h.querySelectorAll("[selected]").length || T.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                h.querySelectorAll("[id~=" + ca + "-]").length || T.push("~=");
                h.querySelectorAll(":checked").length || T.push(":checked");
                h.querySelectorAll("a#" + ca + "+*").length || T.push(".#.+[+~]")
            }), na(function (h) {
                var a = X.createElement("input");
                a.setAttribute("type", "hidden");
                h.appendChild(a).setAttribute("name", "D");
                h.querySelectorAll("[name=d]").length && T.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                h.querySelectorAll(":enabled").length || T.push(":enabled", ":disabled");
                h.querySelectorAll("*,:x");
                T.push(",.*:")
            })), (ba.matchesSelector =
                ha.test(K = Ba.matches || Ba.webkitMatchesSelector || Ba.mozMatchesSelector || Ba.oMatchesSelector || Ba.msMatchesSelector)) && na(function (h) {
                    ba.disconnectedMatch = K.call(h, "div");
                    K.call(h, "[s!='']:x");
                    Q.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                }),
            T = T.length && RegExp(T.join("|")), Q = Q.length && RegExp(Q.join("|")), a = ha.test(Ba.compareDocumentPosition), aa = a || ha.test(Ba.contains) ? function (h, a) {
                var b = 9 === h.nodeType ? h.documentElement : h,
                    c = a && a.parentNode;
                return h === c || !(!c || 1 !== c.nodeType || !(b.contains ? b.contains(c) : h.compareDocumentPosition && 16 & h.compareDocumentPosition(c)))
            } : function (h, a) {
                if (a)
                    for (; a = a.parentNode;)
                        if (a === h) return !0;
                return !1
            }, Ia = a ? function (h, a) {
                if (h === a) return la = !0, 0;
                var b = !h.compareDocumentPosition - !a.compareDocumentPosition;
                return b ?
                    b : (b = (h.ownerDocument || h) === (a.ownerDocument || a) ? h.compareDocumentPosition(a) : 1, 1 & b || !ba.sortDetached && a.compareDocumentPosition(h) === b ? h === X || h.ownerDocument === za && aa(za, h) ? -1 : a === X || a.ownerDocument === za && aa(za, a) ? 1 : Pa ? Wa(Pa, h) - Wa(Pa, a) : 0 : 4 & b ? -1 : 1)
            } : function (h, a) {
                if (h === a) return la = !0, 0;
                var b, c = 0;
                b = h.parentNode;
                var J = a.parentNode,
                    e = [h],
                    g = [a];
                if (!b || !J) return h === X ? -1 : a === X ? 1 : b ? -1 : J ? 1 : Pa ? Wa(Pa, h) - Wa(Pa, a) : 0;
                if (b === J) return ac(h, a);
                for (b = h; b = b.parentNode;) e.unshift(b);
                for (b = a; b = b.parentNode;) g.unshift(b);
                for (; e[c] === g[c];) c++;
                return c ? ac(e[c], g[c]) : e[c] === za ? -1 : g[c] === za ? 1 : 0
            }, X) : X
    };
    R.matches = function (h, a) {
        return R(h, null, null, a)
    };
    R.matchesSelector = function (h, a) {
        if ((h.ownerDocument || h) !== X && Ha(h), a = a.replace(dc, "='$1']"), ba.matchesSelector && A && !kb[a + " "] && (!Q || !Q.test(a)) && (!T || !T.test(a))) try {
            var b = K.call(h, a);
            if (b || ba.disconnectedMatch || h.document && 11 !== h.document.nodeType) return b
        } catch (c) { }
        return 0 < R(a, X, null, [h]).length
    };
    R.contains = function (h, a) {
        return (h.ownerDocument || h) !== X && Ha(h), aa(h, a)
    };
    R.attr = function (h, a) {
        (h.ownerDocument || h) !== X && Ha(h);
        var b = O.attrHandle[a.toLowerCase()],
            b = b && rc.call(O.attrHandle, a.toLowerCase()) ? b(h, a, !A) : void 0;
        return void 0 !== b ? b : ba.attributes || !A ? h.getAttribute(a) : (b = h.getAttributeNode(a)) && b.specified ? b.value : null
    };
    R.error = function (h) {
        throw Error("Syntax error, unrecognized expression: " + h);
    };
    R.uniqueSort = function (h) {
        var a, b = [],
            c = 0,
            e = 0;
        if (la = !ba.detectDuplicates, Pa = !ba.sortStable && h.slice(0), h.sort(Ia), la) {
            for (; a = h[e++];) a === h[e] && (c = b.push(e));
            for (; c--;) h.splice(b[c],
                1)
        }
        return Pa = null, h
    };
    ta = R.getText = function (h) {
        var a, b = "",
            c = 0;
        if (a = h.nodeType)
            if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof h.textContent) return h.textContent;
                for (h = h.firstChild; h; h = h.nextSibling) b += ta(h)
            } else {
                if (3 === a || 4 === a) return h.nodeValue
            } else
            for (; a = h[c++];) b += ta(a);
        return b
    };
    O = R.selectors = {
        cacheLength: 50,
        createPseudo: sa,
        match: Nb,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function (h) {
                return h[1] =
                    h[1].replace(Ja, Ka), h[3] = (h[3] || h[4] || h[5] || "").replace(Ja, Ka), "~=" === h[2] && (h[3] = " " + h[3] + " "), h.slice(0, 4)
            },
            CHILD: function (h) {
                return h[1] = h[1].toLowerCase(), "nth" === h[1].slice(0, 3) ? (h[3] || R.error(h[0]), h[4] = +(h[4] ? h[5] + (h[6] || 1) : 2 * ("even" === h[3] || "odd" === h[3])), h[5] = +(h[7] + h[8] || "odd" === h[3])) : h[3] && R.error(h[0]), h
            },
            PSEUDO: function (h) {
                var a, b = !h[6] && h[2];
                return Nb.CHILD.test(h[0]) ? null : (h[3] ? h[2] = h[4] || h[5] || "" : b && Mb.test(b) && (a = Ya(b, !0)) && (a = b.indexOf(")", b.length - a) - b.length) && (h[0] = h[0].slice(0,
                    a), h[2] = b.slice(0, a)), h.slice(0, 3))
            }
        },
        filter: {
            TAG: function (h) {
                var a = h.replace(Ja, Ka).toLowerCase();
                return "*" === h ? function () {
                    return !0
                } : function (h) {
                    return h.nodeName && h.nodeName.toLowerCase() === a
                }
            },
            CLASS: function (h) {
                var a = pc[h + " "];
                return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + h + "([\\x20\\t\\r\\n\\f]|$)")) && pc(h, function (h) {
                    return a.test("string" == typeof h.className && h.className || "undefined" != typeof h.getAttribute && h.getAttribute("class") || "")
                })
            },
            ATTR: function (h, a, b) {
                return function (c) {
                    c = R.attr(c, h);
                    return null == c ? "!=" === a : a ? (c += "", "=" === a ? c === b : "!=" === a ? c !== b : "^=" === a ? b && 0 === c.indexOf(b) : "*=" === a ? b && -1 < c.indexOf(b) : "$=" === a ? b && c.slice(-b.length) === b : "~=" === a ? -1 < (" " + c.replace(Lb, " ") + " ").indexOf(b) : "|=" === a ? c === b || c.slice(0, b.length + 1) === b + "-" : !1) : !0
                }
            },
            CHILD: function (h, a, b, c, e) {
                var g = "nth" !== h.slice(0, 3),
                    f = "last" !== h.slice(-4),
                    k = "of-type" === a;
                return 1 === c && 0 === e ? function (h) {
                    return !!h.parentNode
                } : function (a, b, J) {
                    var ga, d, m, l, r, i, b = g !== f ? "nextSibling" : "previousSibling",
                        x = a.parentNode,
                        F = k && a.nodeName.toLowerCase(),
                        J = !J && !k,
                        j = !1;
                    if (x) {
                        if (g) {
                            for (; b;) {
                                for (l = a; l = l[b];)
                                    if (k ? l.nodeName.toLowerCase() === F : 1 === l.nodeType) return !1;
                                i = b = "only" === h && !i && "nextSibling"
                            }
                            return !0
                        }
                        if (i = [f ? x.firstChild : x.lastChild], f && J) {
                            l = x;
                            m = l[ca] || (l[ca] = {});
                            d = m[l.uniqueID] || (m[l.uniqueID] = {});
                            ga = d[h] || [];
                            j = (r = ga[0] === wa && ga[1]) && ga[2];
                            for (l = r && x.childNodes[r]; l = ++r && l && l[b] || (j = r = 0) || i.pop() ;)
                                if (1 === l.nodeType && ++j && l === a) {
                                    d[h] = [wa, r, j];
                                    break
                                }
                        } else if (J && (l = a, m = l[ca] || (l[ca] = {}), d = m[l.uniqueID] || (m[l.uniqueID] = {}), ga = d[h] || [], r = ga[0] === wa &&
                                ga[1], j = r), !1 === j)
                            for (;
                                (l = ++r && l && l[b] || (j = r = 0) || i.pop()) && (!(k ? l.nodeName.toLowerCase() === F : 1 === l.nodeType) || !++j || !(J && (m = l[ca] || (l[ca] = {}), d = m[l.uniqueID] || (m[l.uniqueID] = {}), d[h] = [wa, j]), l === a)) ;);
                        return j -= e, j === c || 0 === j % c && 0 <= j / c
                    }
                }
            },
            PSEUDO: function (h, a) {
                var b, c = O.pseudos[h] || O.setFilters[h.toLowerCase()] || R.error("unsupported pseudo: " + h);
                return c[ca] ? c(a) : 1 < c.length ? (b = [h, h, "", a], O.setFilters.hasOwnProperty(h.toLowerCase()) ? sa(function (h, b) {
                    for (var e, g = c(h, a), f = g.length; f--;) e = Wa(h, g[f]), h[e] = !(b[e] = g[f])
                }) : function (h) {
                    return c(h, 0, b)
                }) : c
            }
        },
        pseudos: {
            not: sa(function (h) {
                var a = [],
                    b = [],
                    c = pa(h.replace(oa, "$1"));
                return c[ca] ? sa(function (h, a, b, e) {
                    for (var g, b = c(h, null, e, []), e = h.length; e--;) (g = b[e]) && (h[e] = !(a[e] = g))
                }) : function (h, e, g) {
                    return a[0] = h, c(a, null, g, b), a[0] = null, !b.pop()
                }
            }),
            has: sa(function (h) {
                return function (a) {
                    return 0 < R(h, a).length
                }
            }),
            contains: sa(function (h) {
                return h = h.replace(Ja, Ka),
                    function (a) {
                        return -1 < (a.textContent || a.innerText || ta(a)).indexOf(h)
                    }
            }),
            lang: sa(function (a) {
                return mc.test(a ||
                        "") || R.error("unsupported lang: " + a), a = a.replace(Ja, Ka).toLowerCase(),
                    function (b) {
                        var c;
                        do
                            if (c = A ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
            }),
            target: function (a) {
                var b = Hb.location && Hb.location.hash;
                return b && b.slice(1) === a.id
            },
            root: function (a) {
                return a === Ba
            },
            focus: function (a) {
                return a === X.activeElement && (!X.hasFocus || X.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
            },
            enabled: function (a) {
                return !1 ===
                    a.disabled
            },
            disabled: function (a) {
                return !0 === a.disabled
            },
            checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && !!a.checked || "option" === b && !!a.selected
            },
            selected: function (a) {
                return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            },
            empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                    if (6 > a.nodeType) return !1;
                return !0
            },
            parent: function (a) {
                return !O.pseudos.empty(a)
            },
            header: function (a) {
                return tc.test(a.nodeName)
            },
            input: function (a) {
                return ec.test(a.nodeName)
            },
            button: function (a) {
                var b =
                    a.nodeName.toLowerCase();
                return "input" === b && "button" === a.type || "button" === b
            },
            text: function (a) {
                var b;
                return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
            },
            first: Z(function () {
                return [0]
            }),
            last: Z(function (a, b) {
                return [b - 1]
            }),
            eq: Z(function (a, b, c) {
                return [0 > c ? c + b : c]
            }),
            even: Z(function (a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a
            }),
            odd: Z(function (a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a
            }),
            lt: Z(function (a, b, c) {
                for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                return a
            }),
            gt: Z(function (a, b, c) {
                for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                return a
            })
        }
    };
    O.pseudos.nth = O.pseudos.eq;
    for ($a in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    }) O.pseudos[$a] = nc($a);
    for ($a in {
        submit: !0,
        reset: !0
    }) O.pseudos[$a] = oc($a);
    bc.prototype = O.filters = O.pseudos;
    O.setFilters = new bc;
    Ya = R.tokenize = function (a, b) {
        var c, e, g, f, k, d, m;
        if (k = qc[a + " "]) return b ? 0 : k.slice(0);
        k = a;
        d = [];
        for (m = O.preFilter; k;) {
            (!c || (e = wb.exec(k))) && (e && (k = k.slice(e[0].length) || k), d.push(g = []));
            c = !1;
            (e = nb.exec(k)) && (c = e.shift(),
                g.push({
                    value: c,
                    type: e[0].replace(oa, " ")
                }), k = k.slice(c.length));
            for (f in O.filter) !(e = Nb[f].exec(k)) || m[f] && !(e = m[f](e)) || (c = e.shift(), g.push({
                value: c,
                type: f,
                matches: e
            }), k = k.slice(c.length));
            if (!c) break
        }
        return b ? k.length : k ? R.error(a) : qc(a, d).slice(0)
    };
    Sa = (pa = R.compile = function (a, b) {
        var c, e = [],
            g = [],
            f = kb[a + " "];
        if (!f) {
            b || (b = Ya(a));
            for (c = b.length; c--;) f = mb(b[c]), f[ca] ? e.push(f) : g.push(f);
            c = kb;
            var k = 0 < e.length,
                d = 0 < g.length,
                f = function (a, h, b, c, f) {
                    var J, ga, m, l = 0,
                        r = "0",
                        ob = a && [],
                        i = [],
                        x = lb,
                        F = a || d && O.find.TAG("*",
                            f),
                        j = wa += null == x ? 1 : Math.random() || 0.1,
                        B = F.length;
                    for (f && (lb = h === X || h || f) ; r !== B && null != (J = F[r]) ; r++) {
                        if (d && J) {
                            ga = 0;
                            for (h || J.ownerDocument === X || (Ha(J), b = !A) ; m = g[ga++];)
                                if (m(J, h || X, b)) {
                                    c.push(J);
                                    break
                                }
                            f && (wa = j)
                        }
                        k && ((J = !m && J) && l--, a && ob.push(J))
                    }
                    if (l += r, k && r !== l) {
                        for (ga = 0; m = e[ga++];) m(ob, i, h, b);
                        if (a) {
                            if (0 < l)
                                for (; r--;) ob[r] || i[r] || (i[r] = sc.call(c));
                            i = Za(i)
                        }
                        Aa.apply(c, i);
                        f && !a && 0 < i.length && 1 < l + e.length && R.uniqueSort(c)
                    }
                    return f && (wa = j, lb = x), ob
                },
                f = k ? sa(f) : f,
                f = c(a, f);
            f.selector = a
        }
        return f
    }, da = R.select = function (a,
            b, c, e) {
        var g, f, k, d, m, l = "function" == typeof a && a,
            r = !e && Ya(a = l.selector || a);
        if (c = c || [], 1 === r.length) {
            if (f = r[0] = r[0].slice(0), 2 < f.length && "ID" === (k = f[0]).type && ba.getById && 9 === b.nodeType && A && O.relative[f[1].type]) {
                if (b = (O.find.ID(k.matches[0].replace(Ja, Ka), b) || [])[0], !b) return c;
                l && (b = b.parentNode);
                a = a.slice(f.shift().value.length)
            }
            for (g = Nb.needsContext.test(a) ? 0 : f.length; g-- && !(k = f[g], O.relative[d = k.type]) ;)
                if ((m = O.find[d]) && (e = m(k.matches[0].replace(Ja, Ka), Ib.test(f[0].type) && Va(b.parentNode) || b))) {
                    if (f.splice(g,
                            1), a = e.length && sb(f), !a) return Aa.apply(c, e), c;
                    break
                }
        }
        return (l || pa(a, r))(e, b, !A, c, !b || Ib.test(a) && Va(b.parentNode) || b), c
    }, ba.sortStable = ca.split("").sort(Ia).join("") === ca, ba.detectDuplicates = !!la, Ha(), ba.sortDetached = na(function (a) {
        return 1 & a.compareDocumentPosition(X.createElement("div"))
    }), na(function (a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || tb("type|href|height|width", function (a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), ba.attributes &&
        na(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || tb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), na(function (a) {
            return null == a.getAttribute("disabled")
        }) || tb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) {
            var e;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (e = a.getAttributeNode(b)) && e.specified ?
                e.value : null
        }), R);
    e.find = Sa;
    e.expr = Sa.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.uniqueSort = e.unique = Sa.uniqueSort;
    e.text = Sa.getText;
    e.isXMLDoc = Sa.isXML;
    e.contains = Sa.contains;
    var bb = function (a, b, c) {
        for (var g = [], f = void 0 !== c;
            (a = a[b]) && 9 !== a.nodeType;)
            if (1 === a.nodeType) {
                if (f && e(a).is(c)) break;
                g.push(a)
            }
        return g
    },
        vc = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        fc = e.expr.match.needsContext,
        yb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ca = /^.[^:#\[\.,]*$/;
    e.filter = function (a,
        b, c) {
        var g = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === g.nodeType ? e.find.matchesSelector(g, a) ? [g] : [] : e.find.matches(a, e.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    };
    e.fn.extend({
        find: function (a) {
            var b, c = [],
                g = this,
                f = g.length;
            if ("string" != typeof a) return this.pushStack(e(a).filter(function () {
                for (b = 0; f > b; b++)
                    if (e.contains(g[b], this)) return !0
            }));
            for (b = 0; f > b; b++) e.find(a, g[b], c);
            return c = this.pushStack(1 < f ? e.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(n(this,
                a || [], !1))
        },
        not: function (a) {
            return this.pushStack(n(this, a || [], !0))
        },
        is: function (a) {
            return !!n(this, "string" == typeof a && fc.test(a) ? e(a) : a || [], !1).length
        }
    });
    var cb, wc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (e.fn.init = function (a, b, c) {
        var g, f;
        if (!a) return this;
        if (c = c || cb, "string" == typeof a) {
            if (g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : wc.exec(a), !g || !g[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (g[1]) {
                if (b = b instanceof e ? b[0] : b, e.merge(this, e.parseHTML(g[1],
                        b && b.nodeType ? b.ownerDocument || b : D, !0)), yb.test(g[1]) && e.isPlainObject(b))
                    for (g in b) e.isFunction(this[g]) ? this[g](b[g]) : this.attr(g, b[g]);
                return this
            }
            if (f = D.getElementById(g[2]), f && f.parentNode) {
                if (f.id !== g[2]) return cb.find(a);
                this.length = 1;
                this[0] = f
            }
            return this.context = D, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : e.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(e) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), e.makeArray(a,
            this))
    }).prototype = e.fn;
    cb = e(D);
    var xc = /^(?:parents|prev(?:Until|All))/,
        Ob = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        has: function (a) {
            var b, c = e(a, this),
                g = c.length;
            return this.filter(function () {
                for (b = 0; g > b; b++)
                    if (e.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, g = 0, f = this.length, k = [], d = fc.test(a) || "string" != typeof a ? e(a, b || this.context) : 0; f > g; g++)
                for (c = this[g]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (d ? -1 < d.index(c) : 1 === c.nodeType && e.find.matchesSelector(c, a))) {
                        k.push(c);
                        break
                    }
            return this.pushStack(1 < k.length ? e.uniqueSort(k) : k)
        },
        index: function (a) {
            return a ? "string" == typeof a ? e.inArray(this[0], e(a)) : e.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(e.uniqueSort(e.merge(this.get(), e(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    e.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function (a) {
            return bb(a,
                "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return bb(a, "parentNode", c)
        },
        next: function (a) {
            return s(a, "nextSibling")
        },
        prev: function (a) {
            return s(a, "previousSibling")
        },
        nextAll: function (a) {
            return bb(a, "nextSibling")
        },
        prevAll: function (a) {
            return bb(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return bb(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return bb(a, "previousSibling", c)
        },
        siblings: function (a) {
            return vc((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return vc(a.firstChild)
        },
        contents: function (a) {
            return e.nodeName(a,
                "iframe") ? a.contentDocument || a.contentWindow.document : e.merge([], a.childNodes)
        }
    }, function (a, b) {
        e.fn[a] = function (c, g) {
            var f = e.map(this, b, c);
            return "Until" !== a.slice(-5) && (g = c), g && "string" == typeof g && (f = e.filter(g, f)), 1 < this.length && (Ob[a] || (f = e.uniqueSort(f)), xc.test(a) && (f = f.reverse())), this.pushStack(f)
        }
    });
    var Ga = /\S+/g;
    e.Callbacks = function (a) {
        var b;
        if ("string" == typeof a) {
            var c = {};
            b = (e.each(a.match(Ga) || [], function (a, h) {
                c[h] = !0
            }), c)
        } else b = e.extend({}, a);
        var a = b,
            g, f, k, d, m = [],
            l = [],
            r = -1,
            i = function () {
                d =
                    a.once;
                for (k = g = !0; l.length; r = -1)
                    for (f = l.shift() ; ++r < m.length;) !1 === m[r].apply(f[0], f[1]) && a.stopOnFalse && (r = m.length, f = !1);
                a.memory || (f = !1);
                g = !1;
                d && (m = f ? [] : "")
            },
            x = {
                add: function () {
                    return m && (f && !g && (r = m.length - 1, l.push(f)), function xd(b) {
                        e.each(b, function (b, c) {
                            e.isFunction(c) ? a.unique && x.has(c) || m.push(c) : c && c.length && "string" !== e.type(c) && xd(c)
                        })
                    }(arguments), f && !g && i()), this
                },
                remove: function () {
                    return e.each(arguments, function (a, h) {
                        for (var b; -1 < (b = e.inArray(h, m, b)) ;) m.splice(b, 1), r >= b && r--
                    }), this
                },
                has: function (a) {
                    return a ? -1 < e.inArray(a, m) : 0 < m.length
                },
                empty: function () {
                    return m && (m = []), this
                },
                disable: function () {
                    return d = l = [], m = f = "", this
                },
                disabled: function () {
                    return !m
                },
                lock: function () {
                    return d = !0, f || x.disable(), this
                },
                locked: function () {
                    return !!d
                },
                fireWith: function (a, h) {
                    return d || (h = h || [], h = [a, h.slice ? h.slice() : h], l.push(h), g || i()), this
                },
                fire: function () {
                    return x.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!k
                }
            };
        return x
    };
    e.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", e.Callbacks("once memory"),
                        "resolved"
                    ],
                    ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory")]
            ],
                c = "pending",
                g = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return e.Deferred(function (h) {
                            e.each(b, function (b, c) {
                                var k = e.isFunction(a[b]) && a[b];
                                f[c[1]](function () {
                                    var a = k && k.apply(this, arguments);
                                    a && e.isFunction(a.promise) ? a.promise().progress(h.notify).done(h.resolve).fail(h.reject) : h[c[0] + "With"](this === g ?
                                        h.promise() : this, k ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? e.extend(a, g) : g
                    }
                },
                f = {};
            return g.pipe = g.then, e.each(b, function (a, h) {
                var e = h[2],
                    k = h[3];
                g[h[1]] = e.add;
                k && e.add(function () {
                    c = k
                }, b[1 ^ a][2].disable, b[2][2].lock);
                f[h[0]] = function () {
                    return f[h[0] + "With"](this === f ? g : this, arguments), this
                };
                f[h[0] + "With"] = e.fireWith
            }), g.promise(f), a && a.call(f, f), f
        },
        when: function (a) {
            var b = 0,
                c = Ra.call(arguments),
                g = c.length,
                f = 1 !== g || a && e.isFunction(a.promise) ? g : 0,
                k = 1 === f ? a : e.Deferred(),
                d = function (a, h, b) {
                    return function (c) {
                        h[a] = this;
                        b[a] = 1 < arguments.length ? Ra.call(arguments) : c;
                        b === m ? k.notifyWith(h, b) : --f || k.resolveWith(h, b)
                    }
                },
                m, l, r;
            if (1 < g) {
                m = Array(g);
                l = Array(g);
                for (r = Array(g) ; g > b; b++) c[b] && e.isFunction(c[b].promise) ? c[b].promise().progress(d(b, l, m)).done(d(b, r, c)).fail(k.reject) : --f
            }
            return f || k.resolveWith(r, c), k.promise()
        }
    });
    var a;
    e.fn.ready = function (a) {
        return e.ready.promise().done(a), this
    };
    e.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0)
        },
        ready: function (h) {
            (!0 ===
                h ? --e.readyWait : e.isReady) || (e.isReady = !0, !0 !== h && 0 < --e.readyWait || (a.resolveWith(D, [e]), e.fn.triggerHandler && (e(D).triggerHandler("ready"), e(D).off("ready"))))
        }
    });
    e.ready.promise = function (h) {
        if (!a)
            if (a = e.Deferred(), "complete" === D.readyState) d.setTimeout(e.ready);
            else if (D.addEventListener) D.addEventListener("DOMContentLoaded", v), d.addEventListener("load", v);
            else {
                D.attachEvent("onreadystatechange", v);
                d.attachEvent("onload", v);
                var b = !1;
                try {
                    b = null == d.frameElement && D.documentElement
                } catch (c) { }
                b && b.doScroll &&
                    ! function wd() {
                        if (!e.isReady) {
                            try {
                                b.doScroll("left")
                            } catch (a) {
                                return d.setTimeout(wd, 50)
                            }
                            H();
                            e.ready()
                        }
                    }()
            }
        return a.promise(h)
    };
    e.ready.promise();
    for (var b in e(C)) break;
    C.ownFirst = "0" === b;
    C.inlineBlockNeedsLayout = !1;
    e(function () {
        var a, b, c, e;
        (c = D.getElementsByTagName("body")[0]) && c.style && (b = D.createElement("div"), e = D.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", C.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    });
    var c = D.createElement("div");
    C.deleteExpando = !0;
    try {
        delete c.test
    } catch (g) {
        C.deleteExpando = !1
    }
    var k = function (a) {
        var b = e.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    },
        f = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        m = /([A-Z])/g;
    e.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? e.cache[a[e.expando]] : a[e.expando], !!a && !V(a)
        },
        data: function (a, b, c) {
            return E(a, b, c)
        },
        removeData: function (a, b) {
            return U(a, b)
        },
        _data: function (a, b, c) {
            return E(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return U(a, b, !0)
        }
    });
    e.fn.extend({
        data: function (a, b) {
            var c, g, f, k = this[0],
                d = k && k.attributes;
            if (void 0 === a) {
                if (this.length && (f = e.data(k), 1 === k.nodeType && !e._data(k, "parsedAttrs"))) {
                    for (c = d.length; c--;) d[c] && (g = d[c].name, 0 === g.indexOf("data-") && (g = e.camelCase(g.slice(5)),
                        P(k, g, f[g])));
                    e._data(k, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function () {
                e.data(this, a)
            }) : 1 < arguments.length ? this.each(function () {
                e.data(this, a, b)
            }) : k ? P(k, a, e.data(k, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                e.removeData(this, a)
            })
        }
    });
    e.extend({
        queue: function (a, b, c) {
            var g;
            return a ? (b = (b || "fx") + "queue", g = e._data(a, b), c && (!g || e.isArray(c) ? g = e._data(a, b, e.makeArray(c)) : g.push(c)), g || []) : void 0
        },
        dequeue: function (a, b) {
            var b = b || "fx",
                c = e.queue(a, b),
                g = c.length,
                f = c.shift(),
                k = e._queueHooks(a, b),
                d = function () {
                    e.dequeue(a, b)
                };
            "inprogress" === f && (f = c.shift(), g--);
            f && ("fx" === b && c.unshift("inprogress"), delete k.stop, f.call(a, d, k));
            !g && k && k.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return e._data(a, c) || e._data(a, c, {
                empty: e.Callbacks("once memory").add(function () {
                    e._removeData(a, b + "queue");
                    e._removeData(a, c)
                })
            })
        }
    });
    e.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? e.queue(this[0], a) : void 0 ===
                b ? this : this.each(function () {
                    var c = e.queue(this, a, b);
                    e._queueHooks(this, a);
                    "fx" === a && "inprogress" !== c[0] && e.dequeue(this, a)
                })
        },
        dequeue: function (a) {
            return this.each(function () {
                e.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, g = 1,
                f = e.Deferred(),
                k = this,
                d = this.length,
                m = function () {
                    --g || f.resolveWith(k, [k])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; d--;) (c = e._data(k[d], a + "queueHooks")) && c.empty && (g++, c.empty.add(m));
            return m(), f.promise(b)
        }
    });
    var l;
    C.shrinkWrapBlocks = function () {
        if (null != l) return l;
        l = !1;
        var a, b, c;
        return b = D.getElementsByTagName("body")[0], b && b.style ? (a = D.createElement("div"), c = D.createElement("div"), c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", b.appendChild(c).appendChild(a), "undefined" != typeof a.style.zoom && (a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", a.appendChild(D.createElement("div")).style.width =
            "5px", l = 3 !== a.offsetWidth), b.removeChild(c), l) : void 0
    };
    var r = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        F = RegExp("^(?:([+-])=|)(" + r + ")([a-z%]*)$", "i"),
        x = ["Top", "Right", "Bottom", "Left"],
        ua = function (a, b) {
            return a = b || a, "none" === e.css(a, "display") || !e.contains(a.ownerDocument, a)
        },
        qa = function (a, b, c, g, f, k, d) {
            var m = 0,
                l = a.length,
                r = null == c;
            if ("object" === e.type(c))
                for (m in f = !0, c) qa(a, b, m, c[m], !0, k, d);
            else if (void 0 !== g && (f = !0, e.isFunction(g) || (d = !0), r && (d ? (b.call(a, g), b = null) : (r = b, b = function (a, b, h) {
                    return r.call(e(a),
                        h)
            })), b))
                for (; l > m; m++) b(a[m], c, d ? g : g.call(a[m], m, b(a[m], c)));
            return f ? a : r ? b.call(a) : l ? b(a[0], c) : k
        },
        Sb = /^(?:checkbox|radio)$/i,
        z = /<([\w:-]+)/,
        $c = /^$|\/(?:java|ecma)script/i,
        Fc = /^\s+/,
        Yc = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video",
        Qa = D.createElement("div"),
        dd = D.createDocumentFragment(),
        db = D.createElement("input");
    Qa.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    C.leadingWhitespace = 3 === Qa.firstChild.nodeType;
    C.tbody = !Qa.getElementsByTagName("tbody").length;
    C.htmlSerialize = !!Qa.getElementsByTagName("link").length;
    C.html5Clone = "<:nav></:nav>" !== D.createElement("nav").cloneNode(!0).outerHTML;
    db.type = "checkbox";
    db.checked = !0;
    dd.appendChild(db);
    C.appendChecked = db.checked;
    Qa.innerHTML = "<textarea>x</textarea>";
    C.noCloneChecked = !!Qa.cloneNode(!0).lastChild.defaultValue;
    dd.appendChild(Qa);
    db = D.createElement("input");
    db.setAttribute("type", "radio");
    db.setAttribute("checked",
        "checked");
    db.setAttribute("name", "t");
    Qa.appendChild(db);
    C.checkClone = Qa.cloneNode(!0).cloneNode(!0).lastChild.checked;
    C.noCloneEvent = !!Qa.addEventListener;
    Qa[e.expando] = 1;
    C.attributes = !Qa.getAttribute(e.expando);
    !0;
    var Ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: C.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ma.optgroup = Ma.option;
    Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead;
    Ma.th = Ma.td;
    var yd = /<|&#?\w+;/,
        Zc = /<tbody/i,
        yc, zc, ed = D.createElement("div");
    for (yc in {
        submit: !0,
        change: !0,
        focusin: !0
    }) zc = "on" + yc, (C[yc] = zc in d) || (ed.setAttribute(zc, "t"), C[yc] = !1 === ed.attributes[zc].expando);
    !0;
    var Jc = /^(?:input|select|textarea)$/i,
        Ed = /^key/,
        Fd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fd = /^(?:focusinfocus|focusoutblur)$/,
        gd = /^([^.]*)(?:\.(.+)|)/;
    e.event = {
        global: {},
        add: function (a, b, c, g, f) {
            var k, d, m, l, r, i, x, F, j, B;
            if (m = e._data(a)) {
                c.handler && (l = c, c = l.handler, f = l.selector);
                c.guid || (c.guid = e.guid++);
                (d = m.events) || (d = m.events = {});
                (i = m.handle) || (i = m.handle = function (a) {
                    return "undefined" == typeof e || a && e.event.triggered === a.type ? void 0 : e.event.dispatch.apply(i.elem, arguments)
                }, i.elem = a);
                b = (b || "").match(Ga) || [""];
                for (m = b.length; m--;) k = gd.exec(b[m]) || [], j = B = k[1], k = (k[2] || "").split(".").sort(), j && (r = e.event.special[j] || {}, j = (f ?
                    r.delegateType : r.bindType) || j, r = e.event.special[j] || {}, x = e.extend({
                        type: j,
                        origType: B,
                        data: g,
                        handler: c,
                        guid: c.guid,
                        selector: f,
                        needsContext: f && e.expr.match.needsContext.test(f),
                        namespace: k.join(".")
                    }, l), (F = d[j]) || (F = d[j] = [], F.delegateCount = 0, r.setup && !1 !== r.setup.call(a, g, k, i) || (a.addEventListener ? a.addEventListener(j, i, !1) : a.attachEvent && a.attachEvent("on" + j, i))), r.add && (r.add.call(a, x), x.handler.guid || (x.handler.guid = c.guid)), f ? F.splice(F.delegateCount++, 0, x) : F.push(x), e.event.global[j] = !0);
                a = null
            }
        },
        remove: function (a, b, c, g, f) {
            var k, d, m, l, r, i, x, F, j, B, o, t = e.hasData(a) && e._data(a);
            if (t && (i = t.events)) {
                b = (b || "").match(Ga) || [""];
                for (r = b.length; r--;)
                    if (m = gd.exec(b[r]) || [], j = o = m[1], B = (m[2] || "").split(".").sort(), j) {
                        x = e.event.special[j] || {};
                        j = (g ? x.delegateType : x.bindType) || j;
                        F = i[j] || [];
                        m = m[2] && RegExp("(^|\\.)" + B.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (l = k = F.length; k--;) d = F[k], !f && o !== d.origType || c && c.guid !== d.guid || m && !m.test(d.namespace) || g && g !== d.selector && ("**" !== g || !d.selector) || (F.splice(k, 1), d.selector &&
                            F.delegateCount--, x.remove && x.remove.call(a, d));
                        l && !F.length && (x.teardown && !1 !== x.teardown.call(a, B, t.handle) || e.removeEvent(a, j, t.handle), delete i[j])
                    } else
                        for (j in i) e.event.remove(a, j + b[r], c, g, !0);
                e.isEmptyObject(i) && (delete t.handle, e._removeData(a, "events"))
            }
        },
        trigger: function (a, b, c, g) {
            var f, m, l, r, i, x, F = [c || D],
                j = Xa.call(a, "type") ? a.type : a;
            x = Xa.call(a, "namespace") ? a.namespace.split(".") : [];
            if (l = f = c = c || D, 3 !== c.nodeType && 8 !== c.nodeType && !fd.test(j + e.event.triggered) && (-1 < j.indexOf(".") && (x = j.split("."),
                    j = x.shift(), x.sort()), m = 0 > j.indexOf(":") && "on" + j, a = a[e.expando] ? a : new e.Event(j, "object" == typeof a && a), a.isTrigger = g ? 2 : 3, a.namespace = x.join("."), a.rnamespace = a.namespace ? RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : e.makeArray(b, [a]), i = e.event.special[j] || {}, g || !i.trigger || !1 !== i.trigger.apply(c, b))) {
                if (!g && !i.noBubble && !e.isWindow(c)) {
                    r = i.delegateType || j;
                    for (fd.test(r + j) || (l = l.parentNode) ; l; l = l.parentNode) F.push(l), f = l;
                    f === (c.ownerDocument ||
                        D) && F.push(f.defaultView || f.parentWindow || d)
                }
                for (x = 0;
                    (l = F[x++]) && !a.isPropagationStopped() ;) a.type = 1 < x ? r : i.bindType || j, (f = (e._data(l, "events") || {})[a.type] && e._data(l, "handle")) && f.apply(l, b), (f = m && l[m]) && f.apply && k(l) && (a.result = f.apply(l, b), !1 === a.result && a.preventDefault());
                if (a.type = j, !g && !a.isDefaultPrevented() && (!i._default || !1 === i._default.apply(F.pop(), b)) && k(c) && m && c[j] && !e.isWindow(c)) {
                    (f = c[m]) && (c[m] = null);
                    e.event.triggered = j;
                    try {
                        c[j]()
                    } catch (B) { }
                    e.event.triggered = void 0;
                    f && (c[m] = f)
                }
                return a.result
            }
        },
        dispatch: function (a) {
            var a = e.event.fix(a),
                b, c, g, f, k, d = [],
                m = Ra.call(arguments);
            b = (e._data(this, "events") || {})[a.type] || [];
            var l = e.event.special[a.type] || {};
            if (m[0] = a, a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                d = e.event.handlers.call(this, a, b);
                for (b = 0;
                    (f = d[b++]) && !a.isPropagationStopped() ;) {
                    a.currentTarget = f.elem;
                    for (c = 0;
                        (k = f.handlers[c++]) && !a.isImmediatePropagationStopped() ;) (!a.rnamespace || a.rnamespace.test(k.namespace)) && (a.handleObj = k, a.data = k.data, g = ((e.event.special[k.origType] || {}).handle || k.handler).apply(f.elem, m), void 0 !== g && !1 === (a.result = g) && (a.preventDefault(), a.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, g, f, k, d = [],
                m = b.delegateCount,
                l = a.target;
            if (m && l.nodeType && ("click" !== a.type || isNaN(a.button) || 1 > a.button))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== a.type)) {
                        g = [];
                        for (c = 0; m > c; c++) k = b[c], f = k.selector + " ", void 0 === g[f] && (g[f] = k.needsContext ? -1 < e(f, this).index(l) :
                            e.find(f, this, null, [l]).length), g[f] && g.push(k);
                        g.length && d.push({
                            elem: l,
                            handlers: g
                        })
                    }
            return m < b.length && d.push({
                elem: this,
                handlers: b.slice(m)
            }), d
        },
        fix: function (a) {
            if (a[e.expando]) return a;
            var b, c, g;
            b = a.type;
            var f = a,
                k = this.fixHooks[b];
            k || (this.fixHooks[b] = k = Fd.test(b) ? this.mouseHooks : Ed.test(b) ? this.keyHooks : {});
            g = k.props ? this.props.concat(k.props) : this.props;
            a = new e.Event(f);
            for (b = g.length; b--;) c = g[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || D), 3 === a.target.nodeType && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey, k.filter ? k.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c,
                    g, e, f = b.button,
                    k = b.fromElement;
                return null == a.pageX && null != b.clientX && (g = a.target.ownerDocument || D, e = g.documentElement, c = g.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && k && (a.relatedTarget = k === a.target ? b.toElement : k), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Y() &&
                        this.focus) try {
                            return this.focus(), !1
                        } catch (a) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === Y() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return e.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return e.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c) {
            a = e.extend(new e.Event,
                c, {
                    type: a,
                    isSimulated: !0
                });
            e.event.trigger(a, null, b);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    e.removeEvent = D.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function (a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" == typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    e.Event = function (a, b) {
        return this instanceof e.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? t : I) :
            this.type = a, b && e.extend(this, b), this.timeStamp = a && a.timeStamp || e.now(), void (this[e.expando] = !0)) : new e.Event(a, b)
    };
    e.Event.prototype = {
        constructor: e.Event,
        isDefaultPrevented: I,
        isPropagationStopped: I,
        isImmediatePropagationStopped: I,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = t;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = t;
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = t;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        e.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var h, c = a.relatedTarget,
                    g = a.handleObj;
                return (!c || c !== this && !e.contains(this, c)) && (a.type = g.origType, h = g.handler.apply(this,
                    arguments), a.type = b), h
            }
        }
    });
    C.submit || (e.event.special.submit = {
        setup: function () {
            return e.nodeName(this, "form") ? !1 : void e.event.add(this, "click._submit keypress._submit", function (a) {
                a = a.target;
                (a = e.nodeName(a, "input") || e.nodeName(a, "button") ? e.prop(a, "form") : void 0) && !e._data(a, "submit") && (e.event.add(a, "submit._submit", function (a) {
                    a._submitBubble = true
                }), e._data(a, "submit", true))
            })
        },
        postDispatch: function (a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && e.event.simulate("submit",
                this.parentNode, a))
        },
        teardown: function () {
            return e.nodeName(this, "form") ? !1 : void e.event.remove(this, "._submit")
        }
    });
    C.change || (e.event.special.change = {
        setup: function () {
            return Jc.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (e.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), e.event.add(this, "click._change", function (a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1);
                e.event.simulate("change", this, a)
            })), !1) : void e.event.add(this, "beforeactivate._change", function (a) {
                a = a.target;
                Jc.test(a.nodeName) && !e._data(a, "change") && (e.event.add(a, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || e.event.simulate("change", this.parentNode, a)
                }), e._data(a, "change", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return e.event.remove(this, "._change"), !Jc.test(this.nodeName)
        }
    });
    C.focusin || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            e.event.simulate(b, a.target, e.event.fix(a))
        };
        e.event.special[b] = {
            setup: function () {
                var g = this.ownerDocument || this,
                    f = e._data(g, b);
                f || g.addEventListener(a, c, !0);
                e._data(g, b, (f || 0) + 1)
            },
            teardown: function () {
                var g = this.ownerDocument || this,
                    f = e._data(g, b) - 1;
                f ? e._data(g, b, f) : (g.removeEventListener(a, c, !0), e._removeData(g, b))
            }
        }
    });
    e.fn.extend({
        on: function (a, b, c, g) {
            return u(this, a, b, c, g)
        },
        one: function (a,
            b, c, g) {
            return u(this, a, b, c, g, 1)
        },
        off: function (a, b, c) {
            var g, f;
            if (a && a.preventDefault && a.handleObj) return g = a.handleObj, e(a.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, b, a[f]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = I), this.each(function () {
                e.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                e.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a,
            b) {
            var c = this[0];
            return c ? e.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Gd = / jQuery\d+="(?:null|\d+)"/g,
        hd = RegExp("<(?:" + Yc + ")[\\s/>]", "i"),
        Hd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Id = /<script|<style|<link/i,
        Ad = /checked\s*(?:[^=]|=\s*.checked.)/i,
        zd = /^true\/(.*)/,
        Bd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Kc = w(D).appendChild(D.createElement("div"));
    e.extend({
        htmlPrefilter: function (a) {
            return a.replace(Hd, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var g, f, k, d, m, l = e.contains(a.ownerDocument,
                a);
            if (C.html5Clone || e.isXMLDoc(a) || !hd.test("<" + a.nodeName + ">") ? k = a.cloneNode(!0) : (Kc.innerHTML = a.outerHTML, Kc.removeChild(k = Kc.firstChild)), !(C.noCloneEvent && C.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || e.isXMLDoc(a))) {
                g = p(k);
                m = p(a);
                for (d = 0; null != (f = m[d]) ; ++d)
                    if (g[d]) {
                        var r = g[d],
                            i = void 0,
                            x = void 0,
                            F = void 0;
                        if (1 === r.nodeType) {
                            if (i = r.nodeName.toLowerCase(), !C.noCloneEvent && r[e.expando]) {
                                F = e._data(r);
                                for (x in F.events) e.removeEvent(r, x, F.handle);
                                r.removeAttribute(e.expando)
                            }
                            "script" === i && r.text !==
                                f.text ? (y(r).text = f.text, Da(r)) : "object" === i ? (r.parentNode && (r.outerHTML = f.outerHTML), C.html5Clone && f.innerHTML && !e.trim(r.innerHTML) && (r.innerHTML = f.innerHTML)) : "input" === i && Sb.test(f.type) ? (r.defaultChecked = r.checked = f.checked, r.value !== f.value && (r.value = f.value)) : "option" === i ? r.defaultSelected = r.selected = f.defaultSelected : ("input" === i || "textarea" === i) && (r.defaultValue = f.defaultValue)
                        }
                    }
            }
            if (b)
                if (c) {
                    m = m || p(a);
                    g = g || p(k);
                    for (d = 0; null != (f = m[d]) ; d++) S(f, g[d])
                } else S(a, k);
            return g = p(k, "script"), 0 < g.length &&
                j(g, !l && p(a, "script")), k
        },
        cleanData: function (a, b) {
            for (var c, g, f, d, m = 0, l = e.expando, r = e.cache, i = C.attributes, x = e.event.special; null != (c = a[m]) ; m++)
                if ((b || k(c)) && (f = c[l], d = f && r[f])) {
                    if (d.events)
                        for (g in d.events) x[g] ? e.event.remove(c, g) : e.removeEvent(c, g, d.handle);
                    r[f] && (delete r[f], i || "undefined" == typeof c.removeAttribute ? c[l] = void 0 : c.removeAttribute(l), La.push(f))
                }
        }
    });
    e.fn.extend({
        domManip: B,
        detach: function (a) {
            return ea(this, a, !0)
        },
        remove: function (a) {
            return ea(this, a)
        },
        text: function (a) {
            return qa(this,
                function (a) {
                    return void 0 === a ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(a))
                }, null, a, arguments.length)
        },
        append: function () {
            return B(this, arguments, function (a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && ma(this, a).appendChild(a)
            })
        },
        prepend: function () {
            return B(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ma(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return B(this, arguments, function (a) {
                this.parentNode &&
                    this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return B(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]) ; b++) {
                for (1 === a.nodeType && e.cleanData(p(a, !1)) ; a.firstChild;) a.removeChild(a.firstChild);
                a.options && e.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return e.clone(this, a, b)
            })
        },
        html: function (a) {
            return qa(this,
                function (a) {
                    var b = this[0] || {},
                        c = 0,
                        h = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Gd, "") : void 0;
                    if ("string" == typeof a && !Id.test(a) && (C.htmlSerialize || !hd.test(a)) && (C.leadingWhitespace || !Fc.test(a)) && !Ma[(z.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = e.htmlPrefilter(a);
                        try {
                            for (; h > c; c++) b = this[c] || {}, 1 === b.nodeType && (e.cleanData(p(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (g) { }
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return B(this, arguments, function (b) {
                var c =
                    this.parentNode;
                0 > e.inArray(this, a) && (e.cleanData(p(this)), c && c.replaceChild(b, this))
            }, a)
        }
    });
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        e.fn[a] = function (a) {
            for (var c = 0, h = [], g = e(a), f = g.length - 1; f >= c; c++) a = c === f ? this : this.clone(!0), e(g[c])[b](a), Fb.apply(h, a.get());
            return this.pushStack(h)
        }
    });
    var Tb, ad = {
        HTML: "block",
        BODY: "block"
    },
        id = /^margin/,
        ic = RegExp("^(" + r + ")(?!px)[a-z%]+$", "i"),
        Lc = function (a, b, c, g) {
            var f, e = {};
            for (f in b) e[f] =
                a.style[f], a.style[f] = b[f];
            c = c.apply(a, g || []);
            for (f in b) a.style[f] = e[f];
            return c
        },
        jd = D.documentElement,
        eb, Mc, Nc, gc, Oc, Pc, hc = D.createElement("div"),
        ia = D.createElement("div");
    if (ia.style) {
        ia.style.cssText = "float:left;opacity:.5";
        C.opacity = "0.5" === ia.style.opacity;
        C.cssFloat = !!ia.style.cssFloat;
        ia.style.backgroundClip = "content-box";
        ia.cloneNode(!0).style.backgroundClip = "";
        C.clearCloneStyle = "content-box" === ia.style.backgroundClip;
        hc = D.createElement("div");
        hc.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        ia.innerHTML = "";
        hc.appendChild(ia);
        C.boxSizing = "" === ia.style.boxSizing || "" === ia.style.MozBoxSizing || "" === ia.style.WebkitBoxSizing;
        e.extend(C, {
            reliableHiddenOffsets: function () {
                return null == eb && Pb(), gc
            },
            boxSizingReliable: function () {
                return null == eb && Pb(), Nc
            },
            pixelMarginRight: function () {
                return null == eb && Pb(), Mc
            },
            pixelPosition: function () {
                return null == eb && Pb(), eb
            },
            reliableMarginRight: function () {
                return null == eb && Pb(), Oc
            },
            reliableMarginLeft: function () {
                return null == eb && Pb(), Pc
            }
        });
        var Pb = function () {
            var a, b,
                c = D.documentElement;
            c.appendChild(hc);
            ia.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            eb = Nc = Pc = !1;
            Mc = Oc = !0;
            d.getComputedStyle && (b = d.getComputedStyle(ia), eb = "1%" !== (b || {}).top, Pc = "2px" === (b || {}).marginLeft, Nc = "4px" === (b || {
                width: "4px"
            }).width, ia.style.marginRight = "50%", Mc = "4px" === (b || {
                marginRight: "4px"
            }).marginRight, a = ia.appendChild(D.createElement("div")), a.style.cssText = ia.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                a.style.marginRight = a.style.width = "0", ia.style.width = "1px", Oc = !parseFloat((d.getComputedStyle(a) || {}).marginRight), ia.removeChild(a));
            ia.style.display = "none";
            (gc = 0 === ia.getClientRects().length) && (ia.style.display = "", ia.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = ia.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", gc = 0 === a[0].offsetHeight, gc && (a[0].style.display = "", a[1].style.display = "none", gc = 0 === a[0].offsetHeight));
            c.removeChild(hc)
        }
    } !0;
    var pb,
        hb, Jd = /^(top|right|bottom|left)$/;
    d.getComputedStyle ? (pb = function (a) {
        var b = a.ownerDocument.defaultView;
        return b.opener || (b = d), b.getComputedStyle(a)
    }, hb = function (a, b, c) {
        var g, f, k, d, m = a.style;
        return c = c || pb(a), d = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== d || e.contains(a.ownerDocument, a) || (d = e.style(a, b)), !C.pixelMarginRight() && ic.test(d) && id.test(b) && (g = m.width, f = m.minWidth, k = m.maxWidth, m.minWidth = m.maxWidth = m.width = d, d = c.width, m.width = g, m.minWidth = f, m.maxWidth = k)), void 0 === d ? d : d + ""
    }) : jd.currentStyle &&
        (pb = function (a) {
            return a.currentStyle
        }, hb = function (a, b, c) {
            var g, f, e, k, d = a.style;
            return c = c || pb(a), k = c ? c[b] : void 0, null == k && d && d[b] && (k = d[b]), ic.test(k) && !Jd.test(b) && (g = d.left, f = a.runtimeStyle, e = f && f.left, e && (f.left = a.currentStyle.left), d.left = "fontSize" === b ? "1em" : k, k = d.pixelLeft + "px", d.left = g, e && (f.left = e)), void 0 === k ? k : k + "" || "auto"
        });
    var Qc = /alpha\([^)]*\)/i,
        Kd = /opacity\s*=\s*([^)]*)/i,
        Ld = /^(none|table(?!-c[ea]).+)/,
        Cd = RegExp("^(" + r + ")(.*)$", "i"),
        Md = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        kd = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cd = ["Webkit", "O", "Moz", "ms"],
        bd = D.createElement("div").style;
    e.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = hb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": C.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, g) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f,
                    k, d, m = e.camelCase(b),
                    l = a.style;
                if (b = e.cssProps[m] || (e.cssProps[m] = Na(m) || m), d = e.cssHooks[b] || e.cssHooks[m], void 0 === c) return d && "get" in d && void 0 !== (f = d.get(a, !1, g)) ? f : l[b];
                if (k = typeof c, "string" === k && (f = F.exec(c)) && f[1] && (c = M(a, b, f), k = "number"), null != c && c === c && ("number" === k && (c += f && f[3] || (e.cssNumber[m] ? "" : "px")), C.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (l[b] = "inherit"), !(d && "set" in d && void 0 === (c = d.set(a, c, g))))) try {
                    l[b] = c
                } catch (r) { }
            }
        },
        css: function (a, b, c, g) {
            var f, k, d, m = e.camelCase(b);
            return b = e.cssProps[m] || (e.cssProps[m] = Na(m) || m), d = e.cssHooks[b] || e.cssHooks[m], d && "get" in d && (k = d.get(a, !0, c)), void 0 === k && (k = hb(a, b, g)), "normal" === k && b in kd && (k = kd[b]), "" === c || c ? (f = parseFloat(k), !0 === c || isFinite(f) ? f || 0 : k) : k
        }
    });
    e.each(["height", "width"], function (a, b) {
        e.cssHooks[b] = {
            get: function (a, c, h) {
                return c ? Ld.test(e.css(a, "display")) && 0 === a.offsetWidth ? Lc(a, Md, function () {
                    return Ua(a, b, h)
                }) : Ua(a, b, h) : void 0
            },
            set: function (a, c, h) {
                var g = h && pb(a);
                return W(a, c, h ? Fa(a, b, h, C.boxSizing && "border-box" ===
                    e.css(a, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    C.opacity || (e.cssHooks.opacity = {
        get: function (a, b) {
            return Kd.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                g = a.currentStyle,
                f = e.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                k = g && g.filter || c.filter || "";
            c.zoom = 1;
            (1 <= b || "" === b) && "" === e.trim(k.replace(Qc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || g && !g.filter) || (c.filter = Qc.test(k) ? k.replace(Qc, f) : k + " " + f)
        }
    });
    e.cssHooks.marginRight = ra(C.reliableMarginRight, function (a, b) {
        return b ? Lc(a, {
            display: "inline-block"
        }, hb, [a, "marginRight"]) : void 0
    });
    e.cssHooks.marginLeft = ra(C.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(hb(a, "marginLeft")) || (e.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Lc(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        e.cssHooks[a + b] = {
            expand: function (c) {
                for (var g = 0, f = {}, c = "string" ==
                        typeof c ? c.split(" ") : [c]; 4 > g; g++) f[a + x[g] + b] = c[g] || c[g - 2] || c[0];
                return f
            }
        };
        id.test(a) || (e.cssHooks[a + b].set = W)
    });
    e.fn.extend({
        css: function (a, b) {
            return qa(this, function (a, b, c) {
                var h, g = {},
                    f = 0;
                if (e.isArray(b)) {
                    c = pb(a);
                    for (h = b.length; h > f; f++) g[b[f]] = e.css(a, b[f], !1, c);
                    return g
                }
                return void 0 !== c ? e.style(a, b, c) : e.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function () {
            return Ea(this, !0)
        },
        hide: function () {
            return Ea(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ua(this) ?
                    e(this).show() : e(this).hide()
            })
        }
    });
    e.Tween = ja;
    ja.prototype = {
        constructor: ja,
        init: function (a, b, c, g, f, k) {
            this.elem = a;
            this.prop = c;
            this.easing = f || e.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = k || (e.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = ja.propHooks[this.prop];
            return a && a.get ? a.get(this) : ja.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = ja.propHooks[this.prop];
            return this.options.duration ? this.pos = b = e.easing[this.easing](a, this.options.duration * a, 0, 1,
                this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : ja.propHooks._default.set(this), this
        }
    };
    ja.prototype.init.prototype = ja.prototype;
    ja.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = e.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                e.fx.step[a.prop] ? e.fx.step[a.prop](a) : 1 !== a.elem.nodeType ||
                    null == a.elem.style[e.cssProps[a.prop]] && !e.cssHooks[a.prop] ? a.elem[a.prop] = a.now : e.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    ja.propHooks.scrollTop = ja.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    e.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    e.fx = ja.prototype.init;
    e.fx.step = {};
    var Cb, Ac, Nd = /^(?:toggle|show|hide)$/,
        Od = /queueHooks$/;
    e.Animation = e.extend(ka, {
        tweeners: {
            "*": [function (a, b) {
                var c =
                    this.createTween(a, b);
                return M(c.elem, a, F.exec(b), c), c
            }]
        },
        tweener: function (a, b) {
            e.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ga);
            for (var c, g = 0, f = a.length; f > g; g++) c = a[g], ka.tweeners[c] = ka.tweeners[c] || [], ka.tweeners[c].unshift(b)
        },
        prefilters: [function (a, b, c) {
            var g, f, k, d, m, l, r, i = this,
                x = {},
                j = a.style,
                F = a.nodeType && ua(a),
                B = e._data(a, "fxshow");
            c.queue || (d = e._queueHooks(a, "fx"), null == d.unqueued && (d.unqueued = 0, m = d.empty.fire, d.empty.fire = function () {
                d.unqueued || m()
            }), d.unqueued++, i.always(function () {
                i.always(function () {
                    d.unqueued--;
                    e.queue(a, "fx").length || d.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [j.overflow, j.overflowX, j.overflowY], l = e.css(a, "display"), r = "none" === l ? e._data(a, "olddisplay") || fa(a.nodeName) : l, "inline" === r && "none" === e.css(a, "float") && (C.inlineBlockNeedsLayout && "inline" !== fa(a.nodeName) ? j.zoom = 1 : j.display = "inline-block"));
            c.overflow && (j.overflow = "hidden", C.shrinkWrapBlocks() || i.always(function () {
                j.overflow = c.overflow[0];
                j.overflowX = c.overflow[1];
                j.overflowY = c.overflow[2]
            }));
            for (g in b)
                if (f =
                    b[g], Nd.exec(f)) {
                    if (delete b[g], k = k || "toggle" === f, f === (F ? "hide" : "show")) {
                        if ("show" !== f || !B || void 0 === B[g]) continue;
                        F = !0
                    }
                    x[g] = B && B[g] || e.style(a, g)
                } else l = void 0;
            if (e.isEmptyObject(x)) "inline" === ("none" === l ? fa(a.nodeName) : l) && (j.display = l);
            else
                for (g in B ? "hidden" in B && (F = B.hidden) : B = e._data(a, "fxshow", {}), k && (B.hidden = !F), F ? e(a).show() : i.done(function () {
                        e(a).hide()
                }), i.done(function () {
                        var b;
                        e._removeData(a, "fxshow");
                        for (b in x) e.style(a, b, x[b])
                }), x) b = Ub(F ? B[g] : 0, g, i), g in B || (B[g] = b.start, F && (b.end =
                b.start, b.start = "width" === g || "height" === g ? 1 : 0))
        }],
        prefilter: function (a, b) {
            b ? ka.prefilters.unshift(a) : ka.prefilters.push(a)
        }
    });
    e.speed = function (a, b, c) {
        var g = a && "object" == typeof a ? e.extend({}, a) : {
            complete: c || !c && b || e.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !e.isFunction(b) && b
        };
        return g.duration = e.fx.off ? 0 : "number" == typeof g.duration ? g.duration : g.duration in e.fx.speeds ? e.fx.speeds[g.duration] : e.fx.speeds._default, (null == g.queue || !0 === g.queue) && (g.queue = "fx"), g.old = g.complete, g.complete = function () {
            e.isFunction(g.old) &&
                g.old.call(this);
            g.queue && e.dequeue(this, g.queue)
        }, g
    };
    e.fn.extend({
        fadeTo: function (a, b, c, g) {
            return this.filter(ua).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, g)
        },
        animate: function (a, b, c, g) {
            var f = e.isEmptyObject(a),
                k = e.speed(b, c, g),
                b = function () {
                    var b = ka(this, e.extend({}, a), k);
                    (f || e._data(this, "finish")) && b.stop(!0)
                };
            return b.finish = b, f || !1 === k.queue ? this.each(b) : this.queue(k.queue, b)
        },
        stop: function (a, b, c) {
            var g = function (a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b =
                a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        f = null != a && a + "queueHooks",
                        k = e.timers,
                        d = e._data(this);
                    if (f) d[f] && d[f].stop && g(d[f]);
                    else
                        for (f in d) d[f] && d[f].stop && Od.test(f) && g(d[f]);
                    for (f = k.length; f--;) k[f].elem !== this || null != a && k[f].queue !== a || (k[f].anim.stop(c), b = !1, k.splice(f, 1));
                    (b || !c) && e.dequeue(this, a)
                })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var b, c = e._data(this),
                    g = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = e.timers,
                    k = g ? g.length : 0;
                c.finish = !0;
                e.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; k > b; b++) g[b] && g[b].finish && g[b].finish.call(this);
                delete c.finish
            })
        }
    });
    e.each(["toggle", "show", "hide"], function (a, b) {
        var c = e.fn[b];
        e.fn[b] = function (a, h, g) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(va(b, !0), a, h, g)
        }
    });
    e.each({
        slideDown: va("show"),
        slideUp: va("hide"),
        slideToggle: va("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        e.fn[a] = function (a, c, h) {
            return this.animate(b, a, c, h)
        }
    });
    e.timers = [];
    e.fx.tick = function () {
        var a, b = e.timers,
            c = 0;
        for (Cb = e.now() ; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || e.fx.stop();
        Cb = void 0
    };
    e.fx.timer = function (a) {
        e.timers.push(a);
        a() ? e.fx.start() : e.timers.pop()
    };
    e.fx.interval = 13;
    e.fx.start = function () {
        Ac || (Ac = d.setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.stop = function () {
        d.clearInterval(Ac);
        Ac = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fn.delay = function (a, b) {
        return a = e.fx ? e.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var g = d.setTimeout(b, a);
            c.stop = function () {
                d.clearTimeout(g)
            }
        })
    };
    var Bc, fb = D.createElement("input"),
        zb = D.createElement("div"),
        ld = D.createElement("select"),
        md = ld.appendChild(D.createElement("option")),
        zb = D.createElement("div");
    zb.setAttribute("className", "t");
    zb.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    zb.getElementsByTagName("a");
    fb.setAttribute("type", "checkbox");
    zb.appendChild(fb);
    Bc = zb.getElementsByTagName("a")[0];
    Bc.style.cssText = "top:1px";
    C.getSetAttribute = "t" !== zb.className;
    C.style = /top/.test(Bc.getAttribute("style"));
    C.hrefNormalized = "/a" === Bc.getAttribute("href");
    C.checkOn = !!fb.value;
    C.optSelected = md.selected;
    C.enctype = !!D.createElement("form").enctype;
    ld.disabled = !0;
    C.optDisabled = !md.disabled;
    fb = D.createElement("input");
    fb.setAttribute("value", "");
    C.input = "" === fb.getAttribute("value");
    fb.value = "t";
    fb.setAttribute("type", "radio");
    C.radioValue = "t" === fb.value;
    var Pd = /\r/g;
    e.fn.extend({
        val: function (a) {
            var b, c, g, f = this[0];
            if (arguments.length) return g = e.isFunction(a), this.each(function (c) {
                var f;
                1 === this.nodeType && (f = g ? a.call(this, c, e(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : e.isArray(f) && (f = e.map(f, function (a) {
                    return null == a ? "" : a + ""
                })), b = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, f, "value") || (this.value = f))
            });
            if (f) return b = e.valHooks[f.type] || e.valHooks[f.nodeName.toLowerCase()], b && "get" in b && void 0 !==
                (c = b.get(f, "value")) ? c : (c = f.value, "string" == typeof c ? c.replace(Pd, "") : null == c ? "" : c)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = e.find.attr(a, "value");
                    return null != b ? b : e.trim(e.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c = a.options, g = a.selectedIndex, f = "select-one" === a.type || 0 > g, k = f ? null : [], d = f ? g + 1 : c.length, m = 0 > g ? d : f ? g : 0; d > m; m++)
                        if (b = c[m], (b.selected || m === g) && (C.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !e.nodeName(b.parentNode, "optgroup"))) {
                            if (a =
                                e(b).val(), f) return a;
                            k.push(a)
                        }
                    return k
                },
                set: function (a, b) {
                    for (var c, g, f = a.options, k = e.makeArray(b), d = f.length; d--;)
                        if (g = f[d], 0 <= e.inArray(e.valHooks.option.get(g), k)) try {
                            g.selected = c = !0
                        } catch (m) {
                            g.scrollHeight
                        } else g.selected = !1;
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    });
    e.each(["radio", "checkbox"], function () {
        e.valHooks[this] = {
            set: function (a, b) {
                return e.isArray(b) ? a.checked = -1 < e.inArray(e(a).val(), b) : void 0
            }
        };
        C.checkOn || (e.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Qb, nd, gb = e.expr.attrHandle,
        Rc = /^(?:checked|selected)$/i,
        Ab = C.getSetAttribute,
        Cc = C.input;
    e.fn.extend({
        attr: function (a, b) {
            return qa(this, e.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function (a) {
            return this.each(function () {
                e.removeAttr(this, a)
            })
        }
    });
    e.extend({
        attr: function (a, b, c) {
            var g, f, k = a.nodeType;
            if (3 !== k && 8 !== k && 2 !== k) return "undefined" == typeof a.getAttribute ? e.prop(a, b, c) : (1 === k && e.isXMLDoc(a) || (b = b.toLowerCase(), f = e.attrHooks[b] || (e.expr.match.bool.test(b) ? nd : Qb)), void 0 !== c ? null === c ? void e.removeAttr(a,
                b) : f && "set" in f && void 0 !== (g = f.set(a, c, b)) ? g : (a.setAttribute(b, c + ""), c) : f && "get" in f && null !== (g = f.get(a, b)) ? g : (g = e.find.attr(a, b), null == g ? void 0 : g))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!C.radioValue && "radio" === b && e.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, g, f = 0,
                k = b && b.match(Ga);
            if (k && 1 === a.nodeType)
                for (; c = k[f++];) g = e.propFix[c] || c, e.expr.match.bool.test(c) ? Cc && Ab || !Rc.test(c) ? a[g] = !1 : a[e.camelCase("default-" + c)] = a[g] = !1 : e.attr(a, c, ""), a.removeAttribute(Ab ? c : g)
        }
    });
    nd = {
        set: function (a, b, c) {
            return !1 === b ? e.removeAttr(a, c) : Cc && Ab || !Rc.test(c) ? a.setAttribute(!Ab && e.propFix[c] || c, c) : a[e.camelCase("default-" + c)] = a[c] = !0, c
        }
    };
    e.each(e.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = gb[b] || e.find.attr;
        Cc && Ab || !Rc.test(b) ? gb[b] = function (a, b, g) {
            var f, h;
            return g || (h = gb[b], gb[b] = f, f = null != c(a, b, g) ? b.toLowerCase() : null, gb[b] = h), f
        } : gb[b] = function (a, b, c) {
            return c ? void 0 : a[e.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Cc && Ab || (e.attrHooks.value = {
        set: function (a, b, c) {
            return e.nodeName(a, "input") ? void (a.defaultValue = b) : Qb && Qb.set(a, b, c)
        }
    });
    Ab || (Qb = {
        set: function (a, b, c) {
            var g = a.getAttributeNode(c);
            return g || a.setAttributeNode(g = a.ownerDocument.createAttribute(c)), g.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, gb.id = gb.name = gb.coords = function (a, b, c) {
        var g;
        return c ? void 0 : (g = a.getAttributeNode(b)) && "" !== g.value ? g.value : null
    }, e.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ?
                c.value : void 0
        },
        set: Qb.set
    }, e.attrHooks.contenteditable = {
        set: function (a, b, c) {
            Qb.set(a, "" === b ? !1 : b, c)
        }
    }, e.each(["width", "height"], function (a, b) {
        e.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    }));
    C.style || (e.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Qd = /^(?:input|select|textarea|button|object)$/i,
        Rd = /^(?:a|area)$/i;
    e.fn.extend({
        prop: function (a, b) {
            return qa(this, e.prop, a, b, 1 < arguments.length)
        },
        removeProp: function (a) {
            return a = e.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) { }
            })
        }
    });
    e.extend({
        prop: function (a, b, c) {
            var g, f, k = a.nodeType;
            if (3 !== k && 8 !== k && 2 !== k) return 1 === k && e.isXMLDoc(a) || (b = e.propFix[b] || b, f = e.propHooks[b]), void 0 !== c ? f && "set" in f && void 0 !== (g = f.set(a, c, b)) ? g : a[b] = c : f && "get" in f && null !== (g = f.get(a, b)) ? g : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = e.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Qd.test(a.nodeName) || Rd.test(a.nodeName) && a.href ?
                        0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    C.hrefNormalized || e.each(["href", "src"], function (a, b) {
        e.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    C.optSelected || (e.propHooks.selected = {
        get: function (a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        e.propFix[this.toLowerCase()] = this
    });
    C.enctype ||
        (e.propFix.enctype = "encoding");
    var Sc = /[\t\r\n\f]/g;
    e.fn.extend({
        addClass: function (a) {
            var b, c, g, f, k, d, m = 0;
            if (e.isFunction(a)) return this.each(function (b) {
                e(this).addClass(a.call(this, b, Oa(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(Ga) || []; c = this[m++];)
                    if (f = Oa(c), g = 1 === c.nodeType && (" " + f + " ").replace(Sc, " ")) {
                        for (d = 0; k = b[d++];) 0 > g.indexOf(" " + k + " ") && (g += k + " ");
                        g = e.trim(g);
                        f !== g && e.attr(c, "class", g)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, g, f, k, d, m = 0;
            if (e.isFunction(a)) return this.each(function (b) {
                e(this).removeClass(a.call(this,
                    b, Oa(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(Ga) || []; c = this[m++];)
                    if (f = Oa(c), g = 1 === c.nodeType && (" " + f + " ").replace(Sc, " ")) {
                        for (d = 0; k = b[d++];)
                            for (; -1 < g.indexOf(" " + k + " ") ;) g = g.replace(" " + k + " ", " ");
                        g = e.trim(g);
                        f !== g && e.attr(c, "class", g)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : e.isFunction(a) ? this.each(function (c) {
                e(this).toggleClass(a.call(this, c,
                    Oa(this), b), b)
            }) : this.each(function () {
                var b, g, f, k;
                if ("string" === c) {
                    g = 0;
                    f = e(this);
                    for (k = a.match(Ga) || []; b = k[g++];) f.hasClass(b) ? f.removeClass(b) : f.addClass(b)
                } else (void 0 === a || "boolean" === c) && (b = Oa(this), b && e._data(this, "__className__", b), e.attr(this, "class", b || !1 === a ? "" : e._data(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            for (var b, c = 0, a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + Oa(b) + " ").replace(Sc, " ").indexOf(a)) return !0;
            return !1
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, b) {
            e.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
    e.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Sd = d.location,
        Tc = e.now(),
        Uc = /\?/,
        Td = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    e.parseJSON = function (a) {
        if (d.JSON && d.JSON.parse) return d.JSON.parse(a + "");
        var b, c = null,
            g = e.trim(a + "");
        return g && !e.trim(g.replace(Td, function (a, g, f, h) {
            return b &&
                g && (c = 0), 0 === c ? a : (b = f || g, c += !h - !f, "")
        })) ? Function("return " + g)() : e.error("Invalid JSON: " + a)
    };
    e.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            d.DOMParser ? (c = new d.DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new d.ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
        } catch (g) {
            b = void 0
        }
        return b && b.documentElement && !b.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + a), b
    };
    var Ud = /#.*$/,
        od = /([?&])_=[^&]*/,
        Vd = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wd =
        /^(?:GET|HEAD)$/,
        Xd = /^\/\//,
        pd = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qd = {},
        Gc = {},
        rd = "*/".concat("*"),
        Vc = Sd.href,
        Rb = pd.exec(Vc.toLowerCase()) || [];
    e.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Vc,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Rb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": rd,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Db(Db(a, e.ajaxSettings), b) : Db(e.ajaxSettings, a)
        },
        ajaxPrefilter: qb(qd),
        ajaxTransport: qb(Gc),
        ajax: function (a, b) {
            function c(a, b, g, f) {
                var h, x, J, ua, ea = b;
                if (2 !== z) {
                    z = 2;
                    l && d.clearTimeout(l);
                    i = void 0;
                    m = f || "";
                    p.readyState = 0 < a ? 4 : 0;
                    f = 200 <= a && 300 > a || 304 === a;
                    if (g) {
                        J = j;
                        for (var qa = p, I, q, u, L, N = J.contents, Y = J.dataTypes;
                            "*" === Y[0];) Y.shift(), void 0 === q && (q = J.mimeType || qa.getResponseHeader("Content-Type"));
                        if (q)
                            for (L in N)
                                if (N[L] && N[L].test(q)) {
                                    Y.unshift(L);
                                    break
                                }
                        if (Y[0] in g) u = Y[0];
                        else {
                            for (L in g) {
                                if (!Y[0] || J.converters[L + " " + Y[0]]) {
                                    u = L;
                                    break
                                }
                                I || (I = L)
                            }
                            u = u || I
                        }
                        J = u ? (u !== Y[0] && Y.unshift(u), g[u]) : void 0
                    }
                    var ga;
                    a: {
                        g = j;
                        I = J;
                        q = p;
                        u = f;
                        var W, A, y;
                        J = {};
                        qa = g.dataTypes.slice();
                        if (qa[1])
                            for (W in g.converters) J[W.toLowerCase()] =
                                g.converters[W];
                        for (L = qa.shift() ; L;)
                            if (g.responseFields[L] && (q[g.responseFields[L]] = I), !y && u && g.dataFilter && (I = g.dataFilter(I, g.dataType)), y = L, L = qa.shift())
                                if ("*" === L) L = y;
                                else if ("*" !== y && y !== L) {
                                    if (W = J[y + " " + L] || J["* " + L], !W)
                                        for (ga in J)
                                            if (A = ga.split(" "), A[1] === L && (W = J[y + " " + A[0]] || J["* " + A[0]])) {
                                                !0 === W ? W = J[ga] : !0 !== J[ga] && (L = A[0], qa.unshift(A[1]));
                                                break
                                            }
                                    if (!0 !== W)
                                        if (W && g["throws"]) I = W(I);
                                        else try {
                                            I = W(I)
                                        } catch (Sb) {
                                            ga = {
                                                state: "parsererror",
                                                error: W ? Sb : "No conversion from " + y + " to " + L
                                            };
                                            break a
                                        }
                                }
                        ga = {
                            state: "success",
                            data: I
                        }
                    }
                    J = ga;
                    f ? (j.ifModified && (ua = p.getResponseHeader("Last-Modified"), ua && (e.lastModified[k] = ua), ua = p.getResponseHeader("etag"), ua && (e.etag[k] = ua)), 204 === a || "HEAD" === j.type ? ea = "nocontent" : 304 === a ? ea = "notmodified" : (ea = J.state, h = J.data, x = J.error, f = !x)) : (x = ea, (a || !ea) && (ea = "error", 0 > a && (a = 0)));
                    p.status = a;
                    p.statusText = (b || ea) + "";
                    f ? o.resolveWith(F, [h, ea, p]) : o.rejectWith(F, [p, ea, x]);
                    p.statusCode(n);
                    n = void 0;
                    r && B.trigger(f ? "ajaxSuccess" : "ajaxError", [p, j, f ? h : x]);
                    t.fireWith(F, [p, ea]);
                    r && (B.trigger("ajaxComplete", [p, j]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            var b = b || {},
                g, f, k, m, l, r, i, x, j = e.ajaxSetup({}, b),
                F = j.context || j,
                B = j.context && (F.nodeType || F.jquery) ? e(F) : e.event,
                o = e.Deferred(),
                t = e.Callbacks("once memory"),
                n = j.statusCode || {},
                ua = {},
                ea = {},
                z = 0,
                qa = "canceled",
                p = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === z) {
                            if (!x)
                                for (x = {}; b = Vd.exec(m) ;) x[b[1].toLowerCase()] = b[2];
                            b = x[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === z ? m : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return z || (a = ea[c] = ea[c] || a, ua[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return z || (j.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > z)
                                for (b in a) n[b] = [n[b], a[b]];
                            else p.always(a[p.status]);
                        return this
                    },
                    abort: function (a) {
                        a = a || qa;
                        return i && i.abort(a), c(0, a), this
                    }
                };
            if (o.promise(p).complete = t.add, p.success = p.done, p.error = p.fail, j.url = ((a || j.url || Vc) + "").replace(Ud, "").replace(Xd, Rb[1] + "//"), j.type = b.method || b.type || j.method || j.type, j.dataTypes =
                e.trim(j.dataType || "*").toLowerCase().match(Ga) || [""], null == j.crossDomain && (g = pd.exec(j.url.toLowerCase()), j.crossDomain = !(!g || g[1] === Rb[1] && g[2] === Rb[2] && (g[3] || ("http:" === g[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), j.data && j.processData && "string" != typeof j.data && (j.data = e.param(j.data, j.traditional)), Vb(qd, j, b, p), 2 === z) return p;
            (r = e.event && j.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
            j.type = j.type.toUpperCase();
            j.hasContent = !Wd.test(j.type);
            k = j.url;
            j.hasContent || (j.data &&
                (k = j.url += (Uc.test(k) ? "&" : "?") + j.data, delete j.data), !1 === j.cache && (j.url = od.test(k) ? k.replace(od, "$1_=" + Tc++) : k + (Uc.test(k) ? "&" : "?") + "_=" + Tc++));
            j.ifModified && (e.lastModified[k] && p.setRequestHeader("If-Modified-Since", e.lastModified[k]), e.etag[k] && p.setRequestHeader("If-None-Match", e.etag[k]));
            (j.data && j.hasContent && !1 !== j.contentType || b.contentType) && p.setRequestHeader("Content-Type", j.contentType);
            p.setRequestHeader("Accept", j.dataTypes[0] && j.accepts[j.dataTypes[0]] ? j.accepts[j.dataTypes[0]] + ("*" !==
                j.dataTypes[0] ? ", " + rd + "; q=0.01" : "") : j.accepts["*"]);
            for (f in j.headers) p.setRequestHeader(f, j.headers[f]);
            if (j.beforeSend && (!1 === j.beforeSend.call(F, p, j) || 2 === z)) return p.abort();
            qa = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) p[f](j[f]);
            if (i = Vb(Gc, j, b, p)) {
                if (p.readyState = 1, r && B.trigger("ajaxSend", [p, j]), 2 === z) return p;
                j.async && 0 < j.timeout && (l = d.setTimeout(function () {
                    p.abort("timeout")
                }, j.timeout));
                try {
                    z = 1, i.send(ua, c)
                } catch (I) {
                    if (!(2 > z)) throw I;
                    c(-1, I)
                }
            } else c(-1, "No Transport");
            return p
        },
        getJSON: function (a,
            b, c) {
            return e.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return e.get(a, void 0, b, "script")
        }
    });
    e.each(["get", "post"], function (a, b) {
        e[b] = function (a, c, g, f) {
            return e.isFunction(c) && (f = f || g, g = c, c = void 0), e.ajax(e.extend({
                url: a,
                type: b,
                dataType: f,
                data: c,
                success: g
            }, e.isPlainObject(a) && a))
        }
    });
    e._evalUrl = function (a) {
        return e.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    e.fn.extend({
        wrapAll: function (a) {
            if (e.isFunction(a)) return this.each(function (b) {
                e(this).wrapAll(a.call(this,
                    b))
            });
            if (this[0]) {
                var b = e(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return e.isFunction(a) ? this.each(function (b) {
                e(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = e(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = e.isFunction(a);
            return this.each(function (c) {
                e(this).wrapAll(b ?
                    a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    e.expr.filters.hidden = function (a) {
        if (C.reliableHiddenOffsets()) a = 0 >= a.offsetWidth && 0 >= a.offsetHeight && !a.getClientRects().length;
        else a: {
            for (; a && 1 === a.nodeType;) {
                if ("none" === (a.style && a.style.display || e.css(a, "display")) || "hidden" === a.type) {
                    a = !0;
                    break a
                }
                a = a.parentNode
            }
            a = !1
        }
        return a
    };
    e.expr.filters.visible = function (a) {
        return !e.expr.filters.hidden(a)
    };
    var Yd = /%20/g,
        Dd = /\[\]$/,
        sd = /\r?\n/g,
        Zd = /^(?:submit|button|image|reset|file)$/i,
        $d = /^(?:input|select|textarea|keygen)/i;
    e.param = function (a, b) {
        var c, g = [],
            f = function (a, b) {
                b = e.isFunction(b) ? b() : null == b ? "" : b;
                g[g.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = e.ajaxSettings && e.ajaxSettings.traditional), e.isArray(a) || a.jquery && !e.isPlainObject(a)) e.each(a, function () {
            f(this.name, this.value)
        });
        else
            for (c in a) Eb(c, a[c], b, f);
        return g.join("&").replace(Yd, "+")
    };
    e.fn.extend({
        serialize: function () {
            return e.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = e.prop(this, "elements");
                return a ? e.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !e(this).is(":disabled") && $d.test(this.nodeName) && !Zd.test(a) && (this.checked || !Sb.test(a))
            }).map(function (a, b) {
                var c = e(this).val();
                return null == c ? null : e.isArray(c) ? e.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(sd, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(sd, "\r\n")
                }
            }).get()
        }
    });
    e.ajaxSettings.xhr = void 0 !== d.ActiveXObject ? function () {
        return this.isLocal ?
            Wb() : 8 < D.documentMode ? ib() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ib() || Wb()
    } : ib;
    var ae = 0,
        Dc = {},
        Ec = e.ajaxSettings.xhr();
    d.attachEvent && d.attachEvent("onunload", function () {
        for (var a in Dc) Dc[a](void 0, !0)
    });
    C.cors = !!Ec && "withCredentials" in Ec;
    (Ec = C.ajax = !!Ec) && e.ajaxTransport(function (a) {
        if (!a.crossDomain || C.cors) {
            var b;
            return {
                send: function (c, g) {
                    var f, k = a.xhr(),
                        m = ++ae;
                    if (k.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (f in a.xhrFields) k[f] = a.xhrFields[f];
                    a.mimeType &&
                        k.overrideMimeType && k.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (f in c) void 0 !== c[f] && k.setRequestHeader(f, c[f] + "");
                    k.send(a.hasContent && a.data || null);
                    b = function (c, f) {
                        var d, l, r;
                        if (b && (f || 4 === k.readyState))
                            if (delete Dc[m], b = void 0, k.onreadystatechange = e.noop, f) 4 !== k.readyState && k.abort();
                            else {
                                r = {};
                                d = k.status;
                                "string" == typeof k.responseText && (r.text = k.responseText);
                                try {
                                    l = k.statusText
                                } catch (j) {
                                    l = ""
                                }
                                d || !a.isLocal || a.crossDomain ? 1223 ===
                                    d && (d = 204) : d = r.text ? 200 : 404
                            }
                        r && g(d, l, r, k.getAllResponseHeaders())
                    };
                    a.async ? 4 === k.readyState ? d.setTimeout(b) : k.onreadystatechange = Dc[m] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    e.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return e.globalEval(a), a
            }
        }
    });
    e.ajaxPrefilter("script",
        function (a) {
            void 0 === a.cache && (a.cache = !1);
            a.crossDomain && (a.type = "GET", a.global = !1)
        });
    e.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = D.head || e("head")[0] || D.documentElement;
            return {
                send: function (g, f) {
                    b = D.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c ||
                            f(200, "success"))
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var td = [],
        Wc = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = td.pop() || e.expando + "_" + Tc++;
            return this[a] = !0, a
        }
    });
    e.ajaxPrefilter("json jsonp", function (a, b, c) {
        var g, f, k, m = !1 !== a.jsonp && (Wc.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Wc.test(a.data) && "data");
        return m || "jsonp" === a.dataTypes[0] ? (g = a.jsonpCallback =
            e.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, m ? a[m] = a[m].replace(Wc, "$1" + g) : !1 !== a.jsonp && (a.url += (Uc.test(a.url) ? "&" : "?") + a.jsonp + "=" + g), a.converters["script json"] = function () {
                return k || e.error(g + " was not called"), k[0]
            }, a.dataTypes[0] = "json", f = d[g], d[g] = function () {
                k = arguments
            }, c.always(function () {
                void 0 === f ? e(d).removeProp(g) : d[g] = f;
                a[g] && (a.jsonpCallback = b.jsonpCallback, td.push(g));
                k && e.isFunction(f) && f(k[0]);
                k = f = void 0
            }), "script") : void 0
    });
    var be = C,
        Xc;
    if (D.implementation.createHTMLDocument) {
        var ud =
            D.implementation.createHTMLDocument("");
        Xc = (ud.body.innerHTML = "<form></form><form></form>", 2 === ud.body.childNodes.length)
    } else Xc = !1;
    be.createHTMLDocument = Xc;
    e.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1);
        var b = b || (C.createHTMLDocument ? D.implementation.createHTMLDocument("") : D),
            g = yb.exec(a),
            c = !c && [];
        return g ? [b.createElement(g[1])] : (g = i([a], b, c), c && c.length && e(c).remove(), e.merge([], g.childNodes))
    };
    var vd = e.fn.load;
    e.fn.load = function (a, b, c) {
        if ("string" !=
            typeof a && vd) return vd.apply(this, arguments);
        var g, f, k, d = this,
            m = a.indexOf(" ");
        return -1 < m && (g = e.trim(a.slice(m, a.length)), a = a.slice(0, m)), e.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), 0 < d.length && e.ajax({
            url: a,
            type: f || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            k = arguments;
            d.html(g ? e("<div>").append(e.parseHTML(a)).find(g) : a)
        }).always(c && function (a, b) {
            d.each(function () {
                c.apply(d, k || [a.responseText, b, a])
            })
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function (a, b) {
            e.fn[b] = function (a) {
                return this.on(b, a)
            }
        });
    e.expr.filters.animated = function (a) {
        return e.grep(e.timers, function (b) {
            return a === b.elem
        }).length
    };
    e.offset = {
        setOffset: function (a, b, c) {
            var g, f, k, d, m, l, r = e.css(a, "position"),
                j = e(a),
                i = {};
            "static" === r && (a.style.position = "relative");
            m = j.offset();
            k = e.css(a, "top");
            l = e.css(a, "left");
            ("absolute" === r || "fixed" === r) && -1 < e.inArray("auto", [k, l]) ? (g = j.position(), d = g.top, f = g.left) : (d = parseFloat(k) || 0, f = parseFloat(l) || 0);
            e.isFunction(b) && (b = b.call(a, c, e.extend({},
                m)));
            null != b.top && (i.top = b.top - m.top + d);
            null != b.left && (i.left = b.left - m.left + f);
            "using" in b ? b.using.call(a, i) : j.css(i)
        }
    };
    e.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                e.offset.setOffset(this, a, b)
            });
            var b, c, g = {
                top: 0,
                left: 0
            },
                f = this[0],
                k = f && f.ownerDocument;
            if (k) return b = k.documentElement, e.contains(b, f) ? ("undefined" != typeof f.getBoundingClientRect && (g = f.getBoundingClientRect()), c = jb(k), {
                top: g.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: g.left +
                    (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : g
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                    g = this[0];
                return "fixed" === e.css(g, "position") ? b = g.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), e.nodeName(a[0], "html") || (c = a.offset()), c.top += e.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += e.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - c.top - e.css(g, "marginTop", !0),
                    left: b.left - c.left - e.css(g, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a =
                        this.offsetParent; a && !e.nodeName(a, "html") && "static" === e.css(a, "position") ;) a = a.offsetParent;
                return a || jd
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        e.fn[a] = function (g) {
            return qa(this, function (a, g, f) {
                var k = jb(a);
                return void 0 === f ? k ? b in k ? k[b] : k.document.documentElement[g] : a[g] : void (k ? k.scrollTo(c ? e(k).scrollLeft() : f, c ? f : e(k).scrollTop()) : a[g] = f)
            }, a, g, arguments.length, null)
        }
    });
    e.each(["top", "left"], function (a, b) {
        e.cssHooks[b] = ra(C.pixelPosition,
            function (a, c) {
                return c ? (c = hb(a, b), ic.test(c) ? e(a).position()[b] + "px" : c) : void 0
            })
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        e.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, g) {
            e.fn[g] = function (g, f) {
                var k = arguments.length && (c || "boolean" != typeof g),
                    d = c || (!0 === g || !0 === f ? "margin" : "border");
                return qa(this, function (b, c, g) {
                    var f;
                    return e.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" +
                        a], f["offset" + a], f["client" + a])) : void 0 === g ? e.css(b, c, d) : e.style(b, c, g, d)
                }, b, k ? g : void 0, k, null)
            }
        })
    });
    e.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, g) {
            return this.on(b, a, c, g)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    e.fn.size = function () {
        return this.length
    };
    e.fn.andSelf = e.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return e
    });
    var ce = d.jQuery,
        de = d.$;
    return e.noConflict = function (a) {
        return d.$ === e && (d.$ = de), a && d.jQuery === e && (d.jQuery = ce), e
    }, G || (d.jQuery = d.$ = e), e
});
var XRegExp;
XRegExp = XRegExp || function (d) {
    function G(d, j, i) {
        for (var o in E.prototype) E.prototype.hasOwnProperty(o) && (d[o] = E.prototype[o]);
        return d.xregexp = {
            captureNames: j,
            isNative: !!i
        }, d
    }

    function q(d) {
        return (d.global ? "g" : "") + (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.extended ? "x" : "") + (d.sticky ? "y" : "")
    }

    function n(d, j, i) {
        if (!E.isRegExp(d)) throw new TypeError("type RegExp expected");
        j = p.replace.call(q(d) + (j || ""), Y, "");
        return i && (j = p.replace.call(j, RegExp("[" + i + "]+", "g"), "")), d.xregexp && !d.xregexp.isNative ? G(E(d.source,
            j), d.xregexp.captureNames ? d.xregexp.captureNames.slice(0) : null) : G(RegExp(d.source, j), null, !0)
    }

    function s(d, j) {
        var i = d.length;
        if (Array.prototype.lastIndexOf) return d.lastIndexOf(j);
        for (; i--;)
            if (d[i] === j) return i;
        return -1
    }

    function H(d, j) {
        return Object.prototype.toString.call(d).toLowerCase() === "[object " + j + "]"
    }

    function v(d) {
        return d = d || {}, "all" === d || d.all ? d = {
            natives: !0,
            extensibility: !0
        } : H(d, "string") && (d = E.forEach(d, /[^\s,]+/, function (d) {
            this[d] = !0
        }, {})), d
    }

    function P(d) {
        E.addToken = U[d ? "on" : "off"];
        w.extensibility =
            d
    }

    function V(d) {
        RegExp.prototype.exec = (d ? j : p).exec;
        RegExp.prototype.test = (d ? j : p).test;
        String.prototype.match = (d ? j : p).match;
        String.prototype.replace = (d ? j : p).replace;
        String.prototype.split = (d ? j : p).split;
        w.natives = d
    }
    var E, U, M, w = {
        natives: !1,
        extensibility: !1
    },
        p = {
            exec: RegExp.prototype.exec,
            test: RegExp.prototype.test,
            match: String.prototype.match,
            replace: String.prototype.replace,
            split: String.prototype.split
        },
        j = {},
        o = {},
        i = [],
        t = {
            "default": /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,
            "class": /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/
        },
        I = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,
        Y = /([\s\S])(?=[\s\S]*\1)/g,
        u = /^(?:[?*+]|{\d+(?:,\d*)?})\??/,
        ma = p.exec.call(/()??/, "")[1] === d,
        y = RegExp.prototype.sticky !== d,
        Da = !1,
        S = "gim" + (y ? "y" : "");
    return E = function (B, o) {
        if (E.isRegExp(B)) {
            if (o !== d) throw new TypeError("can't supply flags when constructing one RegExp from another");
            return n(B)
        }
        if (Da) throw Error("can't call the XRegExp constructor within token definition functions");
        var I = [],
            q = "default",
            u = {
                hasNamedCapture: !1,
                captureNames: [],
                hasFlag: function (d) {
                    return -1 < o.indexOf(d)
                }
            },
            y = 0,
            s, W, w;
        if (B = B === d ? "" : String(B), o = o === d ? "" : String(o), p.match.call(o, Y)) throw new SyntaxError("invalid duplicate regular expression flag");
        B = p.replace.call(B, /^\(\?([\w$]+)\)/, function (d, j) {
            if (p.test.call(/[gy]/, j)) throw new SyntaxError("can't use flag g or y in mode modifier");
            return o = p.replace.call(o + j, Y, ""), ""
        });
        for (E.forEach(o, /[\s\S]/, function (d) {
                if (0 > S.indexOf(d[0])) throw new SyntaxError("invalid regular expression flag " +
                    d[0]);
        }) ; y < B.length;) {
            s = B;
            var ma = y,
                v = q,
                H = u,
                va = i.length,
                M = null,
                ka = void 0,
                P = void 0;
            Da = !0;
            try {
                for (; va--;)
                    if (P = i[va], ("all" === P.scope || P.scope === v) && (!P.trigger || P.trigger.call(H)) && (P.pattern.lastIndex = ma, ka = j.exec.call(P.pattern, s), ka && ka.index === ma)) {
                        M = {
                            output: P.handler.call(H, ka, v),
                            match: ka
                        };
                        break
                    }
            } catch (U) {
                throw U;
            } finally {
                Da = !1
            } (s = M) ? (I.push(s.output), y += s.match[0].length || 1) : (W = p.exec.call(t[q], B.slice(y)), W ? (I.push(W[0]), y += W[0].length) : (w = B.charAt(y), "[" === w ? q = "class" : "]" === w && (q = "default"),
                I.push(w), ++y))
        }
        return G(RegExp(I.join(""), p.replace.call(o, /[^gimy]+/g, "")), u.hasNamedCapture ? u.captureNames : null)
    }, U = {
        on: function (d, j, o) {
            o = o || {};
            d && i.push({
                pattern: n(d, "g" + (y ? "y" : "")),
                handler: j,
                scope: o.scope || "default",
                trigger: o.trigger || null
            });
            o.customFlags && (S = p.replace.call(S + o.customFlags, Y, ""))
        },
        off: function () {
            throw Error("extensibility must be installed before using addToken");
        }
    }, E.addToken = U.off, E.cache = function (d, j) {
        var i = d + "/" + (j || "");
        return o[i] || (o[i] = E(d, j))
    }, E.escape = function (d) {
        return p.replace.call(d,
            /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, E.exec = function (d, i, o, t) {
        var p = n(i, "g" + (t && y ? "y" : ""), !1 === t ? "y" : ""),
            I;
        return p.lastIndex = o = o || 0, I = j.exec.call(p, d), t && I && I.index !== o && (I = null), i.global && (i.lastIndex = I ? p.lastIndex : 0), I
    }, E.forEach = function (d, j, i, o) {
        for (var t = 0, n = -1; t = E.exec(d, j, t) ;) i.call(o, t, ++n, d, j), t = t.index + (t[0].length || 1);
        return o
    }, E.globalize = function (d) {
        return n(d, "g")
    }, E.install = function (d) {
        d = v(d);
        !w.natives && d.natives && V(!0);
        !w.extensibility && d.extensibility && P(!0)
    }, E.isInstalled = function (d) {
        return !!w[d]
    },
        E.isRegExp = function (d) {
            return H(d, "regexp")
        }, E.matchChain = function (d, j) {
            return function fa(d, i) {
                for (var o = j[i].regex ? j[i] : {
                    regex: j[i]
                }, t = [], B = function (d) {
                        t.push(o.backref ? d[o.backref] || "" : d[0])
                }, n = 0; n < d.length; ++n) E.forEach(d[n], o.regex, B);
                return i === j.length - 1 || !t.length ? t : fa(t, i + 1)
            }([d], 0)
        }, E.replace = function (i, o, t, p) {
            var I = E.isRegExp(o),
                q = o,
                u;
            return I ? (p === d && o.global && (p = "all"), q = n(o, "all" === p ? "g" : "", "all" === p ? "" : "g")) : "all" === p && (q = RegExp(E.escape(String(o)), "g")), u = j.replace.call(String(i),
                q, t), I && o.global && (o.lastIndex = 0), u
        }, E.split = function (d, i, o) {
            return j.split.call(d, i, o)
        }, E.test = function (d, j, i, o) {
            return !!E.exec(d, j, i, o)
        }, E.uninstall = function (d) {
            d = v(d);
            w.natives && d.natives && V(!1);
            w.extensibility && d.extensibility && P(!1)
        }, E.union = function (d, j) {
            var i = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,
                o = 0,
                t, n, p = function (d, j, i) {
                    var p = n[o - t];
                    if (j) {
                        if (++o, p) return "(?<" + p + ">"
                    } else if (i) return "\\" + (+i + t);
                    return d
                },
                I = [],
                q, u;
            if (!H(d, "array") || !d.length) throw new TypeError("patterns must be a nonempty array");
            for (u = 0; u < d.length; ++u) q = d[u], E.isRegExp(q) ? (t = o, n = q.xregexp && q.xregexp.captureNames || [], I.push(E(q.source).source.replace(i, p))) : I.push(E.escape(q));
            return E(I.join("|"), j)
        }, E.version = "2.0.0", j.exec = function (j) {
            var i, o, t, n;
            if (this.global || (t = this.lastIndex), i = p.exec.apply(this, arguments), i) {
                if (!ma && 1 < i.length && -1 < s(i, "") && (o = RegExp(this.source, p.replace.call(q(this), "g", "")), p.replace.call(String(j).slice(i.index), o, function () {
                        for (var j = 1; j < arguments.length - 2; ++j) arguments[j] === d && (i[j] = d)
                })), this.xregexp &&
                    this.xregexp.captureNames)
                    for (n = 1; n < i.length; ++n) (o = this.xregexp.captureNames[n - 1]) && (i[o] = i[n]);
                this.global && !i[0].length && this.lastIndex > i.index && (this.lastIndex = i.index)
            }
            return this.global || (this.lastIndex = t), i
        }, j.test = function (d) {
            return !!j.exec.call(this, d)
        }, j.match = function (d) {
            if (E.isRegExp(d)) {
                if (d.global) {
                    var i = p.match.apply(this, arguments);
                    return d.lastIndex = 0, i
                }
            } else d = RegExp(d);
            return j.exec.call(d, this)
        }, j.replace = function (d, j) {
            var i = E.isRegExp(d),
                o, t, n, q;
            return i ? (d.xregexp && (o = d.xregexp.captureNames),
                d.global || (q = d.lastIndex)) : d += "", H(j, "function") ? t = p.replace.call(String(this), d, function () {
                    var t = arguments,
                        n;
                    if (o) {
                        t[0] = new String(t[0]);
                        for (n = 0; n < o.length; ++n) o[n] && (t[0][o[n]] = t[n + 1])
                    }
                    return i && d.global && (d.lastIndex = t[t.length - 2] + t[0].length), j.apply(null, t)
                }) : (n = String(this), t = p.replace.call(n, d, function () {
                    var d = arguments;
                    return p.replace.call(String(j), I, function (j, i, t) {
                        var n;
                        if (i) {
                            if (n = +i, n <= d.length - 3) return d[n] || "";
                            if (n = o ? s(o, i) : -1, 0 > n) throw new SyntaxError("backreference to undefined group " +
                                j);
                            return d[n + 1] || ""
                        }
                        if ("$" === t) return "$";
                        if ("&" === t || 0 == +t) return d[0];
                        if ("`" === t) return d[d.length - 1].slice(0, d[d.length - 2]);
                        if ("'" === t) return d[d.length - 1].slice(d[d.length - 2] + d[0].length);
                        if (t = +t, !isNaN(t)) {
                            if (t > d.length - 3) throw new SyntaxError("backreference to undefined group " + j);
                            return d[t] || ""
                        }
                        throw new SyntaxError("invalid token " + j);
                    })
                })), i && (d.lastIndex = d.global ? 0 : q), t
        }, j.split = function (j, i) {
            if (!E.isRegExp(j)) return p.split.apply(this, arguments);
            var o = String(this),
                t = j.lastIndex,
                n = [],
                I =
                0,
                q;
            return i = (i === d ? -1 : i) >>> 0, E.forEach(o, j, function (d) {
                d.index + d[0].length > I && (n.push(o.slice(I, d.index)), 1 < d.length && d.index < o.length && Array.prototype.push.apply(n, d.slice(1)), q = d[0].length, I = d.index + q)
            }), I === o.length ? (!p.test.call(j, "") || q) && n.push("") : n.push(o.slice(I)), j.lastIndex = t, n.length > i ? n.slice(0, i) : n
        }, M = U.on, M(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/, function (d, j) {
            if ("B" === d[1] && "default" === j) return d[0];
            throw new SyntaxError("invalid escape " +
                d[0]);
        }, {
            scope: "all"
        }), M(/\[(\^?)]/, function (d) {
            return d[1] ? "[\\s\\S]" : "\\b\\B"
        }), M(/(?:\(\?#[^)]*\))+/, function (d) {
            return p.test.call(u, d.input.slice(d.index + d[0].length)) ? "" : "(?:)"
        }), M(/\\k<([\w$]+)>/, function (d) {
            var j = isNaN(d[1]) ? s(this.captureNames, d[1]) + 1 : +d[1],
                i = d.index + d[0].length;
            if (!j || j > this.captureNames.length) throw new SyntaxError("backreference to undefined group " + d[0]);
            return "\\" + j + (i === d.input.length || isNaN(d.input.charAt(i)) ? "" : "(?:)")
        }), M(/(?:\s+|#.*)+/, function (d) {
            return p.test.call(u,
                d.input.slice(d.index + d[0].length)) ? "" : "(?:)"
        }, {
            trigger: function () {
                return this.hasFlag("x")
            },
            customFlags: "x"
        }), M(/\./, function () {
            return "[\\s\\S]"
        }, {
            trigger: function () {
                return this.hasFlag("s")
            },
            customFlags: "s"
        }), M(/\(\?P?<([\w$]+)>/, function (d) {
            if (!isNaN(d[1])) throw new SyntaxError("can't use integer as capture name " + d[0]);
            return this.captureNames.push(d[1]), this.hasNamedCapture = !0, "("
        }), M(/\\(\d+)/, function (d, j) {
            if (!("default" === j && /^[1-9]/.test(d[1]) && +d[1] <= this.captureNames.length) && "0" !== d[1]) throw new SyntaxError("can't use octal escape or backreference to undefined group " +
                d[0]);
            return d[0]
        }, {
            scope: "all"
        }), M(/\((?!\?)/, function () {
            return this.hasFlag("n") ? "(?:" : (this.captureNames.push(null), "(")
        }, {
            customFlags: "n"
        }), "undefined" != typeof exports && (exports.XRegExp = E), E
}();
if ("undefined" == typeof SyntaxHighlighter) var SyntaxHighlighter = function () {
    function d(d) {
        return d.split(/\r?\n/)
    }

    function G(d) {
        return 0 == d.indexOf("highlighter_") ? d : "highlighter_" + d
    }

    function q(d, o, i) {
        if (null == d) return null;
        var t = !0 != i ? d.childNodes : [d.parentNode],
            n = {
                "#": "id",
                ".": "className"
            }[o.substr(0, 1)] || "nodeName",
            p, u;
        p = "nodeName" != n ? o.substr(1) : o.toUpperCase();
        if (-1 != (d[n] || "").indexOf(p)) return d;
        d = 0;
        for (n = t.length; t && d < n && null == u; d++) u = q(t[d], o, i);
        return u
    }

    function n(d, o) {
        var i = {},
            t;
        for (t in d) i[t] =
            d[t];
        for (t in o) i[t] = o[t];
        return i
    }

    function s(d, o, i, t) {
        function n(d) {
            d = d || window.event;
            d.target || (d.target = d.srcElement, d.preventDefault = function () {
                this.returnValue = !1
            });
            i.call(t || window, d)
        }
        d.attachEvent ? d.attachEvent("on" + o, n) : d.addEventListener(o, n, !1)
    }

    function H(d, o) {
        var i = p.vars.discoveredBrushes,
            t = null;
        if (null == i) {
            var i = {},
                n;
            for (n in p.brushes) {
                var q = p.brushes[n],
                    t = q.aliases;
                if (null != t) {
                    q.brushName = n.toLowerCase();
                    for (var q = 0, u = t.length; q < u; q++) i[t[q]] = n
                }
            }
            p.vars.discoveredBrushes = i
        }
        t = p.brushes[i[d]];
        null == t && o && window.alert(p.config.strings.alert + (p.config.strings.noBrush + d));
        return t
    }

    function v(j, o) {
        for (var i = d(j), t = 0, n = i.length; t < n; t++) i[t] = o(i[t], t);
        return i.join("\r\n")
    }

    function P(d, o) {
        if (null == d || 0 == d.length || "\n" == d) return d;
        d = d.replace(/</g, "&lt;");
        d = d.replace(/ {2,}/g, function (d) {
            for (var j = "", o = 0, d = d.length; o < d - 1; o++) j += p.config.space;
            return j + " "
        });
        null != o && (d = v(d, function (d) {
            if (0 == d.length) return "";
            var j = "",
                d = d.replace(/^(&nbsp;| )+/, function (d) {
                    j = d;
                    return ""
                });
            return 0 == d.length ? j :
                j + '<code class="' + o + '">' + d + "</code>"
        }));
        return d
    }

    function V(d) {
        return d.replace(/^\s+|\s+$/g, "")
    }

    function E(d, o) {
        return d.index < o.index ? -1 : d.index > o.index ? 1 : d.length < o.length ? -1 : d.length > o.length ? 1 : 0
    }

    function U(d, o) {
        function i(d) {
            return d[0]
        }
        var t = null,
            n = [],
            q = o.func ? o.func : i;
        for (pos = 0; null != (t = XRegExp.exec(d, o.regex, pos)) ;) {
            var u = q(t, o);
            "string" == typeof u && (u = [new p.Match(u, t.index, o.css)]);
            n = n.concat(u);
            pos = t.index + t[0].length
        }
        return n
    }

    function M() {
        for (var d = document.getElementsByTagName("script"),
                o = [], i = 0, n = d.length; i < n; i++) "syntaxhighlighter" == d[i].type && o.push(d[i]);
        return o
    }

    function w(d) {
        var d = d.target,
            o = q(d, ".syntaxhighlighter", !0),
            d = q(d, ".container", !0),
            i = document.createElement("textarea");
        if (d && o && !q(d, "textarea")) {
            G(o.id); -1 == o.className.indexOf("source") && (o.className += " source");
            for (var n = d.childNodes, p = [], Y = 0, u = n.length; Y < u; Y++) p.push(n[Y].innerText || n[Y].textContent);
            p = p.join("\r");
            p = p.replace(/\u00a0/g, " ");
            i.appendChild(document.createTextNode(p));
            d.appendChild(i);
            i.focus();
            i.select();
            s(i, "blur", function () {
                i.parentNode.removeChild(i);
                o.className = o.className.replace("source", "")
            })
        }
    }
    "undefined" != typeof require && "undefined" == typeof XRegExp && (XRegExp = require("xregexp").XRegExp);
    var p = {
        defaults: {
            "class-name": "",
            "first-line": 1,
            "pad-line-numbers": !1,
            highlight: null,
            title: null,
            "smart-tabs": !0,
            "tab-size": 4,
            gutter: !0,
            toolbar: !0,
            "quick-code": !0,
            collapse: !1,
            "auto-links": !0,
            light: !1,
            unindent: !0,
            "html-script": !1
        },
        config: {
            space: "&nbsp;",
            useScriptTags: !0,
            bloggerMode: !1,
            stripBrs: !1,
            tagName: "pre",
            strings: {
                expandSource: "expand source",
                help: "?",
                alert: "SyntaxHighlighter\n\n",
                noBrush: "Can't find brush for: ",
                brushNotHtmlScript: "Brush wasn't configured for html-script option: ",
                aboutDialog: ""
            }
        },
        vars: {
            discoveredBrushes: null,
            highlighters: {}
        },
        brushes: {},
        regexLib: {
            multiLineCComments: XRegExp("/\\*.*?\\*/", "gs"),
            singleLineCComments: /\/\/.*$/gm,
            singleLinePerlComments: /#.*$/gm,
            doubleQuotedString: /"([^\\"\n]|\\.)*"/g,
            singleQuotedString: /'([^\\'\n]|\\.)*'/g,
            multiLineDoubleQuotedString: XRegExp('"([^\\\\"]|\\\\.)*"',
                "gs"),
            multiLineSingleQuotedString: XRegExp("'([^\\\\']|\\\\.)*'", "gs"),
            xmlComments: XRegExp("(&lt;|<)!--.*?--(&gt;|>)", "gs"),
            url: /\w+:\/\/[\w-.\/?%&=:@;#,]*/g,
            phpScriptTags: {
                left: /(&lt;|<)\?(?:=|php)?/g,
                right: /\?(&gt;|>)/g,
                eof: !0
            },
            aspScriptTags: {
                left: /(&lt;|<)%=?/g,
                right: /%(&gt;|>)/g
            },
            scriptScriptTags: {
                left: /(&lt;|<)\s*script.*?(&gt;|>)/gi,
                right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi
            }
        },
        toolbar: {
            getHtml: function (d) {
                function o(d, i) {
                    return p.toolbar.getButtonHtml(d, i, p.config.strings[i])
                }
                for (var i = '<div class="toolbar">',
                        n = p.toolbar.items, q = n.list, s = 0, u = q.length; s < u; s++) i = i + (n[q[s]].getHtml || o)(d, q[s]);
                return i + "</div>"
            },
            getButtonHtml: function (d, o, i) {
                return '<span><a href="#" class="toolbar_item command_' + o + " " + o + '">' + i + "</a></span>"
            },
            handler: function (d) {
                var o = d.target,
                    i = o.className || "",
                    o = q(o, ".syntaxhighlighter", true).id,
                    o = p.vars.highlighters[G(o)],
                    i = (i = /command_(\w+)/.exec(i)) ? i[1] : null;
                o && (i && p.toolbar.items[i] && p.toolbar.items[i].execute) && p.toolbar.items[i].execute(o);
                d.preventDefault()
            },
            items: {
                list: ["expandSource",
                    "language"
                ],
                expandSource: {
                    getHtml: function (d) {
                        if (d.getParam("collapse") != true) return "";
                        var o = d.getParam("title");
                        return p.toolbar.getButtonHtml(d, "expandSource", o ? o : p.config.strings.expandSource)
                    },
                    execute: function (d) {
                        d = document.getElementById(G(d.id));
                        d.className = d.className.replace("collapsed", "")
                    }
                },
                help: {
                    execute: function () {
                        var d;
                        d = "scrollbars=0" + (", left=" + (screen.width - 500) / 2 + ", top=" + (screen.height - 250) / 2 + ", width=500, height=250");
                        d = d.replace(/^,/, "");
                        d = window.open("", "_blank", d);
                        d.focus();
                        var o =
                            d.document;
                        o.write(p.config.strings.aboutDialog);
                        o.close();
                        d.focus()
                    }
                },
                language: {
                    getHtml: function (d) {
                        return d.langLabel ? p.toolbar.getButtonHtml(d, "lang", d.langLabel) : ""
                    }
                }
            }
        },
        findElements: function (d, o) {
            var i;
            if (o) i = [o];
            else {
                i = document.getElementsByTagName(p.config.tagName);
                for (var t = [], q = 0, s = i.length; q < s; q++) t.push(i[q]);
                i = t
            }
            t = [];
            p.config.useScriptTags && (i = i.concat(M()));
            if (i.length === 0) return t;
            q = 0;
            for (s = i.length; q < s; q++) {
                for (var u = i[q], w = d, y = i[q].className, v = void 0, S = {}, B = XRegExp("^\\[(?<values>(.*?))\\]$"),
                        v = 0, G = XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w%#-]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?", "g") ;
                    (v = XRegExp.exec(y, G, v)) != null;) {
                    var L = v.value.replace(/^['"]|['"]$/g, "");
                    if (L != null && B.test(L)) {
                        L = XRegExp.exec(L, B);
                        L = L.values.length > 0 ? L.values.split(/\s*,\s*/) : []
                    }
                    S[v.name] = L;
                    v = v.index + v[0].length
                } (B = y.match(/language-(.*)/)) ? S.brush = B[1] : y && y.indexOf("multiline") !== -1 && (S.brush = "text");
                u = {
                    target: u,
                    params: n(w, S)
                };
                u.params.brush != null && t.push(u)
            }
            return t
        },
        highlight: function (d, o) {
            var i = navigator.appVersion;
            if (!(i.indexOf("MSIE 8.") !== -1 || i.indexOf("MSIE 7.") !== -1 || i.indexOf("MSIE 6.") !== -1)) {
                var i = this.findElements(d, o),
                    n = null,
                    q = p.config;
                if (i.length !== 0)
                    for (var s = 0, u = i.length; s < u; s++) {
                        var o = i[s],
                            v = o.target,
                            y = o.params,
                            w = y.brush,
                            S;
                        if (w != null) {
                            if (y["html-script"] == "true" || p.defaults["html-script"] == true) {
                                n = new p.HtmlScript(w);
                                w = "htmlscript"
                            } else if (n = H(w)) n = new n;
                            else continue;
                            S = v.innerHTML;
                            if (q.useScriptTags) {
                                var B = V(S),
                                    G = false;
                                if (B.indexOf("<![CDATA[") == 0) {
                                    B = B.substring(9);
                                    G = true
                                }
                                var L = B.length;
                                if (B.indexOf("]]\>") ==
                                    L - 3) {
                                    B = B.substring(0, L - 3);
                                    G = true
                                }
                                S = G ? B : S
                            }
                            if ((v.title || "") != "") y.title = v.title;
                            y.brush = w;
                            n.init(y);
                            o = n.getDiv(S);
                            if ((v.id || "") != "") o.id = v.id;
                            v.parentNode.replaceChild(o, v)
                        }
                    }
            }
        },
        all: function (d) {
            s(window, "load", function () {
                p.highlight(d)
            })
        },
        Match: function (d, o, i) {
            this.value = d;
            this.index = o;
            this.length = d.length;
            this.css = i;
            this.brushName = null
        }
    };
    p.Match.prototype.toString = function () {
        return this.value
    };
    p.HtmlScript = function (d) {
        function o(d, i) {
            for (var j = 0, o = d.length; j < o; j++) d[j].index = d[j].index + i
        }

        function i(d) {
            for (var i =
                    d.code, j = [], p = q.regexList, u = d.index + d.left.length, y = q.htmlScript, s, v = 0, w = p.length; v < w; v++) {
                s = U(i, p[v]);
                o(s, u);
                j = j.concat(s)
            }
            if (y.left != null && d.left != null) {
                s = U(d.left, y.left);
                o(s, d.index);
                j = j.concat(s)
            }
            if (y.right != null && d.right != null) {
                s = U(d.right, y.right);
                o(s, d.index + d[0].lastIndexOf(d.right));
                j = j.concat(s)
            }
            d = 0;
            for (w = j.length; d < w; d++) j[d].brushName = n.brushName;
            return j
        }
        var n = H(d),
            q, s = new p.brushes.Xml,
            u = this,
            v = ["getDiv", "getHtml", "init"];
        if (n != null) {
            q = new n;
            for (var y = 0, w = v.length; y < w; y++) (function () {
                var d =
                    v[y];
                u[d] = function () {
                    return s[d].apply(s, arguments)
                }
            })();
            q.htmlScript == null ? window.alert(p.config.strings.alert + (p.config.strings.brushNotHtmlScript + d)) : s.regexList.push({
                regex: q.htmlScript.code,
                func: i
            })
        }
    };
    p.Highlighter = function () { };
    p.Highlighter.prototype = {
        getParam: function (d, o) {
            var i = this.params[d],
                i = i == null ? o : i,
                n = {
                    "true": true,
                    "false": false
                }[i];
            return n == null ? i : n
        },
        create: function (d) {
            return document.createElement(d)
        },
        findMatches: function (d, o) {
            var i = [];
            if (d != null)
                for (var n = 0, p = d.length; n < p; n++) typeof d[n] ==
                    "object" && (i = i.concat(U(o, d[n])));
            return this.removeNestedMatches(i.sort(E))
        },
        removeNestedMatches: function (d) {
            for (var o = 0, i = d.length; o < i; o++)
                if (d[o] !== null)
                    for (var n = d[o], p = n.index + n.length, q = o + 1, i = d.length; q < i && d[o] !== null; q++) {
                        var u = d[q];
                        if (u !== null)
                            if (u.index > p) break;
                            else u.index == n.index && u.length > n.length ? d[o] = null : u.index >= n.index && u.index < p && (d[q] = null)
                    }
            return d
        },
        figureOutLineNumbers: function (d) {
            var o = [],
                i = parseInt(this.getParam("first-line"));
            v(d, function (d, j) {
                o.push(j + i)
            });
            return o
        },
        isLineHighlighted: function (d) {
            var o =
                this.getParam("highlight", []);
            typeof o != "object" && o.push == null && (o = [o]);
            a: {
                var d = d.toString(),
                    i;
                i = Math.max(0, 0);
                for (var n = o.length; i < n; i++)
                    if (o[i] == d) {
                        o = i;
                        break a
                    }
                o = -1
            }
            return o != -1
        },
        getLineHtml: function (d, o, i) {
            d = ["line", "number" + o, "index" + d, "alt" + (o % 2 == 0 ? 1 : 2).toString()];
            this.isLineHighlighted(o) && d.push("highlighted");
            o == 0 && d.push("break");
            return '<div class="' + d.join(" ") + '">' + i + "</div>"
        },
        getLineNumbersHtml: function (j, o) {
            var i = "",
                n = d(j).length,
                q = parseInt(this.getParam("first-line")),
                s = this.getParam("pad-line-numbers");
            s == true ? s = (q + n - 1).toString().length : isNaN(s) == true && (s = 0);
            for (var u = 0; u < n; u++) {
                var v = o ? o[u] : q + u,
                    y;
                if (v == 0) y = p.config.space;
                else
                    for (y = v.toString() ; y.length < s;) y = "0" + y;
                j = y;
                i = i + this.getLineHtml(u, v, j)
            }
            return i
        },
        getCodeLinesHtml: function (j, n) {
            var j = V(j),
                i = d(j);
            this.getParam("pad-line-numbers");
            for (var t = parseInt(this.getParam("first-line")), j = "", q = this.getParam("brush"), s = 0, u = i.length; s < u; s++) {
                var v = i[s],
                    y = /^(&nbsp;|\s)+/.exec(v),
                    w = null,
                    G = n ? n[s] : t + s;
                if (y != null) {
                    w = y[0].toString();
                    v = v.substr(w.length);
                    w = w.replace(" ", p.config.space)
                }
                v = V(v);
                if (v.length == 0) v = p.config.space;
                j = j + this.getLineHtml(s, G, (w != null ? '<code class="' + q + ' spaces">' + w + "</code>" : "") + v)
            }
            return j
        },
        getTitleHtml: function (d) {
            return d ? "<caption>" + d + "</caption>" : ""
        },
        getMatchesHtml: function (d, n) {
            function i(d) {
                return (d = d ? d.brushName || s : s) ? d + " " : ""
            }
            for (var p = 0, q = "", s = this.getParam("brush", ""), u = 0, v = n.length; u < v; u++) {
                var y = n[u],
                    w;
                if (!(y === null || y.length === 0)) {
                    w = i(y);
                    q = q + (P(d.substr(p, y.index - p), w + "plain") + P(y.value, w + y.css));
                    p = y.index + y.length +
                        (y.offset || 0)
                }
            }
            return q = q + P(d.substr(p), i() + "plain")
        },
        getHtml: function (j) {
            var n = "",
                i = ["syntaxhighlighter"],
                q, s;
            if (this.getParam("light") == true) this.params.toolbar = this.params.gutter = false;
            className = "syntaxhighlighter";
            this.getParam("collapse") == true && i.push("collapsed");
            (gutter = this.getParam("gutter")) == false && i.push("nogutter");
            i.push(this.getParam("class-name"));
            i.push(this.getParam("brush"));
            j = j.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g, "").replace(/\r/g, " ");
            q = this.getParam("tab-size");
            if (this.getParam("smart-tabs") ==
                true) {
                d(j);
                for (var w = "", n = 0; n < 50; n++) w = w + "                    ";
                j = v(j, function (d) {
                    if (d.indexOf("\t") == -1) return d;
                    for (var i = 0;
                        (i = d.indexOf("\t")) != -1;) d = d.substr(0, i) + w.substr(0, q - i % q) + d.substr(i + 1, d.length);
                    return d
                })
            } else {
                for (var n = "", u = 0; u < q; u++) n = n + " ";
                j = j.replace(/\t/g, n)
            }
            if (this.getParam("unindent")) a: {
                n = j;
                u = /<br\s*\/?>|&lt;br\s*\/?&gt;/gi;
                p.config.bloggerMode == true && (n = n.replace(u, "\n"));
                p.config.stripBrs == true && (n = n.replace(u, ""));
                for (var n = d(n), u = /^\s*/, E = 1E3, y = 0, H = n.length; y < H && E > 0; y++) {
                    var S =
                        n[y];
                    if (V(S).length != 0) {
                        S = u.exec(S);
                        if (S == null) break a;
                        E = Math.min(S[0].length, E)
                    }
                }
                if (E > 0) {
                    y = 0;
                    for (H = n.length; y < H; y++) n[y] = n[y].substr(E)
                }
                j = n.join("\n")
            }
            gutter && (s = this.figureOutLineNumbers(j));
            n = this.findMatches(this.regexList, j);
            n = this.getMatchesHtml(j, n);
            n = this.getCodeLinesHtml(n, s);
            if (this.getParam("auto-links")) var B = /(.*)((&gt;|&lt;).*)/,
                n = n.replace(p.regexLib.url, function (d) {
                    var i = "",
                        j = null;
                    if (j = B.exec(d)) {
                        d = j[1];
                        i = j[2]
                    }
                    return '<a href="' + d + '">' + d + "</a>" + i
                });
            typeof navigator != "undefined" && (navigator.userAgent &&
                navigator.userAgent.match(/MSIE/)) && i.push("ie");
            return n = '<div id="' + G(this.id) + '" class="' + i.join(" ") + '">' + (this.getParam("toolbar") ? p.toolbar.getHtml(this) : "") + '<table border="0" cellpadding="0" cellspacing="0">' + this.getTitleHtml(this.getParam("title")) + "<tbody><tr>" + (gutter ? '<td class="gutter">' + this.getLineNumbersHtml(j) + "</td>" : "") + '<td class="code"><div class="container">' + n + "</div></td></tr></tbody></table></div>"
        },
        getDiv: function (d) {
            d === null && (d = "");
            this.code = d;
            var n = this.create("div");
            n.innerHTML = this.getHtml(d);
            this.getParam("toolbar") && s(q(n, ".toolbar"), "click", p.toolbar.handler);
            this.getParam("quick-code") && s(q(n, ".code"), "dblclick", w);
            return n
        },
        init: function (d) {
            this.id = "" + Math.round(Math.random() * 1E6).toString();
            p.vars.highlighters[G(this.id)] = this;
            this.params = n(p.defaults, d || {});
            if (this.getParam("light") == true) this.params.toolbar = this.params.gutter = false
        },
        getKeywords: function (d) {
            d = d.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "|");
            return "\\b(?:" + d + ")\\b"
        },
        forHtmlScript: function (d) {
            var n =
                d.right.source;
            d.eof && (n = "(?:(?:" + n + ")|$)");
            this.htmlScript = {
                left: {
                    regex: d.left,
                    css: "script"
                },
                right: {
                    regex: d.right,
                    css: "script"
                },
                code: XRegExp("(?<left>" + d.left.source + ")(?<code>.*?)(?<right>" + n + ")", "sgi")
            }
        }
    };
    return p
}();
"undefined" != typeof exports ? exports.SyntaxHighlighter = SyntaxHighlighter : null;
(function () {
    function d() {
        var d = SyntaxHighlighter.regexLib;
        this.regexList = [{
            regex: d.multiLineDoubleQuotedString,
            css: "string"
        }, {
            regex: d.multiLineSingleQuotedString,
            css: "string"
        }, {
            regex: d.singleLineCComments,
            css: "comments"
        }, {
            regex: d.multiLineCComments,
            css: "comments"
        }, {
            regex: /\s*#.*/gm,
            css: "preprocessor"
        }, {
            regex: RegExp(this.getKeywords("break case catch class continue default delete do else enum export extends false  for function if implements import in instanceof interface let new null package private protected static return super switch this throw true try typeof var while with yield"),
                "gm"),
            css: "keyword"
        }];
        this.forHtmlScript(d.scriptScriptTags);
        this.langLabel = "Javascript"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["js", "jscript", "javascript", "json"];
    SyntaxHighlighter.brushes.JScript = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)", "gm"),
            css: "color2"
        }, {
            regex: SyntaxHighlighter.regexLib.xmlComments,
            css: "comments"
        }, {
            regex: XRegExp("(&lt;|<)[\\s\\/\\?!]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)", "sg"),
            func: function (d) {
                var q = SyntaxHighlighter.Match,
                    n = d[0],
                    s = XRegExp.exec(n, XRegExp("(&lt;|<)[\\s\\/\\?!]*(?<name>[:\\w-\\.]+)", "xg")),
                    H = [];
                if (null != d.attributes) {
                    var v;
                    v = 0;
                    for (var P = XRegExp("(?<name> [\\w:.-]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)",
                            "xg") ; null != (v = XRegExp.exec(n, P, v)) ;) H.push(new q(v.name, d.index + v.index, "color1")), H.push(new q(v.value, d.index + v.index + v[0].indexOf(v.value), "string")), v = v.index + v[0].length
                }
                null != s && H.push(new q(s.name, d.index + s[0].indexOf(s.name), "keyword"));
                return H
            }
        }];
        this.langLabel = "HTML"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["xml", "xhtml", "xslt", "html", "plist"];
    SyntaxHighlighter.brushes.Xml =
        d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {
            regex: /\#[a-fA-F0-9]{3,6}/g,
            css: "value"
        }, {
            regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,
            css: "value"
        }, {
            regex: /!important/g,
            css: "color3"
        }, {
            regex: RegExp("\\b([a-z_]|)" + "ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index".replace(/ /g, "(?=:)\\b|\\b([a-z_\\*]|\\*|)") +
                "(?=:)\\b", "gm"),
            css: "keyword"
        }, {
            regex: RegExp("\\b" + "above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow".replace(/ /g,
                "(?!-)(?!:)\\b|\\b()") + ":\\b", "g"),
            css: "value"
        }, {
            regex: RegExp(this.getKeywords("[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif"), "g"),
            css: "color1"
        }];
        this.forHtmlScript({
            left: /(&lt;|<)\s*style.*?(&gt;|>)/gi,
            right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi
        });
        this.langLabel = "CSS"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["css"];
    SyntaxHighlighter.brushes.CSS = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {
            regex: /\$\w+/g,
            css: "variable"
        }, {
            regex: RegExp(this.getKeywords("abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare"), "gmi"),
            css: "functions"
        }, {
            regex: RegExp(this.getKeywords("__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__"), "gmi"),
            css: "constants"
        }, {
            regex: RegExp(this.getKeywords("abstract and array as break case catch cfunction class clone const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final finally for foreach function global goto if implements include include_once interface instanceof insteadof namespace new old_function or private protected public return require require_once static switch trait throw try use var while xor yield "),
                "gm"),
            css: "keyword"
        }];
        this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
        this.langLabel = "PHP"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["php"];
    SyntaxHighlighter.brushes.Php = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: /--(.*)$/gm,
            css: "comments"
        }, {
            regex: /\/\*([^\*][\s\S]*?)?\*\//gm,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,
            css: "string"
        }, {
            regex: RegExp(this.getKeywords("abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year"), "gmi"),
            css: "color2"
        }, {
            regex: RegExp(this.getKeywords("all and any between cross in join like not null or outer some"), "gmi"),
            css: "color1"
        }, {
            regex: RegExp(this.getKeywords("absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work"),
                "gmi"),
            css: "keyword"
        }];
        this.langLabel = "SQL"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["sql"];
    SyntaxHighlighter.brushes.Sql = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.langLabel = "Plain text"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["text", "plain"];
    SyntaxHighlighter.brushes.Plain = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            func: function (d) {
                var q = 0 == d[0].indexOf("///") ? "color1" : "comments";
                return [new SyntaxHighlighter.Match(d[0], d.index, q)]
            }
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: /@"(?:[^"]|"")*"/g,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {
            regex: /^\s*#.*/gm,
            css: "preprocessor"
        }, {
            regex: RegExp(this.getKeywords("abstract as async await base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit volatile extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while var from group by into select let where orderby join on equals ascending descending"),
                "gm"),
            css: "keyword"
        }, {
            regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,
            css: "keyword"
        }, {
            regex: /\byield(?=\s+(?:return|break)\b)/g,
            css: "keyword"
        }];
        this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
        this.langLabel = "C#"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["c#", "cs", "c-sharp", "csharp"];
    SyntaxHighlighter.brushes.CSharp = d;
    "undefined" != typeof exports ? exports.Brush =
        d : null
})();
SyntaxHighlighter.all();
(function (d) {
    "function" === typeof define && define.amd ? define(["jquery"], function (G) {
        return d(G, window, document)
    }) : "object" === typeof exports ? module.exports = function (G, q) {
        G || (G = window);
        q || (q = "undefined" !== typeof window ? require("jquery") : require("jquery")(G));
        return d(q, G, G.document)
    } : d(jQuery, window, document)
})(function (d, G, q, n) {
    function s(a) {
        var b, c, g = {};
        d.each(a, function (d) {
            if ((b = d.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = d.replace(b[0], b[2].toLowerCase()),
                g[c] = d, "o" === b[1] && s(a[d])
        });
        a._hungarianMap = g
    }

    function H(a, b, c) {
        a._hungarianMap || s(a);
        var g;
        d.each(b, function (e) {
            g = a._hungarianMap[e];
            if (g !== n && (c || b[g] === n)) "o" === g.charAt(0) ? (b[g] || (b[g] = {}), d.extend(!0, b[g], b[e]), H(a[g], b[g], c)) : b[g] = b[e]
        })
    }

    function v(a) {
        var b = A.defaults.oLanguage,
            c = a.sZeroRecords;
        !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && ta(a, a, "sZeroRecords", "sEmptyTable");
        !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && ta(a, a, "sZeroRecords", "sLoadingRecords");
        a.sInfoThousands && (a.sThousands = a.sInfoThousands);
        (a = a.sDecimal) && X(a)
    }

    function P(a) {
        oa(a, "ordering", "bSort");
        oa(a, "orderMulti", "bSortMulti");
        oa(a, "orderClasses", "bSortClasses");
        oa(a, "orderCellsTop", "bSortCellsTop");
        oa(a, "order", "aaSorting");
        oa(a, "orderFixed", "aaSortingFixed");
        oa(a, "paging", "bPaginate");
        oa(a, "pagingType", "sPaginationType");
        oa(a, "pageLength", "iDisplayLength");
        oa(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX &&
            (a.scrollX = a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++) a[b] && H(A.models.oSearch, a[b])
    }

    function V(a) {
        oa(a, "orderable", "bSortable");
        oa(a, "orderData", "aDataSort");
        oa(a, "orderSequence", "asSorting");
        oa(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        b && !d.isArray(b) && (a.aDataSort = [b])
    }

    function E(a) {
        if (!A.__browser) {
            var b = {};
            A.__browser = b;
            var c = d("<div/>").css({
                position: "fixed",
                top: 0,
                left: 0,
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(d("<div/>").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(d("<div/>").css({
                width: "100%",
                height: 10
            }))).appendTo("body"),
                g = c.children(),
                e = g.children();
            b.barWidth = g[0].offsetWidth - g[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== g[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        d.extend(a.oBrowser, A.__browser);
        a.oScroll.iBarWidth = A.__browser.barWidth
    }

    function U(a, b, c, g, d, f) {
        var e, l = !1;
        c !== n && (e = c, l = !0);
        for (; g !== d;) a.hasOwnProperty(g) &&
            (e = l ? b(e, a[g], g, a) : a[g], l = !0, g += f);
        return e
    }

    function M(a, b) {
        var c = A.defaults.column,
            g = a.aoColumns.length,
            c = d.extend({}, A.models.oColumn, c, {
                nTh: b ? b : q.createElement("th"),
                sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
                aDataSort: c.aDataSort ? c.aDataSort : [g],
                mData: c.mData ? c.mData : g,
                idx: g
            });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[g] = d.extend({}, A.models.oSearch, c[g]);
        w(a, g, d(b).data())
    }

    function w(a, b, c) {
        var b = a.aoColumns[b],
            g = a.oClasses,
            e = d(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var f =
                (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            f && (b.sWidthOrig = f[1])
        }
        c !== n && null !== c && (V(c), H(A.defaults.column, c), c.mDataProp !== n && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), d.extend(b, c), ta(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== n && (b.aDataSort = [c.iDataSort]), ta(b, c, "aDataSort"));
        var m = b.mData,
            l = B(m),
            r = b.mRender ? B(b.mRender) : null,
            c = function (a) {
                return "string" === typeof a && -1 !== a.indexOf("@")
            };
        b._bAttrSrc = d.isPlainObject(m) &&
            (c(m.sort) || c(m.type) || c(m.filter));
        b._setter = null;
        b.fnGetData = function (a, b, c) {
            var g = l(a, b, n, c);
            return r && b ? r(g, b, a, c) : g
        };
        b.fnSetData = function (a, b, c) {
            return ea(m)(a, b, c)
        };
        "number" !== typeof m && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(g.sSortableNone));
        a = -1 !== d.inArray("asc", b.asSorting);
        c = -1 !== d.inArray("desc", b.asSorting);
        !b.bSortable || !a && !c ? (b.sSortingClass = g.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = g.sSortableAsc, b.sSortingClassJUI = g.sSortJUIAscAllowed) :
            !a && c ? (b.sSortingClass = g.sSortableDesc, b.sSortingClassJUI = g.sSortJUIDescAllowed) : (b.sSortingClass = g.sSortable, b.sSortingClassJUI = g.sSortJUI)
    }

    function p(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            tb(a);
            for (var c = 0, g = b.length; c < g; c++) b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        ("" !== b.sY || "" !== b.sX) && sa(a);
        da(a, null, "column-sizing", [a])
    }

    function j(a, b) {
        var c = t(a, "bVisible");
        return "number" === typeof c[b] ? c[b] : null
    }

    function o(a, b) {
        var c = t(a, "bVisible"),
            c = d.inArray(b, c);
        return -1 !== c ? c : null
    }

    function i(a) {
        var b =
            0;
        d.each(a.aoColumns, function (a, g) {
            g.bVisible && "none" !== d(g.nTh).css("display") && b++
        });
        return b
    }

    function t(a, b) {
        var c = [];
        d.map(a.aoColumns, function (a, d) {
            a[b] && c.push(d)
        });
        return c
    }

    function I(a) {
        var b = a.aoColumns,
            c = a.aoData,
            g = A.ext.type.detect,
            d, f, e, l, r, i, x, j, o;
        d = 0;
        for (f = b.length; d < f; d++)
            if (x = b[d], o = [], !x.sType && x._sManualType) x.sType = x._sManualType;
            else if (!x.sType) {
                e = 0;
                for (l = g.length; e < l; e++) {
                    r = 0;
                    for (i = c.length; r < i; r++) {
                        o[r] === n && (o[r] = y(a, r, d, "type"));
                        j = g[e](o[r], a);
                        if (!j && e !== g.length - 1) break;
                        if ("html" === j) break
                    }
                    if (j) {
                        x.sType = j;
                        break
                    }
                }
                x.sType || (x.sType = "string")
            }
    }

    function Y(a, b, c, g) {
        var e, f, m, l, r, i, j = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                i = b[e];
                var o = i.targets !== n ? i.targets : i.aTargets;
                d.isArray(o) || (o = [o]);
                f = 0;
                for (m = o.length; f < m; f++)
                    if ("number" === typeof o[f] && 0 <= o[f]) {
                        for (; j.length <= o[f];) M(a);
                        g(o[f], i)
                    } else if ("number" === typeof o[f] && 0 > o[f]) g(j.length + o[f], i);
                    else if ("string" === typeof o[f]) {
                        l = 0;
                        for (r = j.length; l < r; l++) ("_all" == o[f] || d(j[l].nTh).hasClass(o[f])) && g(l, i)
                    }
            }
        if (c) {
            e = 0;
            for (a = c.length; e < a; e++) g(e, c[e])
        }
    }

    function u(a, b, c, g) {
        var e = a.aoData.length,
            f = d.extend(!0, {}, A.models.oRow, {
                src: c ? "dom" : "data",
                idx: e
            });
        f._aData = b;
        a.aoData.push(f);
        for (var m = a.aoColumns, l = 0, r = m.length; l < r; l++) m[l].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== n && (a.aIds[b] = f);
        (c || !a.oFeatures.bDeferRender) && W(a, e, c, g);
        return e
    }

    function ma(a, b) {
        var c;
        b instanceof d || (b = d(b));
        return b.map(function (b, d) {
            c = Ea(a, d);
            return u(a, c.data, d, c.cells)
        })
    }

    function y(a, b, c, g) {
        var d = a.iDraw,
            f = a.aoColumns[c],
            e = a.aoData[b]._aData,
            l = f.sDefaultContent,
            r = f.fnGetData(e, g, {
                settings: a,
                row: b,
                col: c
            });
        if (r === n) return a.iDrawError != d && null === l && (O(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = d), l;
        if ((r === e || null === r) && null !== l && g !== n) r = l;
        else if ("function" === typeof r) return r.call(e);
        return null === r && "display" == g ? "" : r
    }

    function Da(a, b, c, g) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, g, {
            settings: a,
            row: b,
            col: c
        })
    }

    function S(a) {
        return d.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
            return a.replace(/\\./g, ".")
        })
    }

    function B(a) {
        if (d.isPlainObject(a)) {
            var b = {};
            d.each(a, function (a, c) {
                c && (b[a] = B(c))
            });
            return function (a, c, d, e) {
                var l = b[c] || b._;
                return l !== n ? l(a, c, d, e) : a
            }
        }
        if (null === a) return function (a) {
            return a
        };
        if ("function" === typeof a) return function (b, c, d, e) {
            return a(b, c, d, e)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function (a, b, f) {
                var e, l;
                if ("" !== f) {
                    l = S(f);
                    for (var r = 0, i = l.length; r < i; r++) {
                        f = l[r].match(wb);
                        e = l[r].match(nb);
                        if (f) {
                            l[r] = l[r].replace(wb, "");
                            "" !== l[r] && (a = a[l[r]]);
                            e = [];
                            l.splice(0, r + 1);
                            l = l.join(".");
                            if (d.isArray(a)) {
                                r = 0;
                                for (i = a.length; r < i; r++) e.push(c(a[r], b, l))
                            }
                            a = f[0].substring(1, f[0].length - 1);
                            a = "" === a ? e : e.join(a);
                            break
                        } else if (e) {
                            l[r] = l[r].replace(nb, "");
                            a = a[l[r]]();
                            continue
                        }
                        if (null === a || a[l[r]] === n) return n;
                        a = a[l[r]]
                    }
                }
                return a
            };
            return function (b, d) {
                return c(b, d, a)
            }
        }
        return function (b) {
            return b[a]
        }
    }

    function ea(a) {
        if (d.isPlainObject(a)) return ea(a._);
        if (null === a) return function () { };
        if ("function" === typeof a) return function (b,
            g, d) {
            a(b, "set", g, d)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function (a, g, e) {
                var e = S(e),
                    f;
                f = e[e.length - 1];
                for (var m, l, r = 0, i = e.length - 1; r < i; r++) {
                    m = e[r].match(wb);
                    l = e[r].match(nb);
                    if (m) {
                        e[r] = e[r].replace(wb, "");
                        a[e[r]] = [];
                        f = e.slice();
                        f.splice(0, r + 1);
                        m = f.join(".");
                        if (d.isArray(g)) {
                            l = 0;
                            for (i = g.length; l < i; l++) f = {}, b(f, g[l], m), a[e[r]].push(f)
                        } else a[e[r]] = g;
                        return
                    }
                    l && (e[r] = e[r].replace(nb, ""), a = a[e[r]](g));
                    if (null === a[e[r]] || a[e[r]] === n) a[e[r]] = {};
                    a = a[e[r]]
                }
                if (f.match(nb)) a[f.replace(nb, "")](g);
                else a[f.replace(wb, "")] = g
            };
            return function (c, g) {
                return b(c, g, a)
            }
        }
        return function (b, g) {
            b[a] = g
        }
    }

    function L(a) {
        return xa(a.aoData, "_aData")
    }

    function fa(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }

    function ra(a, b, c) {
        for (var g = -1, d = 0, f = a.length; d < f; d++) a[d] == b ? g = d : a[d] > b && a[d]--; -1 != g && c === n && a.splice(g, 1)
    }

    function Na(a, b, c, d) {
        var e = a.aoData[b],
            f, m = function (c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML =
                    y(a, b, d, "display")
            };
        if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ea(a, e, d, d === n ? n : e._aData).data;
        else {
            var l = e.anCells;
            if (l)
                if (d !== n) m(l[d], d);
                else {
                    c = 0;
                    for (f = l.length; c < f; c++) m(l[c], c)
                }
        }
        e._aSortData = null;
        e._aFilterData = null;
        m = a.aoColumns;
        if (d !== n) m[d].sType = null;
        else {
            c = 0;
            for (f = m.length; c < f; c++) m[c].sType = null;
            Fa(a, e)
        }
    }

    function Ea(a, b, c, g) {
        var e = [],
            f = b.firstChild,
            m, l, r = 0,
            i, j = a.aoColumns,
            o = a._rowReadObject,
            g = g !== n ? g : o ? {} : [],
            p = function (a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@"); -1 !==
                        c && (c = a.substring(c + 1), ea(a)(g, b.getAttribute(c)))
                }
            },
            q = function (a) {
                if (c === n || c === r) l = j[r], i = d.trim(a.innerHTML), l && l._bAttrSrc ? (ea(l.mData._)(g, i), p(l.mData.sort, a), p(l.mData.type, a), p(l.mData.filter, a)) : o ? (l._setter || (l._setter = ea(l.mData)), l._setter(g, i)) : g[r] = i;
                r++
            };
        if (f)
            for (; f;) {
                m = f.nodeName.toUpperCase();
                if ("TD" == m || "TH" == m) q(f), e.push(f);
                f = f.nextSibling
            } else {
            e = b.anCells;
            f = 0;
            for (m = e.length; f < m; f++) q(e[f])
        }
        if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && ea(a.rowId)(g, b);
        return {
            data: g,
            cells: e
        }
    }

    function W(a, b, c, g) {
        var e = a.aoData[b],
            f = e._aData,
            m = [],
            l, r, i, j, n;
        if (null === e.nTr) {
            l = c || q.createElement("tr");
            e.nTr = l;
            e.anCells = m;
            l._DT_RowIndex = b;
            Fa(a, e);
            j = 0;
            for (n = a.aoColumns.length; j < n; j++) {
                i = a.aoColumns[j];
                r = c ? g[j] : q.createElement(i.sCellType);
                r._DT_CellIndex = {
                    row: b,
                    column: j
                };
                m.push(r);
                if ((!c || i.mRender || i.mData !== j) && (!d.isPlainObject(i.mData) || i.mData._ !== j + ".display")) r.innerHTML = y(a, b, j, "display");
                i.sClass && (r.className += " " + i.sClass);
                i.bVisible && !c ? l.appendChild(r) : !i.bVisible && c && r.parentNode.removeChild(r);
                i.fnCreatedCell && i.fnCreatedCell.call(a.oInstance, r, y(a, b, j), f, b, j)
            }
            da(a, "aoRowCreatedCallback", null, [l, f, b])
        }
        e.nTr.setAttribute("role", "row")
    }

    function Fa(a, b) {
        var c = b.nTr,
            g = b._aData;
        if (c) {
            var e = a.rowIdFn(g);
            e && (c.id = e);
            g.DT_RowClass && (e = g.DT_RowClass.split(" "), b.__rowc = b.__rowc ? Lb(b.__rowc.concat(e)) : e, d(c).removeClass(b.__rowc.join(" ")).addClass(g.DT_RowClass));
            g.DT_RowAttr && d(c).attr(g.DT_RowAttr);
            g.DT_RowData && d(c).data(g.DT_RowData)
        }
    }

    function Ua(a) {
        var b, c, g, e, f, m = a.nTHead,
            l = a.nTFoot,
            r = 0 ===
            d("th, td", m).length,
            i = a.oClasses,
            j = a.aoColumns;
        r && (e = d("<tr/>").appendTo(m));
        b = 0;
        for (c = j.length; b < c; b++) f = j[b], g = d(f.nTh).addClass(f.sClass), r && g.appendTo(e), a.oFeatures.bSort && (g.addClass(f.sSortingClass), !1 !== f.bSortable && (g.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), vb(a, f.nTh, b))), f.sTitle != g[0].innerHTML && g.html(f.sTitle), Pa(a, "header")(a, g, f, i);
        r && ka(a.aoHeader, m);
        d(m).find(">tr").attr("role", "row");
        d(m).find(">tr>th, >tr>td").addClass(i.sHeaderTH);
        d(l).find(">tr>th, >tr>td").addClass(i.sFooterTH);
        if (null !== l) {
            a = a.aoFooter[0];
            b = 0;
            for (c = a.length; b < c; b++) f = j[b], f.nTf = a[b].cell, f.sClass && d(f.nTf).addClass(f.sClass)
        }
    }

    function ja(a, b, c) {
        var g, e, f, m = [],
            l = [],
            r = a.aoColumns.length,
            i;
        if (b) {
            c === n && (c = !1);
            g = 0;
            for (e = b.length; g < e; g++) {
                m[g] = b[g].slice();
                m[g].nTr = b[g].nTr;
                for (f = r - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && m[g].splice(f, 1);
                l.push([])
            }
            g = 0;
            for (e = m.length; g < e; g++) {
                if (a = m[g].nTr)
                    for (; f = a.firstChild;) a.removeChild(f);
                f = 0;
                for (b = m[g].length; f < b; f++)
                    if (i = r = 1, l[g][f] === n) {
                        a.appendChild(m[g][f].cell);
                        for (l[g][f] = 1; m[g + r] !== n && m[g][f].cell == m[g + r][f].cell;) l[g + r][f] = 1, r++;
                        for (; m[g][f + i] !== n && m[g][f].cell == m[g][f + i].cell;) {
                            for (c = 0; c < r; c++) l[g + c][f + i] = 1;
                            i++
                        }
                        d(m[g][f].cell).attr("rowspan", r).attr("colspan", i)
                    }
            }
        }
    }

    function ya(a) {
        var b = da(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== d.inArray(!1, b)) R(a, !1);
        else {
            var b = [],
                c = 0,
                g = a.asStripeClasses,
                e = g.length,
                f = a.oLanguage,
                m = a.iInitDisplayStart,
                l = "ssp" == la(a),
                r = a.aiDisplay;
            a.bDrawing = !0;
            m !== n && -1 !== m && (a._iDisplayStart = l ? m : m >= a.fnRecordsDisplay() ? 0 : m, a.iInitDisplayStart = -1);
            var m = a._iDisplayStart,
                j = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, R(a, !1);
            else if (l) {
                if (!a.bDestroying && !Vb(a)) return
            } else a.iDraw++;
            if (0 !== r.length) {
                f = l ? a.aoData.length : j;
                for (l = l ? 0 : m; l < f; l++) {
                    var x = r[l],
                        o = a.aoData[x];
                    null === o.nTr && W(a, x);
                    x = o.nTr;
                    if (0 !== e) {
                        var p = g[c % e];
                        o._sRowStripe != p && (d(x).removeClass(o._sRowStripe).addClass(p), o._sRowStripe = p)
                    }
                    da(a, "aoRowCallback", null, [x, o._aData, c, l]);
                    b.push(x);
                    c++
                }
            } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == la(a) ? c = f.sLoadingRecords :
                f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = d("<tr/>", {
                    "class": e ? g[0] : ""
                }).append(d("<td />", {
                    valign: "top",
                    colSpan: i(a),
                    "class": a.oClasses.sRowEmpty
                }).html(c))[0];
            da(a, "aoHeaderCallback", "header", [d(a.nTHead).children("tr")[0], L(a), m, j, r]);
            da(a, "aoFooterCallback", "footer", [d(a.nTFoot).children("tr")[0], L(a), m, j, r]);
            g = d(a.nTBody);
            g.children().detach();
            g.append(d(b));
            da(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function va(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && bc(a);
        d ? jb(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        ya(a);
        a._drawHold = !1
    }

    function Ub(a) {
        var b = a.oClasses,
            c = d(a.nTable),
            c = d("<div/>").insertBefore(c),
            g = a.oFeatures,
            e = d("<div/>", {
                id: a.sTableId + "_wrapper",
                "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
            });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var f = a.sDom.split(""), m, l, r, i, j, n, o = 0; o < f.length; o++) {
            m = null;
            l = f[o];
            if ("<" == l) {
                r = d("<div/>")[0];
                i = f[o + 1];
                if ("'" == i || '"' == i) {
                    j = "";
                    for (n = 2; f[o + n] != i;) j += f[o + n], n++;
                    "H" == j ? j = b.sJUIHeader : "F" == j && (j = b.sJUIFooter); -1 != j.indexOf(".") ? (i = j.split("."), r.id = i[0].substr(1, i[0].length - 1), r.className = i[1]) : "#" == j.charAt(0) ? r.id = j.substr(1, j.length - 1) : r.className = j;
                    o += n
                }
                e.append(r);
                e = d(r)
            } else if (">" == l) e = e.parent();
            else if ("l" == l && g.bPaginate && g.bLengthChange) m = kc(a);
            else if ("f" == l && g.bFilter) m = Wb(a);
            else if ("r" == l && g.bProcessing) m = Hb(a);
            else if ("t" == l) m = Jb(a);
            else if ("i" == l && g.bInfo) m = jc(a);
            else if ("p" ==
                l && g.bPaginate) m = lc(a);
            else if (0 !== A.ext.feature.length) {
                r = A.ext.feature;
                n = 0;
                for (i = r.length; n < i; n++)
                    if (l == r[n].cFeature) {
                        m = r[n].fnInit(a);
                        break
                    }
            }
            m && (r = a.aanFeatures, r[l] || (r[l] = []), r[l].push(m), e.append(m))
        }
        c.replaceWith(e);
        a.nHolding = null
    }

    function ka(a, b) {
        var c = d(b).children("tr"),
            g, e, f, m, l, i, j, n, o, p;
        a.splice(0, a.length);
        f = 0;
        for (i = c.length; f < i; f++) a.push([]);
        f = 0;
        for (i = c.length; f < i; f++) {
            g = c[f];
            for (e = g.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    n = 1 * e.getAttribute("colspan");
                    o = 1 * e.getAttribute("rowspan");
                    n = !n || 0 === n || 1 === n ? 1 : n;
                    o = !o || 0 === o || 1 === o ? 1 : o;
                    m = 0;
                    for (l = a[f]; l[m];) m++;
                    j = m;
                    p = 1 === n ? !0 : !1;
                    for (l = 0; l < n; l++)
                        for (m = 0; m < o; m++) a[f + m][j + l] = {
                            cell: e,
                            unique: p
                        }, a[f + m].nTr = g
                }
                e = e.nextSibling
            }
        }
    }

    function Oa(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], ka(c, b)));
        for (var b = 0, e = c.length; b < e; b++)
            for (var f = 0, m = c[b].length; f < m; f++)
                if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
        return d
    }

    function qb(a, b, c) {
        da(a, "aoServerParams", "serverParams", [b]);
        if (b && d.isArray(b)) {
            var g = {},
                e = /(.*?)\[\]$/;
            d.each(b, function (a, b) {
                var c = b.name.match(e);
                c ? (c = c[0], g[c] || (g[c] = []), g[c].push(b.value)) : g[b.name] = b.value
            });
            b = g
        }
        var f, m = a.ajax,
            l = a.oInstance,
            i = function (b) {
                da(a, null, "xhr", [a, b, a.jqXHR]);
                c(b)
            };
        if (d.isPlainObject(m) && m.data) {
            f = m.data;
            var j = d.isFunction(f) ? f(b, a) : f,
                b = d.isFunction(f) && j ? j : d.extend(!0, b, j);
            delete m.data
        }
        j = {
            data: b,
            success: function (b) {
                var c = b.error || b.sError;
                c && O(a, 0, c);
                a.json = b;
                i(b)
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function (b, c) {
                var g = da(a, null, "xhr", [a, null, a.jqXHR]); -1 === d.inArray(!0, g) && ("parsererror" == c ? O(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && O(a, 0, "Ajax error", 7));
                R(a, !1)
            }
        };
        a.oAjaxData = b;
        da(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(l, a.sAjaxSource, d.map(b, function (a, b) {
            return {
                name: b,
                value: a
            }
        }), i, a) : a.sAjaxSource || "string" === typeof m ? a.jqXHR = d.ajax(d.extend(j, {
            url: m || a.sAjaxSource
        })) : d.isFunction(m) ? a.jqXHR = m.call(l, b, i, a) : (a.jqXHR = d.ajax(d.extend(j, m)), m.data = f)
    }

    function Vb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, R(a, !0), qb(a, Db(a), function (b) {
            Eb(a, b)
        }), !1) : !0
    }

    function Db(a) {
        var b = a.aoColumns,
            c = b.length,
            g = a.oFeatures,
            e = a.oPreviousSearch,
            f = a.aoPreSearchCols,
            m, l = [],
            i, j, n, o = Va(a);
        m = a._iDisplayStart;
        i = !1 !== g.bPaginate ? a._iDisplayLength : -1;
        var p = function (a, b) {
            l.push({
                name: a,
                value: b
            })
        };
        p("sEcho", a.iDraw);
        p("iColumns", c);
        p("sColumns", xa(b, "sName").join(","));
        p("iDisplayStart", m);
        p("iDisplayLength", i);
        var q = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: m,
            length: i,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            }
        };
        for (m = 0; m < c; m++) j = b[m],
            n = f[m], i = "function" == typeof j.mData ? "function" : j.mData, q.columns.push({
                data: i,
                name: j.sName,
                searchable: j.bSearchable,
                orderable: j.bSortable,
                search: {
                    value: n.sSearch,
                    regex: n.bRegex
                }
            }), p("mDataProp_" + m, i), g.bFilter && (p("sSearch_" + m, n.sSearch), p("bRegex_" + m, n.bRegex), p("bSearchable_" + m, j.bSearchable)), g.bSort && p("bSortable_" + m, j.bSortable);
        g.bFilter && (p("sSearch", e.sSearch), p("bRegex", e.bRegex));
        g.bSort && (d.each(o, function (a, b) {
            q.order.push({
                column: b.col,
                dir: b.dir
            });
            p("iSortCol_" + a, b.col);
            p("sSortDir_" +
                a, b.dir)
        }), p("iSortingCols", o.length));
        b = A.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? l : q : b ? l : q
    }

    function Eb(a, b) {
        var c = ib(a, b),
            d = b.sEcho !== n ? b.sEcho : b.draw,
            e = b.iTotalRecords !== n ? b.iTotalRecords : b.recordsTotal,
            f = b.iTotalDisplayRecords !== n ? b.iTotalDisplayRecords : b.recordsFiltered;
        if (d) {
            if (1 * d < a.iDraw) return;
            a.iDraw = 1 * d
        }
        fa(a);
        a._iRecordsTotal = parseInt(e, 10);
        a._iRecordsDisplay = parseInt(f, 10);
        d = 0;
        for (e = c.length; d < e; d++) u(a, c[d]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        ya(a);
        a._bInitComplete ||
            Gb(a, b);
        a.bAjaxDataGet = !0;
        R(a, !1)
    }

    function ib(a, b) {
        var c = d.isPlainObject(a.ajax) && a.ajax.dataSrc !== n ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === c ? b.aaData || b[c] : "" !== c ? B(c)(b) : b
    }

    function Wb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            g = a.oLanguage,
            e = a.oPreviousSearch,
            f = a.aanFeatures,
            m = '<input type="search" class="' + b.sFilterInput + '"/>',
            l = g.sSearch,
            l = l.match(/_INPUT_/) ? l.replace("_INPUT_", m) : l + m,
            b = d("<div/>", {
                id: !f.f ? c + "_filter" : null,
                "class": b.sFilter
            }).append(d("<label/>").append(l)),
            f = function () {
                var b = !this.value ?
                    "" : this.value;
                b != e.sSearch && (jb(a, {
                    sSearch: b,
                    bRegex: e.bRegex,
                    bSmart: e.bSmart,
                    bCaseInsensitive: e.bCaseInsensitive
                }), a._iDisplayStart = 0, ya(a))
            },
            m = null !== a.searchDelay ? a.searchDelay : "ssp" === la(a) ? 400 : 0,
            i = d("input", b).val(e.sSearch).attr("placeholder", g.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", m ? ec(f, m) : f).bind("keypress.DT", function (a) {
                if (13 == a.keyCode) return !1
            }).attr("aria-controls", c);
        d(a.nTable).on("search.dt.DT", function (b, c) {
            if (a === c) try {
                i[0] !== q.activeElement && i.val(e.sSearch)
            } catch (d) { }
        });
        return b[0]
    }

    function jb(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            f = function (a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive
            };
        I(a);
        if ("ssp" != la(a)) {
            Ra(a, b.sSearch, c, b.bEscapeRegex !== n ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
            f(b);
            for (b = 0; b < e.length; b++) D(a, e[b].sSearch, b, e[b].bEscapeRegex !== n ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            La(a)
        } else f(b);
        a.bFiltered = !0;
        da(a, null, "search", [a])
    }

    function La(a) {
        for (var b =
                A.ext.search, c = a.aiDisplay, g, e, f = 0, m = b.length; f < m; f++) {
            for (var l = [], i = 0, j = c.length; i < j; i++) e = c[i], g = a.aoData[e], b[f](a, g._aFilterData, e, g._aData, i) && l.push(e);
            c.length = 0;
            d.merge(c, l)
        }
    }

    function D(a, b, c, d, e, f) {
        if ("" !== b)
            for (var m = a.aiDisplay, d = Bb(b, d, e, f), e = m.length - 1; 0 <= e; e--) b = a.aoData[m[e]]._aFilterData[c], d.test(b) || m.splice(e, 1)
    }

    function Ra(a, b, c, d, e, f) {
        var d = Bb(b, d, e, f),
            e = a.oPreviousSearch.sSearch,
            f = a.aiDisplayMaster,
            m;
        0 !== A.ext.search.length && (c = !0);
        m = Fb(a);
        if (0 >= b.length) a.aiDisplay = f.slice();
        else {
            if (m || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted) a.aiDisplay = f.slice();
            b = a.aiDisplay;
            for (c = b.length - 1; 0 <= c; c--) d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
        }
    }

    function Bb(a, b, c, g) {
        a = b ? a : dc(a);
        c && (a = "^(?=.*?" + d.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a;
            return a.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return RegExp(a, g ? "i" : "")
    }

    function Fb(a) {
        var b = a.aoColumns,
            c, d, e, f, m, l, i, j, n = A.ext.type.search;
        c = !1;
        d = 0;
        for (f = a.aoData.length; d <
            f; d++)
            if (j = a.aoData[d], !j._aFilterData) {
                l = [];
                e = 0;
                for (m = b.length; e < m; e++) c = b[e], c.bSearchable ? (i = y(a, d, e, "filter"), n[c.sType] && (i = n[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (Mb.innerHTML = i, i = mc ? Mb.textContent : Mb.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), l.push(i);
                j._aFilterData = l;
                j._sFilterRow = l.join("  ");
                c = !0
            }
        return c
    }

    function Xb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    }

    function rb(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        }
    }

    function jc(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            g = d("<div/>", {
                "class": a.oClasses.sInfo,
                id: !c ? b + "_info" : null
            });
        c || (a.aoDrawCallback.push({
            fn: Xa,
            sName: "information"
        }), g.attr("role", "status").attr("aria-live", "polite"), d(a.nTable).attr("aria-describedby", b + "_info"));
        return g[0]
    }

    function Xa(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                g = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                f = a.fnRecordsTotal(),
                m = a.fnRecordsDisplay(),
                l = m ? c.sInfo : c.sInfoEmpty;
            m !== f && (l += " " + c.sInfoFiltered);
            l += c.sInfoPostFix;
            l = C(a, l);
            c = c.fnInfoCallback;
            null !== c && (l = c.call(a.oInstance, a, g, e, f, m, l));
            d(b).html(l)
        }
    }

    function C(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay(),
            m = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, m ? 1 : Math.ceil(d /
            e))).replace(/_PAGES_/g, c.call(a, m ? 1 : Math.ceil(f / e)))
    }

    function e(a) {
        var b, c, d = a.iInitDisplayStart,
            k = a.aoColumns,
            f;
        c = a.oFeatures;
        var m = a.bDeferLoading;
        if (a.bInitialised) {
            Ub(a);
            Ua(a);
            ja(a, a.aoHeader);
            ja(a, a.aoFooter);
            R(a, !0);
            c.bAutoWidth && tb(a);
            b = 0;
            for (c = k.length; b < c; b++) f = k[b], f.sWidth && (f.nTh.style.width = Z(f.sWidth));
            da(a, null, "preInit", [a]);
            va(a);
            k = la(a);
            if ("ssp" != k || m) "ajax" == k ? qb(a, [], function (c) {
                var f = ib(a, c);
                for (b = 0; b < f.length; b++) u(a, f[b]);
                a.iInitDisplayStart = d;
                va(a);
                R(a, !1);
                Gb(a, c)
            }, a) : (R(a, !1), Gb(a))
        } else setTimeout(function () {
            e(a)
        }, 200)
    }

    function Gb(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && p(a);
        da(a, null, "plugin-init", [a, b]);
        da(a, "aoInitComplete", "init", [a, b])
    }

    function Yb(a, b) {
        var c = parseInt(b, 10);
        a._iDisplayLength = c;
        lb(a);
        da(a, null, "length", [a, c])
    }

    function kc(a) {
        for (var b = a.oClasses, c = a.sTableId, g = a.aLengthMenu, e = d.isArray(g[0]), f = e ? g[0] : g, g = e ? g[1] : g, e = d("<select/>", {
            name: c + "_length",
                "aria-controls": c,
                "class": b.sLengthSelect
        }), m = 0, l = f.length; m < l; m++) e[0][m] = new Option(g[m], f[m]);
        var i = d("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (i[0].id = c + "_length");
        i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        d("select", i).val(a._iDisplayLength).bind("change.DT", function () {
            Yb(a, d(this).val());
            ya(a)
        });
        d(a.nTable).bind("length.dt.DT", function (b, c, g) {
            a === c && d("select", i).val(g)
        });
        return i[0]
    }

    function lc(a) {
        var b = a.sPaginationType,
            c = A.ext.pager[b],
            g = "function" === typeof c,
            e = function (a) {
                ya(a)
            },
            b = d("<div/>").addClass(a.oClasses.sPaging + b)[0],
            f =
            a.aanFeatures;
        g || c.fnInit(a, b, e);
        f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function (a) {
                if (g) {
                    var b = a._iDisplayStart,
                        d = a._iDisplayLength,
                        i = a.fnRecordsDisplay(),
                        j = -1 === d,
                        b = j ? 0 : Math.ceil(b / d),
                        d = j ? 1 : Math.ceil(i / d),
                        i = c(b, d),
                        n, j = 0;
                    for (n = f.p.length; j < n; j++) Pa(a, "pageButton")(a, f.p[j], j, i, b, d)
                } else c.fnUpdate(a, e)
            },
            sName: "pagination"
        }));
        return b
    }

    function Sa(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay();
        0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" ==
            b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : O(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (da(a, null, "page", [a]), c && ya(a));
        return b
    }

    function Hb(a) {
        return d("<div/>", {
            id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
            "class": a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }

    function R(a, b) {
        a.oFeatures.bProcessing && d(a.aanFeatures.r).css("display", b ? "block" : "none");
        da(a, null,
            "processing", [a, b])
    }

    function Jb(a) {
        var b = d(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var g = c.sX,
            e = c.sY,
            f = a.oClasses,
            m = b.children("caption"),
            l = m.length ? m[0]._captionSide : null,
            i = d(b[0].cloneNode(!1)),
            j = d(b[0].cloneNode(!1)),
            n = b.children("tfoot");
        n.length || (n = null);
        i = d("<div/>", {
            "class": f.sScrollWrapper
        }).append(d("<div/>", {
            "class": f.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: g ? !g ? null : Z(g) : "100%"
        }).append(d("<div/>", {
            "class": f.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: c.sXInner || "100%"
        }).append(i.removeAttr("id").css("margin-left", 0).append("top" === l ? m : null).append(b.children("thead"))))).append(d("<div/>", {
            "class": f.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: !g ? null : Z(g)
        }).append(b));
        n && i.append(d("<div/>", {
            "class": f.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: g ? !g ? null : Z(g) : "100%"
        }).append(d("<div/>", {
            "class": f.sScrollFootInner
        }).append(j.removeAttr("id").css("margin-left", 0).append("bottom" === l ? m : null).append(b.children("tfoot")))));
        var b = i.children(),
            o = b[0],
            f = b[1],
            p = n ? b[2] : null;
        if (g) d(f).on("scroll.DT", function () {
            var a = this.scrollLeft;
            o.scrollLeft = a;
            n && (p.scrollLeft = a)
        });
        d(f).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = o;
        a.nScrollBody = f;
        a.nScrollFoot = p;
        a.aoDrawCallback.push({
            fn: sa,
            sName: "scrolling"
        });
        return i[0]
    }

    function sa(a) {
        var b = a.oScroll,
            c = b.sX,
            g = b.sXInner,
            e = b.sY,
            b = b.iBarWidth,
            f = d(a.nScrollHead),
            m = f[0].style,
            l = f.children("div"),
            i = l[0].style,
            o = l.children("table"),
            l = a.nScrollBody,
            x = d(l),
            q = l.style,
            t = d(a.nScrollFoot).children("div"),
            s = t.children("table"),
            z = d(a.nTHead),
            u = d(a.nTable),
            v = u[0],
            y = v.style,
            w = a.nTFoot ? d(a.nTFoot) : null,
            A = a.oBrowser,
            B = A.bScrollOversize,
            I = xa(a.aoColumns, "nTh"),
            C, D, E, G, W = [],
            H = [],
            L = [],
            K = [],
            Y, S = function (a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        D = l.scrollHeight > l.clientHeight;
        if (a.scrollBarVis !== D && a.scrollBarVis !== n) a.scrollBarVis = D, p(a);
        else {
            a.scrollBarVis = D;
            u.children("thead, tfoot").remove();
            w && (E = w.clone().prependTo(u), C = w.find("tr"), E = E.find("tr"));
            G = z.clone().prependTo(u);
            z = z.find("tr");
            D = G.find("tr");
            G.find("th, td").removeAttr("tabindex");
            c || (q.width = "100%", f[0].style.width = "100%");
            d.each(Oa(a, G), function (b, c) {
                Y = j(a, b);
                c.style.width = a.aoColumns[Y].sWidth
            });
            w && na(function (a) {
                a.style.width = ""
            }, E);
            f = u.outerWidth();
            if ("" === c) {
                y.width = "100%";
                if (B && (u.find("tbody").height() > l.offsetHeight || "scroll" == x.css("overflow-y"))) y.width = Z(u.outerWidth() - b);
                f = u.outerWidth()
            } else "" !== g && (y.width = Z(g), f = u.outerWidth());
            na(S, D);
            na(function (a) {
                L.push(a.innerHTML);
                W.push(Z(d(a).css("width")))
            }, D);
            na(function (a, b) {
                if (d.inArray(a, I) !== -1) a.style.width = W[b]
            }, z);
            d(D).height(0);
            w && (na(S, E), na(function (a) {
                K.push(a.innerHTML);
                H.push(Z(d(a).css("width")))
            }, E), na(function (a, b) {
                a.style.width = H[b]
            }, C), d(E).height(0));
            na(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + L[b] + "</div>";
                a.style.width = W[b]
            }, D);
            w && na(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + K[b] + "</div>";
                a.style.width =
                    H[b]
            }, E);
            if (u.outerWidth() < f) {
                C = l.scrollHeight > l.offsetHeight || "scroll" == x.css("overflow-y") ? f + b : f;
                if (B && (l.scrollHeight > l.offsetHeight || "scroll" == x.css("overflow-y"))) y.width = Z(C - b);
                ("" === c || "" !== g) && O(a, 1, "Possible column misalignment", 6)
            } else C = "100%";
            q.width = Z(C);
            m.width = Z(C);
            w && (a.nScrollFoot.style.width = Z(C));
            !e && B && (q.height = Z(v.offsetHeight + b));
            c = u.outerWidth();
            o[0].style.width = Z(c);
            i.width = Z(c);
            g = u.height() > l.clientHeight || "scroll" == x.css("overflow-y");
            e = "padding" + (A.bScrollbarLeft ? "Left" :
                "Right");
            i[e] = g ? b + "px" : "0px";
            w && (s[0].style.width = Z(c), t[0].style.width = Z(c), t[0].style[e] = g ? b + "px" : "0px");
            u.children("colgroup").insertBefore(u.children("thead"));
            x.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) l.scrollTop = 0
        }
    }

    function na(a, b, c) {
        for (var d = 0, e = 0, f = b.length, m, l; e < f;) {
            m = b[e].firstChild;
            for (l = c ? c[e].firstChild : null; m;) 1 === m.nodeType && (c ? a(m, l, d) : a(m, d), d++), m = m.nextSibling, l = c ? l.nextSibling : null;
            e++
        }
    }

    function tb(a) {
        var b = a.nTable,
            c = a.aoColumns,
            g = a.oScroll,
            e = g.sY,
            f = g.sX,
            m = g.sXInner,
            l = c.length,
            r = t(a, "bVisible"),
            n = d("th", a.nTHead),
            o = b.getAttribute("width"),
            q = b.parentNode,
            u = !1,
            s, z, w = a.oBrowser,
            g = w.bScrollOversize;
        (s = b.style.width) && -1 !== s.indexOf("%") && (o = s);
        for (s = 0; s < r.length; s++) z = c[r[s]], null !== z.sWidth && (z.sWidth = ac(z.sWidthOrig, q), u = !0);
        if (g || !u && !f && !e && l == i(a) && l == n.length)
            for (s = 0; s < l; s++) r = j(a, s), null !== r && (c[r].sWidth = Z(n.eq(s).width()));
        else {
            l = d(b).clone().css("visibility", "hidden").removeAttr("id");
            l.find("tbody tr").remove();
            var y = d("<tr/>").appendTo(l.find("tbody"));
            l.find("thead, tfoot").remove();
            l.append(d(a.nTHead).clone()).append(d(a.nTFoot).clone());
            l.find("tfoot th, tfoot td").css("width", "");
            n = Oa(a, l.find("thead")[0]);
            for (s = 0; s < r.length; s++) z = c[r[s]], n[s].style.width = null !== z.sWidthOrig && "" !== z.sWidthOrig ? Z(z.sWidthOrig) : "", z.sWidthOrig && f && d(n[s]).append(d("<div/>").css({
                width: z.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length)
                for (s = 0; s < r.length; s++) u = r[s], z = c[u], d(nc(a, u)).clone(!1).append(z.sContentPadding).appendTo(y);
            d("[name]",
                l).removeAttr("name");
            z = d("<div/>").css(f || e ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(l).appendTo(q);
            f && m ? l.width(m) : f ? (l.css("width", "auto"), l.removeAttr("width"), l.width() < q.clientWidth && o && l.width(q.clientWidth)) : e ? l.width(q.clientWidth) : o && l.width(o);
            for (s = e = 0; s < r.length; s++) q = d(n[s]), m = q.outerWidth() - q.width(), q = w.bBounding ? Math.ceil(n[s].getBoundingClientRect().width) : q.outerWidth(), e += q, c[r[s]].sWidth = Z(q - m);
            b.style.width = Z(e);
            z.remove()
        }
        o && (b.style.width =
            Z(o));
        if ((o || f) && !a._reszEvt) b = function () {
            d(G).bind("resize.DT-" + a.sInstance, ec(function () {
                p(a)
            }))
        }, g ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    }

    function ac(a, b) {
        if (!a) return 0;
        var c = d("<div/>").css("width", Z(a)).appendTo(b || q.body),
            e = c[0].offsetWidth;
        c.remove();
        return e
    }

    function nc(a, b) {
        var c = oc(a, b);
        if (0 > c) return null;
        var e = a.aoData[c];
        return !e.nTr ? d("<td/>").html(y(a, c, b, "display"))[0] : e.anCells[b]
    }

    function oc(a, b) {
        for (var c, d = -1, e = -1, f = 0, m = a.aoData.length; f < m; f++) c = y(a, f, b, "display") + "", c = c.replace(Nb,
            ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
        return e
    }

    function Z(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }

    function Va(a) {
        var b, c, e = [],
            k = a.aoColumns,
            f, m, l, i;
        b = a.aaSortingFixed;
        c = d.isPlainObject(b);
        var j = [];
        f = function (a) {
            a.length && !d.isArray(a[0]) ? j.push(a) : d.merge(j, a)
        };
        d.isArray(b) && f(b);
        c && b.pre && f(b.pre);
        f(a.aaSorting);
        c && b.post && f(b.post);
        for (a = 0; a < j.length; a++) {
            i = j[a][0];
            f = k[i].aDataSort;
            b = 0;
            for (c = f.length; b < c; b++) m = f[b], l = k[m].sType ||
                "string", j[a]._idx === n && (j[a]._idx = d.inArray(j[a][1], k[m].asSorting)), e.push({
                    src: i,
                    col: m,
                    dir: j[a][1],
                    index: j[a]._idx,
                    type: l,
                    formatter: A.ext.type.order[l + "-pre"]
                })
        }
        return e
    }

    function bc(a) {
        var b, c, d = [],
            e = A.ext.type.order,
            f = a.aoData,
            m = 0,
            l, i = a.aiDisplayMaster,
            j;
        I(a);
        j = Va(a);
        b = 0;
        for (c = j.length; b < c; b++) l = j[b], l.formatter && m++, Kb(a, l.col);
        if ("ssp" != la(a) && 0 !== j.length) {
            b = 0;
            for (c = i.length; b < c; b++) d[i[b]] = b;
            m === j.length ? i.sort(function (a, b) {
                var c, e, m, k, l = j.length,
                    i = f[a]._aSortData,
                    r = f[b]._aSortData;
                for (m =
                    0; m < l; m++)
                    if (k = j[m], c = i[k.col], e = r[k.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === k.dir ? c : -c;
                c = d[a];
                e = d[b];
                return c < e ? -1 : c > e ? 1 : 0
            }) : i.sort(function (a, b) {
                var c, m, l, i, r = j.length,
                    n = f[a]._aSortData,
                    o = f[b]._aSortData;
                for (l = 0; l < r; l++)
                    if (i = j[l], c = n[i.col], m = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, m), 0 !== c) return c;
                c = d[a];
                m = d[b];
                return c < m ? -1 : c > m ? 1 : 0
            })
        }
        a.bSorted = !0
    }

    function sb(a) {
        for (var b, c, d = a.aoColumns, e = Va(a), a = a.oLanguage.oAria, f = 0, m = d.length; f < m; f++) {
            c = d[f];
            var l = c.asSorting;
            b = c.sTitle.replace(/<.*?>/g,
                "");
            var i = c.nTh;
            i.removeAttribute("aria-sort");
            c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = l[e[0].index + 1] || l[0]) : c = l[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
            i.setAttribute("aria-label", b)
        }
    }

    function ub(a, b, c, e) {
        var k = a.aaSorting,
            f = a.aoColumns[b].asSorting,
            m = function (a, b) {
                var c = a._idx;
                c === n && (c = d.inArray(a[1], f));
                return c + 1 < f.length ? c + 1 : b ? null : 0
            };
        "number" === typeof k[0] && (k = a.aaSorting = [k]);
        c && a.oFeatures.bSortMulti ? (c = d.inArray(b,
            xa(k, "0")), -1 !== c ? (b = m(k[c], !0), null === b && 1 === k.length && (b = 0), null === b ? k.splice(c, 1) : (k[c][1] = f[b], k[c]._idx = b)) : (k.push([b, f[0], 0]), k[k.length - 1]._idx = 0)) : k.length && k[0][0] == b ? (b = m(k[0]), k.length = 1, k[0][1] = f[b], k[0]._idx = b) : (k.length = 0, k.push([b, f[0]]), k[0]._idx = 0);
        va(a);
        "function" == typeof e && e(a)
    }

    function vb(a, b, c, d) {
        var e = a.aoColumns[c];
        Ya(b, {}, function (b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (R(a, !0), setTimeout(function () {
                ub(a, c, b.shiftKey, d);
                "ssp" !== la(a) && R(a, !1)
            }, 0)) : ub(a, c, b.shiftKey,
                d))
        })
    }

    function Za(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            e = Va(a),
            k = a.oFeatures,
            f, m;
        if (k.bSort && k.bSortClasses) {
            k = 0;
            for (f = b.length; k < f; k++) m = b[k].src, d(xa(a.aoData, "anCells", m)).removeClass(c + (2 > k ? k + 1 : 3));
            k = 0;
            for (f = e.length; k < f; k++) m = e[k].src, d(xa(a.aoData, "anCells", m)).addClass(c + (2 > k ? k + 1 : 3))
        }
        a.aLastSort = e
    }

    function Kb(a, b) {
        var c = a.aoColumns[b],
            d = A.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, o(a, b)));
        for (var f, m = A.ext.type.order[c.sType + "-pre"], l = 0, i = a.aoData.length; l < i; l++)
            if (c =
                a.aoData[l], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[l] : y(a, l, b, "sort"), c._aSortData[b] = m ? m(f) : f
    }

    function mb(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: d.extend(!0, [], a.aaSorting),
                search: Xb(a.oPreviousSearch),
                columns: d.map(a.aoColumns, function (b, d) {
                    return {
                        visible: b.bVisible,
                        search: Xb(a.aoPreSearchCols[d])
                    }
                })
            };
            da(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance,
                a, b)
        }
    }

    function $a(a) {
        var b, c, e = a.aoColumns;
        if (a.oFeatures.bStateSave) {
            var k = a.fnStateLoadCallback.call(a.oInstance, a);
            if (k && k.time && (b = da(a, "aoStateLoadParams", "stateLoadParams", [a, k]), -1 === d.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && k.time < +new Date - 1E3 * b) && e.length === k.columns.length))) {
                a.oLoadedState = d.extend(!0, {}, k);
                k.start !== n && (a._iDisplayStart = k.start, a.iInitDisplayStart = k.start);
                k.length !== n && (a._iDisplayLength = k.length);
                k.order !== n && (a.aaSorting = [], d.each(k.order, function (b, c) {
                    a.aaSorting.push(c[0] >=
                        e.length ? [0, c[1]] : c)
                }));
                k.search !== n && d.extend(a.oPreviousSearch, rb(k.search));
                b = 0;
                for (c = k.columns.length; b < c; b++) {
                    var f = k.columns[b];
                    f.visible !== n && (e[b].bVisible = f.visible);
                    f.search !== n && d.extend(a.aoPreSearchCols[b], rb(f.search))
                }
                da(a, "aoStateLoaded", "stateLoaded", [a, k])
            }
        }
    }

    function ba(a) {
        var b = A.settings,
            a = d.inArray(a, xa(b, "nTable"));
        return -1 !== a ? b[a] : null
    }

    function O(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" +
            d);
        if (b) G.console && console.log && console.log(c);
        else if (b = A.ext, b = b.sErrMode || b.errMode, a && da(a, null, "error", [a, d, c]), "alert" == b) alert(c);
        else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c)
        }
    }

    function ta(a, b, c, e) {
        d.isArray(c) ? d.each(c, function (c, e) {
            d.isArray(e) ? ta(a, b, e[0], e[1]) : ta(a, b, e)
        }) : (e === n && (e = c), b[c] !== n && (a[e] = b[c]))
    }

    function cc(a, b, c) {
        var e, k;
        for (k in b) b.hasOwnProperty(k) && (e = b[k], d.isPlainObject(e) ? (d.isPlainObject(a[k]) || (a[k] = {}), d.extend(!0, a[k], e)) : a[k] = c && "data" !== k &&
            "aaData" !== k && d.isArray(e) ? e.slice() : e);
        return a
    }

    function Ya(a, b, c) {
        d(a).bind("click.DT", b, function (b) {
            a.blur();
            c(b)
        }).bind("keypress.DT", b, function (a) {
            13 === a.which && (a.preventDefault(), c(a))
        }).bind("selectstart.DT", function () {
            return !1
        })
    }

    function pa(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        })
    }

    function da(a, b, c, e) {
        var k = [];
        b && (k = d.map(a[b].slice().reverse(), function (b) {
            return b.fn.apply(a.oInstance, e)
        }));
        null !== c && (b = d.Event(c + ".dt"), d(a.nTable).trigger(b, e), k.push(b.result));
        return k
    }

    function lb(a) {
        var b =
            a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b
    }

    function Pa(a, b) {
        var c = a.renderer,
            e = A.ext.renderer[b];
        return d.isPlainObject(c) && c[b] ? e[c[b]] || e._ : "string" === typeof c ? e[c] || e._ : e._
    }

    function la(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }

    function Ha(a, b) {
        var c = [],
            c = xc.numbers_length,
            d = Math.floor(c / 2);
        b <= c ? c = ab(0, b) : a <= d ? (c = ab(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = ab(b - (c - 2), b) : (c = ab(a - d + 2,
            a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
        c.DT_el = "span";
        return c
    }

    function X(a) {
        d.each({
            num: function (b) {
                return Ob(b, a)
            },
            "num-fmt": function (b) {
                return Ob(b, a, kb)
            },
            "html-num": function (b) {
                return Ob(b, a, wa)
            },
            "html-num-fmt": function (b) {
                return Ob(b, a, wa, kb)
            }
        }, function (b, c) {
            T.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (T.type.search[b + a] = T.type.search.html)
        })
    }

    function Ba(a) {
        return function () {
            var b = [ba(this[A.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return A.ext.internal[a].apply(this, b)
        }
    }
    var A = function (a) {
        this.$ = function (a, b) {
            return this.api(!0).$(a, b)
        };
        this._ = function (a, b) {
            return this.api(!0).rows(a, b).data()
        };
        this.api = function (a) {
            return a ? new Q(ba(this[T.iApiIndex])) : new Q(this)
        };
        this.fnAddData = function (a, b) {
            var c = this.api(!0),
                e = d.isArray(a) && (d.isArray(a[0]) || d.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
            (b === n || b) && c.draw();
            return e.flatten().toArray()
        };
        this.fnAdjustColumnSizing = function (a) {
            var b = this.api(!0).columns.adjust(),
                c = b.settings()[0],
                d = c.oScroll;
            a === n || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && sa(c)
        };
        this.fnClearTable = function (a) {
            var b = this.api(!0).clear();
            (a === n || a) && b.draw()
        };
        this.fnClose = function (a) {
            this.api(!0).row(a).child.hide()
        };
        this.fnDeleteRow = function (a, b, c) {
            var d = this.api(!0),
                a = d.rows(a),
                e = a.settings()[0],
                g = e.aoData[a[0][0]];
            a.remove();
            b && b.call(this, e, g);
            (c === n || c) && d.draw();
            return g
        };
        this.fnDestroy = function (a) {
            this.api(!0).destroy(a)
        };
        this.fnDraw = function (a) {
            this.api(!0).draw(a)
        };
        this.fnFilter = function (a, b, c, d, e, g) {
            e =
                this.api(!0);
            null === b || b === n ? e.search(a, c, d, g) : e.column(b).search(a, c, d, g);
            e.draw()
        };
        this.fnGetData = function (a, b) {
            var c = this.api(!0);
            if (a !== n) {
                var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                return b !== n || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
            }
            return c.data().toArray()
        };
        this.fnGetNodes = function (a) {
            var b = this.api(!0);
            return a !== n ? b.row(a).node() : b.rows().nodes().flatten().toArray()
        };
        this.fnGetPosition = function (a) {
            var b = this.api(!0),
                c = a.nodeName.toUpperCase();
            return "TR" == c ? b.row(a).index() :
                "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
        };
        this.fnIsOpen = function (a) {
            return this.api(!0).row(a).child.isShown()
        };
        this.fnOpen = function (a, b, c) {
            return this.api(!0).row(a).child(b, c).show().child()[0]
        };
        this.fnPageChange = function (a, b) {
            var c = this.api(!0).page(a);
            (b === n || b) && c.draw(!1)
        };
        this.fnSetColumnVis = function (a, b, c) {
            a = this.api(!0).column(a).visible(b);
            (c === n || c) && a.columns.adjust().draw()
        };
        this.fnSettings = function () {
            return ba(this[T.iApiIndex])
        };
        this.fnSort = function (a) {
            this.api(!0).order(a).draw()
        };
        this.fnSortListener = function (a, b, c) {
            this.api(!0).order.listener(a, b, c)
        };
        this.fnUpdate = function (a, b, c, d, e) {
            var g = this.api(!0);
            c === n || null === c ? g.row(b).data(a) : g.cell(b, c).data(a);
            (e === n || e) && g.columns.adjust();
            (d === n || d) && g.draw();
            return 0
        };
        this.fnVersionCheck = T.fnVersionCheck;
        var b = this,
            c = a === n,
            g = this.length;
        c && (a = {});
        this.oApi = this.internal = T.internal;
        for (var k in A.ext.internal) k && (this[k] = Ba(k));
        this.each(function () {
            var f = {},
                f = 1 < g ? cc(f, a, !0) : a,
                k = 0,
                i, j = this.getAttribute("id"),
                o = !1,
                p = A.defaults,
                q = d(this);
            if ("table" != this.nodeName.toLowerCase()) O(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
            else {
                P(p);
                V(p.column);
                H(p, p, !0);
                H(p.column, p.column, !0);
                H(p, d.extend(f, q.data()));
                var t = A.settings,
                    k = 0;
                for (i = t.length; k < i; k++) {
                    var s = t[k];
                    if (s.nTable == this || s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
                        k = f.bRetrieve !== n ? f.bRetrieve : p.bRetrieve;
                        if (c || k) return s.oInstance;
                        if (f.bDestroy !== n ? f.bDestroy : p.bDestroy) {
                            s.oInstance.fnDestroy();
                            break
                        } else {
                            O(s, 0, "Cannot reinitialise DataTable",
                                3);
                            return
                        }
                    }
                    if (s.sTableId == this.id) {
                        t.splice(k, 1);
                        break
                    }
                }
                if (null === j || "" === j) this.id = j = "DataTables_Table_" + A.ext._unique++;
                var z = d.extend(!0, {}, A.models.oSettings, {
                    sDestroyWidth: q[0].style.width,
                    sInstance: j,
                    sTableId: j
                });
                z.nTable = this;
                z.oApi = b.internal;
                z.oInit = f;
                t.push(z);
                z.oInstance = 1 === b.length ? b : q.dataTable();
                P(f);
                f.oLanguage && v(f.oLanguage);
                f.aLengthMenu && !f.iDisplayLength && (f.iDisplayLength = d.isArray(f.aLengthMenu[0]) ? f.aLengthMenu[0][0] : f.aLengthMenu[0]);
                f = cc(d.extend(!0, {}, p), f);
                ta(z.oFeatures,
                    f, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                ta(z, f, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols",
                        "aoPreSearchCols"
                    ],
                    ["iDisplayLength", "_iDisplayLength"],
                    ["bJQueryUI", "bJUI"]
                ]);
                ta(z.oScroll, f, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"]
                ]);
                ta(z.oLanguage, f, "fnInfoCallback");
                pa(z, "aoDrawCallback", f.fnDrawCallback, "user");
                pa(z, "aoServerParams", f.fnServerParams, "user");
                pa(z, "aoStateSaveParams", f.fnStateSaveParams, "user");
                pa(z, "aoStateLoadParams", f.fnStateLoadParams, "user");
                pa(z, "aoStateLoaded", f.fnStateLoaded, "user");
                pa(z, "aoRowCallback", f.fnRowCallback,
                    "user");
                pa(z, "aoRowCreatedCallback", f.fnCreatedRow, "user");
                pa(z, "aoHeaderCallback", f.fnHeaderCallback, "user");
                pa(z, "aoFooterCallback", f.fnFooterCallback, "user");
                pa(z, "aoInitComplete", f.fnInitComplete, "user");
                pa(z, "aoPreDrawCallback", f.fnPreDrawCallback, "user");
                z.rowIdFn = B(f.rowId);
                E(z);
                j = z.oClasses;
                f.bJQueryUI ? (d.extend(j, A.ext.oJUIClasses, f.oClasses), f.sDom === p.sDom && "lfrtip" === p.sDom && (z.sDom = '<"H"lfr>t<"F"ip>'), z.renderer) ? d.isPlainObject(z.renderer) && !z.renderer.header && (z.renderer.header = "jqueryui") :
                    z.renderer = "jqueryui" : d.extend(j, A.ext.classes, f.oClasses);
                q.addClass(j.sTable);
                z.iInitDisplayStart === n && (z.iInitDisplayStart = f.iDisplayStart, z._iDisplayStart = f.iDisplayStart);
                null !== f.iDeferLoading && (z.bDeferLoading = !0, k = d.isArray(f.iDeferLoading), z._iRecordsDisplay = k ? f.iDeferLoading[0] : f.iDeferLoading, z._iRecordsTotal = k ? f.iDeferLoading[1] : f.iDeferLoading);
                var y = z.oLanguage;
                d.extend(!0, y, f.oLanguage);
                "" !== y.sUrl && (d.ajax({
                    dataType: "json",
                    url: y.sUrl,
                    success: function (a) {
                        v(a);
                        H(p.oLanguage, a);
                        d.extend(true,
                            y, a);
                        e(z)
                    },
                    error: function () {
                        e(z)
                    }
                }), o = !0);
                null === f.asStripeClasses && (z.asStripeClasses = [j.sStripeOdd, j.sStripeEven]);
                var k = z.asStripeClasses,
                    C = q.children("tbody").find("tr").eq(0); -1 !== d.inArray(!0, d.map(k, function (a) {
                        return C.hasClass(a)
                    })) && (d("tbody tr", this).removeClass(k.join(" ")), z.asDestroyStripes = k.slice());
                t = [];
                k = this.getElementsByTagName("thead");
                0 !== k.length && (ka(z.aoHeader, k[0]), t = Oa(z));
                if (null === f.aoColumns) {
                    s = [];
                    k = 0;
                    for (i = t.length; k < i; k++) s.push(null)
                } else s = f.aoColumns;
                k = 0;
                for (i =
                    s.length; k < i; k++) M(z, t ? t[k] : null);
                Y(z, f.aoColumnDefs, s, function (a, b) {
                    w(z, a, b)
                });
                if (C.length) {
                    var I = function (a, b) {
                        return a.getAttribute("data-" + b) !== null ? b : null
                    };
                    d(C[0]).children("th, td").each(function (a, b) {
                        var c = z.aoColumns[a];
                        if (c.mData === a) {
                            var d = I(b, "sort") || I(b, "order"),
                                e = I(b, "filter") || I(b, "search");
                            if (d !== null || e !== null) {
                                c.mData = {
                                    _: a + ".display",
                                    sort: d !== null ? a + ".@data-" + d : n,
                                    type: d !== null ? a + ".@data-" + d : n,
                                    filter: e !== null ? a + ".@data-" + e : n
                                };
                                w(z, a)
                            }
                        }
                    })
                }
                var D = z.oFeatures;
                f.bStateSave && (D.bStateSave = !0, $a(z, f), pa(z, "aoDrawCallback", mb, "state_save"));
                if (f.aaSorting === n) {
                    t = z.aaSorting;
                    k = 0;
                    for (i = t.length; k < i; k++) t[k][1] = z.aoColumns[k].asSorting[0]
                }
                Za(z);
                D.bSort && pa(z, "aoDrawCallback", function () {
                    if (z.bSorted) {
                        var a = Va(z),
                            b = {};
                        d.each(a, function (a, c) {
                            b[c.src] = c.dir
                        });
                        da(z, null, "order", [z, a, b]);
                        sb(z)
                    }
                });
                pa(z, "aoDrawCallback", function () {
                    (z.bSorted || la(z) === "ssp" || D.bDeferRender) && Za(z)
                }, "sc");
                k = q.children("caption").each(function () {
                    this._captionSide = q.css("caption-side")
                });
                i = q.children("thead");
                0 ===
                    i.length && (i = d("<thead/>").appendTo(this));
                z.nTHead = i[0];
                i = q.children("tbody");
                0 === i.length && (i = d("<tbody/>").appendTo(this));
                z.nTBody = i[0];
                i = q.children("tfoot");
                if (0 === i.length && 0 < k.length && ("" !== z.oScroll.sX || "" !== z.oScroll.sY)) i = d("<tfoot/>").appendTo(this);
                0 === i.length || 0 === i.children().length ? q.addClass(j.sNoFooter) : 0 < i.length && (z.nTFoot = i[0], ka(z.aoFooter, z.nTFoot));
                if (f.aaData)
                    for (k = 0; k < f.aaData.length; k++) u(z, f.aaData[k]);
                else (z.bDeferLoading || "dom" == la(z)) && ma(z, d(z.nTBody).children("tr"));
                z.aiDisplay = z.aiDisplayMaster.slice();
                z.bInitialised = !0;
                !1 === o && e(z)
            }
        });
        b = null;
        return this
    },
        T, Q, K, aa, ca = {},
        za = /[\r\n]/g,
        wa = /<.*?>/g,
        Ic = /^[\w\+\-]/,
        pc = /[\w\+\-]$/,
        qc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        kb = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
        Ia = function (a) {
            return !a || !0 === a || "-" === a ? !0 : !1
        },
        $b = function (a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && isFinite(a) ? b : null
        },
        rc = function (a, b) {
            ca[b] || (ca[b] = RegExp(dc(b), "g"));
            return "string" === typeof a && "." !== b ?
                a.replace(/\./g, "").replace(ca[b], ".") : a
        },
        Ta = function (a, b, c) {
            var d = "string" === typeof a;
            if (Ia(a)) return !0;
            b && d && (a = rc(a, b));
            c && d && (a = a.replace(kb, ""));
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        sc = function (a, b, c) {
            return Ia(a) ? !0 : !(Ia(a) || "string" === typeof a) ? null : Ta(a.replace(wa, ""), b, c) ? !0 : null
        },
        xa = function (a, b, c) {
            var d = [],
                e = 0,
                f = a.length;
            if (c !== n)
                for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e < f; e++) a[e] && d.push(a[e][b]);
            return d
        },
        Aa = function (a, b, c, d) {
            var e = [],
                f = 0,
                i = b.length;
            if (d !== n)
                for (; f <
                    i; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
            else
                for (; f < i; f++) e.push(a[b[f]][c]);
            return e
        },
        ab = function (a, b) {
            var c = [],
                d;
            b === n ? (b = 0, d = a) : (d = b, b = a);
            for (var e = b; e < d; e++) c.push(e);
            return c
        },
        Wa = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b
        },
        Lb = function (a) {
            var b = [],
                c, d, e = a.length,
                f, i = 0;
            d = 0;
            a: for (; d < e; d++) {
                c = a[d];
                for (f = 0; f < i; f++)
                    if (b[f] === c) continue a;
                b.push(c);
                i++
            }
            return b
        };
    A.util = {
        throttle: function (a, b) {
            var c = b !== n ? b : 200,
                d, e;
            return function () {
                var b = this,
                    i = +new Date,
                    l = arguments;
                d && i < d + c ? (clearTimeout(e), e = setTimeout(function () {
                    d = n;
                    a.apply(b, l)
                }, c)) : (d = i, a.apply(b, l))
            }
        },
        escapeRegex: function (a) {
            return a.replace(qc, "\\$1")
        }
    };
    var oa = function (a, b, c) {
        a[b] !== n && (a[c] = a[b])
    },
        wb = /\[.*?\]$/,
        nb = /\(\)$/,
        dc = A.util.escapeRegex,
        Mb = d("<div>")[0],
        mc = Mb.textContent !== n,
        Nb = /<.*?>/g,
        ec = A.util.throttle,
        tc = [],
        ha = Array.prototype,
        Hc = function (a) {
            var b, c, e = A.settings,
                k = d.map(e, function (a) {
                    return a.nTable
                });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b =
                    d.inArray(a, k), -1 !== b ? [e[b]] : null;
                if (a && "function" === typeof a.settings) return a.settings().toArray();
                "string" === typeof a ? c = d(a) : a instanceof d && (c = a)
            } else return [];
            if (c) return c.map(function () {
                b = d.inArray(this, k);
                return -1 !== b ? e[b] : null
            }).toArray()
        };
    Q = function (a, b) {
        if (!(this instanceof Q)) return new Q(a, b);
        var c = [],
            e = function (a) {
                (a = Hc(a)) && (c = c.concat(a))
            };
        if (d.isArray(a))
            for (var k = 0, f = a.length; k < f; k++) e(a[k]);
        else e(a);
        this.context = Lb(c);
        b && d.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        Q.extend(this, this, tc)
    };
    A.Api = Q;
    d.extend(Q.prototype, {
        any: function () {
            return 0 !== this.count()
        },
        concat: ha.concat,
        context: [],
        count: function () {
            return this.flatten().length
        },
        each: function (a) {
            for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
            return this
        },
        eq: function (a) {
            var b = this.context;
            return b.length > a ? new Q(b[a], this[a]) : null
        },
        filter: function (a) {
            var b = [];
            if (ha.filter) b = ha.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new Q(this.context,
                b)
        },
        flatten: function () {
            var a = [];
            return new Q(this.context, a.concat.apply(a, this.toArray()))
        },
        join: ha.join,
        indexOf: ha.indexOf || function (a, b) {
            for (var c = b || 0, d = this.length; c < d; c++)
                if (this[c] === a) return c;
            return -1
        },
        iterator: function (a, b, c, d) {
            var e = [],
                f, i, l, j, o, p = this.context,
                q, t, s = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            i = 0;
            for (l = p.length; i < l; i++) {
                var u = new Q(p[i]);
                if ("table" === b) f = c.call(u, p[i], i), f !== n && e.push(f);
                else if ("columns" === b || "rows" === b) f = c.call(u, p[i], this[i], i), f !== n && e.push(f);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    t = this[i];
                    "column-rows" === b && (q = xb(p[i], s.opts));
                    j = 0;
                    for (o = t.length; j < o; j++) f = t[j], f = "cell" === b ? c.call(u, p[i], f.row, f.column, i, j) : c.call(u, p[i], f, i, j, q), f !== n && e.push(f)
                }
            }
            return e.length || d ? (a = new Q(p, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = s.rows, b.cols = s.cols, b.opts = s.opts, a) : this
        },
        lastIndexOf: ha.lastIndexOf || function (a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function (a) {
            var b = [];
            if (ha.map) b =
                ha.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new Q(this.context, b)
        },
        pluck: function (a) {
            return this.map(function (b) {
                return b[a]
            })
        },
        pop: ha.pop,
        push: ha.push,
        reduce: ha.reduce || function (a, b) {
            return U(this, a, b, 0, this.length, 1)
        },
        reduceRight: ha.reduceRight || function (a, b) {
            return U(this, a, b, this.length - 1, -1, -1)
        },
        reverse: ha.reverse,
        selector: null,
        shift: ha.shift,
        sort: ha.sort,
        splice: ha.splice,
        toArray: function () {
            return ha.slice.call(this)
        },
        to$: function () {
            return d(this)
        },
        toJQuery: function () {
            return d(this)
        },
        unique: function () {
            return new Q(this.context, Lb(this))
        },
        unshift: ha.unshift
    });
    Q.extend = function (a, b, c) {
        if (c.length && b && (b instanceof Q || b.__dt_wrapper)) {
            var e, k, f, i = function (a, b, c) {
                return function () {
                    var d = b.apply(a, arguments);
                    Q.extend(d, d, c.methodExt);
                    return d
                }
            };
            e = 0;
            for (k = c.length; e < k; e++) f = c[e], b[f.name] = "function" === typeof f.val ? i(a, f.val, f) : d.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, Q.extend(a, b[f.name], f.propExt)
        }
    };
    Q.register = K = function (a, b) {
        if (d.isArray(a))
            for (var c =
                    0, e = a.length; c < e; c++) Q.register(a[c], b);
        else
            for (var k = a.split("."), f = tc, i, l, c = 0, e = k.length; c < e; c++) {
                i = (l = -1 !== k[c].indexOf("()")) ? k[c].replace("()", "") : k[c];
                var j;
                a: {
                    j = 0;
                    for (var n = f.length; j < n; j++)
                        if (f[j].name === i) {
                            j = f[j];
                            break a
                        }
                    j = null
                }
                j || (j = {
                    name: i,
                    val: {},
                    methodExt: [],
                    propExt: []
                }, f.push(j));
                c === e - 1 ? j.val = b : f = l ? j.methodExt : j.propExt
            }
    };
    Q.registerPlural = aa = function (a, b, c) {
        Q.register(a, c);
        Q.register(b, function () {
            var a = c.apply(this, arguments);
            return a === this ? this : a instanceof Q ? a.length ? d.isArray(a[0]) ?
                new Q(a.context, a[0]) : a[0] : n : a
        })
    };
    K("tables()", function (a) {
        var b;
        if (a) {
            b = Q;
            var c = this.context;
            if ("number" === typeof a) a = [c[a]];
            else var e = d.map(c, function (a) {
                return a.nTable
            }),
                a = d(e).filter(a).map(function () {
                    var a = d.inArray(this, e);
                    return c[a]
                }).toArray();
            b = new b(a)
        } else b = this;
        return b
    });
    K("table()", function (a) {
        var a = this.tables(a),
            b = a.context;
        return b.length ? new Q(b[0]) : a
    });
    aa("tables().nodes()", "table().node()", function () {
        return this.iterator("table", function (a) {
            return a.nTable
        }, 1)
    });
    aa("tables().body()",
        "table().body()",
        function () {
            return this.iterator("table", function (a) {
                return a.nTBody
            }, 1)
        });
    aa("tables().header()", "table().header()", function () {
        return this.iterator("table", function (a) {
            return a.nTHead
        }, 1)
    });
    aa("tables().footer()", "table().footer()", function () {
        return this.iterator("table", function (a) {
            return a.nTFoot
        }, 1)
    });
    aa("tables().containers()", "table().container()", function () {
        return this.iterator("table", function (a) {
            return a.nTableWrapper
        }, 1)
    });
    K("draw()", function (a) {
        return this.iterator("table",
            function (b) {
                "page" === a ? ya(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), va(b, !1 === a))
            })
    });
    K("page()", function (a) {
        return a === n ? this.page.info().page : this.iterator("table", function (b) {
            Sa(b, a)
        })
    });
    K("page.info()", function () {
        if (0 === this.context.length) return n;
        var a = this.context[0],
            b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === la(a)
        }
    });
    K("page.len()", function (a) {
        return a === n ? 0 !== this.context.length ? this.context[0]._iDisplayLength : n : this.iterator("table", function (b) {
            Yb(b, a)
        })
    });
    var Ib = function (a, b, c) {
        if (c) {
            var d = new Q(a);
            d.one("draw", function () {
                c(d.ajax.json())
            })
        }
        if ("ssp" == la(a)) va(a, b);
        else {
            R(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            qb(a, [], function (c) {
                fa(a);
                for (var c = ib(a, c), d = 0, e = c.length; d < e; d++) u(a, c[d]);
                va(a, b);
                R(a, !1)
            })
        }
    };
    K("ajax.json()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].json
    });
    K("ajax.params()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData
    });
    K("ajax.reload()", function (a, b) {
        return this.iterator("table", function (c) {
            Ib(c, !1 === b, a)
        })
    });
    K("ajax.url()", function (a) {
        var b = this.context;
        if (a === n) {
            if (0 === b.length) return n;
            b = b[0];
            return b.ajax ? d.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function (b) {
            d.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
        })
    });
    K("ajax.url().load()", function (a, b) {
        return this.iterator("table",
            function (c) {
                Ib(c, !1 === b, a)
            })
    });
    var Zb = function (a, b, c, e, i) {
        var f = [],
            m, l, j, o, p, q;
        j = typeof b;
        if (!b || "string" === j || "function" === j || b.length === n) b = [b];
        j = 0;
        for (o = b.length; j < o; j++) {
            l = b[j] && b[j].split ? b[j].split(",") : [b[j]];
            p = 0;
            for (q = l.length; p < q; p++) (m = c("string" === typeof l[p] ? d.trim(l[p]) : l[p])) && m.length && (f = f.concat(m))
        }
        a = T.selector[a];
        if (a.length) {
            j = 0;
            for (o = a.length; j < o; j++) f = a[j](e, i, f)
        }
        return Lb(f)
    },
        Ja = function (a) {
            a || (a = {});
            a.filter && a.search === n && (a.search = a.filter);
            return d.extend({
                search: "none",
                order: "current",
                page: "all"
            }, a)
        },
        Ka = function (a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
            a.length = 0;
            return a
        },
        xb = function (a, b) {
            var c, e, i, f = [],
                m = a.aiDisplay;
            c = a.aiDisplayMaster;
            var l = b.search;
            e = b.order;
            i = b.page;
            if ("ssp" == la(a)) return "removed" === l ? [] : ab(0, c.length);
            if ("current" == i) {
                c = a._iDisplayStart;
                for (e = a.fnDisplayEnd() ; c < e; c++) f.push(m[c])
            } else if ("current" == e || "applied" == e) f = "none" == l ? c.slice() : "applied" == l ? m.slice() : d.map(c,
                function (a) {
                    return -1 === d.inArray(a, m) ? a : null
                });
            else if ("index" == e || "original" == e) {
                c = 0;
                for (e = a.aoData.length; c < e; c++) "none" == l ? f.push(c) : (i = d.inArray(c, m), (-1 === i && "removed" == l || 0 <= i && "applied" == l) && f.push(c))
            }
            return f
        };
    K("rows()", function (a, b) {
        a === n ? a = "" : d.isPlainObject(a) && (b = a, a = "");
        var b = Ja(b),
            c = this.iterator("table", function (c) {
                var e = b;
                return Zb("row", a, function (a) {
                    var b = $b(a);
                    if (b !== null && !e) return [b];
                    var i = xb(c, e);
                    if (b !== null && d.inArray(b, i) !== -1) return [b];
                    if (!a) return i;
                    if (typeof a === "function") return d.map(i,
                        function (b) {
                            var d = c.aoData[b];
                            return a(b, d._aData, d.nTr) ? b : null
                        });
                    b = Wa(Aa(c.aoData, i, "nTr"));
                    if (a.nodeName) {
                        if (a._DT_RowIndex !== n) return [a._DT_RowIndex];
                        if (a._DT_CellIndex) return [a._DT_CellIndex.row];
                        b = d(a).closest("*[data-dt-row]");
                        return b.length ? [b.data("dt-row")] : []
                    }
                    if (typeof a === "string" && a.charAt(0) === "#") {
                        i = c.aIds[a.replace(/^#/, "")];
                        if (i !== n) return [i.idx]
                    }
                    return d(b).filter(a).map(function () {
                        return this._DT_RowIndex
                    }).toArray()
                }, c, e)
            }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    K("rows().nodes()",
        function () {
            return this.iterator("row", function (a, b) {
                return a.aoData[b].nTr || n
            }, 1)
        });
    K("rows().data()", function () {
        return this.iterator(!0, "rows", function (a, b) {
            return Aa(a.aoData, b, "_aData")
        }, 1)
    });
    aa("rows().cache()", "row().cache()", function (a) {
        return this.iterator("row", function (b, c) {
            var d = b.aoData[c];
            return "search" === a ? d._aFilterData : d._aSortData
        }, 1)
    });
    aa("rows().invalidate()", "row().invalidate()", function (a) {
        return this.iterator("row", function (b, c) {
            Na(b, c, a)
        })
    });
    aa("rows().indexes()", "row().index()",
        function () {
            return this.iterator("row", function (a, b) {
                return b
            }, 1)
        });
    aa("rows().ids()", "row().id()", function (a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var f = 0, i = this[d].length; f < i; f++) {
                var l = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
                b.push((!0 === a ? "#" : "") + l)
            }
        return new Q(c, b)
    });
    aa("rows().remove()", "row().remove()", function () {
        var a = this;
        this.iterator("row", function (b, c, d) {
            var e = b.aoData,
                f = e[c],
                i, l, j, o, p;
            e.splice(c, 1);
            i = 0;
            for (l = e.length; i < l; i++)
                if (j = e[i], p = j.anCells, null !== j.nTr &&
                    (j.nTr._DT_RowIndex = i), null !== p) {
                    j = 0;
                    for (o = p.length; j < o; j++) p[j]._DT_CellIndex.row = i
                }
            ra(b.aiDisplayMaster, c);
            ra(b.aiDisplay, c);
            ra(a[d], c, !1);
            lb(b);
            c = b.rowIdFn(f._aData);
            c !== n && delete b.aIds[c]
        });
        this.iterator("table", function (a) {
            for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
        });
        return this
    });
    K("rows.add()", function (a) {
        var b = this.iterator("table", function (b) {
            var c, d, e, i = [];
            d = 0;
            for (e = a.length; d < e; d++) c = a[d], c.nodeName && "TR" === c.nodeName.toUpperCase() ? i.push(ma(b, c)[0]) : i.push(u(b, c));
            return i
        },
                1),
            c = this.rows(-1);
        c.pop();
        d.merge(c, b);
        return c
    });
    K("row()", function (a, b) {
        return Ka(this.rows(a, b))
    });
    K("row().data()", function (a) {
        var b = this.context;
        if (a === n) return b.length && this.length ? b[0].aoData[this[0]]._aData : n;
        b[0].aoData[this[0]]._aData = a;
        Na(b[0], this[0], "data");
        return this
    });
    K("row().node()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
    });
    K("row.add()", function (a) {
        a instanceof d && a.length && (a = a[0]);
        var b = this.iterator("table", function (b) {
            return a.nodeName &&
                "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : u(b, a)
        });
        return this.row(b[0])
    });
    var uc = function (a, b) {
        var c = a.context;
        if (c.length && (c = c[0].aoData[b !== n ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = n, c._details = n
    },
        bb = function (a, b) {
            var c = a.context;
            if (c.length && a.length) {
                var d = c[0].aoData[a[0]];
                if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();
                    var e = c[0],
                        f = new Q(e),
                        m = e.aoData;
                    f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    0 < xa(m,
                        "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
                            e === b && f.rows({
                                page: "current"
                            }).eq(0).each(function (a) {
                                a = m[a];
                                a._detailsShow && a._details.insertAfter(a.nTr)
                            })
                        }), f.on("column-visibility.dt.DT_details", function (a, b) {
                            if (e === b)
                                for (var c, d = i(b), f = 0, g = m.length; f < g; f++) c = m[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
                        }), f.on("destroy.dt.DT_details", function (a, b) {
                            if (e === b)
                                for (var c = 0, d = m.length; c < d; c++) m[c]._details && uc(f, c)
                        }))
                }
            }
        };
    K("row().child()", function (a, b) {
        var c = this.context;
        if (a === n) return c.length && this.length ? c[0].aoData[this[0]]._details : n;
        if (!0 === a) this.child.show();
        else if (!1 === a) uc(this);
        else if (c.length && this.length) {
            var e = c[0],
                c = c[0].aoData[this[0]],
                k = [],
                f = function (a, b) {
                    if (d.isArray(a) || a instanceof d)
                        for (var c = 0, j = a.length; c < j; c++) f(a[c], b);
                    else a.nodeName && "tr" === a.nodeName.toLowerCase() ? k.push(a) : (c = d("<tr><td/></tr>").addClass(b), d("td", c).addClass(b).html(a)[0].colSpan = i(e), k.push(c[0]))
                };
            f(a, b);
            c._details && c._details.remove();
            c._details = d(k);
            c._detailsShow &&
                c._details.insertAfter(c.nTr)
        }
        return this
    });
    K(["row().child.show()", "row().child().show()"], function () {
        bb(this, !0);
        return this
    });
    K(["row().child.hide()", "row().child().hide()"], function () {
        bb(this, !1);
        return this
    });
    K(["row().child.remove()", "row().child().remove()"], function () {
        uc(this);
        return this
    });
    K("row().child.isShown()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var vc = /^([^:]+):(name|visIdx|visible)$/,
        fc = function (a, b, c, d, e) {
            for (var c = [], d = 0, f = e.length; d < f; d++) c.push(y(a, e[d], b));
            return c
        };
    K("columns()", function (a, b) {
        a === n ? a = "" : d.isPlainObject(a) && (b = a, a = "");
        var b = Ja(b),
            c = this.iterator("table", function (c) {
                var e = a,
                    f = b,
                    i = c.aoColumns,
                    l = xa(i, "sName"),
                    n = xa(i, "nTh");
                return Zb("column", e, function (a) {
                    var b = $b(a);
                    if (a === "") return ab(i.length);
                    if (b !== null) return [b >= 0 ? b : i.length + b];
                    if (typeof a === "function") {
                        var e = xb(c, f);
                        return d.map(i, function (b, d) {
                            return a(d, fc(c, d, 0, 0, e), n[d]) ? d : null
                        })
                    }
                    var k = typeof a === "string" ? a.match(vc) : "";
                    if (k) switch (k[2]) {
                        case "visIdx":
                        case "visible":
                            b =
                                parseInt(k[1], 10);
                            if (b < 0) {
                                var o = d.map(i, function (a, b) {
                                    return a.bVisible ? b : null
                                });
                                return [o[o.length + b]]
                            }
                            return [j(c, b)];
                        case "name":
                            return d.map(l, function (a, b) {
                                return a === k[1] ? b : null
                            });
                        default:
                            return []
                    }
                    if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
                    b = d(n).filter(a).map(function () {
                        return d.inArray(this, n)
                    }).toArray();
                    if (b.length || !a.nodeName) return b;
                    b = d(a).closest("*[data-dt-column]");
                    return b.length ? [b.data("dt-column")] : []
                }, c, f)
            }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    aa("columns().header()",
        "column().header()",
        function () {
            return this.iterator("column", function (a, b) {
                return a.aoColumns[b].nTh
            }, 1)
        });
    aa("columns().footer()", "column().footer()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].nTf
        }, 1)
    });
    aa("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", fc, 1)
    });
    aa("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].mData
        }, 1)
    });
    aa("columns().cache()", "column().cache()",
        function (a) {
            return this.iterator("column-rows", function (b, c, d, e, f) {
                return Aa(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
            }, 1)
        });
    aa("columns().nodes()", "column().nodes()", function () {
        return this.iterator("column-rows", function (a, b, c, d, e) {
            return Aa(a.aoData, e, "anCells", b)
        }, 1)
    });
    aa("columns().visible()", "column().visible()", function (a, b) {
        var c = this.iterator("column", function (b, c) {
            if (a === n) return b.aoColumns[c].bVisible;
            var e = b.aoColumns,
                i = e[c],
                l = b.aoData,
                j, o, p;
            if (a !== n && i.bVisible !== a) {
                if (a) {
                    var q =
                        d.inArray(!0, xa(e, "bVisible"), c + 1);
                    j = 0;
                    for (o = l.length; j < o; j++) p = l[j].nTr, e = l[j].anCells, p && p.insertBefore(e[c], e[q] || null)
                } else d(xa(b.aoData, "anCells", c)).detach();
                i.bVisible = a;
                ja(b, b.aoHeader);
                ja(b, b.aoFooter);
                mb(b)
            }
        });
        a !== n && (this.iterator("column", function (c, d) {
            da(c, null, "column-visibility", [c, d, a, b])
        }), (b === n || b) && this.columns.adjust());
        return c
    });
    aa("columns().indexes()", "column().index()", function (a) {
        return this.iterator("column", function (b, c) {
            return "visible" === a ? o(b, c) : c
        }, 1)
    });
    K("columns.adjust()",
        function () {
            return this.iterator("table", function (a) {
                p(a)
            }, 1)
        });
    K("column.index()", function (a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a) return j(c, b);
            if ("fromData" === a || "toVisible" === a) return o(c, b)
        }
    });
    K("column()", function (a, b) {
        return Ka(this.columns(a, b))
    });
    K("cells()", function (a, b, c) {
        d.isPlainObject(a) && (a.row === n ? (c = a, a = null) : (c = b, b = null));
        d.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === n) return this.iterator("table", function (b) {
            var e = a,
                f = Ja(c),
                g =
                b.aoData,
                i = xb(b, f),
                k = Wa(Aa(g, i, "anCells")),
                l = d([].concat.apply([], k)),
                j, m = b.aoColumns.length,
                o, p, r, q, t, s;
            return Zb("cell", e, function (a) {
                var c = typeof a === "function";
                if (a === null || a === n || c) {
                    o = [];
                    p = 0;
                    for (r = i.length; p < r; p++) {
                        j = i[p];
                        for (q = 0; q < m; q++) {
                            t = {
                                row: j,
                                column: q
                            };
                            if (c) {
                                s = g[j];
                                a(t, y(b, j, q), s.anCells ? s.anCells[q] : null) && o.push(t)
                            } else o.push(t)
                        }
                    }
                    return o
                }
                if (d.isPlainObject(a)) return [a];
                c = l.filter(a).map(function (a, b) {
                    return {
                        row: b._DT_CellIndex.row,
                        column: b._DT_CellIndex.column
                    }
                }).toArray();
                if (c.length ||
                    !a.nodeName) return c;
                s = d(a).closest("*[data-dt-row]");
                return s.length ? [{
                    row: s.data("dt-row"),
                    column: s.data("dt-column")
                }] : []
            }, b, f)
        });
        var e = this.columns(b, c),
            i = this.rows(a, c),
            f, j, l, o, p, q = this.iterator("table", function (a, b) {
                f = [];
                j = 0;
                for (l = i[b].length; j < l; j++) {
                    o = 0;
                    for (p = e[b].length; o < p; o++) f.push({
                        row: i[b][j],
                        column: e[b][o]
                    })
                }
                return f
            }, 1);
        d.extend(q.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return q
    });
    aa("cells().nodes()", "cell().node()", function () {
        return this.iterator("cell", function (a, b, c) {
            return (a = a.aoData[b]) &&
                a.anCells ? a.anCells[c] : n
        }, 1)
    });
    K("cells().data()", function () {
        return this.iterator("cell", function (a, b, c) {
            return y(a, b, c)
        }, 1)
    });
    aa("cells().cache()", "cell().cache()", function (a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function (b, c, d) {
            return b.aoData[c][a][d]
        }, 1)
    });
    aa("cells().render()", "cell().render()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            return y(b, c, d, a)
        }, 1)
    });
    aa("cells().indexes()", "cell().index()", function () {
        return this.iterator("cell", function (a,
            b, c) {
            return {
                row: b,
                column: c,
                columnVisible: o(a, c)
            }
        }, 1)
    });
    aa("cells().invalidate()", "cell().invalidate()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            Na(b, c, a, d)
        })
    });
    K("cell()", function (a, b, c) {
        return Ka(this.cells(a, b, c))
    });
    K("cell().data()", function (a) {
        var b = this.context,
            c = this[0];
        if (a === n) return b.length && c.length ? y(b[0], c[0].row, c[0].column) : n;
        Da(b[0], c[0].row, c[0].column, a);
        Na(b[0], c[0].row, "data", c[0].column);
        return this
    });
    K("order()", function (a, b) {
        var c = this.context;
        if (a === n) return 0 !==
            c.length ? c[0].aaSorting : n;
        "number" === typeof a ? a = [
            [a, b]
        ] : a.length && !d.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function (b) {
            b.aaSorting = a.slice()
        })
    });
    K("order.listener()", function (a, b, c) {
        return this.iterator("table", function (d) {
            vb(d, a, b, c)
        })
    });
    K("order.fixed()", function (a) {
        if (!a) {
            var b = this.context,
                b = b.length ? b[0].aaSortingFixed : n;
            return d.isArray(b) ? {
                pre: b
            } : b
        }
        return this.iterator("table", function (b) {
            b.aaSortingFixed = d.extend(!0, {}, a)
        })
    });
    K(["columns().order()",
        "column().order()"
    ], function (a) {
        var b = this;
        return this.iterator("table", function (c, e) {
            var i = [];
            d.each(b[e], function (b, c) {
                i.push([c, a])
            });
            c.aaSorting = i
        })
    });
    K("search()", function (a, b, c, e) {
        var i = this.context;
        return a === n ? 0 !== i.length ? i[0].oPreviousSearch.sSearch : n : this.iterator("table", function (f) {
            f.oFeatures.bFilter && jb(f, d.extend({}, f.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === e ? !0 : e
            }), 1)
        })
    });
    aa("columns().search()", "column().search()", function (a,
        b, c, e) {
        return this.iterator("column", function (i, f) {
            var j = i.aoPreSearchCols;
            if (a === n) return j[f].sSearch;
            i.oFeatures.bFilter && (d.extend(j[f], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === e ? !0 : e
            }), jb(i, i.oPreviousSearch, 1))
        })
    });
    K("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null
    });
    K("state.clear()", function () {
        return this.iterator("table", function (a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {})
        })
    });
    K("state.loaded()", function () {
        return this.context.length ?
            this.context[0].oLoadedState : null
    });
    K("state.save()", function () {
        return this.iterator("table", function (a) {
            mb(a)
        })
    });
    A.versionCheck = A.fnVersionCheck = function (a) {
        for (var b = A.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
            if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        return !0
    };
    A.isDataTable = A.fnIsDataTable = function (a) {
        var b = d(a).get(0),
            c = !1;
        d.each(A.settings, function (a, e) {
            var f = e.nScrollHead ? d("table", e.nScrollHead)[0] : null,
                i = e.nScrollFoot ? d("table", e.nScrollFoot)[0] :
                null;
            if (e.nTable === b || f === b || i === b) c = !0
        });
        return c
    };
    A.tables = A.fnTables = function (a) {
        var b = !1;
        d.isPlainObject(a) && (b = a.api, a = a.visible);
        var c = d.map(A.settings, function (b) {
            if (!a || a && d(b.nTable).is(":visible")) return b.nTable
        });
        return b ? new Q(c) : c
    };
    A.camelToHungarian = H;
    K("$()", function (a, b) {
        var c = this.rows(b).nodes(),
            c = d(c);
        return d([].concat(c.filter(a).toArray(), c.find(a).toArray()))
    });
    d.each(["on", "one", "off"], function (a, b) {
        K(b + "()", function () {
            var a = Array.prototype.slice.call(arguments);
            a[0].match(/\.dt\b/) ||
                (a[0] += ".dt");
            var e = d(this.tables().nodes());
            e[b].apply(e, a);
            return this
        })
    });
    K("clear()", function () {
        return this.iterator("table", function (a) {
            fa(a)
        })
    });
    K("settings()", function () {
        return new Q(this.context, this.context)
    });
    K("init()", function () {
        var a = this.context;
        return a.length ? a[0].oInit : null
    });
    K("data()", function () {
        return this.iterator("table", function (a) {
            return xa(a.aoData, "_aData")
        }).flatten()
    });
    K("destroy()", function (a) {
        a = a || !1;
        return this.iterator("table", function (b) {
            var c = b.nTableWrapper.parentNode,
                e = b.oClasses,
                i = b.nTable,
                f = b.nTBody,
                j = b.nTHead,
                l = b.nTFoot,
                n = d(i),
                f = d(f),
                o = d(b.nTableWrapper),
                p = d.map(b.aoData, function (a) {
                    return a.nTr
                }),
                q;
            b.bDestroying = !0;
            da(b, "aoDestroyCallback", "destroy", [b]);
            a || (new Q(b)).columns().visible(!0);
            o.unbind(".DT").find(":not(tbody *)").unbind(".DT");
            d(G).unbind(".DT-" + b.sInstance);
            i != j.parentNode && (n.children("thead").detach(), n.append(j));
            l && i != l.parentNode && (n.children("tfoot").detach(), n.append(l));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            Za(b);
            d(p).removeClass(b.asStripeClasses.join(" "));
            d("th, td", j).removeClass(e.sSortable + " " + e.sSortableAsc + " " + e.sSortableDesc + " " + e.sSortableNone);
            b.bJUI && (d("th span." + e.sSortIcon + ", td span." + e.sSortIcon, j).detach(), d("th, td", j).each(function () {
                var a = d("div." + e.sSortJUIWrapper, this);
                d(this).append(a.contents());
                a.detach()
            }));
            f.children().detach();
            f.append(p);
            j = a ? "remove" : "detach";
            n[j]();
            o[j]();
            !a && c && (c.insertBefore(i, b.nTableReinsertBefore), n.css("width", b.sDestroyWidth).removeClass(e.sTable), (q = b.asDestroyStripes.length) && f.children().each(function (a) {
                d(this).addClass(b.asDestroyStripes[a %
                    q])
            }));
            c = d.inArray(b, A.settings); -1 !== c && A.settings.splice(c, 1)
        })
    });
    d.each(["column", "row", "cell"], function (a, b) {
        K(b + "s().every()", function (a) {
            var d = this.selector.opts,
                e = this;
            return this.iterator(b, function (f, i, j, o, p) {
                a.call(e[b](i, "cell" === b ? j : d, "cell" === b ? d : n), i, j, o, p)
            })
        })
    });
    K("i18n()", function (a, b, c) {
        var e = this.context[0],
            a = B(a)(e.oLanguage);
        a === n && (a = b);
        c !== n && d.isPlainObject(a) && (a = a[c] !== n ? a[c] : a._);
        return a.replace("%d", c)
    });
    A.version = "1.10.12";
    A.settings = [];
    A.models = {};
    A.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    };
    A.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    A.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    A.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bJQueryUI: !1,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
            } catch (b) { }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (a, b) {
            try {
                (-1 ===
                    a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) { }
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "Primeiro",
                sLast: "Último",
                sNext: "Próximo",
                sPrevious: "Anterior"
            },
            sEmptyTable: "Sem dados disponíveis na tabela",
            sInfo: "Mostrando _START_ para _END_ de _TOTAL_ entradas",
            sInfoEmpty: "Mostrando 0 para 0 de 0 entradas",
            sInfoFiltered: "(filtrado _MAX_ total entradas)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Mostrar _MENU_ entradas",
            sLoadingRecords: "Carregando...",
            sProcessing: "Em processamento...",
            sSearch: "Pesquisa:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "Nenhum registro correspondente encontrado"
        },
        oSearch: d.extend({}, A.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    s(A.defaults);
    A.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    s(A.defaults.column);
    A.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: n,
        oAjaxData: n,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        bJUI: null,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
            return "ssp" == la(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function () {
            return "ssp" == la(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function () {
            var a =
                this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
            return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    A.ext = T = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: A.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: A.version
    };
    d.extend(T, {
        afnFiltering: T.search,
        aTypes: T.type.detect,
        ofnSearch: T.type.search,
        oSort: T.type.order,
        afnSortData: T.order,
        aoFeatures: T.feature,
        oApi: T.internal,
        oStdClasses: T.classes,
        oPagination: T.pager
    });
    d.extend(A.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var yb = "",
        yb = "",
        Ca = yb + "ui-state-default",
        cb = yb + "css_right ui-icon ui-icon-",
        wc = yb + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    d.extend(A.ext.oJUIClasses,
        A.ext.classes, {
            sPageButton: "fg-button ui-button " + Ca,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: Ca + " sorting_asc",
            sSortDesc: Ca + " sorting_desc",
            sSortable: Ca + " sorting",
            sSortableAsc: Ca + " sorting_asc_disabled",
            sSortableDesc: Ca + " sorting_desc_disabled",
            sSortableNone: Ca + " sorting_disabled",
            sSortJUIAsc: cb + "triangle-1-n",
            sSortJUIDesc: cb + "triangle-1-s",
            sSortJUI: cb +
                "carat-2-n-s",
            sSortJUIAscAllowed: cb + "carat-1-n",
            sSortJUIDescAllowed: cb + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + Ca,
            sScrollFoot: "dataTables_scrollFoot " + Ca,
            sHeaderTH: Ca,
            sFooterTH: Ca,
            sJUIHeader: wc + " ui-corner-tl ui-corner-tr",
            sJUIFooter: wc + " ui-corner-bl ui-corner-br"
        });
    var xc = A.ext.pager;
    d.extend(xc, {
        simple: function () {
            return ["previous", "next"]
        },
        full: function () {
            return ["first", "previous", "next", "last"]
        },
        numbers: function (a,
            b) {
            return [Ha(a, b)]
        },
        simple_numbers: function (a, b) {
            return ["previous", Ha(a, b), "next"]
        },
        full_numbers: function (a, b) {
            return ["first", "previous", Ha(a, b), "next", "last"]
        },
        _numbers: Ha,
        numbers_length: 7
    });
    d.extend(!0, A.ext.renderer, {
        pageButton: {
            _: function (a, b, c, e, i, f) {
                var j = a.oClasses,
                    l = a.oLanguage.oPaginate,
                    n = a.oLanguage.oAria.paginate || {},
                    o, p, t = 0,
                    s = function (b, e) {
                        var g, q, u, y, w = function (b) {
                            Sa(a, b.data.action, true)
                        };
                        g = 0;
                        for (q = e.length; g < q; g++) {
                            y = e[g];
                            if (d.isArray(y)) {
                                u = d("<" + (y.DT_el || "div") + "/>").appendTo(b);
                                s(u, y)
                            } else {
                                o = null;
                                p = "";
                                switch (y) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        o = l.sFirst;
                                        p = y + (i > 0 ? "" : " " + j.sPageButtonDisabled);
                                        break;
                                    case "previous":
                                        o = l.sPrevious;
                                        p = y + (i > 0 ? "" : " " + j.sPageButtonDisabled);
                                        break;
                                    case "next":
                                        o = l.sNext;
                                        p = y + (i < f - 1 ? "" : " " + j.sPageButtonDisabled);
                                        break;
                                    case "last":
                                        o = l.sLast;
                                        p = y + (i < f - 1 ? "" : " " + j.sPageButtonDisabled);
                                        break;
                                    default:
                                        o = y + 1;
                                        p = i === y ? j.sPageButtonActive : ""
                                }
                                if (o !== null) {
                                    u = d("<a>", {
                                        "class": j.sPageButton + " " + p,
                                        "aria-controls": a.sTableId,
                                        "aria-label": n[y],
                                        "data-dt-idx": t,
                                        tabindex: a.iTabIndex,
                                        id: c === 0 && typeof y === "string" ? a.sTableId + "_" + y : null
                                    }).html(o).appendTo(b);
                                    Ya(u, {
                                        action: y
                                    }, w);
                                    t++
                                }
                            }
                        }
                    },
                    u;
                try {
                    u = d(b).find(q.activeElement).data("dt-idx")
                } catch (y) { }
                s(d(b).empty(), e);
                u && d(b).find("[data-dt-idx=" + u + "]").focus()
            }
        }
    });
    d.extend(A.ext.type.detect, [function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Ta(a, c) ? "num" + c : null
    }, function (a) {
        if (a && !(a instanceof Date) && (!Ic.test(a) || !pc.test(a))) return null;
        var b = Date.parse(a);
        return null !== b && !isNaN(b) ||
            Ia(a) ? "date" : null
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;
        return Ta(a, c, !0) ? "num-fmt" + c : null
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;
        return sc(a, c) ? "html-num" + c : null
    }, function (a, b) {
        var c = b.oLanguage.sDecimal;
        return sc(a, c, !0) ? "html-num-fmt" + c : null
    }, function (a) {
        return Ia(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]);
    d.extend(A.ext.type.search, {
        html: function (a) {
            return Ia(a) ? a : "string" === typeof a ? a.replace(za, " ").replace(wa, "") : ""
        },
        string: function (a) {
            return Ia(a) ? a : "string" === typeof a ?
                a.replace(za, " ") : a
        }
    });
    var Ob = function (a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = rc(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a
    };
    d.extend(T.type.order, {
        "date-pre": function (a) {
            return Date.parse(a) || -Infinity
        },
        "html-pre": function (a) {
            return Ia(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        },
        "string-pre": function (a) {
            return Ia(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
        },
        "string-asc": function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        "string-desc": function (a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
    });
    X("");
    d.extend(!0, A.ext.renderer, {
        header: {
            _: function (a, b, c, e) {
                d(a.nTable).on("order.dt.DT", function (d, f, i, j) {
                    if (a === f) {
                        d = c.idx;
                        b.removeClass(c.sSortingClass + " " + e.sSortAsc + " " + e.sSortDesc).addClass(j[d] == "asc" ? e.sSortAsc : j[d] == "desc" ? e.sSortDesc : c.sSortingClass)
                    }
                })
            },
            jqueryui: function (a, b, c, e) {
                d("<div/>").addClass(e.sSortJUIWrapper).append(b.contents()).append(d("<span/>").addClass(e.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                d(a.nTable).on("order.dt.DT",
                    function (d, f, i, j) {
                        if (a === f) {
                            d = c.idx;
                            b.removeClass(e.sSortAsc + " " + e.sSortDesc).addClass(j[d] == "asc" ? e.sSortAsc : j[d] == "desc" ? e.sSortDesc : c.sSortingClass);
                            b.find("span." + e.sSortIcon).removeClass(e.sSortJUIAsc + " " + e.sSortJUIDesc + " " + e.sSortJUI + " " + e.sSortJUIAscAllowed + " " + e.sSortJUIDescAllowed).addClass(j[d] == "asc" ? e.sSortJUIAsc : j[d] == "desc" ? e.sSortJUIDesc : c.sSortingClassJUI)
                        }
                    })
            }
        }
    });
    var Ga = function (a) {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
    };
    A.render = {
        number: function (a, b, c, d, e) {
            return {
                display: function (f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var i = 0 > f ? "-" : "",
                        j = parseFloat(f);
                    if (isNaN(j)) return Ga(f);
                    f = Math.abs(j);
                    j = parseInt(f, 10);
                    f = c ? b + (f - j).toFixed(c).substring(2) : "";
                    return i + (d || "") + j.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                }
            }
        },
        text: function () {
            return {
                display: Ga
            }
        }
    };
    d.extend(A.ext.internal, {
        _fnExternApiFunc: Ba,
        _fnBuildAjax: qb,
        _fnAjaxUpdate: Vb,
        _fnAjaxParameters: Db,
        _fnAjaxUpdateDraw: Eb,
        _fnAjaxDataSrc: ib,
        _fnAddColumn: M,
        _fnColumnOptions: w,
        _fnAdjustColumnSizing: p,
        _fnVisibleToColumnIndex: j,
        _fnColumnIndexToVisible: o,
        _fnVisbleColumns: i,
        _fnGetColumns: t,
        _fnColumnTypes: I,
        _fnApplyColumnDefs: Y,
        _fnHungarianMap: s,
        _fnCamelToHungarian: H,
        _fnLanguageCompat: v,
        _fnBrowserDetect: E,
        _fnAddData: u,
        _fnAddTr: ma,
        _fnNodeToDataIndex: function (a, b) {
            return b._DT_RowIndex !== n ? b._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function (a, b, c) {
            return d.inArray(c, a.aoData[b].anCells)
        },
        _fnGetCellData: y,
        _fnSetCellData: Da,
        _fnSplitObjNotation: S,
        _fnGetObjectDataFn: B,
        _fnSetObjectDataFn: ea,
        _fnGetDataMaster: L,
        _fnClearTable: fa,
        _fnDeleteIndex: ra,
        _fnInvalidate: Na,
        _fnGetRowElements: Ea,
        _fnCreateTr: W,
        _fnBuildHead: Ua,
        _fnDrawHead: ja,
        _fnDraw: ya,
        _fnReDraw: va,
        _fnAddOptionsHtml: Ub,
        _fnDetectHeader: ka,
        _fnGetUniqueThs: Oa,
        _fnFeatureHtmlFilter: Wb,
        _fnFilterComplete: jb,
        _fnFilterCustom: La,
        _fnFilterColumn: D,
        _fnFilter: Ra,
        _fnFilterCreateSearch: Bb,
        _fnEscapeRegex: dc,
        _fnFilterData: Fb,
        _fnFeatureHtmlInfo: jc,
        _fnUpdateInfo: Xa,
        _fnInfoMacros: C,
        _fnInitialise: e,
        _fnInitComplete: Gb,
        _fnLengthChange: Yb,
        _fnFeatureHtmlLength: kc,
        _fnFeatureHtmlPaginate: lc,
        _fnPageChange: Sa,
        _fnFeatureHtmlProcessing: Hb,
        _fnProcessingDisplay: R,
        _fnFeatureHtmlTable: Jb,
        _fnScrollDraw: sa,
        _fnApplyToChildren: na,
        _fnCalculateColumnWidths: tb,
        _fnThrottle: ec,
        _fnConvertToWidth: ac,
        _fnGetWidestNode: nc,
        _fnGetMaxLenString: oc,
        _fnStringToCss: Z,
        _fnSortFlatten: Va,
        _fnSort: bc,
        _fnSortAria: sb,
        _fnSortListener: ub,
        _fnSortAttachListener: vb,
        _fnSortingClasses: Za,
        _fnSortData: Kb,
        _fnSaveState: mb,
        _fnLoadState: $a,
        _fnSettingsFromNode: ba,
        _fnLog: O,
        _fnMap: ta,
        _fnBindAction: Ya,
        _fnCallbackReg: pa,
        _fnCallbackFire: da,
        _fnLengthOverflow: lb,
        _fnRenderer: Pa,
        _fnDataSource: la,
        _fnRowAttributes: Fa,
        _fnCalculateEnd: function () { }
    });
    d.fn.dataTable = A;
    A.$ = d;
    d.fn.dataTableSettings = A.settings;
    d.fn.dataTableExt = A.ext;
    d.fn.DataTable = function (a) {
        return d(this).dataTable(a).api()
    };
    d.each(A, function (a, b) {
        d.fn.DataTable[a] = b
    });
    return d.fn.dataTable
});
(function (d) {
    function G() {
        var i = M.scrollLeft(),
            j = M.width();
        d([fa, Fa]).css("left", i + j / 2);
        I && d(L).css({
            left: i,
            top: M.scrollTop(),
            width: j,
            height: M.height()
        })
    }

    function q(i) {
        i ? d("object").add(y ? "select" : "embed").each(function (d, i) {
            Da[d] = [i, i.style.visibility];
            i.style.visibility = "hidden"
        }) : (d.each(Da, function (d, i) {
            i[0].style.visibility = i[1]
        }), Da = []);
        i = i ? "bind" : "unbind";
        M[i]("scroll resize", G);
        d(document)[i]("keydown", n)
    }

    function n(i) {
        var i = i.which,
            j = d.inArray;
        return 0 <= j(i, w.closeKeys) ? U() : 0 <= j(i, w.nextKeys) ?
            H() : 0 <= j(i, w.previousKeys) ? s() : null
    }

    function s() {
        return v(i)
    }

    function H() {
        return v(t)
    }

    function v(d) {
        0 <= d && (j = d, o = p[j][0], i = (j || (w.loop ? p.length : 0)) - 1, t = (j + 1) % p.length || (w.loop ? 0 : -1), E(), fa.className = "lbLoading", S = new Image, S.onload = P, S.src = o);
        return !1
    }

    function P() {
        fa.className = "";
        d(ra).css({
            backgroundImage: "url(" + o + ")",
            visibility: "hidden",
            display: ""
        });
        d(Na).width(S.width);
        d([Na, Ea, W]).height(S.height);
        d(ja).html(p[j][1] || "");
        d(ya).html((1 < p.length && w.counterText || "").replace(/{x}/, j + 1).replace(/{y}/,
            p.length));
        0 <= i && (B.src = p[i][0]);
        0 <= t && (ea.src = p[t][0]);
        u = ra.offsetWidth;
        ma = ra.offsetHeight;
        var n = Math.max(0, Y - ma / 2);
        fa.offsetHeight != ma && d(fa).animate({
            height: ma,
            top: n
        }, w.resizeDuration, w.resizeEasing);
        fa.offsetWidth != u && d(fa).animate({
            width: u,
            marginLeft: -u / 2
        }, w.resizeDuration, w.resizeEasing);
        d(fa).queue(function () {
            d(Fa).css({
                width: u,
                top: n + ma,
                marginLeft: -u / 2,
                visibility: "hidden",
                display: ""
            });
            d(ra).css({
                display: "none",
                visibility: "",
                opacity: ""
            }).fadeIn(w.imageFadeDuration, V)
        })
    }

    function V() {
        0 <= i && d(Ea).show();
        0 <= t && d(W).show();
        d(Ua).css("marginTop", -Ua.offsetHeight).animate({
            marginTop: 0
        }, w.captionAnimationDuration);
        Fa.style.visibility = ""
    }

    function E() {
        S.onload = null;
        S.src = B.src = ea.src = o;
        d([fa, ra, Ua]).stop(!0);
        d([Ea, W, ra, Fa]).hide()
    }

    function U() {
        0 <= j && (E(), j = i = t = -1, d(fa).hide(), d(L).stop().fadeOut(w.overlayFadeDuration, q));
        return !1
    }
    var M = d(window),
        w, p, j = -1,
        o, i, t, I, Y, u, ma, y = !window.XMLHttpRequest,
        Da = [],
        S = {},
        B = new Image,
        ea = new Image,
        L, fa, ra, Na, Ea, W, Fa, Ua, ja, ya;
    d(function () {
        d("body").append(d([L = d('<div id="lbOverlay" />').click(U)[0],
            fa = d('<div id="lbCenter" />')[0], Fa = d('<div id="lbBottomContainer" />')[0]
        ]).css("display", "none"));
        ra = d('<div id="lbImage" />').appendTo(fa).append(Na = d('<div style="position: relative;" />').append([Ea = d('<a id="lbPrevLink" href="#" />').click(s)[0], W = d('<a id="lbNextLink" href="#" />').click(H)[0]])[0])[0];
        Ua = d('<div id="lbBottom" />').appendTo(Fa).append([d('<a id="lbCloseLink" href="#" />').click(U)[0], ja = d('<div id="lbCaption" />')[0], ya = d('<div id="lbNumber" />')[0], d('<div style="clear: both;" />')[0]])[0]
    });
    d.slimbox = function (i, j, n) {
        w = d.extend({
            loop: !1,
            overlayOpacity: 0.8,
            overlayFadeDuration: 400,
            resizeDuration: 400,
            resizeEasing: "swing",
            initialWidth: 250,
            initialHeight: 250,
            imageFadeDuration: 400,
            captionAnimationDuration: 400,
            counterText: "Image {x} of {y}",
            closeKeys: [27, 88, 67],
            previousKeys: [37, 80],
            nextKeys: [39, 78]
        }, n);
        "string" == typeof i && (i = [
            [i, j]
        ], j = 0);
        Y = M.scrollTop() + M.height() / 2;
        u = w.initialWidth;
        ma = w.initialHeight;
        d(fa).css({
            top: Math.max(0, Y - ma / 2),
            width: u,
            height: ma,
            marginLeft: -u / 2
        }).show();
        if (I = y || L.currentStyle &&
            "fixed" != L.currentStyle.position) L.style.position = "absolute";
        d(L).css("opacity", w.overlayOpacity).fadeIn(w.overlayFadeDuration);
        G();
        q(1);
        p = i;
        w.loop = w.loop && 1 < p.length;
        return v(j)
    };
    d.fn.slimbox = function (i, j, n) {
        var j = j || function (d) {
            console.log(d);
            return [d.href, d.title]
        },
            n = n || function () {
                return !0
            },
            o = this;
        return o.unbind("click").click(function () {
            var p = this,
                q = 0,
                t, s = 0,
                u;
            t = d.grep(o, function (d, i) {
                return n.call(p, d, i)
            });
            for (u = t.length; s < u; ++s) t[s] == p && (q = s), t[s] = j(t[s], s);
            return d.slimbox(t, q, i)
        })
    }
})(jQuery);
(function (d, G) {
    var q, n;
    d.uaMatch = function (d) {
        d = d.toLowerCase();
        d = /(opr)[\/]([\w.]+)/.exec(d) || /(chrome)[ \/]([\w.]+)/.exec(d) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(d) || /(webkit)[ \/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || 0 <= d.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(d) || 0 > d.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [];
        return {
            browser: d[3] || d[1] || "",
            version: d[2] || "0"
        }
    };
    q = d.uaMatch(G.navigator.userAgent);
    n = {};
    q.browser && (n[q.browser] = !0, n.version = q.version, n.versionNumber = parseFloat(q.version, 10));
    if (n.chrome || n.opr || n.safari) n.webkit = !0;
    n.rv && (q.browser = "msie", n.msie = !0);
    n.opr && (q.browser = "opera", n.opera = !0);
    n.name = q.browser;
    d.browser = n
})(jQuery, window);
(function () {
    function d(d, i, j, n) {
        for (var o = {}, d = d.split(j), j = 0; j < d.length; j++) {
            var p = d[j],
                q = p.indexOf(i);
            if (0 < q) {
                var t = p.substring(0, q),
                    t = n ? t.toUpperCase() : t.toLowerCase(),
                    p = p.substring(q + 1, p.length);
                o[t] = p
            }
        }
        return o
    }

    function G(d, i, j) {
        if (j) {
            var n = d.slice(-1),
                i = [d, "?" == n ? "" : "&", i, "=", encodeURIComponent(j)].join("");
            if (2048 >= i.length) return i
        }
        return d
    }
    var q = window,
        n = q.googleSearchResizeIframe || q.googleSearchPath && "/cse" == q.googleSearchPath && "undefined" == typeof q.googleSearchResizeIframe,
        s = document.location.protocol,
        H = document.location.search,
        v, P, V, E;
    (P = q.googleSearchNumAds) || (P = 9);
    V = (V = q.googleNumSearchResults) ? Math.min(V, 20) : 10;
    var U = {
        9: 795,
        10: 795,
        11: 500
    },
        M;
    M = P;
    var w = V,
        p = "/cse" == q.googleSearchPath,
        j = {};
    j[9] = 300 + 90 * w;
    j[10] = 300 + 50 * Math.min(M, 4) + 90 * w;
    j[11] = 300 + 50 * M + 90 * w;
    if (p) {
        M = 660 + 120 * w;
        for (w = 9; 11 >= w; w++) j[w] = Math.max(j[w], M)
    }
    M = j;
    w = "";
    w = q.googleSearchDomain ? w + q.googleSearchDomain : w + "www.google.com";
    w = q.googleSearchPath ? w + q.googleSearchPath : w + "/custom";
    w = "//" + w + "?";
    q.googleSearchQueryString && (q.googleSearchQueryString =
        q.googleSearchQueryString.toLowerCase());
    var o, s = H;
    if (1 > s.length) o = "";
    else {
        s = s.substring(1, s.length);
        s = d(s, "=", "&", !1);
        "q" != q.googleSearchQueryString && s[q.googleSearchQueryString] && (s.q = s[q.googleSearchQueryString], delete s[q.googleSearchQueryString]);
        s.cof && (H = d(decodeURIComponent(s.cof), ":", ";", !0), (H = H.FORID) && (v = parseInt(H, 10)));
        s.siteurl && (E = decodeURIComponent(s.siteurl));
        if (H = document.getElementById(q.googleSearchFormName))
            if (!H.q || !s.q || s.ie && "utf-8" != s.ie.toLowerCase() || (H.q.value = decodeURIComponent(s.q.replace(/\+/g,
                    " "))), H.sitesearch)
                for (p = 0; p < H.sitesearch.length; p++) H.sitesearch[p].checked = null == s.sitesearch && "" == H.sitesearch[p].value ? !0 : H.sitesearch[p].value == s.sitesearch ? !0 : !1;
        H = "";
        for (o in s) H += "&" + o + "=" + s[o];
        o = H.substring(1, H.length)
    }
    w = G(w + o, "ad", "n" + P);
    w = G(w, "num", V);
    w = G(w, "adtest", q.googleAdtest);
    n && (o = q.location.href, s = o.indexOf("#"), -1 != s && (o = o.substring(0, s)), w = G(w, "rurl", o));
    o = w;
    w = q.document.getElementById(q.googleSearchFormName);
    E || (E = q.document.referrer, o = G(o, "siteurl", E));
    w && !w.siteurl && (s = document.createElement("input"),
        s.name = "siteurl", s.type = "hidden", s.value = E, w.appendChild(s));
    P = o;
    q.googleSearchFrameborder || (q.googleSearchFrameborder = "0");
    if ((V = document.getElementById(q.googleSearchIframeName)) && U[v]) {
        U = q.googleSearchFrameWidth ? Math.max(q.googleSearchFrameWidth, U[v]) : U[v];
        M = q.googleSearchFrameHeight ? Math.max(q.googleSearchFrameHeight, M[v]) : M[v];
        var i = document.createElement("iframe");
        P = {
            name: "googleSearchFrame",
            src: P,
            frameBorder: q.googleSearchFrameborder,
            width: U,
            height: M,
            marginWidth: "0",
            marginHeight: "0",
            hspace: "0",
            vspace: "0",
            allowTransparency: "true",
            scrolling: "no"
        };
        for (var t in P) i.setAttribute(t, P[t]);
        V.appendChild(i);
        i.attachEvent ? i.attachEvent("onload", function () {
            window.scrollTo(0, 0)
        }) : i.addEventListener("load", function () {
            window.scrollTo(0, 0)
        }, !1);
        n && q.setInterval(function () {
            if (q.location.hash && "#" != q.location.hash) {
                var d = q.location.hash.substring(1) + "px";
                i.height != d && "0px" != d && (i.height = d)
            }
        }, 10)
    }
    q.googleSearchIframeName = null;
    q.googleSearchFormName = null;
    q.googleSearchResizeIframe = null;
    q.googleSearchQueryString =
        null;
    q.googleSearchDomain = null;
    q.googleSearchPath = null;
    q.googleSearchFrameborder = null;
    q.googleSearchFrameWidth = null;
    q.googleSearchFrameHeight = null;
    q.googleSearchNumAds = null;
    q.googleNumSearchResults = null;
    q.googleAdtest = null
})();
(function () {
    function d(d) {
        V !== d && ($("div.fw-header").toggleClass("scrolling", d), V = d)
    }

    function G() {
        P = [{
            tag: "h2",
            top: 0,
            el: $("div.fw-page-nav li").eq(0)
        }];
        $("div.content h2, div.content h3").each(function () {
            P.push({
                tag: this.nodeName.toLowerCase(),
                top: $(this).offset().top + 50,
                el: $(this)
            })
        });
        $(document).trigger("scroll")
    }

    function q(d) {
        !d || 700 > $(window).width() ? n() : (j && j.abort(), j = $.ajax({
            url: "https://QRPLF8BTN5-dsn.algolia.net/1/indexes/dt-site/query",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            headers: {
                "X-Algolia-API-Key": "473e4e7a9b9925c7e3bd228c7921b41f",
                "X-Algolia-Application-Id": "QRPLF8BTN5"
            },
            data: JSON.stringify({
                params: "query=" + encodeURIComponent(d)
            }),
            success: function (q) {
                j = null;
                var s = $(window).height() - 125,
                    v = 0;
                $("#searchResults").length || (p.appendTo("body"), w.appendTo("body"));
                M.empty();
                $.each(q.hits, function (d, i) {
                    if (!(s - v * 75 < 75)) {
                        v++;
                        var j = _searchTypes[i.docType](i),
                            n = $('<a href="' + j.url + '" class="result">').data("url", j.url),
                            o = $('<div class="result-type">').appendTo(n),
                            p = $('<div class="result-details">').appendTo(n),
                            q = $('<div class="result-tags">').appendTo(p),
                            t = $('<div class="result-title">').appendTo(p),
                            u = $('<div class="result-content">');
                        $.isArray(j.type) ? $.each(j.type, function (d, i) {
                            o.append('<div class="result-type-' + d + '">' + i + "</div>")
                        }) : o.append('<div class="result-type-only">' + j.type + "</div>");
                        $.isArray(j.title) ? $.each(j.title, function (d, i) {
                            t.append('<div class="result-title-' + d + '">' + i + "</div>")
                        }) : t.append('<div class="result-title-only">' + j.title + "</div>");
                        $.isArray(j.tags) && $.each(j.tags, function (d, i) {
                            q.append('<div class="result-tag-' +
                                d + '">' + i + "</div>")
                        });
                        u.html(j.matching).appendTo(p);
                        M.append(n)
                    }
                });
                var u = "Found: " + q.nbHits + " matches.";
                q.nbHits > v && (u += " Showing first " + v + ".");
                u += ' <a href="/q/' + encodeURIComponent(d) + '">Go &gt;</a>';
                E.empty().append("<h2>Search results</h2>").append("<div>" + u + "</div>");
                o || (U.css("max-height", $(window).height() - 100), $("#search div.search-clear").css("display", "block"), p.css("display", "block"), w.css("display", "block"), setTimeout(function () {
                    p.css("opacity", 1);
                    w.css("opacity", 1)
                }, 10), $("#search input").on("keydown.site-search",
                    function (d) {
                        var i;
                        if (d.keyCode === 38) {
                            d.preventDefault();
                            i = $("#searchResults a.result.active");
                            i.length ? i[0] !== $("#searchResults a.result:first")[0] && i.removeClass("active").prev().addClass("active") : $("#searchResults a.result:last").addClass("active")
                        } else if (d.keyCode === 40) {
                            d.preventDefault();
                            i = $("#searchResults a.result.active");
                            i.length ? i[0] !== $("#searchResults a.result:last")[0] && i.removeClass("active").next().addClass("active") : $("#searchResults a.result:first").addClass("active")
                        } else if (d.keyCode ===
                            13) {
                            i = $("#searchResults a.result.active");
                            if (i.length) {
                                d.preventDefault();
                                window.location.href = i.data("url")
                            }
                        } else d.keyCode === 27 && n()
                    }), p.on("mouseenter.site-search", "a.result", function () {
                        $("#searchResults a.result.active").removeClass("active");
                        $(this).addClass("active")
                    }), $(window).on("resize.site-search", function () {
                        U.css("max-height", $(window).height() - 100)
                    }), o = !0)
            }
        }))
    }

    function n() {
        o && ($("#search input").val(""), $("#search div.search-clear").css("display", "none"), p.css("opacity", 0), w.css("opacity",
            0), setTimeout(function () {
                p.css("display", "none");
                w.css("display", "none")
            }, 300), $("#search input").off("keyup.site-search"), $(window).off(".site-search"), p.off("mouseenter.site-search"), o = !1)
    }

    function s(d) {
        var d = new Date(1E3 * d),
            j = d.getUTCDate();
        return (1 === j ? j + "st" : 2 === j ? j + "nd" : 3 === j ? j + "rd" : j + "th") + " " + "Jan Feb Mar Apr May June July Aug Sept Oct Nov Dec".split(" ")[d.getUTCMonth()] + " " + d.getUTCFullYear()
    }

    function H(d) {
        if (!d) return "";
        d = d.replace(/<code.*?>(.*?)<\/code>/g, function (d, i) {
            return "``-1" + i +
                "``-2"
        });
        d = d.replace(/<em>(.*?)<\/em>/g, function (d, i) {
            return "``-3" + i + "``-4"
        });
        d = d.replace(/<.*?>/g, "");
        return d.replace(/``-1/g, "<code>").replace(/``-2/g, "</code>").replace(/``-3/g, "<em>").replace(/``-4/g, "</em>")
    }

    function v(d, j) {
        return d._highlightResult && d._highlightResult[j] ? H(d._highlightResult[j].value) : H(d[j])
    }
    SyntaxHighlighter.config.tagName = "code";
    var P = [];
    $(document).ready(function () {
        $('<div class="search-clear">&times;</div>').on("click", function () {
            $("#search input").val("");
            q("")
        }).insertAfter("#search input");
        var i = "";
        $("#search input").on("keyup", function () {
            this.value !== i && (i = this.value, q(this.value), d("" !== this.value || $(document).scrollTop() ? !0 : !1))
        });
        $("#search form").on("submit", function (d) {
            d.preventDefault();
            window.location.href = "/q/" + encodeURI($("#search input").val())
        });
        $("body").hasClass("comments") && $('<a name="Comments"></a><h2 class="comments_title" data-anchor="Comments">Comments</h2><div class="comments"></div>').appendTo($("div.comments-insert").length ? $("div.comments-insert") : $("div.content"));
        var j = function (i) {
            var j = "";
            if (i || $("#search input").val()) j = "scrolling";
            d("" !== j)
        };
        if ($("div.page-nav").length) {
            var n = $("<ul/>").append('<li><a href="#top" class="active">Top</a></li>'),
                o;
            $("div.content > h2, div.content > h3").each(function () {
                if ("h2" === this.nodeName.toLowerCase()) o = n;
                else {
                    var d = n.children("li:last");
                    o = d.children("ul");
                    o.length || (o = $("<ul/>").appendTo(d))
                }
                o.append('<li><a href="#' + $(this).data("anchor") + '">' + $(this).text() + "</a></li>")
            });
            $("div.page-nav").append(n);
            var p = $("div.page-nav"),
                s = p.find("li"),
                w = p.offset().top,
                v = "relative",
                E = null;
            $(window).on("resize", function () {
                clearTimeout(E);
                E = setTimeout(function () {
                    v = null;
                    G()
                }, 200);
                "static" === v && p.css({
                    left: $("div.fw-page-nav").offset().left,
                    width: $("div.fw-page-nav").width()
                })
            });
            $(document).on("scroll", function () {
                var d = $(document).scrollTop();
                j(d);
                d + 60 > w && "static" !== v ? (v = "static", p.parent().addClass("static"), p.css({
                    left: $("div.fw-page-nav").offset().left,
                    width: $("div.fw-page-nav").width()
                })) : d + 60 <= w && "static" === v && (v = "relative", p.parent().removeClass("static"));
                for (var i = !1, n = 1, o = P.length; n < o; n++)
                    if (P[n].top > d + 60) {
                        p.find("li.active").removeClass("active");
                        s.eq(n - 1).addClass("active");
                        p.find("li.sub-active").removeClass("sub-active");
                        s.eq(n - 1).parents("li").addClass("sub-active");
                        i = !0;
                        break
                    }
                i || (d = P.length, p.find("li.active").removeClass("active"), s.eq(d - 1).addClass("active"), p.find("li.sub-active").removeClass("sub-active"), s.eq(d - 1).parents("li").addClass("sub-active"))
            })
        } else $(document).on("scroll", function () {
            j($(document).scrollTop())
        });
        $("table.basic").addClass("display").dataTable({
            info: !1,
            ordering: !1,
            searching: !1,
            paging: !1
        });
        $("table.search").addClass("display").dataTable({
            info: !1,
            ordering: !1,
            paging: !1
        });
        if ($("table.reference").length) {
            var B = $("table.reference").DataTable({
                dom: "t",
                paging: !1,
                columnDefs: [{
                    visible: !1,
                    targets: 0
                }],
                order: [],
                drawCallback: function () {
                    var d = this.api(),
                        i = d.rows({
                            page: "current"
                        }).nodes(),
                        j = null;
                    d.column(0, {
                        page: "current"
                    }).data().each(function (d, n) {
                        j !== d && ($(i).eq(n).before('<tr class="group"><td colspan="3">' + d + "</td></tr>"), j = d)
                    })
                }
            }),
                H = $('<div class="ref_field"><div class="ref_label">Group:</div><div class="ref_input"></div></div>').appendTo("div.ref_search");
            B.column(0).data().unique().each(function (d) {
                var i = H.find("div.ref_input");
                i.append($('<a class="site-btn small">' + d + "</a>").on("click", function () {
                    $(this).toggleClass("active");
                    var d = i.find(".active").map(function () {
                        return $(this).text()
                    }).toArray().join("|");
                    B.column(0).search(d, !0, !1).draw()
                }))
            });
            $("table.reference").on("click", "tr.group", function () {
                var d = B.order()[0];
                0 === d[0] && "asc" === d[1] ? B.order([0, "desc"]).draw() : B.order([0, "asc"]).draw()
            });
            $("div.ref_search input").on("keyup", function () {
                B.search(this.value).draw()
            });
            var L = window.location.hash;
            L && (L = L.slice(1).toLowerCase(), $("div.ref_input a.site-btn").each(function () {
                $(this).html().toLowerCase() === L && $(this).click()
            }))
        }
        G();
        $("div.cdn").on("click", function () {
            $("input", this)[0].select()
        });
        $("tr.details").toggle();
        $("span.css_link").click(function () {
            var d = $(this).parents("table:eq(0)").find(".details");
            "none" == $(d[0]).css("display") ? d.show() : d.hide();
            $(this).html("Show details" == $(this).html() ? "Hide details" : "Show details")
        });
        $("div.purchase_options").each(function () {
            var d =
                $("div.liner", this).map(function () {
                    return $(this).outerHeight()
                }).toArray();
            $("div.liner", this).outerHeight(Math.max.apply(window, d))
        });
        $("div.purchase_options").on("click", ".site-btn[data-product]", function (d) {
            d.preventDefault();
            $.ajax({
                url: window._site.dtDomain + "/media/php/purchaseAjax.php",
                data: {
                    product: $(this).data("product")
                },
                dataType: "jsonp",
                success: function (d) {
                    "purchase" === d.action ? window.location.href = "/purchase/checkout" : window.DT_Purchase ? DT_Purchase.process(d.action) : $.getScript(window._site.dtDomain +
                        "/media/js/register.js",
                        function () {
                            DT_Purchase.process(d.action)
                        })
                }
            })
        });
        $(document).on("click", "a.register-action, button.register-action", function (d) {
            if ($(this).hasClass("register-action")) {
                d.preventDefault();
                d.stopImmediatePropagation();
                var i = $(this),
                    j = function () {
                        $(".register-action").removeClass("register-action");
                        i.hasClass("follow-link") ? i[0].href ? window.location.href = i[0].href : window.location.reload() : $(i).click()
                    };
                i.hasClass("logout") ? $.ajax({
                    url: window._site.dtDomain + "/media/php/registerAjax.php",
                    data: {
                        data: {
                            action: "logout"
                        }
                    },
                    dataType: "jsonp",
                    success: function () {
                        window.location.reload()
                    }
                }) : $.ajax({
                    url: window._site.dtDomain + "/media/php/purchaseAjax.php",
                    data: {
                        product: "register"
                    },
                    dataType: "jsonp",
                    success: function (d) {
                        "ready" === d.action ? j() : window.DT_Purchase ? DT_Purchase.process(d.action, j) : $.getScript(window._site.dtDomain + "/media/js/register.js", function () {
                            DT_Purchase.process(d.action, j)
                        })
                    }
                })
            }
        });
        $("div.mobile-show").on("click", function () {
            $(this).closest("div.fw-nav").css("height", "auto");
            $(this).css("display",
                "none")
        });
        if ($("div.MessageList").length) {
            var M = !1,
                U = $("div.Message a"),
                V = $("div.Item.ItemDiscussion");
            if (V.length && 20290 > V[0].id.replace("Discussion_", "")) M = "time";
            else
                for (var V = 0, Ea = U.length; V < Ea; V++)
                    if (-1 !== U[V].href.indexOf("legacy.datatables.net")) {
                        M = "message";
                        break
                    }
            M && $("#Body").prepend('<div class="legacy-message"><p><b>Legacy interface notice</b>: ' + ("message" === M ? "Some or all of the comments in this discussion thread refer to the DataTables 1.9 API. " : "This discussion was created before the release of DataTables 1.10, which introduced a more modern API. ") +
                'The <a href="//legacy.datatables.net">documentation for the old DataTables API</a> is still available and newer versions are backwards compatible, but the <a href="/manual/">primary documentation</a> on this site refers to DataTables 1.10 and newer. A <a href="/upgrade/1.10-convert">conversion guide</a> details how the two API styles relate. <a href="/upgrade/1.10">Updating to 1.10+</a> is recommended if you haven\'t already.</p></div>')
        }
        window.forumJquery && window.forumJquery(document).ajaxSuccess(function () {
            $("pre code.multiline").each(function () {
                SyntaxHighlighter.highlight({},
                    this)
            })
        });
        $("img[title='lightbox']").css("width", "100%").removeAttr("title").addClass("lightbox").click(function () {
            $.slimbox(this.src, this.getAttribute("alt"))
        });
        $("div.cdn").each(function () {
            2 === $(this).children("span, input").length && $("<a/>", {
                href: $(this).children("input").val(),
                target: "_blank"
            }).addClass("cdn-link").appendTo(this)
        })
    });
    $(window).on("load", function () {
        G()
    });
    var V = null;
    window._site = {
        cacheHeaderPositions: G,
        dynamicLoaded: function () {
            var d = $("div.nav-master div.account");
            if (d.length) {
                var j =
                    window._site.forumUser;
                j ? d.html("Hi <i>" + j + '</i>.<br><a href="' + window._site.dtDomain + '/account">Your account</a> | <a href="" class="register-action logout">Logout</a>') : d.html('Your account:<br><a href="" class="register-action follow-link login">Login / Register</a>')
            }
        },
        dtDomain: -1 !== window.location.host.indexOf("local") ? "//datatables.local" : "//datatables.net",
        forumUser: null,
        stripe_pkey: "pk_live_vQlaAuVY6rs1IiVDYzMuEnhr",
        log: function (d, j) {
            $.ajax({
                url: "/media/feeds/err-log.php",
                data: {
                    title: d,
                    payload: j
                },
                type: "POST",
                success: function () { }
            })
        }
    };
    $(window).on("error", function (d) {
        var d = d.originalEvent,
            j = {};
        j.url = window.location.href;
        j.message = d.message;
        j.col = d.colno;
        j.line = d.lineno;
        j.stack = d.error ? d.error.stack : "";
        j.filename = d.filename;
        "Script error." === j.message && "" === j.stack || window._site.log("JS error", JSON.stringify(j))
    });
    var E = $('<div class="info"/>'),
        U = $('<div class="resultsWrapper"/>'),
        M = $('<div class="results"/>').appendTo(U),
        w = $('<div id="searchBg"/>').on("click", function () {
            n()
        }),
        p = $('<div id="searchResults"/>').append(E).append(U),
        j, o = !1;
    _searchTypes = {
        Blog: function (d) {
            var j = [v(d, "title")];
            d.section && j.push(v(d, "section"));
            d.subSection && j.push(v(d, "subSection"));
            return {
                type: "Blog",
                title: j,
                tags: [s(d.date)],
                matching: v(d, "content"),
                url: d.url
            }
        },
        Manual: function (d) {
            var j = [v(d, "title")];
            d.section && j.push(v(d, "section"));
            d.subSection && j.push(v(d, "subSection"));
            return {
                type: "Manual",
                title: j,
                matching: v(d, "content"),
                url: d.url
            }
        },
        Site: function (d) {
            d = _searchTypes.Manual(d);
            d.type = "General";
            return d
        },
        Reference: function (d) {
            var j;
            "api" === d.type ?
                j = "API" : "option" === d.type ? j = "Option" : "event" === d.type ? j = "Event" : "button" === d.type ? j = "Button" : "fields" === d.type ? j = "Field" : "display" === d.type ? j = "Display" : "type" === d.type && (j = "Data type");
            return {
                type: ["Reference:", j],
                title: ['<code class="' + d.type + '">' + d.name + "</code>", v(d, "summary")],
                matching: v(d, "content"),
                tags: $.map(d.types, function (d) {
                    return "<code>" + (d.signature ? d.signature : d.type) + "</code>"
                }),
                url: d.url
            }
        },
        Example: function (d) {
            return {
                type: "Example",
                title: [v(d, "library"), v(d, "title")],
                matching: v(d, "content"),
                url: d.url
            }
        },
        Forum: function (d) {
            var j = [s(d.date)];
            d.answer ? j.push("Answer") : j.push(d.reply ? "Question" : "Reply");
            d.legacy && j.push("Legacy");
            return {
                type: "Forum",
                title: [v(d, "title")],
                matching: v(d, "body"),
                tags: j,
                url: "//datatables.net/" + d.url
            }
        }
    }
})();
(function () {
    function d(G, q, n) {
        var s, H;
        n || (n = "");
        for (var v = 0, P = q.length; v < P; v++) s = 0 === v % 2 ? "even" : "odd", H = q[v].version ? '<span class="version" title="This was the release version at the time the comment was originally posted">@v' + q[v].version + "</span>" : "", G.append('<dt class="' + s + n + '"><a href="/forums/profile/' + q[v].username + '"><b>' + q[v].username + "</b></a>" + H + "<span>" + q[v].created + '</span></dt><dd class="' + s + n + '">' + q[v].comment + "</dd>"), q[v].children && d(G, q[v].children, " child")
    }
    window._site.comments =
        function (G, q) {
            if (0 === q.length) G.html("No comments posted for this page yet. Be the first to contribute!");
            else {
                var n = $('<dl class="comments"></dl>');
                d(n, q);
                n.appendTo(G)
            }
            $(G).prev("h2").append(' <span class="comment_count">(' + q.length + ")</span>");
            $("div.page-nav ul li:last a").append(' <span class="comment_count">(' + q.length + ")</span>");
            $(".comment-count").append(' <span class="comment_count">(' + q.length + ")</span>");
            G.append('<div class="comment_add"><h3>Post new comment</h3><p>Contributions in the form of tips, code snippets and suggestions for the above material are very welcome. To post a comment, please use the form below. Text is formatted by <a href="/tn/8">Markdown</a>.</p></div>');
            window._site.forumUser ? (G.find("div.comment_add").append('<div class="comment_input"><textarea id="comment"></textarea><button class="btn">Post comment</button></div>'), G.find("button.btn").on("click", function (d) {
                d.preventDefault();
                $.ajax({
                    url: "/media/php/comments",
                    type: "POST",
                    dataType: "json",
                    data: {
                        page: window._site.page,
                        comment: $("#comment").val(),
                        host: window.location.host
                    },
                    success: function () {
                        G.find("div.comment_input").html("<p><b>Thank you for your comment! It has been added to the moderation queue and will be reviewed and published soon.</b></p>")
                    },
                    error: function () {
                        alert("Sorry - an error has occurred. Please try again in a few minutes")
                    }
                })
            })) : G.find("div.comment_add").append('<p>To post comments, please sign in to your DataTables account, or register:<p><ul class="formatting"><li><a href="//datatables.net/forums/entry/signin?Target=' + encodeURIComponent(location.href) + '">Sign in</a></li><li><a href="//datatables.net/forums/entry/register?Target=' + encodeURIComponent(location.href) + '">Register</a></li></ul>');
            G.find("div.comment_add").append('<p><b>Any questions posted here will be deleted without being published.</b><br>Please post questions in the <a href="/forums">Forums</a>. Comments are moderated.</p>')
        }
})();