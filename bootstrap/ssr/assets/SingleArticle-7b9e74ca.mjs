import { withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./MainLayout-8fdd71f9.mjs";
const _sfc_main = {
  __name: "SingleArticle",
  __ssrInlineRender: true,
  props: { articles: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<title${_scopeId2}>${ssrInterpolate(__props.articles.active.title)}</title>`);
                } else {
                  return [
                    createVNode("title", null, toDisplayString(__props.articles.active.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="p-8"${_scopeId}><h2 class="text-4xl font-bold text-center mb-8"${_scopeId}>${ssrInterpolate(__props.articles.active.title)}</h2><p${_scopeId}>${ssrInterpolate(__props.articles.active.content)}</p><hr class="my-8 border-red-500"${_scopeId}><p${_scopeId}><span class="italic text-gray-600 font-hairline"${_scopeId}>${ssrInterpolate(new Date(__props.articles.active.created_at).toLocaleString())}</span><span class="px-2"${_scopeId}>—</span><span class="hover:underline"${_scopeId}>John Doe</span></p></div>`);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  createVNode("title", null, toDisplayString(__props.articles.active.title), 1)
                ]),
                _: 1
              }),
              createVNode("div", { class: "p-8" }, [
                createVNode("h2", { class: "text-4xl font-bold text-center mb-8" }, toDisplayString(__props.articles.active.title), 1),
                createVNode("p", null, toDisplayString(__props.articles.active.content), 1),
                createVNode("hr", { class: "my-8 border-red-500" }),
                createVNode("p", null, [
                  createVNode("span", { class: "italic text-gray-600 font-hairline" }, toDisplayString(new Date(__props.articles.active.created_at).toLocaleString()), 1),
                  createVNode("span", { class: "px-2" }, "—"),
                  createVNode("span", { class: "hover:underline" }, "John Doe")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BlogController/SingleArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
