var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Outlet, Link, useLocation, useParams } from "react-router-dom";
import * as React from "react";
import React__default, { Component, createContext, useContext, useState, useEffect, useRef } from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Menu, ChevronDown, Ruler as Ruler$1, ChevronRight, Check, Circle, Maximize, Minimize, RefreshCw, Monitor, Book, ArrowRight, Pencil, Square, Target, Zap, Printer, ArrowLeft, Clock } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Slot } from "@radix-ui/react-slot";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { z } from "zod";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = (_a = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = (_b = class extends Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
const translations = {
  de: {
    title: "Lineal online in Originalgröße – kostenlos messen",
    subtitle: "Digitales Lineal und Maßband online mit präziser Kalibrierung zum Messen echter Objekte auf dem Bildschirm",
    calibrationTitle: "Kalibrierung",
    screenSize: "Bildschirmgröße",
    inches: "Zoll",
    creditCard: "Kreditkarte",
    manual: "Manuell",
    unitTitle: "Einheiten",
    cm: "Zentimeter",
    mm: "Millimeter",
    inch: "Zoll",
    orientation: "Ausrichtung",
    horizontal: "Horizontal",
    vertical: "Vertikal",
    printRuler: "Lineal drucken",
    howToUse: "So benutzen Sie das Online-Lineal",
    whyPerfect: "Warum unser Lineal in Originalgröße perfekt ist",
    faq: "Häufig gestellte Fragen",
    adjustUp: "Nach oben anpassen",
    adjustDown: "Nach unten anpassen",
    dragInfo: "Ziehen, um das Lineal zu verschieben",
    calibrationInstructions: "Legen Sie einen Gegenstand bekannter Größe an das Lineal",
    creditCardSize: "Eine Standard-Kreditkarte misst 85,6 mm x 53,98 mm",
    howToUseStep1: "1. Kalibrieren Sie das Online-Lineal mit einer der verfügbaren Methoden",
    howToUseStep2: "2. Wählen Sie Ihre bevorzugte Maßeinheit (cm, mm oder Zoll)",
    howToUseStep3: "3. Ändern Sie die Ausrichtung des digitalen Lineals nach Bedarf",
    howToUseStep4: "4. Bewegen Sie das Lineal in Originalgröße per Drag & Drop über den Bildschirm",
    whyPerfectItem1: "Präzision: Das Online-Lineal wird genau auf Ihren Bildschirm kalibriert",
    whyPerfectItem2: "Vielseitig: Das Maßband online funktioniert auf jedem Gerät",
    whyPerfectItem3: "Einfach: Intuitive Oberfläche und einfache Bedienung des virtuellen Lineals",
    whyPerfectItem4: "Digitales Lineal mit mehreren Einheiten (cm, mm, Zoll)",
    whyPerfectItem5: "Lineal in Originalgröße mit Kalibrierung für exakte Messungen",
    faqQuestion1: "Wie kalibriere ich das Lineal online?",
    faqAnswer1: "Sie können das digitale Lineal kalibrieren, indem Sie Ihre Bildschirmgröße angeben, eine Kreditkarte als Referenz verwenden oder es manuell an einen Gegenstand bekannter Größe anpassen.",
    faqQuestion2: "Kann ich dieses Lineal in Originalgröße auf dem Handy verwenden?",
    faqAnswer2: "Ja, unser Lineal online Handy funktioniert hervorragend auf Smartphones, Tablets und Computern.",
    faqQuestion3: "Wie genau ist das Online-Lineal?",
    faqAnswer3: "Bei korrekter Kalibrierung ist unser virtuelles Lineal sehr genau – die Endpräzision hängt von Bildschirmauflösung und sauberer Kalibrierung ab.",
    learnMore: "Mehr erfahren",
    privacy: "Datenschutz",
    disclaimer: "Impressum",
    copyright: "© 2026 Lineal Online. Alle Rechte vorbehalten.",
    autoCalibrate: "Automatisch kalibrieren",
    move: "Verschieben",
    deviceInfo: "Geräteinformationen",
    detectedDevice: "Erkanntes Gerät",
    screenSizeDetected: "Erkannte Bildschirmgröße",
    diagonal: "Diagonale",
    screenSizeNote: "Wenn die erkannte Bildschirmgröße nicht exakt ist, können Sie sie in den Kalibrierungsoptionen manuell anpassen.",
    show: "Anzeigen",
    hide: "Ausblenden",
    commonRulerSizes: "Gängige Linealgrößen",
    smallRulers: "Kleine Lineale",
    largeRulers: "Große Lineale",
    rulerOf: "Lineal",
    rulerDescription: "Nutzen Sie unser Lineal online in Originalgröße, um Objekte präzise auf dem Bildschirm zu messen. Das digitale Lineal und Maßband online erlaubt Messungen in Zentimetern (cm), Millimetern (mm) und Zoll.",
    moreInfo: "Mehr über virtuelle Lineale",
    measurementTools: "Online-Messwerkzeuge",
    contentIntro: "Ein Lineal online in Originalgröße ist ein unverzichtbares Werkzeug für präzise Messungen auf dem Bildschirm. Ob Sie in Zentimetern, Millimetern oder Zoll messen möchten – unser digitales Lineal liefert eine praktische Lösung.",
    useCase1: "Grafik- und Webdesign",
    useCase2: "Messungen für Bastelarbeiten",
    useCase3: "Bildungsanwendungen",
    useCase4: "Schnelle Messungen ohne physische Werkzeuge",
    useCase1Description: "Das digitale Lineal ist ideal für Designer, die visuelle Elemente präzise vermessen.",
    useCase2Description: "Das Maßband online ist perfekt für exakte Messungen bei DIY- und Handarbeitsprojekten.",
    useCase3Description: "Das Lineal in Originalgröße eignet sich hervorragend, um Schülern das Messen interaktiv beizubringen.",
    useCase4Description: "Lineal online cm – präzise Messungen ohne physische Werkzeuge, jederzeit verfügbar.",
    relatedArticles: "Verwandte Artikel",
    backToHome: "Zurück zur Startseite",
    publishedOn: "Veröffentlicht am",
    share: "Teilen",
    readMore: "Weiterlesen",
    home: "Startseite",
    blog: "Blog",
    more: "Mehr",
    aboutUs: "Über uns",
    contact: "Kontakt"
  }
};
const LanguageContext = createContext(void 0);
const LanguageProvider = ({ children }) => {
  const t = (key) => {
    return translations.de[key] || key;
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { t }, children });
};
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === void 0) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
const CalibrationContext = createContext(void 0);
const CREDIT_CARD_WIDTH_MM = 85.6;
const CM_PER_INCH = 2.54;
const CalibrationProvider = ({ children }) => {
  const [pixelsPerCm, setPixelsPerCm] = useState(38);
  const [unit, setUnit] = useState("cm");
  const [orientation, setOrientation] = useState("horizontal");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    autoCalibrate();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const calculatePhysicalScreenSize = () => {
    const screenObj = window.screen;
    if (screenObj && screenObj.width && screenObj.height) {
      const dpr2 = window.devicePixelRatio || 1;
      const standardDPI = 96;
      const dpi2 = dpr2 * standardDPI;
      const widthInInches2 = screenObj.width / dpi2;
      const heightInInches2 = screenObj.height / dpi2;
      const diagonalInInches = Math.sqrt(widthInInches2 * widthInInches2 + heightInInches2 * heightInInches2);
      if (diagonalInInches > 3 && diagonalInInches < 40) {
        console.log("Screen auto-calibration:", diagonalInInches.toFixed(1) + " inches");
        return diagonalInInches;
      }
    }
    const dpr = window.devicePixelRatio || 1;
    const dpi = dpr * 96;
    const widthInInches = screenWidth / dpi;
    const heightInInches = screenHeight / dpi;
    return Math.sqrt(widthInInches * widthInInches + heightInInches * heightInInches);
  };
  const autoCalibrate = () => {
    const estimatedScreenSizeInches = calculatePhysicalScreenSize();
    if (estimatedScreenSizeInches > 3) {
      calibrateByScreen(estimatedScreenSizeInches);
      console.log("Auto-calibrated to:", estimatedScreenSizeInches.toFixed(1) + " inches");
    } else {
      if (screenWidth < 600) {
        calibrateByScreen(5.5);
        console.log("Auto-calibrated to default phone size: 5.5 inches");
      } else if (screenWidth < 1024) {
        calibrateByScreen(10);
        console.log("Auto-calibrated to default tablet size: 10 inches");
      } else {
        calibrateByScreen(15.6);
        console.log("Auto-calibrated to default laptop size: 15.6 inches");
      }
    }
  };
  const calibrateByScreen = (screenSizeInches) => {
    const screenDiagonalPixels = Math.sqrt(
      Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2)
    );
    const pixelsPerInch = screenDiagonalPixels / screenSizeInches;
    const newPixelsPerCm = pixelsPerInch / CM_PER_INCH;
    console.log("Calibrated to screen size:", screenSizeInches, "inches");
    console.log("Calculated pixels per cm:", newPixelsPerCm.toFixed(2));
    setPixelsPerCm(newPixelsPerCm);
  };
  const calibrateByCard = () => {
    const creditCardWidthPixels = screenWidth * 0.3;
    const pixelsPerMm = creditCardWidthPixels / CREDIT_CARD_WIDTH_MM;
    const newPixelsPerCm = pixelsPerMm * 10;
    setPixelsPerCm(newPixelsPerCm);
  };
  const adjustCalibration = (direction) => {
    const adjustmentFactor = direction === "up" ? 1.05 : 0.95;
    setPixelsPerCm((prev) => prev * adjustmentFactor);
  };
  const getValueInSelectedUnit = (pixelValue) => {
    switch (unit) {
      case "cm":
        return pixelValue / pixelsPerCm;
      case "mm":
        return pixelValue / pixelsPerCm * 10;
      case "inch":
        return pixelValue / (pixelsPerCm * CM_PER_INCH);
      default:
        return pixelValue / pixelsPerCm;
    }
  };
  const getPixelsFromValue = (value) => {
    switch (unit) {
      case "cm":
        return value * pixelsPerCm;
      case "mm":
        return value / 10 * pixelsPerCm;
      case "inch":
        return value * pixelsPerCm * CM_PER_INCH;
      default:
        return value * pixelsPerCm;
    }
  };
  return /* @__PURE__ */ jsx(
    CalibrationContext.Provider,
    {
      value: {
        pixelsPerCm,
        setPixelsPerCm,
        calibrateByScreen,
        calibrateByCard,
        adjustCalibration,
        autoCalibrate,
        unit,
        setUnit,
        orientation,
        setOrientation,
        getValueInSelectedUnit,
        getPixelsFromValue
      },
      children
    }
  );
};
const useCalibration = () => {
  const context = useContext(CalibrationContext);
  if (context === void 0) {
    throw new Error("useCalibration must be used within a CalibrationProvider");
  }
  return context;
};
const queryClient = new QueryClient();
const Root = () => /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(CalibrationProvider, { children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsx(Outlet, {})
] }) }) }) }) });
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const blogLinks$1 = [
  { to: "/blog/lineal-10-cm-originalgroesse", label: "Lineal 10 cm Originalgröße" },
  { to: "/blog/lineal-fuer-handy", label: "Lineal für Handy" },
  { to: "/blog/massband-online", label: "Maßband online" },
  { to: "/blog/wie-benutzt-man-ein-lineal", label: "Wie benutzt man ein Lineal" },
  { to: "/blog/1-cm-in-mm", label: "1 cm in mm" },
  { to: "/blog/metrisches-system", label: "Metrisches System" },
  { to: "/blog/mks-system", label: "MKS-System" },
  { to: "/blog/angloamerikanisches-system", label: "Angloamerikanisches System" },
  { to: "/blog/natuerliches-einheitensystem", label: "Natürliches Einheitensystem" },
  { to: "/blog/klinometer", label: "Klinometer" },
  { to: "/blog/tiefenmesser", label: "Tiefenmesser" },
  { to: "/blog/dimensionslose-zahlen", label: "Dimensionslose Zahlen" }
];
const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "text-ruler-primary hover:bg-gray-100", "aria-label": "Menü öffnen", children: [
      /* @__PURE__ */ jsx(Menu, { size: 24 }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Menü" })
    ] }) }),
    /* @__PURE__ */ jsxs(SheetContent, { className: "w-[300px] sm:w-[400px]", children: [
      /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsx(SheetTitle, { className: "text-ruler-primary", children: "Menü" }) }),
      /* @__PURE__ */ jsx("div", { className: "py-6 overflow-y-auto max-h-[calc(100vh-8rem)]", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-lg font-medium hover:text-ruler-primary py-2", onClick: () => setIsOpen(false), children: "Startseite" }),
        /* @__PURE__ */ jsx(Link, { to: "/lineal-drucken", className: "text-lg font-medium hover:text-ruler-primary py-2", onClick: () => setIsOpen(false), children: "Lineal drucken" }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-2", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Informationen" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/ueber-uns", className: "text-base font-medium hover:text-ruler-primary py-2 pl-2", onClick: () => setIsOpen(false), children: "Über uns" }),
        /* @__PURE__ */ jsx(Link, { to: "/kontakt", className: "text-base font-medium hover:text-ruler-primary py-2 pl-2", onClick: () => setIsOpen(false), children: "Kontakt" }),
        /* @__PURE__ */ jsx(Link, { to: "/datenschutz", className: "text-base font-medium hover:text-ruler-primary py-2 pl-2", onClick: () => setIsOpen(false), children: "Datenschutz" }),
        /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "text-base font-medium hover:text-ruler-primary py-2 pl-2", onClick: () => setIsOpen(false), children: "Impressum" }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 pb-2", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Blog" }) }),
        blogLinks$1.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            className: "text-base font-medium hover:text-ruler-primary py-2 pl-2",
            onClick: () => setIsOpen(false),
            children: link.label
          },
          link.to
        ))
      ] }) })
    ] })
  ] });
};
const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
const blogLinks = [
  { to: "/blog/lineal-10-cm-originalgroesse", label: "Lineal 10 cm Originalgröße" },
  { to: "/blog/lineal-fuer-handy", label: "Lineal für Handy" },
  { to: "/blog/massband-online", label: "Maßband online" },
  { to: "/blog/wie-benutzt-man-ein-lineal", label: "Wie benutzt man ein Lineal" },
  { to: "/blog/1-cm-in-mm", label: "1 cm in mm" },
  { to: "/blog/metrisches-system", label: "Metrisches System" },
  { to: "/blog/mks-system", label: "MKS-System" },
  { to: "/blog/klinometer", label: "Klinometer" }
];
const Header = () => {
  return /* @__PURE__ */ jsx("header", { className: "py-4 mb-6 border-b", children: /* @__PURE__ */ jsxs("div", { className: "container flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center", "aria-label": "Lineal Online Startseite", children: [
      /* @__PURE__ */ jsx(Ruler$1, { size: 28, className: "text-ruler-primary mr-2" }),
      /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-ruler-primary", children: [
        "Lineal",
        /* @__PURE__ */ jsx("span", { className: "text-gray-800", children: ".online" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center", children: /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
      /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/", className: `${navigationMenuTriggerStyle()} px-4`, children: "Startseite" }) }),
      /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(Link, { to: "/lineal-drucken", className: `${navigationMenuTriggerStyle()} px-4`, children: "Lineal drucken" }) }),
      /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
        /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Blog" }),
        /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid gap-3 p-4 w-[280px]", children: blogLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            className: "block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground",
            children: link.label
          }
        ) }) }, link.to)) }) })
      ] }),
      /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
        /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Mehr" }),
        /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: "grid gap-3 p-4 w-[200px]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/ueber-uns", className: "block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground", children: "Über uns" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/kontakt", className: "block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground", children: "Kontakt" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/datenschutz", className: "block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground", children: "Datenschutz" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground", children: "Impressum" }) }) })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex md:hidden items-center", children: /* @__PURE__ */ jsx(MenuButton, {}) })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "py-6 border-t mt-10 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 md:mb-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "© 2026 Lineal Online. Alle Rechte vorbehalten." }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center md:justify-end", children: [
      /* @__PURE__ */ jsx(Link, { to: "/ueber-uns", className: "text-sm text-ruler-primary hover:underline", children: "Über uns" }),
      /* @__PURE__ */ jsx(Link, { to: "/kontakt", className: "text-sm text-ruler-primary hover:underline", children: "Kontakt" }),
      /* @__PURE__ */ jsx(Link, { to: "/datenschutz", className: "text-sm text-ruler-primary hover:underline", children: "Datenschutz" }),
      /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "text-sm text-ruler-primary hover:underline", children: "Impressum" })
    ] })
  ] }) }) });
};
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const COMMON_SCREEN_SIZES = [
  { label: '4.0"', value: 4 },
  { label: '4.3"', value: 4.3 },
  { label: '4.5"', value: 4.5 },
  { label: '4.7"', value: 4.7 },
  { label: '5.0"', value: 5 },
  { label: '5.1"', value: 5.1 },
  { label: '5.2"', value: 5.2 },
  { label: '5.5"', value: 5.5 },
  { label: '5.7"', value: 5.7 },
  { label: '6.0"', value: 6 },
  { label: '6.2"', value: 6.2 },
  { label: '6.4"', value: 6.4 },
  { label: '6.7"', value: 6.7 },
  { label: '7.0"', value: 7 },
  { label: '8.0"', value: 8 },
  { label: '10.1"', value: 10.1 },
  { label: '11"', value: 11 },
  { label: '12.9"', value: 12.9 },
  { label: '13.3"', value: 13.3 },
  { label: '14"', value: 14 },
  { label: '15.6"', value: 15.6 },
  { label: '17"', value: 17 },
  { label: '18.3"', value: 18.3 }
];
const Ruler = ({ className }) => {
  const {
    pixelsPerCm,
    unit,
    setUnit,
    orientation,
    setOrientation,
    getValueInSelectedUnit,
    getPixelsFromValue,
    calibrateByScreen,
    autoCalibrate
  } = useCalibration();
  const { t } = useLanguage();
  const rulerRef = useRef(null);
  const [rulerWidth, setRulerWidth] = useState(0);
  const [rulerHeight, setRulerHeight] = useState(0);
  const [customScreenSize, setCustomScreenSize] = useState("15.6");
  const [screenSizeDropdownOpen, setScreenSizeDropdownOpen] = useState(false);
  useEffect(() => {
    autoCalibrate();
  }, []);
  useEffect(() => {
    const updateRulerDimensions = () => {
      if (orientation === "horizontal") {
        setRulerWidth(window.innerWidth);
        setRulerHeight(120);
      } else {
        setRulerHeight(Math.min(window.innerHeight * 0.7, 500));
        setRulerWidth(120);
      }
    };
    updateRulerDimensions();
    window.addEventListener("resize", updateRulerDimensions);
    return () => {
      window.removeEventListener("resize", updateRulerDimensions);
    };
  }, [orientation]);
  const generateTicks = () => {
    if (!rulerRef.current) return [];
    const ticks2 = [];
    const isHorizontal = orientation === "horizontal";
    const rulerLength = isHorizontal ? rulerWidth : rulerHeight;
    const maxValue = getValueInSelectedUnit(rulerLength);
    let majorTickInterval;
    let mediumTickInterval;
    let minorTickInterval;
    switch (unit) {
      case "inch":
        majorTickInterval = 1;
        mediumTickInterval = 0.5;
        minorTickInterval = 0.125;
        break;
      case "cm":
        majorTickInterval = 1;
        mediumTickInterval = 0.5;
        minorTickInterval = 0.1;
        break;
      case "mm":
        majorTickInterval = 10;
        mediumTickInterval = 5;
        minorTickInterval = 1;
        break;
      default:
        majorTickInterval = 1;
        mediumTickInterval = 0.5;
        minorTickInterval = 0.1;
    }
    for (let value = 0; value <= maxValue; value += minorTickInterval) {
      const roundedValue = Math.round(value * 100) / 100;
      if (roundedValue === 0) continue;
      let tickType = "minor";
      if (roundedValue % majorTickInterval === 0) {
        tickType = "major";
      } else if (roundedValue % mediumTickInterval === 0) {
        tickType = "medium";
      }
      const position = getPixelsFromValue(roundedValue);
      const showLabel = tickType === "major";
      let label = roundedValue.toString();
      ticks2.push({
        position,
        type: tickType,
        showLabel,
        label,
        value: roundedValue
      });
    }
    return ticks2;
  };
  const handleCustomScreenSizeSubmit = (e) => {
    e.preventDefault();
    const size = parseFloat(customScreenSize);
    if (!isNaN(size) && size > 0) {
      calibrateByScreen(size);
      setScreenSizeDropdownOpen(false);
    }
  };
  const ticks = generateTicks();
  const rulerStyle = {
    width: orientation === "horizontal" ? `${rulerWidth}px` : `${rulerWidth}px`,
    height: orientation === "vertical" ? `${rulerHeight}px` : `${rulerHeight}px`,
    backgroundColor: "#F5F7FA",
    position: "relative",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: orientation === "horizontal" ? "0" : "6px",
    // Remove border radius for horizontal full-width
    overflow: "visible",
    margin: "0 auto"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `ruler-container ${orientation === "horizontal" ? "ruler-horizontal" : "ruler-vertical"} ${className}`,
      ref: rulerRef,
      style: rulerStyle,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-12 left-0 flex flex-wrap gap-2 z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: orientation === "horizontal" ? "default" : "outline",
              size: "sm",
              className: `${orientation === "horizontal" ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "bg-white"} rounded-md text-xs`,
              onClick: () => setOrientation("horizontal"),
              title: t("horizontal"),
              children: [
                /* @__PURE__ */ jsx(Maximize, { size: 16, className: "mr-1" }),
                t("horizontal")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: orientation === "vertical" ? "default" : "outline",
              size: "sm",
              className: `${orientation === "vertical" ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "bg-white"} rounded-md text-xs`,
              onClick: () => setOrientation("vertical"),
              title: t("vertical"),
              children: [
                /* @__PURE__ */ jsx(Minimize, { size: 16, className: "mr-1 rotate-90" }),
                t("vertical")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "bg-white rounded-md text-xs",
              onClick: autoCalibrate,
              title: t("autoCalibrate"),
              children: [
                /* @__PURE__ */ jsx(RefreshCw, { size: 16, className: "mr-1" }),
                t("autoCalibrate")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(DropdownMenu, { open: screenSizeDropdownOpen, onOpenChange: setScreenSizeDropdownOpen, children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "bg-white rounded-md text-xs flex items-center",
                title: t("screenSize"),
                children: [
                  /* @__PURE__ */ jsx(Monitor, { size: 16, className: "mr-1" }),
                  customScreenSize,
                  '"',
                  /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: "ml-1" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "p-0 w-48 max-h-80 overflow-y-auto", side: "bottom", align: "start", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 border-b", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleCustomScreenSizeSubmit, className: "flex items-center space-x-1", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "number",
                    min: "1",
                    step: "0.1",
                    value: customScreenSize,
                    onChange: (e) => setCustomScreenSize(e.target.value),
                    className: "h-8 text-sm",
                    placeholder: t("screenSize") || ""
                  }
                ),
                /* @__PURE__ */ jsx(Button, { type: "submit", size: "sm", className: "h-8 bg-[#9b87f5] hover:bg-[#7E69AB]", children: "OK" })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "py-1", children: COMMON_SCREEN_SIZES.map((size) => /* @__PURE__ */ jsx(
                DropdownMenuItem,
                {
                  className: "text-sm px-3 py-1.5 cursor-pointer",
                  onClick: () => {
                    setCustomScreenSize(size.value.toString());
                    calibrateByScreen(size.value);
                    setScreenSizeDropdownOpen(false);
                  },
                  children: size.label
                },
                size.value
              )) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: `relative ${orientation === "horizontal" ? "w-full h-full" : "h-full w-full"}`, children: [
          /* @__PURE__ */ jsx("div", { className: `absolute ${orientation === "horizontal" ? "w-full h-6 top-6" : "h-full w-6 left-6"} bg-transparent border-t border-[#9b87f5]` }),
          ticks.map((tick, index) => /* @__PURE__ */ jsxs("div", { className: "absolute", children: [
            orientation === "horizontal" && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `ruler-tick ruler-tick-${tick.type} absolute bg-[#1A1F2C]`,
                  style: {
                    height: tick.type === "major" ? "16px" : tick.type === "medium" ? "12px" : "8px",
                    width: "1px",
                    left: `${tick.position}px`,
                    top: "24px",
                    transform: "translateX(-50%)"
                  }
                }
              ),
              tick.showLabel && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "ruler-number absolute text-xs font-semibold",
                  style: {
                    left: `${tick.position}px`,
                    top: "4px",
                    transform: "translateX(-50%)",
                    color: "#1A1F2C"
                  },
                  children: tick.label
                }
              )
            ] }),
            orientation === "vertical" && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `ruler-tick ruler-tick-${tick.type} absolute bg-[#1A1F2C]`,
                  style: {
                    width: tick.type === "major" ? "16px" : tick.type === "medium" ? "12px" : "8px",
                    height: "1px",
                    top: `${tick.position}px`,
                    left: "24px",
                    transform: "translateY(-50%)"
                  }
                }
              ),
              tick.showLabel && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "ruler-number absolute text-xs font-semibold",
                  style: {
                    top: `${tick.position}px`,
                    left: "4px",
                    transform: "translateY(-50%)",
                    color: "#1A1F2C"
                  },
                  children: tick.label
                }
              )
            ] })
          ] }, index)),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute text-xs bg-white px-1 rounded text-[#1A1F2C] font-semibold",
              style: orientation === "horizontal" ? { right: "8px", top: "4px" } : { bottom: "24px", left: "8px", transform: "rotate(-90deg)", transformOrigin: "left bottom" },
              children: unit.toUpperCase()
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `absolute flex space-x-1 ${orientation === "horizontal" ? "bottom-2 left-2" : "bottom-2 right-2"}`, children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: unit === "cm" ? "default" : "outline",
                size: "sm",
                className: `${unit === "cm" ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "bg-white"} h-6 text-[10px] px-2`,
                onClick: () => setUnit("cm"),
                children: "CM"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: unit === "mm" ? "default" : "outline",
                size: "sm",
                className: `${unit === "mm" ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "bg-white"} h-6 text-[10px] px-2`,
                onClick: () => setUnit("mm"),
                children: "MM"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: unit === "inch" ? "default" : "outline",
                size: "sm",
                className: `${unit === "inch" ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "bg-white"} h-6 text-[10px] px-2`,
                onClick: () => setUnit("inch"),
                children: "PULG"
              }
            )
          ] })
        ] })
      ]
    }
  );
};
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function useDeviceInfo() {
  const [deviceType, setDeviceType] = useState("Unknown");
  const [screenSize, setScreenSize] = useState(0);
  const isMobile = useIsMobile();
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("iphone")) {
      setDeviceType("iPhone");
    } else if (userAgent.includes("ipad")) {
      setDeviceType("iPad");
    } else if (userAgent.includes("android")) {
      setDeviceType("Android");
    } else if (!isMobile) {
      setDeviceType("Desktop");
    } else {
      setDeviceType("Unknown");
    }
    const calculateScreenSize2 = () => {
      const dpr = window.devicePixelRatio || 1;
      const screenWidth = window.screen.width * dpr;
      const screenHeight = window.screen.height * dpr;
      const standardDPI = 96;
      const dpi = dpr * standardDPI;
      const widthInInches = screenWidth / dpi;
      const heightInInches = screenHeight / dpi;
      const diagonalInInches = Math.sqrt(widthInInches * widthInInches + heightInInches * heightInInches);
      return parseFloat(diagonalInInches.toFixed(2));
    };
    setScreenSize(calculateScreenSize2());
  }, [isMobile]);
  const redetectScreenSize = () => {
    const newSize = calculateScreenSize();
    setScreenSize(newSize);
  };
  const calculateScreenSize = () => {
    const dpr = window.devicePixelRatio || 1;
    const screenWidth = window.screen.width * dpr;
    const screenHeight = window.screen.height * dpr;
    const standardDPI = 96;
    const dpi = dpr * standardDPI;
    const widthInInches = screenWidth / dpi;
    const heightInInches = screenHeight / dpi;
    const diagonalInInches = Math.sqrt(widthInInches * widthInInches + heightInInches * heightInInches);
    return parseFloat(diagonalInInches.toFixed(2));
  };
  return {
    deviceType,
    screenSize,
    redetectScreenSize,
    setScreenSize
  };
}
const MobileRuler = () => {
  const {
    pixelsPerCm,
    unit,
    setUnit,
    getValueInSelectedUnit,
    getPixelsFromValue,
    calibrateByScreen
  } = useCalibration();
  const {
    deviceType,
    screenSize,
    redetectScreenSize,
    setScreenSize
  } = useDeviceInfo();
  const {
    t
  } = useLanguage();
  const calculateRulerHeight = () => {
    const minHeight = 400;
    const unitsToShow = Math.max(25, Math.ceil(screenSize) + 5);
    const heightPerUnit = 40;
    return Math.max(minHeight, unitsToShow * heightPerUnit);
  };
  const [rulerHeight, setRulerHeight] = useState(calculateRulerHeight());
  const rulerRef = useRef(null);
  const [inputValue, setInputValue] = useState(screenSize.toString());
  useEffect(() => {
    setRulerHeight(calculateRulerHeight());
    setInputValue(screenSize.toString());
  }, [screenSize]);
  useEffect(() => {
    calibrateByScreen(screenSize);
  }, [screenSize, calibrateByScreen]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputBlur = () => {
    const newSize = parseFloat(inputValue);
    if (!isNaN(newSize) && newSize > 0) {
      setScreenSize(newSize);
      calibrateByScreen(newSize);
    } else {
      setInputValue(screenSize.toString());
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };
  const generateTicks = () => {
    if (!rulerRef.current) return [];
    const ticks2 = [];
    const maxValue = Math.max(25, Math.ceil(screenSize) + 5);
    const majorTickInterval = 1;
    const minorTickInterval = 0.2;
    for (let value = 0; value <= maxValue; value += minorTickInterval) {
      const roundedValue = Math.round(value * 10) / 10;
      if (roundedValue === 0) continue;
      let tickType = "minor";
      if (roundedValue % majorTickInterval === 0) {
        tickType = "major";
      }
      const position = getPixelsFromValue(roundedValue);
      const showLabel = tickType === "major";
      let label = roundedValue.toString();
      ticks2.push({
        position,
        type: tickType,
        showLabel,
        label,
        value: roundedValue
      });
    }
    return ticks2;
  };
  const ticks = generateTicks();
  return /* @__PURE__ */ jsxs("div", { className: "relative mobile-ruler-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 text-center flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-1", children: "(Scroll down to show full ruler)" }),
      /* @__PURE__ */ jsx(MenuButton, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mobile-ruler-layout", style: {
      height: "auto",
      maxHeight: "80vh",
      position: "relative",
      overflowX: "hidden",
      overflowY: "auto"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "ruler-container ruler-vertical mobile-ruler", ref: rulerRef, style: {
        width: "80px",
        height: `${rulerHeight}px`,
        position: "relative",
        overflow: "visible",
        margin: "0"
      }, children: /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full rounded-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute h-full w-8 left-8 bg-transparent border-l border-[#9b87f5]" }),
        ticks.map((tick, index) => /* @__PURE__ */ jsxs("div", { className: "absolute", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute", style: {
            width: tick.type === "major" ? "32px" : "16px",
            height: "2px",
            top: `${tick.position}px`,
            left: tick.type === "major" ? "28px" : "44px",
            transform: "translateY(-50%)",
            backgroundColor: "#9b87f5"
          } }),
          tick.showLabel && /* @__PURE__ */ jsx("div", { className: "absolute font-bold", style: {
            top: `${tick.position}px`,
            left: "12px",
            transform: "translateY(-50%)",
            color: "#7E69AB",
            fontSize: "20px"
          }, children: tick.label })
        ] }, index)),
        /* @__PURE__ */ jsx("div", { className: "absolute text-sm bg-[#f1f0fb] px-2 rounded text-[#7E69AB] font-semibold", style: {
          bottom: "24px",
          left: "12px",
          transform: "rotate(-90deg)",
          transformOrigin: "left bottom"
        }, children: unit.toUpperCase() })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 px-2 absolute top-0 right-0 w-[calc(100%-80px)]", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-lg shadow-sm mb-4 max-w-[200px] mx-auto", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs font-medium mb-2", children: [
          deviceType,
          " • ",
          parseFloat(screenSize.toFixed(2)),
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-28 border border-gray-300 rounded-lg flex items-center justify-center flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Screen" }),
            /* @__PURE__ */ jsx(Input, { type: "number", min: "3", max: "25", step: "0.1", value: inputValue, onChange: handleInputChange, onBlur: handleInputBlur, onKeyDown: handleKeyDown, className: "text-center h-8 w-14 text-sm font-bold" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: "inches" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow flex flex-col", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-1", children: "Enter your device's screen size" }),
            /* @__PURE__ */ jsxs(Button, { onClick: redetectScreenSize, size: "sm", variant: "outline", className: "w-full text-xs h-7 text-[#9b87f5] border-[#9b87f5] hover:bg-[#F1F0FB]", children: [
              /* @__PURE__ */ jsx(RefreshCw, { size: 10, className: "mr-1" }),
              "Re-detect"
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: `text-[#9b87f5] ${unit === "cm" ? "font-bold" : ""}`, onClick: (e) => {
        e.preventDefault();
        setUnit("cm");
      }, children: "CM" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "|" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: `text-[#9b87f5] ${unit === "inch" ? "font-bold" : ""}`, onClick: (e) => {
        e.preventDefault();
        setUnit("inch");
      }, children: "INCH" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "|" }),
      /* @__PURE__ */ jsx(Link, { to: "/blog/lineal-fuer-handy", className: "text-[#9b87f5] text-sm", children: "Blog" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "|" }),
      /* @__PURE__ */ jsx(Link, { to: "/datenschutz", className: "text-[#9b87f5] text-sm", children: t("privacy") }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "|" }),
      /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "text-[#9b87f5] text-sm", children: t("disclaimer") })
    ] }) })
  ] });
};
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const blogArticles = [
  {
    url: "/",
    title: "Lineal online in Originalgröße – Virtuelles Lineal",
    keywords: ["lineal", "lineal online", "maßband online", "lineal für handy", "originalgröße"]
  },
  {
    url: "/blog/wie-benutzt-man-ein-lineal",
    title: "Wie benutzt man ein Lineal richtig?",
    keywords: ["lineal", "messen", "anleitung", "präzision"]
  },
  {
    url: "/blog/1-cm-in-mm",
    title: "1 cm in mm – Einheiten umrechnen",
    keywords: ["zentimeter", "millimeter", "umrechnen", "einheiten", "1 centymetr"]
  },
  {
    url: "/blog/lineal-10-cm-originalgroesse",
    title: "Lineal 10 cm in Originalgröße anzeigen",
    keywords: ["lineal 10 cm anzeigen", "lineal 10 cm originalgröße", "lineal online"]
  },
  {
    url: "/blog/lineal-fuer-handy",
    title: "Lineal für Handy – Online messen auf dem Smartphone",
    keywords: ["lineal für handy", "lineal online handy", "mobile messen"]
  },
  {
    url: "/blog/massband-online",
    title: "Maßband online – kostenlos in cm und mm messen",
    keywords: ["maßband online", "maßband", "messen"]
  },
  {
    url: "/blog/metrisches-system",
    title: "Das metrische Dezimalsystem erklärt",
    keywords: ["metrisches system", "einheiten", "meter"]
  },
  {
    url: "/blog/mks-system",
    title: "Das MKS-System (Meter, Kilogramm, Sekunde)",
    keywords: ["mks", "einheiten", "physik"]
  },
  {
    url: "/blog/angloamerikanisches-system",
    title: "Das angloamerikanische Maßsystem",
    keywords: ["zoll", "fuß", "angloamerikanisch"]
  },
  {
    url: "/blog/natuerliches-einheitensystem",
    title: "Das natürliche Einheitensystem",
    keywords: ["natürliche einheiten", "physik"]
  },
  {
    url: "/blog/klinometer",
    title: "Klinometer – Was ist das und wie benutzt man es?",
    keywords: ["klinometer", "winkel messen"]
  },
  {
    url: "/blog/tiefenmesser",
    title: "Tiefenmesser – Anwendung und Funktionsweise",
    keywords: ["tiefenmesser", "messen"]
  },
  {
    url: "/blog/dimensionslose-zahlen",
    title: "Dimensionslose Zahlen in der Physik",
    keywords: ["dimensionslos", "physik"]
  }
];
const getRelatedArticles = (currentUrl, count2 = 2) => {
  const currentArticle = blogArticles.find((article) => article.url === currentUrl);
  if (!currentArticle) {
    const filtered = blogArticles.filter((article) => article.url !== "/");
    return [blogArticles[0], ...filtered.slice(0, count2 - 1)];
  }
  const scored = blogArticles.filter((article) => article.url !== currentUrl).map((article) => {
    const commonKeywords = article.keywords.filter((keyword) => currentArticle.keywords.includes(keyword));
    return { article, score: commonKeywords.length };
  }).sort((a, b) => b.score - a.score);
  const homepage = blogArticles.find((article) => article.url === "/");
  const relatedArticles = scored.map((item) => item.article).slice(0, homepage && currentUrl !== "/" ? count2 - 1 : count2);
  if (homepage && currentUrl !== "/") {
    relatedArticles.unshift(homepage);
  }
  return relatedArticles;
};
const CanonicalLink = ({ customUrl }) => {
  const location = useLocation();
  const baseUrl = "https://lineal.online";
  const canonicalUrl = customUrl || `${baseUrl}${location.pathname}`;
  return /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }) });
};
const calibrationGuide = "/assets/calibration-guide-Bt54wowC.png";
const reglaOnline = "/assets/regla-online-_vSOc-nF.jpg";
const reglaPrecision = "/assets/regla-precision-B0m0q1C7.jpg";
const HomeContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-700", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#9b87f5] mb-4", children: /* @__PURE__ */ jsx("strong", { children: "Lineal online in Originalgröße – das virtuelle Messwerkzeug" }) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Willkommen bei ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      ", Ihrem ",
      /* @__PURE__ */ jsx("strong", { children: "online Lineal" }),
      " für präzise Messungen direkt im Browser. Ob Sie ein ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal in cm" }),
      ", ein ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal in mm" }),
      " oder ein",
      " ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal in Zoll" }),
      " brauchen – unser kostenloses Werkzeug verwandelt jedes Display in ein",
      " ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal in Originalgröße" }),
      ". Perfekt als ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal online Handy" }),
      ", am Tablet oder am PC, ganz ohne Installation."
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#9b87f5] mb-4", children: /* @__PURE__ */ jsx("strong", { children: "Was ist Lineal.online?" }) }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      " ist ein kostenloses ",
      /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
      ", mit dem Sie Objekte und Abstände einfach messen können. Unser ",
      /* @__PURE__ */ jsx("strong", { children: "maßband online" }),
      " ist ideal für Schüler, Designer, Architekten und alle, die schnelle und genaue Messungen brauchen. Vergessen Sie das Suchen nach einem echten Lineal – mit ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      " haben Sie immer ein präzises ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
      " ",
      "zur Hand."
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#9b87f5] mb-4", children: /* @__PURE__ */ jsx("strong", { children: "So benutzen Sie unser Online-Lineal" }) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Die Nutzung von ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      " ist einfach und schnell:"
    ] }),
    /* @__PURE__ */ jsxs("ol", { className: "list-decimal pl-6 mb-4", children: [
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Lineal kalibrieren" }),
        ": Passen Sie das ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal in Originalgröße" }),
        " an Ihren Bildschirm an – per Kreditkarte oder Bildschirmdiagonale."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Mühelos messen" }),
        ": Legen Sie ein Objekt an den Bildschirm oder messen Sie Abstände digital. Sie können sich auch ein ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal 10 cm anzeigen" }),
        " lassen und Längen direkt ablesen."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Einheit wählen" }),
        ": Wechseln Sie zwischen ",
        /* @__PURE__ */ jsx("strong", { children: "Zentimetern" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Millimetern" }),
        " und ",
        /* @__PURE__ */ jsx("strong", { children: "Zoll" }),
        ", ganz wie Sie möchten – auch",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "1 centymetr" }),
        " entspricht hier exakt 10 mm."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Unser ",
      /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
      " ist intuitiv und benötigt weder Download noch Installation – perfekt für jede Situation."
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#9b87f5] mb-4", children: /* @__PURE__ */ jsx("strong", { children: "Funktionen unseres virtuellen Lineals" }) }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Messen in cm, mm und Zoll" }),
        ": Wechseln Sie die Einheit mit einem Klick."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Originalgröße einstellbar" }),
        ": Kalibrieren Sie das ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal 10 cm Originalgröße" }),
        ", damit es exakt zum Bildschirm passt."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Geräteübergreifend" }),
        ": Funktioniert auf PC, Laptop, Tablet und Smartphone."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Ohne Download" }),
        ": Nutzen Sie das ",
        /* @__PURE__ */ jsx("strong", { children: "maßband online" }),
        " direkt im Browser."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Für alle geeignet" }),
        ": Ideal für Designer, Schüler und Profis."
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#9b87f5] mb-4", children: /* @__PURE__ */ jsx("strong", { children: "Vorteile des Online-Lineals" }) }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Immer verfügbar" }),
        ": Nutzen Sie unser ",
        /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
        " überall, wo Sie Internet haben."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Ohne physisches Werkzeug" }),
        ": Kein Maßband, kein Lineal nötig."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Schnelle Messungen" }),
        ": Präzise Ergebnisse in Sekunden."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Vielseitig" }),
        ": Für Schulprojekte, Design, Architektur und mehr."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Testen Sie ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      " noch heute und genießen Sie den Komfort eines",
      " ",
      /* @__PURE__ */ jsx("strong", { children: "Lineals für Handy" }),
      ", das Ihnen jederzeit zur Verfügung steht."
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#9b87f5] mb-4", children: /* @__PURE__ */ jsx("strong", { children: "Tipps für präzise Messungen" }) }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Sauber kalibrieren" }),
        ": Achten Sie darauf, dass das ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal in Originalgröße" }),
        " exakt zum Bildschirm passt."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Referenzobjekt nutzen" }),
        ": Prüfen Sie die Genauigkeit mit einem Gegenstand bekannter Größe (z.B. Münze oder Kreditkarte)."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Bildschirm reinigen" }),
        ": Ein sauberer Bildschirm verhindert Ablesefehler."
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#9b87f5] mb-4", children: /* @__PURE__ */ jsx("strong", { children: "Warum Lineal.online wählen?" }) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Bei ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      " erhalten Sie das beste verfügbare ",
      /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
      ". Unser Werkzeug überzeugt durch:"
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Präzision" }),
        ": Genaue Messungen in ",
        /* @__PURE__ */ jsx("strong", { children: "cm" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "mm" }),
        " und ",
        /* @__PURE__ */ jsx("strong", { children: "Zoll" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Einfache Bedienung" }),
        ": Übersichtliche Oberfläche für alle."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Kostenlos" }),
        ": Keine Kosten, keine Abos."
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Verfügbarkeit" }),
        ": Ihr ",
        /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
        " – jederzeit und auf jedem Gerät."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Egal ob für ein wichtiges Projekt oder eine schnelle Messung – ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      " ist Ihre ideale Lösung."
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsxs("p", { className: "font-medium", children: [
      "Starten Sie jetzt mit präzisem Messen! Entdecken Sie ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
      " – Ihr zuverlässiges, immer verfügbares virtuelles ",
      /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
      ", Tablet und PC."
    ] })
  ] });
};
const HowToUseSection = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-ruler-primary", children: t("howToUse") }),
    /* @__PURE__ */ jsxs(Card, { className: "bg-white h-full", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: t("howToUse") }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 list-disc pl-5", children: [
        /* @__PURE__ */ jsx("li", { children: t("howToUseStep1") }),
        /* @__PURE__ */ jsx("li", { children: t("howToUseStep2") }),
        /* @__PURE__ */ jsx("li", { children: t("howToUseStep3") }),
        /* @__PURE__ */ jsx("li", { children: t("howToUseStep4") }),
        /* @__PURE__ */ jsx("li", { children: t("useCase1Description") }),
        /* @__PURE__ */ jsx("li", { children: t("useCase4Description") })
      ] }) })
    ] })
  ] });
};
const WhyPerfectSection = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-ruler-primary", children: t("whyPerfect") }),
    /* @__PURE__ */ jsxs(Card, { className: "bg-white h-full", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: t("whyPerfect") }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex", children: [
          /* @__PURE__ */ jsx(Check, { className: "text-green-500 mr-2 shrink-0", size: 20 }),
          /* @__PURE__ */ jsx("span", { children: t("whyPerfectItem1") })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex", children: [
          /* @__PURE__ */ jsx(Check, { className: "text-green-500 mr-2 shrink-0", size: 20 }),
          /* @__PURE__ */ jsx("span", { children: t("whyPerfectItem2") })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex", children: [
          /* @__PURE__ */ jsx(Check, { className: "text-green-500 mr-2 shrink-0", size: 20 }),
          /* @__PURE__ */ jsx("span", { children: t("whyPerfectItem3") })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex", children: [
          /* @__PURE__ */ jsx(Check, { className: "text-green-500 mr-2 shrink-0", size: 20 }),
          /* @__PURE__ */ jsx("span", { children: t("whyPerfectItem4") })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex", children: [
          /* @__PURE__ */ jsx(Check, { className: "text-green-500 mr-2 shrink-0", size: 20 }),
          /* @__PURE__ */ jsx("span", { children: t("whyPerfectItem5") })
        ] })
      ] }) })
    ] })
  ] });
};
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const FaqSection = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-ruler-primary", children: t("faq") }),
    /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "bg-white rounded-md shadow", children: [
      /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-4 hover:no-underline hover:bg-ruler-secondary font-medium", children: t("faqQuestion1") }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-4 pb-4", children: t("faqAnswer1") })
      ] }),
      /* @__PURE__ */ jsxs(AccordionItem, { value: "item-2", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-4 hover:no-underline hover:bg-ruler-secondary font-medium", children: t("faqQuestion2") }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-4 pb-4", children: t("faqAnswer2") })
      ] }),
      /* @__PURE__ */ jsxs(AccordionItem, { value: "item-3", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-4 hover:no-underline hover:bg-ruler-secondary font-medium", children: t("faqQuestion3") }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-4 pb-4", children: t("faqAnswer3") })
      ] })
    ] })
  ] });
};
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const RulerSizesTable = () => {
  const { t } = useLanguage();
  const generateTableRows = () => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      const leftStartNum = i * 10 + 1;
      const rightStartNum = i * 10 + 51;
      rows.push(
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxs(TableCell, { className: "border px-4 py-2", children: [
            t("rulerOf"),
            " ",
            leftStartNum,
            " cm"
          ] }),
          /* @__PURE__ */ jsxs(TableCell, { className: "border px-4 py-2", children: [
            t("rulerOf"),
            " ",
            rightStartNum,
            " cm"
          ] })
        ] }, `row-${i}`)
      );
      for (let j = 1; j < 10; j++) {
        rows.push(
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxs(TableCell, { className: "border px-4 py-2", children: [
              t("rulerOf"),
              " ",
              leftStartNum + j,
              " cm"
            ] }),
            /* @__PURE__ */ jsxs(TableCell, { className: "border px-4 py-2", children: [
              t("rulerOf"),
              " ",
              rightStartNum + j,
              " cm"
            ] })
          ] }, `row-${i}-${j}`)
        );
      }
    }
    return rows;
  };
  return /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-ruler-primary", children: t("commonRulerSizes") }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs(Table, { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { className: "border bg-gray-50 px-4 py-2 w-1/2", children: t("smallRulers") }),
        /* @__PURE__ */ jsx(TableHead, { className: "border bg-gray-50 px-4 py-2 w-1/2", children: t("largeRulers") })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: generateTableRows() })
    ] }) })
  ] });
};
const Index = () => {
  const { t } = useLanguage();
  const { orientation } = useCalibration();
  const [contentTopMargin, setContentTopMargin] = useState("320px");
  const isMobile = useIsMobile();
  const featuredArticles = blogArticles.filter((article) => article.url !== "/").slice(0, 3);
  const metaTitle = "Lineal online in Originalgröße | Lineal 10 cm anzeigen | Maßband für Handy";
  const metaDescription = "Lineal online in Originalgröße – kostenlos auf Handy, Tablet und PC. Online Lineal in cm, mm und Zoll. Lineal 10 cm anzeigen, 1 Zentimeter messen, Maßband online nutzen.";
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Lineal.online",
    description: metaDescription,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    url: "https://lineal.online/",
    inLanguage: "de-DE",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    featureList: [
      "Messen in Zentimetern, Millimetern und Zoll",
      "Lineal 10 cm in Originalgröße",
      "Maßband online für jedes Gerät",
      "Lineal für Handy, Tablet und PC",
      "Ohne Download, direkt im Browser",
      "Präzise Kalibrierung"
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: t("faqQuestion1"), acceptedAnswer: { "@type": "Answer", text: t("faqAnswer1") } },
      { "@type": "Question", name: t("faqQuestion2"), acceptedAnswer: { "@type": "Answer", text: t("faqAnswer2") } },
      { "@type": "Question", name: t("faqQuestion3"), acceptedAnswer: { "@type": "Answer", text: t("faqAnswer3") } }
    ]
  };
  useEffect(() => {
    if (isMobile) return;
    setContentTopMargin(orientation === "vertical" ? "640px" : "320px");
  }, [orientation, isMobile]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: metaTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: metaDescription }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "lineal, lineal online, online lineal, lineal online handy, 1 centymetr, maßband online, lineal 10 cm anzeigen, lineal 10 cm originalgröße, lineal für handy"
        }
      ),
      /* @__PURE__ */ jsx("html", { lang: "de" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: metaTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: metaDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://lineal.online/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "de_DE" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#9b87f5" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(webApplicationSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) })
    ] }),
    /* @__PURE__ */ jsx(CanonicalLink, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx(Header, {}),
      !isMobile && /* @__PURE__ */ jsxs("div", { className: "container text-center mt-8 mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-[#9b87f5] animate-fade-in", children: /* @__PURE__ */ jsx("strong", { children: "Lineal online in Originalgröße – Maßband & Lineal für Handy" }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-600 mt-2 animate-slide-in", children: [
          "Digitales ",
          /* @__PURE__ */ jsx("strong", { children: "Lineal online" }),
          " mit präziser Kalibrierung – Lineal 10 cm anzeigen, in cm, mm und Zoll messen, direkt auf jedem Bildschirm."
        ] })
      ] }),
      isMobile ? /* @__PURE__ */ jsx(MobileRuler, {}) : /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden mt-4", children: /* @__PURE__ */ jsx(Ruler, { className: "mb-4" }) }),
      /* @__PURE__ */ jsxs(
        "main",
        {
          className: `container flex-1 relative pb-6 ${isMobile ? "mt-4" : ""}`,
          style: !isMobile ? { marginTop: contentTopMargin } : {},
          children: [
            isMobile && /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-[#9b87f5] mb-2", children: "Lineal online Handy – in Originalgröße messen" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Digitales Lineal für Handy mit präziser Kalibrierung. Lineal 10 cm anzeigen und genaue Messungen in cm, mm und Zoll vornehmen." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-6 md:mb-10", children: /* @__PURE__ */ jsx(Card, { className: "bg-white p-4 md:p-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#9b87f5] flex items-center", children: [
                /* @__PURE__ */ jsx(Book, { size: 20, className: "mr-2" }),
                "Empfohlene Artikel"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: featuredArticles.map((article, index) => /* @__PURE__ */ jsxs(
                Link,
                {
                  to: article.url,
                  className: "p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group",
                  children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-2 text-gray-800 group-hover:text-[#9b87f5]", children: article.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: article.keywords.slice(0, 3).join(", ") }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-[#9b87f5] text-sm font-medium", children: [
                      "Weiterlesen",
                      /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "ml-1 group-hover:translate-x-1 transition-transform" })
                    ] })
                  ]
                },
                index
              )) })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: "mb-6 md:mb-10", children: /* @__PURE__ */ jsx(Card, { className: "bg-white p-4 md:p-6", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: calibrationGuide,
                alt: "Kalibrierungsanleitung: Lineal online an Kreditkartenbreite anpassen",
                className: "w-full h-auto rounded-lg object-cover",
                loading: "eager",
                fetchPriority: "high",
                width: 1200,
                height: 630,
                decoding: "async"
              }
            ) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx(Card, { className: "bg-white p-6", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx(HomeContent, {}) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx(Card, { className: "bg-white p-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-4", children: t("rulerDescription") }),
              /* @__PURE__ */ jsx("p", { className: "mb-4", children: t("contentIntro") }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-3 text-[#9b87f5]", children: t("moreInfo") }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg flex items-start", children: [
                  /* @__PURE__ */ jsx(Ruler$1, { className: "text-[#9b87f5] mr-2 mt-1", size: 20 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: t("useCase1") }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: t("useCase1Description") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg flex items-start", children: [
                  /* @__PURE__ */ jsx(Pencil, { className: "text-[#9b87f5] mr-2 mt-1", size: 20 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: t("useCase2") }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: t("useCase2Description") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg flex items-start", children: [
                  /* @__PURE__ */ jsx(Square, { className: "text-[#9b87f5] mr-2 mt-1", size: 20 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: t("useCase3") }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: t("useCase3Description") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg flex items-start", children: [
                  /* @__PURE__ */ jsx(Maximize, { className: "text-[#9b87f5] mr-2 mt-1", size: 20 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: t("useCase4") }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: t("useCase4Description") })
                  ] })
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10", children: [
              /* @__PURE__ */ jsx(HowToUseSection, {}),
              /* @__PURE__ */ jsx(WhyPerfectSection, {})
            ] }),
            /* @__PURE__ */ jsx(FaqSection, {}),
            /* @__PURE__ */ jsx(RulerSizesTable, {}),
            /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx(Card, { className: "bg-white p-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-[#9b87f5]", children: "So nutzen Sie das Lineal online richtig" }),
              /* @__PURE__ */ jsxs("p", { className: "mb-6 text-gray-700", children: [
                "Lernen Sie Schritt für Schritt, wie Sie das virtuelle Lineal kalibrieren und für genaue Messungen einsetzen – egal ob als ",
                /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
                ", Tablet oder PC."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 text-gray-800", children: "1. Maßeinheit wählen" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
                    "Wählen Sie die gewünschte Einheit: Millimeter (mm), Zentimeter (cm) oder Zoll. Sie können jederzeit über das Lineal-Menü wechseln. ",
                    /* @__PURE__ */ jsx("strong", { children: "1 centymetr" }),
                    " entspricht dabei genau 10 mm."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 text-gray-800", children: "2. Bildschirm kalibrieren" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-3", children: "Damit das Lineal echte Maße anzeigt, kalibrieren Sie kurz Ihren Bildschirm:" }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-gray-800", children: "Option A – Kreditkarte (empfohlen):" }),
                    /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
                      /* @__PURE__ */ jsx("li", { children: "Legen Sie eine Kredit- oder EC-Karte an den Bildschirm." }),
                      /* @__PURE__ */ jsx("li", { children: "Verschieben Sie die Kalibrierung, bis die Karte auf dem Bildschirm 85,6 mm misst." }),
                      /* @__PURE__ */ jsx("li", { children: "Speichern – fertig." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-gray-800", children: "Option B – Bildschirmdiagonale:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
                      /* @__PURE__ */ jsx("li", { children: "Wenn Sie Ihre Bildschirmdiagonale in Zoll kennen, tragen Sie sie im Kalibrierungsfeld ein." }),
                      /* @__PURE__ */ jsx("li", { children: "Das Verhältnis Pixel→mm wird automatisch berechnet." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "my-6", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: reglaOnline,
                    alt: "Präzises digitales Lineal online auf dunkler Oberfläche – perfekt zum Messen in cm und mm",
                    className: "w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover",
                    loading: "lazy",
                    decoding: "async",
                    width: 800,
                    height: 420
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 text-gray-800", children: "3. Lineal 10 cm anzeigen und messen" }),
                  /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
                    /* @__PURE__ */ jsx("li", { children: "Legen Sie die Kante Ihres Objekts an die 0 des virtuellen Lineals." }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      "Lesen Sie das Maß in der gewünschten Einheit ab – z.B. ",
                      /* @__PURE__ */ jsx("strong", { children: "Lineal 10 cm Originalgröße" }),
                      "."
                    ] }),
                    /* @__PURE__ */ jsx("li", { children: "Bei längeren Objekten verschieben Sie das Lineal oder zoomen Sie hinein." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 text-gray-800", children: "4. Tipps für mehr Genauigkeit" }),
                  /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
                    /* @__PURE__ */ jsx("li", { children: "Browserzoom auf 100% stellen." }),
                    /* @__PURE__ */ jsx("li", { children: "Dickere Hüllen entfernen – sie verfälschen die Position." }),
                    /* @__PURE__ */ jsx("li", { children: "Nach Geräte- oder Browser-Updates erneut kalibrieren." }),
                    /* @__PURE__ */ jsx("li", { children: "Für kritische Messungen ein zertifiziertes physisches Messgerät nutzen." })
                  ] })
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx(Card, { className: "bg-white p-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-[#9b87f5]", children: "Jetzt mit dem Messen starten!" }),
              /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-700 mb-4", children: [
                "Ihr Bildschirm wird zum kostenlosen, präzisen Messgerät. Mit unserem ",
                /* @__PURE__ */ jsx("strong", { children: "Lineal online" }),
                " ",
                "messen Sie Objekte direkt am Handy, Tablet oder PC – ohne Download."
              ] }),
              /* @__PURE__ */ jsx("div", { className: "my-6", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: reglaPrecision,
                  alt: "Person nutzt ein präzises Lineal mit Millimeter-Genauigkeit – Maßband online für Designprojekte",
                  className: "w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover",
                  loading: "lazy",
                  decoding: "async",
                  width: 800,
                  height: 420
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-gray-800", children: "⚡ Schnell, einfach und kostenlos" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Einmal kalibrieren – immer nutzen. Funktioniert mit Zentimetern, Millimetern und Zoll." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-gray-800", children: "✓ So legen Sie los" }),
                  /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
                    /* @__PURE__ */ jsx("li", { children: '„Bildschirm kalibrieren" antippen.' }),
                    /* @__PURE__ */ jsx("li", { children: "Per Kreditkarte oder Bildschirmgröße abgleichen." }),
                    /* @__PURE__ */ jsx("li", { children: "Sofort jedes Objekt messen, das Sie zur Hand haben." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-gray-800", children: "🎯 Worauf warten?" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Messen, vergleichen und rechnen – sofort von jedem Gerät. Ideal für Schule, Design, Handwerk und jeden, der schnell und zuverlässig messen möchte." })
                ] })
              ] })
            ] }) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const About = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Über uns – Lineal.online | Lineal online & Maßband für Handy" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Lineal.online ist Ihr kostenloses Lineal online in Originalgröße. Erfahren Sie mehr über unser Maßband online für Handy, Tablet und PC."
        }
      ),
      /* @__PURE__ */ jsx("html", { lang: "de" })
    ] }),
    /* @__PURE__ */ jsx(CanonicalLink, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "container flex-1 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md mb-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6 text-ruler-primary", children: "Über uns" }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-700 mb-6", children: [
            "Willkommen bei ",
            /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
            ", Ihrem zuverlässigen, präzisen digitalen Messwerkzeug. Wir haben dieses Tool gebaut, damit Sie jederzeit ein ",
            /* @__PURE__ */ jsx("strong", { children: "Lineal online" }),
            " zur Hand haben – auch wenn gerade kein echtes Lineal in der Nähe ist."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-6", children: [
            "In einer zunehmend digitalen Welt sind klassische Werkzeuge nicht immer verfügbar. Deshalb haben wir eine Web-App entwickelt, die Ihren Bildschirm in ein kalibriertes ",
            /* @__PURE__ */ jsx("strong", { children: "Lineal in Originalgröße" }),
            " verwandelt – ob am PC, Tablet oder als ",
            /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsx(Target, { className: "text-ruler-primary mr-3", size: 32 }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-ruler-primary", children: "Unsere Mission" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
              "Ein zugängliches, präzises und einfach zu bedienendes ",
              /* @__PURE__ */ jsx("strong", { children: "Maßband online" }),
              " für alle bereitzustellen – unabhängig vom Ort oder Gerät."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsx(Zap, { className: "text-ruler-primary mr-3", size: 32 }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-ruler-primary", children: "Unsere Vision" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Das verlässlichste und meistgenutzte digitale Lineal im deutschsprachigen Raum zu sein – und Millionen Menschen bei ihren alltäglichen Messungen zu helfen." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-6 text-ruler-primary", children: "Warum Lineal.online wählen?" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-700", children: [
            /* @__PURE__ */ jsx("li", { children: "✓ Garantierte Präzision durch fortschrittliche Kalibrierung" }),
            /* @__PURE__ */ jsx("li", { children: "✓ 100% kostenlos – keine Registrierung, keine Abos" }),
            /* @__PURE__ */ jsx("li", { children: "✓ Einfache, intuitive Bedienung" }),
            /* @__PURE__ */ jsx("li", { children: "✓ Kompatibel mit allen Geräten (PC, Tablet, Smartphone)" }),
            /* @__PURE__ */ jsx("li", { children: "✓ Datenschutz zuerst – Kalibrierung wird lokal gespeichert" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name ist erforderlich" }).max(100),
  email: z.string().trim().email({ message: "Ungültige E-Mail-Adresse" }).max(255),
  message: z.string().trim().min(1, { message: "Nachricht ist erforderlich" }).max(1e3)
});
const Contact = () => {
  const { toast: toast2 } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    try {
      contactSchema.parse(formData);
      toast2({ title: "Nachricht gesendet!", description: "Danke für Ihre Nachricht. Wir melden uns bald." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Kontakt – Lineal.online | Lineal online für Handy" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Kontaktieren Sie das Team von Lineal.online – dem kostenlosen Lineal online und Maßband für Handy, Tablet und PC." }),
      /* @__PURE__ */ jsx("html", { lang: "de" })
    ] }),
    /* @__PURE__ */ jsx(CanonicalLink, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "container flex-1 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-6 text-ruler-primary", children: "Kontakt" }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-gray-700", children: "Haben Sie eine Frage oder einen Vorschlag? Wir freuen uns auf Ihre Nachricht – füllen Sie einfach das Formular aus." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2 text-gray-700", children: "Name *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "name",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                className: errors.name ? "border-red-500" : "",
                placeholder: "Ihr Name",
                maxLength: 100
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2 text-gray-700", children: "E-Mail *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                name: "email",
                type: "email",
                value: formData.email,
                onChange: handleChange,
                className: errors.email ? "border-red-500" : "",
                placeholder: "ihre@email.de",
                maxLength: 255
              }
            ),
            errors.email && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2 text-gray-700", children: "Nachricht *" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "message",
                name: "message",
                value: formData.message,
                onChange: handleChange,
                className: errors.message ? "border-red-500" : "",
                placeholder: "Schreiben Sie Ihre Nachricht...",
                rows: 6,
                maxLength: 1e3
              }
            ),
            errors.message && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.message })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Senden..." : "Nachricht senden" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-3 text-ruler-primary", children: "Andere Kontaktmöglichkeiten" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
            "E-Mail: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:info@lineal.online", className: "text-ruler-primary hover:underline", children: "info@lineal.online" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const Privacy = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Datenschutzerklärung – Lineal.online" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Datenschutzerklärung von Lineal.online – Informationen zur Verarbeitung Ihrer Daten beim Online-Lineal." }),
      /* @__PURE__ */ jsx("html", { lang: "de" })
    ] }),
    /* @__PURE__ */ jsx(CanonicalLink, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "container flex-1 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md prose max-w-none", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-6 text-ruler-primary", children: "Datenschutzerklärung" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Lineal.online betreibt die Website ",
          /* @__PURE__ */ jsx("a", { href: "https://lineal.online", children: "https://lineal.online" }),
          ". Diese Seite informiert Sie über unsere Richtlinien zur Erfassung, Verwendung und Weitergabe personenbezogener Daten bei der Nutzung unseres Dienstes."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Wir verwenden Ihre Daten ausschließlich zur Bereitstellung und Verbesserung des Dienstes. Mit der Nutzung des Dienstes erklären Sie sich mit dieser Richtlinie einverstanden." }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Erhobene Daten" }),
        /* @__PURE__ */ jsx("p", { children: "Wir erheben technische Daten wie IP-Adresse, Browsertyp, besuchte Seiten sowie Datum und Uhrzeit des Besuchs. Kalibrierungseinstellungen werden ausschließlich lokal in Ihrem Browser gespeichert." }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Cookies" }),
        /* @__PURE__ */ jsx("p", { children: "Wir verwenden Cookies und ähnliche Technologien, um die Nutzung des Dienstes zu analysieren und Ihre Einstellungen zu speichern. Sie können Cookies in Ihrem Browser jederzeit deaktivieren." }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Datensicherheit" }),
        /* @__PURE__ */ jsx("p", { children: "Die Sicherheit Ihrer Daten ist uns wichtig. Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten." }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Werbung" }),
        /* @__PURE__ */ jsx("p", { children: "Diese Website kann Werbung Dritter (z.B. Google AdSense) anzeigen. Werbepartner verwenden ggf. Cookies zur Personalisierung von Anzeigen." }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Bei Fragen zur Datenschutzerklärung erreichen Sie uns unter:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:info@lineal.online", children: "info@lineal.online" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const Disclaimer = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Impressum & Haftungsausschluss – Lineal.online" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Impressum und Haftungsausschluss von Lineal.online – Ihrem kostenlosen Lineal online und Maßband für Handy, Tablet und PC." }),
      /* @__PURE__ */ jsx("html", { lang: "de" })
    ] }),
    /* @__PURE__ */ jsx(CanonicalLink, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "container flex-1 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md prose max-w-none", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-6 text-ruler-primary", children: "Impressum & Haftungsausschluss" }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Anbieter" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Lineal.online",
          /* @__PURE__ */ jsx("br", {}),
          "E-Mail: ",
          /* @__PURE__ */ jsx("a", { href: "mailto:admin@lineal.online", children: "admin@lineal.online" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Haftungsausschluss" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Alle Informationen auf dieser Website (",
          /* @__PURE__ */ jsx("a", { href: "https://lineal.online", children: "https://lineal.online" }),
          ") werden nach bestem Wissen und ausschließlich zu Informationszwecken bereitgestellt. Lineal.online übernimmt keine Garantie für Vollständigkeit, Zuverlässigkeit oder Genauigkeit dieser Informationen. Handlungen auf Grundlage der hier gefundenen Informationen erfolgen auf eigenes Risiko. Für kritische Messungen (z.B. in Technik oder Bauwesen) verwenden Sie bitte zertifizierte physische Messgeräte."
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Externe Links" }),
        /* @__PURE__ */ jsx("p", { children: "Unsere Website kann Links zu externen Websites enthalten. Wir haben keinen Einfluss auf deren Inhalt und übernehmen keine Verantwortung für externe Inhalte oder deren Datenschutzpraxis." }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Zustimmung" }),
        /* @__PURE__ */ jsx("p", { children: "Mit der Nutzung unserer Website akzeptieren Sie diesen Haftungsausschluss und seine Bedingungen." }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-3 text-ruler-primary", children: "Aktualisierung" }),
        /* @__PURE__ */ jsx("p", { children: "Änderungen an diesem Dokument werden hier sichtbar veröffentlicht." })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof console !== "undefined") {
      console.error("404: route not found:", location.pathname);
    }
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Seite nicht gefunden – Lineal.online" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex" }),
      /* @__PURE__ */ jsx("html", { lang: "de" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Hoppla! Diese Seite wurde nicht gefunden." }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-ruler-primary hover:underline", children: "Zurück zur Startseite" })
    ] }) })
  ] });
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const reglaImage = "/assets/Regla%20para%20Imprimir-CsgzXZU-.png";
const LinealDrucken = () => {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Lineal zum Ausdrucken – kostenloses Lineal 30 cm zum Drucken | Lineal.online" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Lineal zum Ausdrucken kostenlos – 30 cm oder 12 Zoll in Originalgröße. Druckbares Lineal direkt aus dem Browser, ideal für Schule, Büro und Heimwerken."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "lineal zum ausdrucken, lineal drucken, lineal 30 cm, lineal 12 zoll, druckbares lineal" }),
      /* @__PURE__ */ jsx("html", { lang: "de" })
    ] }),
    /* @__PURE__ */ jsx(CanonicalLink, {}),
    /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 print:py-0", children: [
      /* @__PURE__ */ jsx("div", { className: "print:hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Lineal zum Ausdrucken – kostenloses Lineal online drucken" }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-700 mb-6", children: [
          "Sie brauchen ein echtes Lineal, haben aber keines zur Hand? Mit unserem Tool können Sie ein",
          /* @__PURE__ */ jsx("strong", { children: " Lineal in Originalgröße" }),
          " bis 29,7 cm bzw. 11,7 Zoll direkt aus dem Browser ausdrucken."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(Button, { onClick: handlePrint, className: "bg-ruler-primary hover:bg-ruler-secondary text-white", children: [
          /* @__PURE__ */ jsx(Printer, { className: "mr-2 h-4 w-4" }),
          "Lineal drucken"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "lg:w-auto flex-shrink-0 flex justify-center lg:justify-start", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: reglaImage,
              alt: "Lineal zum Ausdrucken in Originalgröße",
              className: "h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[800px] w-auto object-contain",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-8", children: [
            /* @__PURE__ */ jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "So drucken Sie das Lineal korrekt" }),
              /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside space-y-2 text-gray-700", children: [
                /* @__PURE__ */ jsx("li", { children: 'Klicken Sie oben auf „Lineal drucken".' }),
                /* @__PURE__ */ jsx("li", { children: "Wählen Sie im Druckdialog A4 (210 × 297 mm)." }),
                /* @__PURE__ */ jsx("li", { children: 'Stellen Sie die Skalierung auf 100% („tatsächliche Größe").' }),
                /* @__PURE__ */ jsx("li", { children: "Druckorientierung Hoch- oder Querformat – je nach Vorliebe." }),
                /* @__PURE__ */ jsx("li", { children: "Prüfen Sie das Druckergebnis mit einem physischen Lineal." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Linealtypen zum Ausdrucken" }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
                /* @__PURE__ */ jsx("li", { children: "Lineal 30 cm zum Ausdrucken (Zentimeter und Millimeter)" }),
                /* @__PURE__ */ jsx("li", { children: "Lineal 12 Zoll zum Ausdrucken" }),
                /* @__PURE__ */ jsx("li", { children: "Kombiniertes Lineal in cm und Zoll" }),
                /* @__PURE__ */ jsx("li", { children: "Lineal als PDF zum Speichern und Wiederverwenden" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Nützliche Tipps" }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
                /* @__PURE__ */ jsx("li", { children: "Dickeres Papier oder Karton für mehr Stabilität." }),
                /* @__PURE__ */ jsx("li", { children: "Bei leichter Skalenabweichung den Zoom manuell anpassen." }),
                /* @__PURE__ */ jsx("li", { children: "Laminieren erhöht die Lebensdauer Ihres gedruckten Lineals." })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden print:block print:m-0 print:p-0", children: /* @__PURE__ */ jsx("img", { src: reglaImage, alt: "Lineal zum Ausdrucken", className: "w-auto h-auto max-w-none" }) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body, html { margin: 0; padding: 0; width: 210mm; height: 297mm; }
          header, footer, nav { display: none !important; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:m-0 { margin: 0 !important; }
          .print\\:p-0 { padding: 0 !important; }
          img { max-width: none !important; width: auto !important; height: auto !important; display: block; }
        }
      ` })
  ] });
};
const RelatedArticlesSection = ({ currentUrl }) => {
  const relatedArticles = getRelatedArticles(currentUrl, 3);
  return /* @__PURE__ */ jsxs("div", { className: "mt-8 p-4 bg-gray-50 rounded-lg", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Verwandte Artikel" }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: relatedArticles.map((article, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: article.url, className: "text-blue-600 hover:underline flex items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "mr-2", children: "•" }),
      article.title
    ] }) }, index)) })
  ] });
};
const Section = ({ children }) => /* @__PURE__ */ jsx("article", { className: "prose prose-sm sm:prose lg:prose-lg max-w-none", children });
const blogPosts = [
  {
    slug: "lineal-10-cm-originalgroesse",
    title: "Lineal 10 cm anzeigen – Lineal 10 cm Originalgröße online",
    metaDescription: "Lineal 10 cm anzeigen in Originalgröße – kostenlos online, ohne Download. Präzises Online-Lineal in cm und mm für Handy, Tablet und PC.",
    keywords: "lineal 10 cm anzeigen, lineal 10 cm originalgröße, lineal online, online lineal, lineal",
    publishedAt: "2026-06-01",
    heroAlt: "Lineal 10 cm in Originalgröße auf einem Bildschirm angezeigt",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-6", children: "Lineal 10 cm anzeigen – die einfachste Methode in Originalgröße" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Sie möchten ein ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal 10 cm anzeigen" }),
        ", ohne ein physisches Lineal zur Hand zu haben? Mit",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal.online" }),
        " bekommen Sie ein ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal 10 cm Originalgröße" }),
        " direkt im Browser – auf dem Handy, Tablet oder PC."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Warum ein 10-cm-Lineal online?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Ein 10-cm-Lineal ist die am häufigsten gesuchte Größe für schnelle Messungen: Schmuck, Schrauben, kleine Werkstücke, Kleidung oder Bastelteile. Unser ",
        /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
        " zeigt die echten 10 cm exakt so an, wie ein Lineal aus dem Federmäppchen."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "So zeigen Sie ein Lineal 10 cm in Originalgröße" }),
      /* @__PURE__ */ jsxs("ol", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "Öffnen Sie unsere ",
          /* @__PURE__ */ jsx("a", { href: "/", children: "Startseite" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("li", { children: "Kalibrieren Sie das Lineal kurz mit einer Kreditkarte (85,6 mm Breite)." }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Schon haben Sie ein präzises ",
          /* @__PURE__ */ jsx("strong", { children: "Lineal 10 cm Originalgröße" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Genauigkeit prüfen" }),
      /* @__PURE__ */ jsx("p", { children: "Vergleichen Sie das angezeigte Lineal mit einem Gegenstand bekannter Größe – z.B. einer 1-Euro-Münze (23,25 mm). Stimmt die Anzeige, sind Ihre 10 cm exakt." }),
      /* @__PURE__ */ jsx("h2", { children: "Vorteile gegenüber einem klassischen Lineal" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Immer verfügbar – auch unterwegs." }),
        /* @__PURE__ */ jsx("li", { children: "Kostenlos, ohne Installation." }),
        /* @__PURE__ */ jsx("li", { children: "Mehrere Einheiten: cm, mm, Zoll." }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Funktioniert als ",
          /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
          ", Tablet und PC."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Probieren Sie es jetzt aus – Ihr ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal 10 cm online" }),
        " wartet."
      ] })
    ] })
  },
  {
    slug: "lineal-fuer-handy",
    title: "Lineal für Handy – Lineal online Handy in cm und mm",
    metaDescription: "Lineal für Handy kostenlos online – Lineal online Handy in cm, mm und Zoll. Messen direkt auf dem Smartphone, ohne App-Download.",
    keywords: "lineal für handy, lineal online handy, lineal online, online lineal, maßband online",
    publishedAt: "2026-06-01",
    heroAlt: "Lineal für Handy – Online-Lineal auf Smartphone-Bildschirm",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Lineal für Handy – kostenlos online messen" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Ein ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
        " ist die schnellste Möglichkeit, Dinge unterwegs zu messen. Unser",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "lineal online handy" }),
        " verwandelt jedes Smartphone in ein präzises Messgerät – ganz ohne App."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Wie funktioniert das Handy-Lineal?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Smartphones haben unterschiedliche Pixeldichten. Damit das ",
        /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
        " echte Maße anzeigt, kalibrieren Sie es einmal mit Ihrer EC- oder Kreditkarte (85,6 mm). Danach werden cm, mm und Zoll exakt angezeigt."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Vorteile eines Online-Lineals fürs Handy" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Keine App, kein Download." }),
        /* @__PURE__ */ jsx("li", { children: "Funktioniert auf Android und iPhone." }),
        /* @__PURE__ */ jsx("li", { children: "Lineal 10 cm anzeigen mit einem Tippen." }),
        /* @__PURE__ */ jsx("li", { children: "Messen im Hoch- oder Querformat." })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Anwendungsfälle" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Schrauben, Kleidergrößen, Bastelteile, Schmuckmaße, Werkstücke – alles, was kleiner ist als Ihre Bildschirmdiagonale, können Sie mit dem ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
        " messen."
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Jetzt öffnen: ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal.online" }),
        " – Ihr ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal online Handy" }),
        " in Originalgröße."
      ] })
    ] })
  },
  {
    slug: "massband-online",
    title: "Maßband online – kostenlos in cm und mm messen",
    metaDescription: "Maßband online kostenlos – messen Sie Längen in cm, mm und Zoll direkt im Browser. Präzises Online-Maßband für Handy, Tablet und PC.",
    keywords: "maßband online, lineal online, online lineal, maßband, messen online",
    publishedAt: "2026-06-01",
    heroAlt: "Maßband online – digitales Online-Maßband",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Maßband online – das kostenlose digitale Maßband" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Ein ",
        /* @__PURE__ */ jsx("strong", { children: "maßband online" }),
        " ist ideal, wenn Sie schnell etwas messen müssen und kein klassisches Maßband zur Hand haben. Bei Lineal.online finden Sie ein präzises digitales Maßband direkt im Browser."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Wie unterscheidet sich das Maßband vom Lineal?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Ein Maßband ist flexibel und meist länger als ein Lineal. Online entfällt dieser Unterschied – beide messen Längen in cm, mm und Zoll. Unser Tool kombiniert beides: ",
        /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
        " +",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "maßband online" }),
        " in einer Anwendung."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Kalibrierung in 30 Sekunden" }),
      /* @__PURE__ */ jsxs("ol", { children: [
        /* @__PURE__ */ jsx("li", { children: "EC-Karte an den Bildschirm halten." }),
        /* @__PURE__ */ jsx("li", { children: "Skala so verschieben, dass die Karte 85,6 mm misst." }),
        /* @__PURE__ */ jsx("li", { children: "Speichern – fertig." })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Wofür eignet sich ein Online-Maßband?" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Bastel- und DIY-Projekte" }),
        /* @__PURE__ */ jsx("li", { children: "Schule und Unterricht" }),
        /* @__PURE__ */ jsx("li", { children: "Schmuck, Knöpfe, Kleinteile" }),
        /* @__PURE__ */ jsx("li", { children: "Designarbeit am Bildschirm" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Starten Sie jetzt mit dem kostenlosen ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Maßband online" }),
        " – auch als",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
        " nutzbar."
      ] })
    ] })
  },
  {
    slug: "1-cm-in-mm",
    title: "1 cm in mm – Umrechnung & 1 centymetr erklärt",
    metaDescription: "1 cm in mm einfach erklärt: 1 Zentimeter = 10 Millimeter. Umrechnungstabelle, Beispiele und ein kostenloses Online-Lineal zum direkten Messen.",
    keywords: "1 centymetr, 1 cm in mm, zentimeter, millimeter, einheiten umrechnen, lineal online",
    publishedAt: "2026-06-01",
    heroAlt: "1 cm in mm – Umrechnung zwischen Zentimeter und Millimeter",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "1 cm in mm – wie viele Millimeter sind 1 Zentimeter?" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Die Antwort ist einfach: ",
        /* @__PURE__ */ jsx("strong", { children: "1 cm = 10 mm" }),
        ". Ein ",
        /* @__PURE__ */ jsx("strong", { children: "1 centymetr" }),
        " entspricht exakt zehn Millimetern. Mit unserem ",
        /* @__PURE__ */ jsx("strong", { children: "lineal online" }),
        " sehen Sie diese 10 Striche sofort in Originalgröße."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Umrechnungstabelle Zentimeter ↔ Millimeter" }),
      /* @__PURE__ */ jsxs("table", { children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Zentimeter (cm)" }),
          /* @__PURE__ */ jsx("th", { children: "Millimeter (mm)" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "0,1 cm" }),
            /* @__PURE__ */ jsx("td", { children: "1 mm" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "0,5 cm" }),
            /* @__PURE__ */ jsx("td", { children: "5 mm" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "1 cm" }),
            /* @__PURE__ */ jsx("td", { children: "10 mm" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "5 cm" }),
            /* @__PURE__ */ jsx("td", { children: "50 mm" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "10 cm" }),
            /* @__PURE__ */ jsx("td", { children: "100 mm" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: "30 cm" }),
            /* @__PURE__ */ jsx("td", { children: "300 mm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Warum die Umrechnung wichtig ist" }),
      /* @__PURE__ */ jsx("p", { children: "In technischen Zeichnungen, Bauanleitungen und beim Heimwerken werden Maße häufig in mm angegeben. In der Schule und im Alltag dagegen in cm. Wer schnell umrechnen kann, vermeidet teure Fehler." }),
      /* @__PURE__ */ jsx("h2", { children: "Direkt am Bildschirm messen" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Sie wollen Ihr Maß sofort prüfen? Nutzen Sie unser ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online in Originalgröße" }),
        " – ideal als ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
        " oder PC."
      ] })
    ] })
  },
  {
    slug: "wie-benutzt-man-ein-lineal",
    title: "Wie benutzt man ein Lineal richtig? Anleitung & Tipps",
    metaDescription: "Wie benutzt man ein Lineal richtig? Schritt-für-Schritt-Anleitung zum genauen Messen in cm, mm und Zoll – inkl. Online-Lineal in Originalgröße.",
    keywords: "lineal benutzen, lineal richtig nutzen, lineal online, messen",
    publishedAt: "2026-06-01",
    heroAlt: "Anleitung: Wie man ein Lineal richtig benutzt",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Wie benutzt man ein Lineal richtig?" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Ein Lineal sieht einfach aus – kleine Anwendungsfehler führen aber zu großen Messabweichungen. Diese Anleitung zeigt Ihnen, wie Sie mit einem klassischen oder einem ",
        /* @__PURE__ */ jsx("strong", { children: "online lineal" }),
        " exakt messen."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "1. Den Nullpunkt richtig anlegen" }),
      /* @__PURE__ */ jsx("p", { children: 'Bei vielen Linealen beginnt die Skala nicht an der Kante, sondern leicht versetzt. Achten Sie darauf, dass die Kante des Objekts exakt auf der Markierung „0" liegt – nicht am Linealende.' }),
      /* @__PURE__ */ jsx("h2", { children: "2. Augenposition korrekt halten" }),
      /* @__PURE__ */ jsx("p", { children: "Blicken Sie senkrecht von oben auf die Skala. Schräges Ablesen (Parallaxenfehler) kann mehrere Millimeter ausmachen." }),
      /* @__PURE__ */ jsx("h2", { children: "3. Messen in Millimetern statt Zentimetern" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Für präzises Arbeiten lieber in mm ablesen. Tipp: ",
        /* @__PURE__ */ jsx("strong", { children: "1 cm = 10 mm" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "4. Online-Lineal als Alternative" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Kein physisches Lineal zur Hand? Unser ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online in Originalgröße" }),
        " ist genauso genau, sobald Sie es einmal kalibriert haben – und immer dabei als ",
        /* @__PURE__ */ jsx("strong", { children: "Lineal für Handy" }),
        "."
      ] })
    ] })
  },
  {
    slug: "metrisches-system",
    title: "Das metrische System einfach erklärt",
    metaDescription: "Das metrische System: Geschichte, Einheiten und Vorteile. Meter, Zentimeter, Millimeter – alles auf einen Blick.",
    keywords: "metrisches system, einheiten, meter, zentimeter, millimeter",
    publishedAt: "2026-06-01",
    heroAlt: "Metrisches System – Einheiten von mm bis km",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Das metrische System – Grundlagen verständlich erklärt" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Das metrische System ist ein dezimales Maßsystem, das in fast allen Ländern der Welt verwendet wird. Basiseinheit für Längen ist der ",
        /* @__PURE__ */ jsx("strong", { children: "Meter" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Wichtige Längeneinheiten" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "1 Kilometer (km) = 1.000 Meter" }),
        /* @__PURE__ */ jsx("li", { children: "1 Meter (m) = 100 Zentimeter" }),
        /* @__PURE__ */ jsx("li", { children: "1 Zentimeter (cm) = 10 Millimeter" }),
        /* @__PURE__ */ jsx("li", { children: "1 Millimeter (mm) = 1.000 Mikrometer" })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Warum dezimal?" }),
      /* @__PURE__ */ jsx("p", { children: "Jede Einheit ist das Zehnfache der nächstkleineren. Das macht Umrechnungen kinderleicht – im Gegensatz zum angloamerikanischen System mit Inches, Feet und Yards." }),
      /* @__PURE__ */ jsx("h2", { children: "Praxisbezug" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Unser ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online" }),
        " nutzt selbstverständlich das metrische System. Sie können jederzeit zwischen cm, mm und Zoll wechseln."
      ] })
    ] })
  },
  {
    slug: "mks-system",
    title: "MKS-System – Meter, Kilogramm, Sekunde",
    metaDescription: "Das MKS-System (Meter, Kilogramm, Sekunde) ist die Basis des SI-Systems. Definition, Geschichte und Anwendung verständlich erklärt.",
    keywords: "mks system, si einheiten, meter, kilogramm, sekunde",
    publishedAt: "2026-06-01",
    heroAlt: "MKS-System – Meter, Kilogramm, Sekunde",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Das MKS-System – Grundlage des SI" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Das MKS-System verwendet drei Basiseinheiten: ",
        /* @__PURE__ */ jsx("strong", { children: "Meter" }),
        " (Länge), ",
        /* @__PURE__ */ jsx("strong", { children: "Kilogramm" }),
        " ",
        "(Masse) und ",
        /* @__PURE__ */ jsx("strong", { children: "Sekunde" }),
        " (Zeit). Es ist die Grundlage des heute international gültigen SI-Systems."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Warum drei Basiseinheiten?" }),
      /* @__PURE__ */ jsx("p", { children: "Mit Länge, Masse und Zeit lassen sich nahezu alle mechanischen Größen ableiten: Geschwindigkeit (m/s), Beschleunigung (m/s²), Kraft (kg·m/s² = Newton), Energie (Joule) und viele mehr." }),
      /* @__PURE__ */ jsx("h2", { children: "Vom MKS zum SI" }),
      /* @__PURE__ */ jsx("p", { children: "Das SI-System hat das MKS-System um vier weitere Basiseinheiten ergänzt: Ampere, Kelvin, Mol und Candela." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Für Längenmessungen reicht das MKS bzw. unser ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online" }),
        " in cm und mm vollkommen aus."
      ] })
    ] })
  },
  {
    slug: "angloamerikanisches-system",
    title: "Das angloamerikanische Maßsystem – Zoll, Fuß, Yard",
    metaDescription: "Das angloamerikanische Maßsystem mit Inch, Foot, Yard und Mile – Definitionen, Umrechnung in cm und mm sowie praktische Beispiele.",
    keywords: "angloamerikanisches system, zoll, inch, fuß, foot, yard",
    publishedAt: "2026-06-01",
    heroAlt: "Angloamerikanisches Maßsystem – Zoll, Fuß, Yard",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Das angloamerikanische Maßsystem" }),
      /* @__PURE__ */ jsx("p", { className: "lead", children: "In den USA und teilweise in Großbritannien ist das angloamerikanische Maßsystem noch verbreitet. Wichtige Einheiten sind Inch (Zoll), Foot (Fuß), Yard und Mile (Meile)." }),
      /* @__PURE__ */ jsx("h2", { children: "Umrechnung in das metrische System" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "1 Zoll (in) = 2,54 cm" }),
        /* @__PURE__ */ jsx("li", { children: "1 Fuß (ft) = 30,48 cm" }),
        /* @__PURE__ */ jsx("li", { children: "1 Yard (yd) = 91,44 cm" }),
        /* @__PURE__ */ jsx("li", { children: "1 Meile (mi) = 1,609 km" })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Warum kennen?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Bildschirmgrößen, Reifendurchmesser, Rohrgewinde und Maschinenteile werden oft in Zoll angegeben. Unser",
        " ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online" }),
        " beherrscht beide Systeme – wechseln Sie per Klick zwischen cm und Zoll."
      ] })
    ] })
  },
  {
    slug: "natuerliches-einheitensystem",
    title: "Natürliches Einheitensystem in der Physik",
    metaDescription: "Das natürliche Einheitensystem nutzt fundamentale Naturkonstanten als Basis. Verständlich erklärt – mit Bezug zum Alltag.",
    keywords: "natürliche einheiten, physik, planck einheiten",
    publishedAt: "2026-06-01",
    heroAlt: "Natürliches Einheitensystem in der Physik",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Natürliches Einheitensystem" }),
      /* @__PURE__ */ jsx("p", { className: "lead", children: "Anders als das metrische oder angloamerikanische System verwenden natürliche Einheiten fundamentale Naturkonstanten als Basis – z.B. die Lichtgeschwindigkeit c oder das Planck'sche Wirkungsquantum h." }),
      /* @__PURE__ */ jsx("h2", { children: "Planck-Einheiten" }),
      /* @__PURE__ */ jsx("p", { children: "Die bekannteste Form natürlicher Einheiten sind die Planck-Einheiten. Sie sind unabhängig von menschlich definierten Größen wie Meter oder Sekunde." }),
      /* @__PURE__ */ jsx("h2", { children: "Praxis" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Im Alltag spielen natürliche Einheiten keine Rolle – dort genügt ein ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online" }),
        " in cm und mm. In der theoretischen Physik vereinfachen sie aber Gleichungen erheblich."
      ] })
    ] })
  },
  {
    slug: "klinometer",
    title: "Klinometer – was ist das und wie nutzt man es?",
    metaDescription: "Klinometer einfach erklärt: Was ist ein Klinometer, wie funktioniert es und wofür wird es eingesetzt? Inklusive moderner Smartphone-Anwendungen.",
    keywords: "klinometer, winkel messen, neigung, gefälle",
    publishedAt: "2026-06-01",
    heroAlt: "Klinometer zur Messung von Neigungswinkeln",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Klinometer – Neigungen genau messen" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Ein ",
        /* @__PURE__ */ jsx("strong", { children: "Klinometer" }),
        " (auch Neigungsmesser) misst Winkel relativ zur Horizontalen. Es kommt in Geodäsie, Forstwirtschaft, Bauwesen und Sport zum Einsatz."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Funktionsweise" }),
      /* @__PURE__ */ jsx("p", { children: "Klassische Klinometer arbeiten mit einer Pendelmechanik oder Wasserwaage. Moderne Geräte – auch viele Smartphone-Apps – nutzen MEMS-Beschleunigungssensoren." }),
      /* @__PURE__ */ jsx("h2", { children: "Anwendungsbereiche" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Baumhöhen messen (Forstwirtschaft)" }),
        /* @__PURE__ */ jsx("li", { children: "Gefälle von Dächern und Rampen prüfen" }),
        /* @__PURE__ */ jsx("li", { children: "Steigung von Skipisten" }),
        /* @__PURE__ */ jsx("li", { children: "Geologische Vermessungen" })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Lineal und Klinometer kombinieren" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Längen messen Sie mit unserem ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online" }),
        ", Winkel mit einem Klinometer-App. Beide Werkzeuge ergänzen sich perfekt."
      ] })
    ] })
  },
  {
    slug: "tiefenmesser",
    title: "Tiefenmesser – Funktion, Anwendung und Tipps",
    metaDescription: "Tiefenmesser: Was ist das, wie funktioniert er und wofür wird er eingesetzt? Übersicht über mechanische und digitale Tiefenmesser.",
    keywords: "tiefenmesser, messen, tiefe, messschieber",
    publishedAt: "2026-06-01",
    heroAlt: "Tiefenmesser zur Messung von Tiefen und Bohrungen",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Tiefenmesser – präzise Tiefenmessung im Detail" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        "Ein ",
        /* @__PURE__ */ jsx("strong", { children: "Tiefenmesser" }),
        " misst die Tiefe von Bohrungen, Nuten oder Vertiefungen. Er ist in jeder Werkstatt unverzichtbar."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Bauarten" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Mechanischer Tiefenmesser (Messuhr oder Nonius)" }),
        /* @__PURE__ */ jsx("li", { children: "Digitaler Tiefenmesser mit LCD-Anzeige" }),
        /* @__PURE__ */ jsx("li", { children: "Tiefenmessstab am Messschieber" })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "So messen Sie korrekt" }),
      /* @__PURE__ */ jsxs("ol", { children: [
        /* @__PURE__ */ jsx("li", { children: "Werkstück sauber halten." }),
        /* @__PURE__ */ jsx("li", { children: "Tiefenmesser senkrecht ansetzen." }),
        /* @__PURE__ */ jsx("li", { children: "Messwert in mm ablesen." })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Für oberflächliche Längenmessungen genügt ein ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online" }),
        " – Tiefenmessungen verlangen jedoch ein physisches Werkzeug."
      ] })
    ] })
  },
  {
    slug: "dimensionslose-zahlen",
    title: "Dimensionslose Zahlen – Bedeutung & Beispiele",
    metaDescription: "Was sind dimensionslose Zahlen? Reynolds-Zahl, Mach-Zahl und mehr – Definition, Beispiele und Bedeutung in der Physik.",
    keywords: "dimensionslose zahlen, reynolds zahl, physik",
    publishedAt: "2026-06-01",
    heroAlt: "Dimensionslose Zahlen in der Physik",
    content: /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Dimensionslose Zahlen in der Physik" }),
      /* @__PURE__ */ jsxs("p", { className: "lead", children: [
        /* @__PURE__ */ jsx("strong", { children: "Dimensionslose Zahlen" }),
        " sind Größen ohne Maßeinheit. Sie sind in Physik und Technik besonders nützlich, weil sie Skalierungseffekte beschreiben."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Bekannte Beispiele" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Reynolds-Zahl" }),
          " – Strömungslehre"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Mach-Zahl" }),
          " – Verhältnis zur Schallgeschwindigkeit"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Pi (π)" }),
          " – Verhältnis Umfang zu Durchmesser"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Feinstrukturkonstante" }),
          " – Quantenelektrodynamik"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Warum wichtig?" }),
      /* @__PURE__ */ jsx("p", { children: "Dimensionslose Kennzahlen erlauben es, Experimente zwischen Modell und Realität zu skalieren – etwa im Windkanal oder bei Schiffsmodellen." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Klassische Längen messen Sie weiterhin mit unserem ",
        /* @__PURE__ */ jsx("a", { href: "/", children: "Lineal online" }),
        " in cm und mm."
      ] })
    ] })
  }
];
const blogPostSlugs = blogPosts.map((p) => p.slug);
const getBlogPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  if (!post) return /* @__PURE__ */ jsx(NotFound, {});
  const url = `https://lineal.online/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    inLanguage: "de-DE",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Lineal.online" },
    publisher: {
      "@type": "Organization",
      name: "Lineal.online",
      url: "https://lineal.online/"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        post.title,
        " | Lineal.online"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: post.metaDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: post.keywords }),
      /* @__PURE__ */ jsx("html", { lang: "de" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: post.title }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: post.metaDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "de_DE" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(articleSchema) })
    ] }),
    /* @__PURE__ */ jsx(CanonicalLink, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow py-6", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center text-ruler-primary mb-6 hover:underline", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 16, className: "mr-1" }),
        "Zurück zur Startseite"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-sm p-5 sm:p-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center text-gray-500 text-sm", children: [
          /* @__PURE__ */ jsx(Clock, { size: 16, className: "mr-1" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Veröffentlicht: ",
            new Date(post.publishedAt).toLocaleDateString("de-DE")
          ] })
        ] }),
        post.content,
        /* @__PURE__ */ jsx(RelatedArticlesSection, { currentUrl: `/blog/${post.slug}` })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const routes = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Index, entry: "src/pages/Index.tsx" },
      { path: "ueber-uns", Component: About, entry: "src/pages/About.tsx" },
      { path: "kontakt", Component: Contact, entry: "src/pages/Contact.tsx" },
      { path: "datenschutz", Component: Privacy, entry: "src/pages/Privacy.tsx" },
      { path: "impressum", Component: Disclaimer, entry: "src/pages/Disclaimer.tsx" },
      { path: "lineal-drucken", Component: LinealDrucken, entry: "src/pages/LinealDrucken.tsx" },
      {
        path: "blog/:slug",
        Component: BlogPost,
        entry: "src/pages/BlogPost.tsx",
        getStaticPaths: () => blogPostSlugs.map((slug) => `/blog/${slug}`)
      },
      { path: "*", Component: NotFound, entry: "src/pages/NotFound.tsx" }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  createRoot
};
