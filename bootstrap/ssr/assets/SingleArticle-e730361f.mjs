import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-4xl font-bold text-center mb-8">${ssrInterpolate(_ctx.$store.state.articles.active.title)}</h2><p>${ssrInterpolate(_ctx.$store.state.articles.active.content)}</p><hr class="my-8 border-red-500"><p><span class="italic text-gray-600 font-hairline"> Published ${ssrInterpolate(_ctx.dayJs(_ctx.$store.state.articles.active.created_at).format("d MMM YYYY"))}</span><span class="px-2">—</span><span class="hover:underline">${ssrInterpolate(_ctx.$store.state.author)}</span></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BlogController/SingleArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleArticle as default
};
