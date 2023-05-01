import { withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./MainLayout-8fdd71f9.mjs";
const _sfc_main = {
  __name: "HomePage",
  __ssrInlineRender: true,
  props: { articles: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Main" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><ul${_scopeId}><!--[-->`);
            ssrRenderList(__props.articles.recents, (article) => {
              _push2(`<li class="p-8"${_scopeId}><span class="text-sm font-bold uppercase"${_scopeId}>${ssrInterpolate(new Date(article.created_at).toLocaleString())}</span><h2${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("posts.show", { article: article.slug }),
                class: "text-2xl font-bold hover:underline cursor-pointer pt-2 pb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(article.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h2><p${_scopeId}>${ssrInterpolate(article.excerpt)}</p><div class="pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("posts.show", { article: article.slug }),
                class: "hover:underline cursor-pointer text-red-600"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Read `);
                  } else {
                    return [
                      createTextVNode(" Read ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></li>`);
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Main" }),
              createVNode("div", null, [
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.articles.recents, (article) => {
                    return openBlock(), createBlock("li", {
                      key: article.slug,
                      class: "p-8"
                    }, [
                      createVNode("span", { class: "text-sm font-bold uppercase" }, toDisplayString(new Date(article.created_at).toLocaleString()), 1),
                      createVNode("h2", null, [
                        createVNode(unref(Link), {
                          href: _ctx.route("posts.show", { article: article.slug }),
                          class: "text-2xl font-bold hover:underline cursor-pointer pt-2 pb-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(article.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      createVNode("p", null, toDisplayString(article.excerpt), 1),
                      createVNode("div", { class: "pt-4" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("posts.show", { article: article.slug }),
                          class: "hover:underline cursor-pointer text-red-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Read ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BlogController/HomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
