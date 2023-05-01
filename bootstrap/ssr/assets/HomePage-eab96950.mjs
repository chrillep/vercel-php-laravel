import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><ul><!--[-->`);
  ssrRenderList(_ctx.$store.state.articles.recents, (article) => {
    _push(`<li class="p-8"><span class="text-sm font-bold uppercase">${ssrInterpolate(_ctx.dayJs(article.created_at).format("MMMM YYYY"))}</span><h2>`);
    _push(ssrRenderComponent(_component_RouterLink, {
      to: { name: "BlogController@SingleArticle", params: { article: article.slug } },
      class: "text-2xl font-bold hover:underline cursor-pointer pt-2 pb-4"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(article.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(article.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h2><p>${ssrInterpolate(article.excerpt)}</p><div class="pt-4">`);
    _push(ssrRenderComponent(_component_RouterLink, {
      to: { name: "BlogController@SingleArticle", params: { article: article.slug } },
      class: "hover:underline cursor-pointer text-red-600"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Read `);
        } else {
          return [
            createTextVNode(" Read ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BlogController/HomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HomePage as default
};
