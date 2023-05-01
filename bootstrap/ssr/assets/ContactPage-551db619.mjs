import { withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./MainLayout-8fdd71f9.mjs";
const _sfc_main = {
  __name: "ContactPage",
  __ssrInlineRender: true,
  props: { contact: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Contact Me" }, null, _parent2, _scopeId));
            _push2(`<div class="p-8"${_scopeId}><h1 class="text-4xl"${_scopeId}>Contact Me</h1><!--[-->`);
            ssrRenderList(__props.contact, (paragraph) => {
              _push2(`<p class="py-2"${_scopeId}>${ssrInterpolate(paragraph)}</p>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Contact Me" }),
              createVNode("div", { class: "p-8" }, [
                createVNode("h1", { class: "text-4xl" }, "Contact Me"),
                (openBlock(true), createBlock(Fragment, null, renderList(__props.contact, (paragraph) => {
                  return openBlock(), createBlock("p", {
                    class: "py-2",
                    key: paragraph
                  }, toDisplayString(paragraph), 1);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BlogController/ContactPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
