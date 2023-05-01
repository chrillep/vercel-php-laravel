import { useSSRContext, mergeProps, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const MainLayout_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      animate: false
    };
  },
  mounted() {
    this.animate = true;
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-wrap md:flex-no-wrap w-full max-w-5xl mx-auto",
        key: "main"
      }, _attrs))}><div class="w-full md:w-1/3 md:border-r-2 border-red-200 md:min-h-screen"><div class="sticky top-0 p-8 max-h-screen overflow-y-auto"><div class="w-full"><div class="w-16 h-16 bg-red-500 rounded-full"></div></div><p class="font-bold py-8">John Doe</p><p class="text-gray-600"> Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. </p><div class="flex flex-wrap my-8"><span class="w-full my-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: [{ "border-b border-gray-600": _ctx.$page.url === "/home" }, "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Articles `);
          } else {
            return [
              createTextVNode(" Articles ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="w-full my-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("about"),
        class: { "border-b border-gray-600": _ctx.$page.url === "/about" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Me `);
          } else {
            return [
              createTextVNode(" About Me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="w-full my-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact"),
        class: { "border-b border-gray-600": _ctx.$page.url === "/contact" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Me `);
          } else {
            return [
              createTextVNode(" Contact Me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div><p class="text-gray-500 font-hairline text-sm italic">© All Rights reserved</p></div></div>`);
      if (_ctx.animate) {
        _push(`<div class="w-full md:w-2/3 overflow-hidden">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
