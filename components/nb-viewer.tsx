import React from "react";

const NBViewer: React.FC<{ notebookHtml: string }> = ({
  notebookHtml,
}) => {
  return (
    <div>
      <style jsx global>
        {`
          :root {
            --jp-shadow-base-lightness: 0;
            --jp-shadow-umbra-color: rgba(
              var(--jp-shadow-base-lightness),
              var(--jp-shadow-base-lightness),
              var(--jp-shadow-base-lightness),
              0.2
            );
            --jp-shadow-penumbra-color: rgba(
              var(--jp-shadow-base-lightness),
              var(--jp-shadow-base-lightness),
              var(--jp-shadow-base-lightness),
              0.14
            );
            --jp-shadow-ambient-color: rgba(
              var(--jp-shadow-base-lightness),
              var(--jp-shadow-base-lightness),
              var(--jp-shadow-base-lightness),
              0.12
            );
            --jp-elevation-z0: none;
            --jp-elevation-z1: 0 2px 1px -1px var(--jp-shadow-umbra-color),
              0px 1px 1px 0px var(--jp-shadow-penumbra-color),
              0px 1px 3px 0px var(--jp-shadow-ambient-color);
            --jp-elevation-z2: 0 3px 1px -2px var(--jp-shadow-umbra-color),
              0px 2px 2px 0px var(--jp-shadow-penumbra-color),
              0px 1px 5px 0px var(--jp-shadow-ambient-color);
            --jp-elevation-z4: 0 2px 4px -1px var(--jp-shadow-umbra-color),
              0px 4px 5px 0px var(--jp-shadow-penumbra-color),
              0px 1px 10px 0px var(--jp-shadow-ambient-color);
            --jp-elevation-z6: 0 3px 5px -1px var(--jp-shadow-umbra-color),
              0px 6px 10px 0px var(--jp-shadow-penumbra-color),
              0px 1px 18px 0px var(--jp-shadow-ambient-color);
            --jp-elevation-z8: 0 5px 5px -3px var(--jp-shadow-umbra-color),
              0px 8px 10px 1px var(--jp-shadow-penumbra-color),
              0px 3px 14px 2px var(--jp-shadow-ambient-color);
            --jp-elevation-z12: 0 7px 8px -4px var(--jp-shadow-umbra-color),
              0px 12px 17px 2px var(--jp-shadow-penumbra-color),
              0px 5px 22px 4px var(--jp-shadow-ambient-color);
            --jp-elevation-z16: 0 8px 10px -5px var(--jp-shadow-umbra-color),
              0px 16px 24px 2px var(--jp-shadow-penumbra-color),
              0px 6px 30px 5px var(--jp-shadow-ambient-color);
            --jp-elevation-z20: 0 10px 13px -6px var(--jp-shadow-umbra-color),
              0px 20px 31px 3px var(--jp-shadow-penumbra-color),
              0px 8px 38px 7px var(--jp-shadow-ambient-color);
            --jp-elevation-z24: 0 11px 15px -7px var(--jp-shadow-umbra-color),
              0px 24px 38px 3px var(--jp-shadow-penumbra-color),
              0px 9px 46px 8px var(--jp-shadow-ambient-color);
            --jp-border-width: 1px;
            --jp-border-color0: var(--md-grey-400);
            --jp-border-color1: var(--md-grey-400);
            --jp-border-color2: var(--md-grey-300);
            --jp-border-color3: var(--md-grey-200);
            --jp-border-radius: 2px;
            --jp-ui-font-scale-factor: 1.2;
            --jp-ui-font-size0: 0.83333em;
            --jp-ui-font-size1: 13px;
            --jp-ui-font-size2: 1.2em;
            --jp-ui-font-size3: 1.44em;
            --jp-ui-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            --jp-ui-font-color0: #000;
            --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
            --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
            --jp-ui-font-color3: rgba(0, 0, 0, 0.38);
            --jp-ui-inverse-font-color0: #fff;
            --jp-ui-inverse-font-color1: #fff;
            --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
            --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);
            --jp-content-line-height: 1.6;
            --jp-content-font-scale-factor: 1.2;
            --jp-content-font-size0: 0.83333em;
            --jp-content-font-size1: 14px;
            --jp-content-font-size2: 1.2em;
            --jp-content-font-size3: 1.44em;
            --jp-content-font-size4: 1.728em;
            --jp-content-font-size5: 2.0736em;
            --jp-content-presentation-font-size1: 17px;
            --jp-content-heading-line-height: 1;
            --jp-content-heading-margin-top: 1.2em;
            --jp-content-heading-margin-bottom: 0.8em;
            --jp-content-heading-font-weight: 500;
            --jp-content-font-color0: #000;
            --jp-content-font-color1: rgba(0, 0, 0, 0.87);
            --jp-content-font-color2: rgba(0, 0, 0, 0.54);
            --jp-content-font-color3: rgba(0, 0, 0, 0.38);
            --jp-content-link-color: var(--md-blue-700);
            --jp-content-font-family: -apple-system, BlinkMacSystemFont,
              "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            --jp-code-font-size: 13px;
            --jp-code-line-height: 1.3077;
            --jp-code-padding: 5px;
            --jp-code-font-family-default: Menlo, Consolas, "DejaVu Sans Mono",
              monospace;
            --jp-code-font-family: var(--jp-code-font-family-default);
            --jp-code-presentation-font-size: 16px;
            --jp-code-cursor-width0: 1.4px;
            --jp-code-cursor-width1: 2px;
            --jp-code-cursor-width2: 4px;
            --jp-layout-color0: white;
            --jp-layout-color1: white;
            --jp-layout-color2: var(--md-grey-200);
            --jp-layout-color3: var(--md-grey-400);
            --jp-layout-color4: var(--md-grey-600);
            --jp-inverse-layout-color0: #111111;
            --jp-inverse-layout-color1: var(--md-grey-900);
            --jp-inverse-layout-color2: var(--md-grey-800);
            --jp-inverse-layout-color3: var(--md-grey-700);
            --jp-inverse-layout-color4: var(--md-grey-600);
            --jp-brand-color0: var(--md-blue-700);
            --jp-brand-color1: var(--md-blue-500);
            --jp-brand-color2: var(--md-blue-300);
            --jp-brand-color3: var(--md-blue-100);
            --jp-brand-color4: var(--md-blue-50);
            --jp-accent-color0: var(--md-green-700);
            --jp-accent-color1: var(--md-green-500);
            --jp-accent-color2: var(--md-green-300);
            --jp-accent-color3: var(--md-green-100);
            --jp-warn-color0: var(--md-orange-700);
            --jp-warn-color1: var(--md-orange-500);
            --jp-warn-color2: var(--md-orange-300);
            --jp-warn-color3: var(--md-orange-100);
            --jp-error-color0: var(--md-red-700);
            --jp-error-color1: var(--md-red-500);
            --jp-error-color2: var(--md-red-300);
            --jp-error-color3: var(--md-red-100);
            --jp-success-color0: var(--md-green-700);
            --jp-success-color1: var(--md-green-500);
            --jp-success-color2: var(--md-green-300);
            --jp-success-color3: var(--md-green-100);
            --jp-info-color0: var(--md-cyan-700);
            --jp-info-color1: var(--md-cyan-500);
            --jp-info-color2: var(--md-cyan-300);
            --jp-info-color3: var(--md-cyan-100);
            --jp-cell-padding: 5px;
            --jp-cell-collapser-width: 8px;
            --jp-cell-collapser-min-height: 20px;
            --jp-cell-collapser-not-active-hover-opacity: 0.6;
            --jp-cell-editor-background: var(--md-grey-100);
            --jp-cell-editor-border-color: var(--md-grey-300);
            --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
            --jp-cell-editor-active-background: var(--jp-layout-color0);
            --jp-cell-editor-active-border-color: var(--jp-brand-color1);
            --jp-cell-prompt-width: 64px;
            --jp-cell-prompt-font-family: "Source Code Pro", monospace;
            --jp-cell-prompt-letter-spacing: 0;
            --jp-cell-prompt-opacity: 1;
            --jp-cell-prompt-not-active-opacity: 0.5;
            --jp-cell-prompt-not-active-font-color: var(--md-grey-700);
            --jp-cell-inprompt-font-color: #307fc1;
            --jp-cell-outprompt-font-color: #bf5b3d;
            --jp-notebook-padding: 10px;
            --jp-notebook-select-background: var(--jp-layout-color1);
            --jp-notebook-multiselected-color: var(--md-blue-50);
            --jp-notebook-scroll-padding: calc(
              100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
                var(--jp-code-padding) - var(--jp-cell-padding) - 1px
            );
            --jp-rendermime-error-background: #fdd;
            --jp-rendermime-table-row-background: var(--md-grey-100);
            --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);
            --jp-dialog-background: rgba(0, 0, 0, 0.25);
            --jp-console-padding: 10px;
            --jp-toolbar-border-color: var(--jp-border-color1);
            --jp-toolbar-micro-height: 8px;
            --jp-toolbar-background: var(--jp-layout-color1);
            --jp-toolbar-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.24);
            --jp-toolbar-header-margin: 4px 4px 0 4px;
            --jp-toolbar-active-background: var(--md-grey-300);
            --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
            --jp-input-active-background: var(--jp-layout-color1);
            --jp-input-hover-background: var(--jp-layout-color1);
            --jp-input-background: var(--md-grey-100);
            --jp-input-border-color: var(--jp-border-color1);
            --jp-input-active-border-color: var(--jp-brand-color1);
            --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);
            --jp-editor-selected-background: #d9d9d9;
            --jp-editor-selected-focused-background: #d7d4f0;
            --jp-editor-cursor-color: var(--jp-ui-font-color0);
            --jp-mirror-editor-keyword-color: #008000;
            --jp-mirror-editor-atom-color: #88f;
            --jp-mirror-editor-number-color: #080;
            --jp-mirror-editor-def-color: #00f;
            --jp-mirror-editor-variable-color: var(--md-grey-900);
            --jp-mirror-editor-variable-2-color: #05a;
            --jp-mirror-editor-variable-3-color: #085;
            --jp-mirror-editor-punctuation-color: #05a;
            --jp-mirror-editor-property-color: #05a;
            --jp-mirror-editor-operator-color: #aa22ff;
            --jp-mirror-editor-comment-color: #408080;
            --jp-mirror-editor-string-color: #ba2121;
            --jp-mirror-editor-string-2-color: #708;
            --jp-mirror-editor-meta-color: #aa22ff;
            --jp-mirror-editor-qualifier-color: #555;
            --jp-mirror-editor-builtin-color: #008000;
            --jp-mirror-editor-bracket-color: #997;
            --jp-mirror-editor-tag-color: #170;
            --jp-mirror-editor-attribute-color: #00c;
            --jp-mirror-editor-header-color: blue;
            --jp-mirror-editor-quote-color: #090;
            --jp-mirror-editor-link-color: #00c;
            --jp-mirror-editor-error-color: #f00;
            --jp-mirror-editor-hr-color: #999;
            --jp-vega-background: white;
            --jp-sidebar-min-width: 180px;
            --jp-search-toggle-off-opacity: 0.5;
            --jp-search-toggle-hover-opacity: 0.8;
            --jp-search-toggle-on-opacity: 1;
            --jp-search-selected-match-background-color: #f5c800;
            --jp-search-selected-match-color: black;
            --jp-search-unselected-match-background-color: var(
              --jp-inverse-layout-color0
            );
            --jp-search-unselected-match-color: var(
              --jp-ui-inverse-font-color0
            );
            --jp-icon-contrast-color0: var(--md-purple-600);
            --jp-icon-contrast-color1: var(--md-green-600);
            --jp-icon-contrast-color2: var(--md-pink-600);
            --jp-icon-contrast-color3: var(--md-blue-600);
          }
          .use-notebook-styles pre {
            line-height: 125%;
            margin: 0;
          }
          .use-notebook-styles td.linenos pre {
            color: #000000;
            background-color: #f0f0f0;
            padding: 0 5px 0 5px;
          }
          .use-notebook-styles span.linenos {
            color: #000000;
            background-color: #f0f0f0;
            padding: 0 5px 0 5px;
          }
          .use-notebook-styles td.linenos pre.special {
            color: #000000;
            background-color: #ffffc0;
            padding: 0 5px 0 5px;
          }
          .use-notebook-styles span.linenos.special {
            color: #000000;
            background-color: #ffffc0;
            padding: 0 5px 0 5px;
          }
          .use-notebook-styles .highlight .hll {
            background-color: var(--jp-cell-editor-active-background);
          }
          .use-notebook-styles .highlight {
            background: var(--jp-cell-editor-background);
            color: var(--jp-mirror-editor-variable-color);
          }
          .use-notebook-styles .highlight .c {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .highlight .err {
            color: var(--jp-mirror-editor-error-color);
          }
          .use-notebook-styles .highlight .k {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .o {
            color: var(--jp-mirror-editor-operator-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .p {
            color: var(--jp-mirror-editor-punctuation-color);
          }
          .use-notebook-styles .highlight .ch {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .highlight .cm {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .highlight .cp {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .highlight .cpf {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .highlight .c1 {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .highlight .cs {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .highlight .kc {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .kd {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .kn {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .kp {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .kr {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .kt {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .m {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles .highlight .s {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .ow {
            color: var(--jp-mirror-editor-operator-color);
            font-weight: bold;
          }
          .use-notebook-styles .highlight .w {
            color: var(--jp-mirror-editor-variable-color);
          }
          .use-notebook-styles .highlight .mb {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles .highlight .mf {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles .highlight .mh {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles .highlight .mi {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles .highlight .mo {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles .highlight .sa {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .sb {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .sc {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .dl {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .sd {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .s2 {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .se {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .sh {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .si {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .sx {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .sr {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .s1 {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .ss {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .highlight .il {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles [data-jp-theme-scrollbars="true"] {
            scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
              var(--jp-scrollbar-background-color);
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-hscrollbar,
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-vscrollbar {
            scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5)
              transparent;
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            ::-webkit-scrollbar,
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            ::-webkit-scrollbar-corner {
            background: var(--jp-scrollbar-background-color);
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            ::-webkit-scrollbar-thumb {
            background: rgb(var(--jp-scrollbar-thumb-color));
            border: var(--jp-scrollbar-thumb-margin) solid transparent;
            background-clip: content-box;
            border-radius: var(--jp-scrollbar-thumb-radius);
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            ::-webkit-scrollbar-track:horizontal {
            border-left: var(--jp-scrollbar-endpad) solid
              var(--jp-scrollbar-background-color);
            border-right: var(--jp-scrollbar-endpad) solid
              var(--jp-scrollbar-background-color);
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            ::-webkit-scrollbar-track:vertical {
            border-top: var(--jp-scrollbar-endpad) solid
              var(--jp-scrollbar-background-color);
            border-bottom: var(--jp-scrollbar-endpad) solid
              var(--jp-scrollbar-background-color);
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-hscrollbar::-webkit-scrollbar,
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-vscrollbar::-webkit-scrollbar,
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-hscrollbar::-webkit-scrollbar-corner,
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-vscrollbar::-webkit-scrollbar-corner {
            background-color: transparent;
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-hscrollbar::-webkit-scrollbar-thumb,
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-vscrollbar::-webkit-scrollbar-thumb {
            background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
            border: var(--jp-scrollbar-thumb-margin) solid transparent;
            background-clip: content-box;
            border-radius: var(--jp-scrollbar-thumb-radius);
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-hscrollbar::-webkit-scrollbar-track:horizontal {
            border-left: var(--jp-scrollbar-endpad) solid transparent;
            border-right: var(--jp-scrollbar-endpad) solid transparent;
          }
          .use-notebook-styles
            [data-jp-theme-scrollbars="true"]
            .CodeMirror-vscrollbar::-webkit-scrollbar-track:vertical {
            border-top: var(--jp-scrollbar-endpad) solid transparent;
            border-bottom: var(--jp-scrollbar-endpad) solid transparent;
          }
          .use-notebook-styles .lm-ScrollBar[data-orientation="horizontal"] {
            min-height: 16px;
            max-height: 16px;
            min-width: 45px;
            border-top: 1px solid #a0a0a0;
          }
          .use-notebook-styles .lm-ScrollBar[data-orientation="vertical"] {
            min-width: 16px;
            max-width: 16px;
            min-height: 45px;
            border-left: 1px solid #a0a0a0;
          }
          .use-notebook-styles .lm-ScrollBar-button {
            background-color: #f0f0f0;
            background-position: center center;
            min-height: 15px;
            max-height: 15px;
            min-width: 15px;
            max-width: 15px;
          }
          .use-notebook-styles .lm-ScrollBar-button:hover {
            background-color: #dadada;
          }
          .use-notebook-styles .lm-ScrollBar-button.lm-mod-active {
            background-color: #cdcdcd;
          }
          .use-notebook-styles .lm-ScrollBar-track {
            background: #f0f0f0;
          }
          .use-notebook-styles .lm-ScrollBar-thumb {
            background: #cdcdcd;
          }
          .use-notebook-styles .lm-ScrollBar-thumb:hover {
            background: #bababa;
          }
          .use-notebook-styles .lm-ScrollBar-thumb.lm-mod-active {
            background: #a0a0a0;
          }
          .use-notebook-styles
            .lm-ScrollBar[data-orientation="horizontal"]
            .lm-ScrollBar-thumb {
            height: 100%;
            min-width: 15px;
            border-left: 1px solid #a0a0a0;
            border-right: 1px solid #a0a0a0;
          }
          .use-notebook-styles
            .lm-ScrollBar[data-orientation="vertical"]
            .lm-ScrollBar-thumb {
            width: 100%;
            min-height: 15px;
            border-top: 1px solid #a0a0a0;
            border-bottom: 1px solid #a0a0a0;
          }
          .use-notebook-styles
            .lm-ScrollBar[data-orientation="horizontal"]
            .lm-ScrollBar-button[data-action="decrement"] {
            background-image: var(--jp-icon-caret-left);
            background-size: 17px;
          }
          .use-notebook-styles
            .lm-ScrollBar[data-orientation="horizontal"]
            .lm-ScrollBar-button[data-action="increment"] {
            background-image: var(--jp-icon-caret-right);
            background-size: 17px;
          }
          .use-notebook-styles
            .lm-ScrollBar[data-orientation="vertical"]
            .lm-ScrollBar-button[data-action="decrement"] {
            background-image: var(--jp-icon-caret-up);
            background-size: 17px;
          }
          .use-notebook-styles
            .lm-ScrollBar[data-orientation="vertical"]
            .lm-ScrollBar-button[data-action="increment"] {
            background-image: var(--jp-icon-caret-down);
            background-size: 17px;
          }
          .use-notebook-styles .p-Widget,
          .use-notebook-styles .lm-Widget {
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
            cursor: default;
          }
          .use-notebook-styles .p-Widget.p-mod-hidden,
          .use-notebook-styles .lm-Widget.lm-mod-hidden {
            display: none !important;
          }
          .use-notebook-styles .p-CommandPalette,
          .use-notebook-styles .lm-CommandPalette {
            display: flex;
            flex-direction: column;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .p-CommandPalette-search,
          .use-notebook-styles .lm-CommandPalette-search {
            flex: 0 0 auto;
          }
          .use-notebook-styles .p-CommandPalette-content,
          .use-notebook-styles .lm-CommandPalette-content {
            flex: 1 1 auto;
            margin: 0;
            padding: 0;
            min-height: 0;
            overflow: auto;
            list-style-type: none;
          }
          .use-notebook-styles .p-CommandPalette-header,
          .use-notebook-styles .lm-CommandPalette-header {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .use-notebook-styles .p-CommandPalette-item,
          .use-notebook-styles .lm-CommandPalette-item {
            display: flex;
            flex-direction: row;
          }
          .use-notebook-styles .p-CommandPalette-itemIcon,
          .use-notebook-styles .lm-CommandPalette-itemIcon {
            flex: 0 0 auto;
          }
          .use-notebook-styles .p-CommandPalette-itemContent,
          .use-notebook-styles .lm-CommandPalette-itemContent {
            flex: 1 1 auto;
            overflow: hidden;
          }
          .use-notebook-styles .p-CommandPalette-itemShortcut,
          .use-notebook-styles .lm-CommandPalette-itemShortcut {
            flex: 0 0 auto;
          }
          .use-notebook-styles .p-CommandPalette-itemLabel,
          .use-notebook-styles .lm-CommandPalette-itemLabel {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .use-notebook-styles .p-DockPanel,
          .use-notebook-styles .lm-DockPanel {
            z-index: 0;
          }
          .use-notebook-styles .p-DockPanel-widget,
          .use-notebook-styles .lm-DockPanel-widget {
            z-index: 0;
          }
          .use-notebook-styles .p-DockPanel-tabBar,
          .use-notebook-styles .lm-DockPanel-tabBar {
            z-index: 1;
          }
          .use-notebook-styles .p-DockPanel-handle,
          .use-notebook-styles .lm-DockPanel-handle {
            z-index: 2;
          }
          .use-notebook-styles .p-DockPanel-handle.p-mod-hidden,
          .use-notebook-styles .lm-DockPanel-handle.lm-mod-hidden {
            display: none !important;
          }
          .use-notebook-styles .p-DockPanel-handle:after,
          .use-notebook-styles .lm-DockPanel-handle:after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: "";
          }
          .use-notebook-styles
            .p-DockPanel-handle[data-orientation="horizontal"],
          .use-notebook-styles
            .lm-DockPanel-handle[data-orientation="horizontal"] {
            cursor: ew-resize;
          }
          .use-notebook-styles .p-DockPanel-handle[data-orientation="vertical"],
          .use-notebook-styles
            .lm-DockPanel-handle[data-orientation="vertical"] {
            cursor: ns-resize;
          }
          .use-notebook-styles
            .p-DockPanel-handle[data-orientation="horizontal"]:after,
          .use-notebook-styles
            .lm-DockPanel-handle[data-orientation="horizontal"]:after {
            left: 50%;
            min-width: 8px;
            transform: translateX(-50%);
          }
          .use-notebook-styles
            .p-DockPanel-handle[data-orientation="vertical"]:after,
          .use-notebook-styles
            .lm-DockPanel-handle[data-orientation="vertical"]:after {
            top: 50%;
            min-height: 8px;
            transform: translateY(-50%);
          }
          .use-notebook-styles .p-DockPanel-overlay,
          .use-notebook-styles .lm-DockPanel-overlay {
            z-index: 3;
            box-sizing: border-box;
            pointer-events: none;
          }
          .use-notebook-styles .p-DockPanel-overlay.p-mod-hidden,
          .use-notebook-styles .lm-DockPanel-overlay.lm-mod-hidden {
            display: none !important;
          }
          .use-notebook-styles .p-Menu,
          .use-notebook-styles .lm-Menu {
            z-index: 10000;
            position: absolute;
            white-space: nowrap;
            overflow-x: hidden;
            overflow-y: auto;
            outline: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .p-Menu-content,
          .use-notebook-styles .lm-Menu-content {
            margin: 0;
            padding: 0;
            display: table;
            list-style-type: none;
          }
          .use-notebook-styles .p-Menu-item,
          .use-notebook-styles .lm-Menu-item {
            display: table-row;
          }
          .use-notebook-styles .p-Menu-item.p-mod-hidden,
          .use-notebook-styles .p-Menu-item.p-mod-collapsed,
          .use-notebook-styles .lm-Menu-item.lm-mod-hidden,
          .use-notebook-styles .lm-Menu-item.lm-mod-collapsed {
            display: none !important;
          }
          .use-notebook-styles .p-Menu-itemIcon,
          .use-notebook-styles .p-Menu-itemSubmenuIcon,
          .use-notebook-styles .lm-Menu-itemIcon,
          .use-notebook-styles .lm-Menu-itemSubmenuIcon {
            display: table-cell;
            text-align: center;
          }
          .use-notebook-styles .p-Menu-itemLabel,
          .use-notebook-styles .lm-Menu-itemLabel {
            display: table-cell;
            text-align: left;
          }
          .use-notebook-styles .p-Menu-itemShortcut,
          .use-notebook-styles .lm-Menu-itemShortcut {
            display: table-cell;
            text-align: right;
          }
          .use-notebook-styles .p-MenuBar,
          .use-notebook-styles .lm-MenuBar {
            outline: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .p-MenuBar-content,
          .use-notebook-styles .lm-MenuBar-content {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            list-style-type: none;
          }
          .use-notebook-styles .p--MenuBar-item,
          .use-notebook-styles .lm-MenuBar-item {
            box-sizing: border-box;
          }
          .use-notebook-styles .p-MenuBar-itemIcon,
          .use-notebook-styles .p-MenuBar-itemLabel,
          .use-notebook-styles .lm-MenuBar-itemIcon,
          .use-notebook-styles .lm-MenuBar-itemLabel {
            display: inline-block;
          }
          .use-notebook-styles .p-ScrollBar,
          .use-notebook-styles .lm-ScrollBar {
            display: flex;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .p-ScrollBar[data-orientation="horizontal"],
          .use-notebook-styles .lm-ScrollBar[data-orientation="horizontal"] {
            flex-direction: row;
          }
          .use-notebook-styles .p-ScrollBar[data-orientation="vertical"],
          .use-notebook-styles .lm-ScrollBar[data-orientation="vertical"] {
            flex-direction: column;
          }
          .use-notebook-styles .p-ScrollBar-button,
          .use-notebook-styles .lm-ScrollBar-button {
            box-sizing: border-box;
            flex: 0 0 auto;
          }
          .use-notebook-styles .p-ScrollBar-track,
          .use-notebook-styles .lm-ScrollBar-track {
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
            flex: 1 1 auto;
          }
          .use-notebook-styles .p-ScrollBar-thumb,
          .use-notebook-styles .lm-ScrollBar-thumb {
            box-sizing: border-box;
            position: absolute;
          }
          .use-notebook-styles .p-SplitPanel-child,
          .use-notebook-styles .lm-SplitPanel-child {
            z-index: 0;
          }
          .use-notebook-styles .p-SplitPanel-handle,
          .use-notebook-styles .lm-SplitPanel-handle {
            z-index: 1;
          }
          .use-notebook-styles .p-SplitPanel-handle.p-mod-hidden,
          .use-notebook-styles .lm-SplitPanel-handle.lm-mod-hidden {
            display: none !important;
          }
          .use-notebook-styles .p-SplitPanel-handle:after,
          .use-notebook-styles .lm-SplitPanel-handle:after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: "";
          }
          .use-notebook-styles
            .p-SplitPanel[data-orientation="horizontal"]
            > .p-SplitPanel-handle,
          .use-notebook-styles
            .lm-SplitPanel[data-orientation="horizontal"]
            > .lm-SplitPanel-handle {
            cursor: ew-resize;
          }
          .use-notebook-styles
            .p-SplitPanel[data-orientation="vertical"]
            > .p-SplitPanel-handle,
          .use-notebook-styles
            .lm-SplitPanel[data-orientation="vertical"]
            > .lm-SplitPanel-handle {
            cursor: ns-resize;
          }
          .use-notebook-styles
            .p-SplitPanel[data-orientation="horizontal"]
            > .p-SplitPanel-handle:after,
          .use-notebook-styles
            .lm-SplitPanel[data-orientation="horizontal"]
            > .lm-SplitPanel-handle:after {
            left: 50%;
            min-width: 8px;
            transform: translateX(-50%);
          }
          .use-notebook-styles
            .p-SplitPanel[data-orientation="vertical"]
            > .p-SplitPanel-handle:after,
          .use-notebook-styles
            .lm-SplitPanel[data-orientation="vertical"]
            > .lm-SplitPanel-handle:after {
            top: 50%;
            min-height: 8px;
            transform: translateY(-50%);
          }
          .use-notebook-styles .p-TabBar,
          .use-notebook-styles .lm-TabBar {
            display: flex;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .p-TabBar[data-orientation="horizontal"],
          .use-notebook-styles .lm-TabBar[data-orientation="horizontal"] {
            flex-direction: row;
          }
          .use-notebook-styles .p-TabBar[data-orientation="vertical"],
          .use-notebook-styles .lm-TabBar[data-orientation="vertical"] {
            flex-direction: column;
          }
          .use-notebook-styles .p-TabBar-content,
          .use-notebook-styles .lm-TabBar-content {
            margin: 0;
            padding: 0;
            display: flex;
            flex: 1 1 auto;
            list-style-type: none;
          }
          .use-notebook-styles
            .p-TabBar[data-orientation="horizontal"]
            > .p-TabBar-content,
          .use-notebook-styles
            .lm-TabBar[data-orientation="horizontal"]
            > .lm-TabBar-content {
            flex-direction: row;
          }
          .use-notebook-styles
            .p-TabBar[data-orientation="vertical"]
            > .p-TabBar-content,
          .use-notebook-styles
            .lm-TabBar[data-orientation="vertical"]
            > .lm-TabBar-content {
            flex-direction: column;
          }
          .use-notebook-styles .p-TabBar-tab,
          .use-notebook-styles .lm-TabBar-tab {
            display: flex;
            flex-direction: row;
            box-sizing: border-box;
            overflow: hidden;
          }
          .use-notebook-styles .p-TabBar-tabIcon,
          .use-notebook-styles .p-TabBar-tabCloseIcon,
          .use-notebook-styles .lm-TabBar-tabIcon,
          .use-notebook-styles .lm-TabBar-tabCloseIcon {
            flex: 0 0 auto;
          }
          .use-notebook-styles .p-TabBar-tabLabel,
          .use-notebook-styles .lm-TabBar-tabLabel {
            flex: 1 1 auto;
            overflow: hidden;
            white-space: nowrap;
          }
          .use-notebook-styles .p-TabBar-tab.p-mod-hidden,
          .use-notebook-styles .lm-TabBar-tab.lm-mod-hidden {
            display: none !important;
          }
          .use-notebook-styles .p-TabBar.p-mod-dragging .p-TabBar-tab,
          .use-notebook-styles .lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
            position: relative;
          }
          .use-notebook-styles
            .p-TabBar.p-mod-dragging[data-orientation="horizontal"]
            .p-TabBar-tab,
          .use-notebook-styles
            .lm-TabBar.lm-mod-dragging[data-orientation="horizontal"]
            .lm-TabBar-tab {
            left: 0;
            transition: left 150ms ease;
          }
          .use-notebook-styles
            .p-TabBar.p-mod-dragging[data-orientation="vertical"]
            .p-TabBar-tab,
          .use-notebook-styles
            .lm-TabBar.lm-mod-dragging[data-orientation="vertical"]
            .lm-TabBar-tab {
            top: 0;
            transition: top 150ms ease;
          }
          .use-notebook-styles
            .p-TabBar.p-mod-dragging
            .p-TabBar-tab.p-mod-dragging
            .lm-TabBar.lm-mod-dragging
            .lm-TabBar-tab.lm-mod-dragging {
            transition: none;
          }
          .use-notebook-styles .p-TabPanel-tabBar,
          .use-notebook-styles .lm-TabPanel-tabBar {
            z-index: 1;
          }
          .use-notebook-styles .p-TabPanel-stackedPanel,
          .use-notebook-styles .lm-TabPanel-stackedPanel {
            z-index: 0;
          }
          .use-notebook-styles html {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
          .use-notebook-styles *,
          .use-notebook-styles *::before,
          .use-notebook-styles *::after {
            -webkit-box-sizing: inherit;
            box-sizing: inherit;
          }
          .use-notebook-styles body {
            text-transform: none;
            line-height: 1.28581;
            letter-spacing: 0;
            font-size: 14px;
            font-weight: 400;
            color: #182026;
            font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI",
              "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans",
              "Helvetica Neue", "Icons16", sans-serif;
          }
          .use-notebook-styles p {
            margin-top: 0;
            margin-bottom: 10px;
          }
          .use-notebook-styles small {
            font-size: 12px;
          }
          .use-notebook-styles strong {
            font-weight: 600;
          }
          .use-notebook-styles ::-moz-selection {
            background: rgba(125, 188, 255, 0.6);
          }
          .use-notebook-styles ::selection {
            background: rgba(125, 188, 255, 0.6);
          }
          .use-notebook-styles .bp3-heading {
            color: #182026;
            font-weight: 600;
            margin: 0 0 10px;
            padding: 0;
          }
          .use-notebook-styles .bp3-dark .bp3-heading {
            color: #f5f8fa;
          }
          .use-notebook-styles h1.bp3-heading,
          .use-notebook-styles .bp3-running-text h1 {
            line-height: 40px;
            font-size: 36px;
          }
          .use-notebook-styles h2.bp3-heading,
          .use-notebook-styles .bp3-running-text h2 {
            line-height: 32px;
            font-size: 28px;
          }
          .use-notebook-styles h3.bp3-heading,
          .use-notebook-styles .bp3-running-text h3 {
            line-height: 25px;
            font-size: 22px;
          }
          .use-notebook-styles h4.bp3-heading,
          .use-notebook-styles .bp3-running-text h4 {
            line-height: 21px;
            font-size: 18px;
          }
          .use-notebook-styles h5.bp3-heading,
          .use-notebook-styles .bp3-running-text h5 {
            line-height: 19px;
            font-size: 16px;
          }
          .use-notebook-styles h6.bp3-heading,
          .use-notebook-styles .bp3-running-text h6 {
            line-height: 16px;
            font-size: 14px;
          }
          .use-notebook-styles .bp3-ui-text {
            text-transform: none;
            line-height: 1.28581;
            letter-spacing: 0;
            font-size: 14px;
            font-weight: 400;
          }
          .use-notebook-styles .bp3-monospace-text {
            text-transform: none;
            font-family: monospace;
          }
          .use-notebook-styles .bp3-text-muted {
            color: #5c7080;
          }
          .use-notebook-styles .bp3-dark .bp3-text-muted {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-text-disabled {
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-text-disabled {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-text-overflow-ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
          }
          .use-notebook-styles .bp3-running-text {
            line-height: 1.5;
            font-size: 14px;
          }
          .use-notebook-styles .bp3-running-text h1 {
            color: #182026;
            font-weight: 600;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text h1 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-running-text h2 {
            color: #182026;
            font-weight: 600;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text h2 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-running-text h3 {
            color: #182026;
            font-weight: 600;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text h3 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-running-text h4 {
            color: #182026;
            font-weight: 600;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text h4 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-running-text h5 {
            color: #182026;
            font-weight: 600;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text h5 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-running-text h6 {
            color: #182026;
            font-weight: 600;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text h6 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-running-text hr {
            margin: 20px 0;
            border: none;
            border-bottom: 1px solid rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles .bp3-dark .bp3-running-text hr {
            border-color: rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles .bp3-running-text p {
            margin: 0 0 10px;
            padding: 0;
          }
          .use-notebook-styles .bp3-text-large {
            font-size: 16px;
          }
          .use-notebook-styles .bp3-text-small {
            font-size: 12px;
          }
          .use-notebook-styles a {
            text-decoration: none;
            color: #106ba3;
          }
          .use-notebook-styles a:hover {
            cursor: pointer;
            text-decoration: underline;
            color: #106ba3;
          }
          .use-notebook-styles a .bp3-icon,
          .use-notebook-styles a .bp3-icon-standard,
          .use-notebook-styles a .bp3-icon-large {
            color: inherit;
          }
          .use-notebook-styles a code,
          .use-notebook-styles .bp3-dark a code {
            color: inherit;
          }
          .use-notebook-styles .bp3-dark a,
          .use-notebook-styles .bp3-dark a:hover {
            color: #48aff0;
          }
          .use-notebook-styles .bp3-dark a .bp3-icon,
          .use-notebook-styles .bp3-dark a .bp3-icon-standard,
          .use-notebook-styles .bp3-dark a .bp3-icon-large,
          .use-notebook-styles .bp3-dark a:hover .bp3-icon,
          .use-notebook-styles .bp3-dark a:hover .bp3-icon-standard,
          .use-notebook-styles .bp3-dark a:hover .bp3-icon-large {
            color: inherit;
          }
          .use-notebook-styles .bp3-running-text code,
          .use-notebook-styles .bp3-code {
            text-transform: none;
            font-family: monospace;
            border-radius: 3px;
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2);
            background: rgba(255, 255, 255, 0.7);
            padding: 2px 5px;
            color: #5c7080;
            font-size: smaller;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text code,
          .use-notebook-styles .bp3-running-text .bp3-dark code,
          .use-notebook-styles .bp3-dark .bp3-code {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            background: rgba(16, 22, 26, 0.3);
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-running-text a > code,
          .use-notebook-styles a > .bp3-code {
            color: #137cbd;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text a > code,
          .use-notebook-styles .bp3-running-text .bp3-dark a > code,
          .use-notebook-styles .bp3-dark a > .bp3-code {
            color: inherit;
          }
          .use-notebook-styles .bp3-running-text pre,
          .use-notebook-styles .bp3-code-block {
            text-transform: none;
            font-family: monospace;
            display: block;
            margin: 10px 0;
            border-radius: 3px;
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            background: rgba(255, 255, 255, 0.7);
            padding: 13px 15px 12px;
            line-height: 1.4;
            color: #182026;
            font-size: 13px;
            word-break: break-all;
            word-wrap: break-word;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text pre,
          .use-notebook-styles .bp3-running-text .bp3-dark pre,
          .use-notebook-styles .bp3-dark .bp3-code-block {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            background: rgba(16, 22, 26, 0.3);
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-running-text pre > code,
          .use-notebook-styles .bp3-code-block > code {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            padding: 0;
            color: inherit;
            font-size: inherit;
          }
          .use-notebook-styles .bp3-running-text kbd,
          .use-notebook-styles .bp3-key {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
            background: #ffffff;
            min-width: 24px;
            height: 24px;
            padding: 3px 6px;
            vertical-align: middle;
            line-height: 24px;
            color: #5c7080;
            font-family: inherit;
            font-size: 12px;
          }
          .use-notebook-styles .bp3-running-text kbd .bp3-icon,
          .use-notebook-styles .bp3-key .bp3-icon,
          .use-notebook-styles .bp3-running-text kbd .bp3-icon-standard,
          .use-notebook-styles .bp3-key .bp3-icon-standard,
          .use-notebook-styles .bp3-running-text kbd .bp3-icon-large,
          .use-notebook-styles .bp3-key .bp3-icon-large {
            margin-right: 5px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text kbd,
          .use-notebook-styles .bp3-running-text .bp3-dark kbd,
          .use-notebook-styles .bp3-dark .bp3-key {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            background: #394b59;
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-running-text blockquote,
          .use-notebook-styles .bp3-blockquote {
            margin: 0 0 10px;
            border-left: solid 4px rgba(167, 182, 194, 0.5);
            padding: 0 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text blockquote,
          .use-notebook-styles .bp3-running-text .bp3-dark blockquote,
          .use-notebook-styles .bp3-dark .bp3-blockquote {
            border-color: rgba(115, 134, 148, 0.5);
          }
          .use-notebook-styles .bp3-running-text ul,
          .use-notebook-styles .bp3-running-text ol,
          .use-notebook-styles .bp3-list {
            margin: 10px 0;
            padding-left: 30px;
          }
          .use-notebook-styles .bp3-running-text ul li:not(:last-child),
          .use-notebook-styles .bp3-running-text ol li:not(:last-child),
          .use-notebook-styles .bp3-list li:not(:last-child) {
            margin-bottom: 5px;
          }
          .use-notebook-styles .bp3-running-text ul ol,
          .use-notebook-styles .bp3-running-text ol ol,
          .use-notebook-styles .bp3-list ol,
          .use-notebook-styles .bp3-running-text ul ul,
          .use-notebook-styles .bp3-running-text ol ul,
          .use-notebook-styles .bp3-list ul {
            margin-top: 5px;
          }
          .use-notebook-styles .bp3-list-unstyled {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          .use-notebook-styles .bp3-list-unstyled li {
            padding: 0;
          }
          .use-notebook-styles .bp3-rtl {
            text-align: right;
          }
          .use-notebook-styles .bp3-dark {
            color: #f5f8fa;
          }
          .use-notebook-styles :focus {
            outline: rgba(19, 124, 189, 0.6) auto 2px;
            outline-offset: 2px;
            -moz-outline-radius: 6px;
          }
          .use-notebook-styles .bp3-focus-disabled :focus {
            outline: none !important;
          }
          .use-notebook-styles
            .bp3-focus-disabled
            :focus
            ~ .bp3-control-indicator {
            outline: none !important;
          }
          .use-notebook-styles .bp3-alert {
            max-width: 400px;
            padding: 20px;
          }
          .use-notebook-styles .bp3-alert-body {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .use-notebook-styles .bp3-alert-body .bp3-icon {
            margin-top: 0;
            margin-right: 20px;
            font-size: 40px;
          }
          .use-notebook-styles .bp3-alert-footer {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
            margin-top: 10px;
          }
          .use-notebook-styles .bp3-alert-footer .bp3-button {
            margin-left: 10px;
          }
          .use-notebook-styles .bp3-breadcrumbs {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin: 0;
            cursor: default;
            height: 30px;
            padding: 0;
            list-style: none;
          }
          .use-notebook-styles .bp3-breadcrumbs > li {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .use-notebook-styles .bp3-breadcrumbs > li::after {
            display: block;
            margin: 0 5px;
            background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.71 7.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z' fill='%235C7080'/%3e%3c/svg%3e");
            width: 16px;
            height: 16px;
            content: "";
          }
          .use-notebook-styles .bp3-breadcrumbs > li:last-of-type::after {
            display: none;
          }
          .use-notebook-styles .bp3-breadcrumb,
          .use-notebook-styles .bp3-breadcrumb-current,
          .use-notebook-styles .bp3-breadcrumbs-collapsed {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 16px;
          }
          .use-notebook-styles .bp3-breadcrumb,
          .use-notebook-styles .bp3-breadcrumbs-collapsed {
            color: #5c7080;
          }
          .use-notebook-styles .bp3-breadcrumb:hover {
            text-decoration: none;
          }
          .use-notebook-styles .bp3-breadcrumb.bp3-disabled {
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-breadcrumb .bp3-icon {
            margin-right: 5px;
          }
          .use-notebook-styles .bp3-breadcrumb-current {
            color: inherit;
            font-weight: 600;
          }
          .use-notebook-styles .bp3-breadcrumb-current .bp3-input {
            vertical-align: baseline;
            font-size: inherit;
            font-weight: inherit;
          }
          .use-notebook-styles .bp3-breadcrumbs-collapsed {
            margin-right: 2px;
            border: none;
            border-radius: 3px;
            background: #ced9e0;
            cursor: pointer;
            padding: 1px 5px;
            vertical-align: text-bottom;
          }
          .use-notebook-styles .bp3-breadcrumbs-collapsed::before {
            display: block;
            background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cg fill='%235C7080'%3e%3ccircle cx='2' cy='8.03' r='2'/%3e%3ccircle cx='14' cy='8.03' r='2'/%3e%3ccircle cx='8' cy='8.03' r='2'/%3e%3c/g%3e%3c/svg%3e")
              center no-repeat;
            width: 16px;
            height: 16px;
            content: "";
          }
          .use-notebook-styles .bp3-breadcrumbs-collapsed:hover {
            background: #bfccd6;
            text-decoration: none;
            color: #182026;
          }
          .use-notebook-styles .bp3-dark .bp3-breadcrumb,
          .use-notebook-styles .bp3-dark .bp3-breadcrumbs-collapsed {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-breadcrumbs > li::after {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-breadcrumb.bp3-disabled {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-breadcrumb-current {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-breadcrumbs-collapsed {
            background: rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-breadcrumbs-collapsed:hover {
            background: rgba(16, 22, 26, 0.6);
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-button {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            padding: 5px 10px;
            vertical-align: middle;
            text-align: left;
            font-size: 14px;
            min-width: 30px;
            min-height: 30px;
          }
          .use-notebook-styles .bp3-button > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-button > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-button::before,
          .use-notebook-styles .bp3-button > * {
            margin-right: 7px;
          }
          .use-notebook-styles .bp3-button:empty::before,
          .use-notebook-styles .bp3-button > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-button:empty {
            padding: 0 !important;
          }
          .use-notebook-styles .bp3-button:disabled,
          .use-notebook-styles .bp3-button.bp3-disabled {
            cursor: not-allowed;
          }
          .use-notebook-styles .bp3-button.bp3-fill {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
          }
          .use-notebook-styles .bp3-button.bp3-align-right,
          .use-notebook-styles .bp3-align-right .bp3-button {
            text-align: right;
          }
          .use-notebook-styles .bp3-button.bp3-align-left,
          .use-notebook-styles .bp3-align-left .bp3-button {
            text-align: left;
          }
          .use-notebook-styles .bp3-button:not([class*="bp3-intent-"]) {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-color: #f5f8fa;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.8)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            );
            color: #182026;
          }
          .use-notebook-styles .bp3-button:not([class*="bp3-intent-"]):hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-clip: padding-box;
            background-color: #ebf1f5;
          }
          .use-notebook-styles .bp3-button:not([class*="bp3-intent-"]):active,
          .use-notebook-styles
            .bp3-button:not([class*="bp3-intent-"]).bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #d8e1e8;
            background-image: none;
          }
          .use-notebook-styles .bp3-button:not([class*="bp3-intent-"]):disabled,
          .use-notebook-styles
            .bp3-button:not([class*="bp3-intent-"]).bp3-disabled {
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(206, 217, 224, 0.5);
            background-image: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles
            .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active,
          .use-notebook-styles
            .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active:hover,
          .use-notebook-styles
            .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active:hover {
            background: rgba(206, 217, 224, 0.7);
          }
          .use-notebook-styles .bp3-button.bp3-intent-primary {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #137cbd;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.1)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-primary:hover,
          .use-notebook-styles .bp3-button.bp3-intent-primary:active,
          .use-notebook-styles .bp3-button.bp3-intent-primary.bp3-active {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-primary:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #106ba3;
          }
          .use-notebook-styles .bp3-button.bp3-intent-primary:active,
          .use-notebook-styles .bp3-button.bp3-intent-primary.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #0e5a8a;
            background-image: none;
          }
          .use-notebook-styles .bp3-button.bp3-intent-primary:disabled,
          .use-notebook-styles .bp3-button.bp3-intent-primary.bp3-disabled {
            border-color: transparent;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(19, 124, 189, 0.5);
            background-image: none;
            color: rgba(255, 255, 255, 0.6);
          }
          .use-notebook-styles .bp3-button.bp3-intent-success {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #0f9960;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.1)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-success:hover,
          .use-notebook-styles .bp3-button.bp3-intent-success:active,
          .use-notebook-styles .bp3-button.bp3-intent-success.bp3-active {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-success:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #0d8050;
          }
          .use-notebook-styles .bp3-button.bp3-intent-success:active,
          .use-notebook-styles .bp3-button.bp3-intent-success.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #0a6640;
            background-image: none;
          }
          .use-notebook-styles .bp3-button.bp3-intent-success:disabled,
          .use-notebook-styles .bp3-button.bp3-intent-success.bp3-disabled {
            border-color: transparent;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(15, 153, 96, 0.5);
            background-image: none;
            color: rgba(255, 255, 255, 0.6);
          }
          .use-notebook-styles .bp3-button.bp3-intent-warning {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #d9822b;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.1)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-warning:hover,
          .use-notebook-styles .bp3-button.bp3-intent-warning:active,
          .use-notebook-styles .bp3-button.bp3-intent-warning.bp3-active {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-warning:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #bf7326;
          }
          .use-notebook-styles .bp3-button.bp3-intent-warning:active,
          .use-notebook-styles .bp3-button.bp3-intent-warning.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #a66321;
            background-image: none;
          }
          .use-notebook-styles .bp3-button.bp3-intent-warning:disabled,
          .use-notebook-styles .bp3-button.bp3-intent-warning.bp3-disabled {
            border-color: transparent;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(217, 130, 43, 0.5);
            background-image: none;
            color: rgba(255, 255, 255, 0.6);
          }
          .use-notebook-styles .bp3-button.bp3-intent-danger {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #db3737;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.1)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-danger:hover,
          .use-notebook-styles .bp3-button.bp3-intent-danger:active,
          .use-notebook-styles .bp3-button.bp3-intent-danger.bp3-active {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-intent-danger:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #c23030;
          }
          .use-notebook-styles .bp3-button.bp3-intent-danger:active,
          .use-notebook-styles .bp3-button.bp3-intent-danger.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #a82a2a;
            background-image: none;
          }
          .use-notebook-styles .bp3-button.bp3-intent-danger:disabled,
          .use-notebook-styles .bp3-button.bp3-intent-danger.bp3-disabled {
            border-color: transparent;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(219, 55, 55, 0.5);
            background-image: none;
            color: rgba(255, 255, 255, 0.6);
          }
          .use-notebook-styles
            .bp3-button[class*="bp3-intent-"]
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #ffffff;
          }
          .use-notebook-styles .bp3-button.bp3-large,
          .use-notebook-styles .bp3-large .bp3-button {
            min-width: 40px;
            min-height: 40px;
            padding: 5px 15px;
            font-size: 16px;
          }
          .use-notebook-styles .bp3-button.bp3-large::before,
          .use-notebook-styles .bp3-button.bp3-large > *,
          .use-notebook-styles .bp3-large .bp3-button::before,
          .use-notebook-styles .bp3-large .bp3-button > * {
            margin-right: 10px;
          }
          .use-notebook-styles .bp3-button.bp3-large:empty::before,
          .use-notebook-styles .bp3-button.bp3-large > :last-child,
          .use-notebook-styles .bp3-large .bp3-button:empty::before,
          .use-notebook-styles .bp3-large .bp3-button > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-button.bp3-small,
          .use-notebook-styles .bp3-small .bp3-button {
            min-width: 24px;
            min-height: 24px;
            padding: 0 7px;
          }
          .use-notebook-styles .bp3-button.bp3-loading {
            position: relative;
          }
          .use-notebook-styles
            .bp3-button.bp3-loading[class*="bp3-icon-"]::before {
            visibility: hidden;
          }
          .use-notebook-styles .bp3-button.bp3-loading .bp3-button-spinner {
            position: absolute;
            margin: 0;
          }
          .use-notebook-styles
            .bp3-button.bp3-loading
            > :not(.bp3-button-spinner) {
            visibility: hidden;
          }
          .use-notebook-styles .bp3-button[class*="bp3-icon-"]::before {
            line-height: 1;
            font-family: "Icons16", sans-serif;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-button .bp3-icon,
          .use-notebook-styles .bp3-button .bp3-icon-standard,
          .use-notebook-styles .bp3-button .bp3-icon-large {
            color: #5c7080;
          }
          .use-notebook-styles .bp3-button .bp3-icon.bp3-align-right,
          .use-notebook-styles .bp3-button .bp3-icon-standard.bp3-align-right,
          .use-notebook-styles .bp3-button .bp3-icon-large.bp3-align-right {
            margin-left: 7px;
          }
          .use-notebook-styles .bp3-button .bp3-icon:first-child:last-child,
          .use-notebook-styles .bp3-button .bp3-spinner + .bp3-icon:last-child {
            margin: 0 -7px;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]) {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #394b59;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.05)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0)
            );
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]):hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]):active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]).bp3-active {
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]):hover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #30404d;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]):active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]).bp3-active {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #202b33;
            background-image: none;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]):disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]).bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(57, 75, 89, 0.5);
            background-image: none;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active {
            background: rgba(57, 75, 89, 0.7);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"])
            .bp3-button-spinner
            .bp3-spinner-head {
            background: rgba(16, 22, 26, 0.5);
            stroke: #8a9ba8;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"])[class*="bp3-icon-"]::before {
            color: #a7b6c2;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"])
            .bp3-icon,
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"])
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-dark
            .bp3-button:not([class*="bp3-intent-"])
            .bp3-icon-large {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-button[class*="bp3-intent-"] {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button[class*="bp3-intent-"]:hover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button[class*="bp3-intent-"]:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button[class*="bp3-intent-"].bp3-active {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button[class*="bp3-intent-"]:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button[class*="bp3-intent-"].bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-image: none;
            color: rgba(255, 255, 255, 0.3);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button[class*="bp3-intent-"]
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #8a9ba8;
          }
          .use-notebook-styles .bp3-button:disabled::before,
          .use-notebook-styles .bp3-button:disabled .bp3-icon,
          .use-notebook-styles .bp3-button:disabled .bp3-icon-standard,
          .use-notebook-styles .bp3-button:disabled .bp3-icon-large,
          .use-notebook-styles .bp3-button.bp3-disabled::before,
          .use-notebook-styles .bp3-button.bp3-disabled .bp3-icon,
          .use-notebook-styles .bp3-button.bp3-disabled .bp3-icon-standard,
          .use-notebook-styles .bp3-button.bp3-disabled .bp3-icon-large,
          .use-notebook-styles .bp3-button[class*="bp3-intent-"]::before,
          .use-notebook-styles .bp3-button[class*="bp3-intent-"] .bp3-icon,
          .use-notebook-styles
            .bp3-button[class*="bp3-intent-"]
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-button[class*="bp3-intent-"]
            .bp3-icon-large {
            color: inherit !important;
          }
          .use-notebook-styles .bp3-button.bp3-minimal {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
          }
          .use-notebook-styles .bp3-button.bp3-minimal:hover {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(167, 182, 194, 0.3);
            text-decoration: none;
            color: #182026;
          }
          .use-notebook-styles .bp3-button.bp3-minimal:active,
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(115, 134, 148, 0.3);
            color: #182026;
          }
          .use-notebook-styles .bp3-button.bp3-minimal:disabled,
          .use-notebook-styles .bp3-button.bp3-minimal:disabled:hover,
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-disabled,
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-disabled:hover {
            background: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-button.bp3-minimal:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button.bp3-minimal:disabled:hover.bp3-active,
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active {
            background: rgba(115, 134, 148, 0.3);
          }
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: inherit;
          }
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal:hover,
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal:active,
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
          }
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal:hover {
            background: rgba(138, 155, 168, 0.15);
          }
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal:active,
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal.bp3-active {
            background: rgba(138, 155, 168, 0.3);
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal:disabled,
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal:disabled:hover,
          .use-notebook-styles .bp3-dark .bp3-button.bp3-minimal.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-disabled:hover {
            background: none;
            cursor: not-allowed;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active {
            background: rgba(138, 155, 168, 0.3);
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-primary {
            color: #106ba3;
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary:hover {
            background: rgba(19, 124, 189, 0.15);
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active {
            background: rgba(19, 124, 189, 0.3);
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled {
            background: none;
            color: rgba(16, 107, 163, 0.5);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active {
            background: rgba(19, 124, 189, 0.3);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-primary
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary {
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary:hover {
            background: rgba(19, 124, 189, 0.2);
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active {
            background: rgba(19, 124, 189, 0.3);
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled {
            background: none;
            color: rgba(72, 175, 240, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active {
            background: rgba(19, 124, 189, 0.3);
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-success {
            color: #0d8050;
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success:hover {
            background: rgba(15, 153, 96, 0.15);
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success.bp3-active {
            background: rgba(15, 153, 96, 0.3);
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled {
            background: none;
            color: rgba(13, 128, 80, 0.5);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active {
            background: rgba(15, 153, 96, 0.3);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-success
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #0d8050;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success {
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success:hover {
            background: rgba(15, 153, 96, 0.2);
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success.bp3-active {
            background: rgba(15, 153, 96, 0.3);
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled {
            background: none;
            color: rgba(61, 204, 145, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active {
            background: rgba(15, 153, 96, 0.3);
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-warning {
            color: #bf7326;
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning:hover {
            background: rgba(217, 130, 43, 0.15);
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active {
            background: rgba(217, 130, 43, 0.3);
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled {
            background: none;
            color: rgba(191, 115, 38, 0.5);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active {
            background: rgba(217, 130, 43, 0.3);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-warning
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #bf7326;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning {
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning:hover {
            background: rgba(217, 130, 43, 0.2);
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active {
            background: rgba(217, 130, 43, 0.3);
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled {
            background: none;
            color: rgba(255, 179, 102, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active {
            background: rgba(217, 130, 43, 0.3);
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-danger {
            color: #c23030;
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-danger:hover,
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #c23030;
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-danger:hover {
            background: rgba(219, 55, 55, 0.15);
            color: #c23030;
          }
          .use-notebook-styles .bp3-button.bp3-minimal.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active {
            background: rgba(219, 55, 55, 0.3);
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled {
            background: none;
            color: rgba(194, 48, 48, 0.5);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active {
            background: rgba(219, 55, 55, 0.3);
          }
          .use-notebook-styles
            .bp3-button.bp3-minimal.bp3-intent-danger
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #c23030;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger {
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger:hover {
            background: rgba(219, 55, 55, 0.2);
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active {
            background: rgba(219, 55, 55, 0.3);
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled {
            background: none;
            color: rgba(255, 115, 115, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active {
            background: rgba(219, 55, 55, 0.3);
          }
          .use-notebook-styles a.bp3-button {
            text-align: center;
            text-decoration: none;
            -webkit-transition: none;
            transition: none;
          }
          .use-notebook-styles a.bp3-button,
          .use-notebook-styles a.bp3-button:hover,
          .use-notebook-styles a.bp3-button:active {
            color: #182026;
          }
          .use-notebook-styles a.bp3-button.bp3-disabled {
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-button-text {
            -webkit-box-flex: 0;
            -ms-flex: 0 1 auto;
            flex: 0 1 auto;
          }
          .use-notebook-styles .bp3-button.bp3-align-left .bp3-button-text,
          .use-notebook-styles .bp3-button.bp3-align-right .bp3-button-text,
          .use-notebook-styles
            .bp3-button-group.bp3-align-left
            .bp3-button-text,
          .use-notebook-styles
            .bp3-button-group.bp3-align-right
            .bp3-button-text {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
          }
          .use-notebook-styles .bp3-button-group {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
          }
          .use-notebook-styles .bp3-button-group .bp3-button {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            position: relative;
            z-index: 4;
          }
          .use-notebook-styles .bp3-button-group .bp3-button:focus {
            z-index: 5;
          }
          .use-notebook-styles .bp3-button-group .bp3-button:hover {
            z-index: 6;
          }
          .use-notebook-styles .bp3-button-group .bp3-button:active,
          .use-notebook-styles .bp3-button-group .bp3-button.bp3-active {
            z-index: 7;
          }
          .use-notebook-styles .bp3-button-group .bp3-button:disabled,
          .use-notebook-styles .bp3-button-group .bp3-button.bp3-disabled {
            z-index: 3;
          }
          .use-notebook-styles
            .bp3-button-group
            .bp3-button[class*="bp3-intent-"] {
            z-index: 9;
          }
          .use-notebook-styles
            .bp3-button-group
            .bp3-button[class*="bp3-intent-"]:focus {
            z-index: 10;
          }
          .use-notebook-styles
            .bp3-button-group
            .bp3-button[class*="bp3-intent-"]:hover {
            z-index: 11;
          }
          .use-notebook-styles
            .bp3-button-group
            .bp3-button[class*="bp3-intent-"]:active,
          .use-notebook-styles
            .bp3-button-group
            .bp3-button[class*="bp3-intent-"].bp3-active {
            z-index: 12;
          }
          .use-notebook-styles
            .bp3-button-group
            .bp3-button[class*="bp3-intent-"]:disabled,
          .use-notebook-styles
            .bp3-button-group
            .bp3-button[class*="bp3-intent-"].bp3-disabled {
            z-index: 8;
          }
          .use-notebook-styles
            .bp3-button-group:not(.bp3-minimal)
            > .bp3-popover-wrapper:not(:first-child)
            .bp3-button,
          .use-notebook-styles
            .bp3-button-group:not(.bp3-minimal)
            > .bp3-button:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .use-notebook-styles
            .bp3-button-group:not(.bp3-minimal)
            > .bp3-popover-wrapper:not(:last-child)
            .bp3-button,
          .use-notebook-styles
            .bp3-button-group:not(.bp3-minimal)
            > .bp3-button:not(:last-child) {
            margin-right: -1px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .use-notebook-styles .bp3-button-group.bp3-minimal .bp3-button {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
          }
          .use-notebook-styles .bp3-button-group.bp3-minimal .bp3-button:hover {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(167, 182, 194, 0.3);
            text-decoration: none;
            color: #182026;
          }
          .use-notebook-styles .bp3-button-group.bp3-minimal .bp3-button:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(115, 134, 148, 0.3);
            color: #182026;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled:hover,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled:hover {
            background: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled:hover.bp3-active {
            background: rgba(115, 134, 148, 0.3);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: inherit;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:hover {
            background: rgba(138, 155, 168, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-active {
            background: rgba(138, 155, 168, 0.3);
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled:hover {
            background: none;
            cursor: not-allowed;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-disabled:hover.bp3-active {
            background: rgba(138, 155, 168, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary {
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:hover {
            background: rgba(19, 124, 189, 0.15);
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary.bp3-active {
            background: rgba(19, 124, 189, 0.3);
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary.bp3-disabled {
            background: none;
            color: rgba(16, 107, 163, 0.5);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active {
            background: rgba(19, 124, 189, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary {
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:hover {
            background: rgba(19, 124, 189, 0.2);
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary.bp3-active {
            background: rgba(19, 124, 189, 0.3);
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary.bp3-disabled {
            background: none;
            color: rgba(72, 175, 240, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active {
            background: rgba(19, 124, 189, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success {
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:hover {
            background: rgba(15, 153, 96, 0.15);
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success.bp3-active {
            background: rgba(15, 153, 96, 0.3);
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success.bp3-disabled {
            background: none;
            color: rgba(13, 128, 80, 0.5);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success.bp3-disabled.bp3-active {
            background: rgba(15, 153, 96, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #0d8050;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success {
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:hover {
            background: rgba(15, 153, 96, 0.2);
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success.bp3-active {
            background: rgba(15, 153, 96, 0.3);
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success.bp3-disabled {
            background: none;
            color: rgba(61, 204, 145, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-success.bp3-disabled.bp3-active {
            background: rgba(15, 153, 96, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning {
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:hover {
            background: rgba(217, 130, 43, 0.15);
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning.bp3-active {
            background: rgba(217, 130, 43, 0.3);
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning.bp3-disabled {
            background: none;
            color: rgba(191, 115, 38, 0.5);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active {
            background: rgba(217, 130, 43, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #bf7326;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning {
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:hover {
            background: rgba(217, 130, 43, 0.2);
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning.bp3-active {
            background: rgba(217, 130, 43, 0.3);
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning.bp3-disabled {
            background: none;
            color: rgba(255, 179, 102, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active {
            background: rgba(217, 130, 43, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger {
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:hover {
            background: rgba(219, 55, 55, 0.15);
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger.bp3-active {
            background: rgba(219, 55, 55, 0.3);
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger.bp3-disabled {
            background: none;
            color: rgba(194, 48, 48, 0.5);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active {
            background: rgba(219, 55, 55, 0.3);
          }
          .use-notebook-styles
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #c23030;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger {
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:hover {
            background: rgba(219, 55, 55, 0.2);
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger.bp3-active {
            background: rgba(219, 55, 55, 0.3);
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger.bp3-disabled {
            background: none;
            color: rgba(255, 115, 115, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-minimal
            .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active {
            background: rgba(219, 55, 55, 0.3);
          }
          .use-notebook-styles .bp3-button-group .bp3-popover-wrapper,
          .use-notebook-styles .bp3-button-group .bp3-popover-target {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
          }
          .use-notebook-styles .bp3-button-group.bp3-fill {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
          }
          .use-notebook-styles .bp3-button-group .bp3-button.bp3-fill,
          .use-notebook-styles
            .bp3-button-group.bp3-fill
            .bp3-button:not(.bp3-fixed) {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
          }
          .use-notebook-styles .bp3-button-group.bp3-vertical {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            vertical-align: top;
          }
          .use-notebook-styles .bp3-button-group.bp3-vertical.bp3-fill {
            width: unset;
            height: 100%;
          }
          .use-notebook-styles .bp3-button-group.bp3-vertical .bp3-button {
            margin-right: 0 !important;
            width: 100%;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-vertical:not(.bp3-minimal)
            > .bp3-popover-wrapper:first-child
            .bp3-button,
          .use-notebook-styles
            .bp3-button-group.bp3-vertical:not(.bp3-minimal)
            > .bp3-button:first-child {
            border-radius: 3px 3px 0 0;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-vertical:not(.bp3-minimal)
            > .bp3-popover-wrapper:last-child
            .bp3-button,
          .use-notebook-styles
            .bp3-button-group.bp3-vertical:not(.bp3-minimal)
            > .bp3-button:last-child {
            border-radius: 0 0 3px 3px;
          }
          .use-notebook-styles
            .bp3-button-group.bp3-vertical:not(.bp3-minimal)
            > .bp3-popover-wrapper:not(:last-child)
            .bp3-button,
          .use-notebook-styles
            .bp3-button-group.bp3-vertical:not(.bp3-minimal)
            > .bp3-button:not(:last-child) {
            margin-bottom: -1px;
          }
          .use-notebook-styles .bp3-button-group.bp3-align-left .bp3-button {
            text-align: left;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group:not(.bp3-minimal)
            > .bp3-popover-wrapper:not(:last-child)
            .bp3-button,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group:not(.bp3-minimal)
            > .bp3-button:not(:last-child) {
            margin-right: 1px;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-vertical
            > .bp3-popover-wrapper:not(:last-child)
            .bp3-button,
          .use-notebook-styles
            .bp3-dark
            .bp3-button-group.bp3-vertical
            > .bp3-button:not(:last-child) {
            margin-bottom: 1px;
          }
          .use-notebook-styles .bp3-callout {
            line-height: 1.5;
            font-size: 14px;
            position: relative;
            border-radius: 3px;
            background-color: rgba(138, 155, 168, 0.15);
            width: 100%;
            padding: 10px 12px 9px;
          }
          .use-notebook-styles .bp3-callout[class*="bp3-icon-"] {
            padding-left: 40px;
          }
          .use-notebook-styles .bp3-callout[class*="bp3-icon-"]::before {
            line-height: 1;
            font-family: "Icons20", sans-serif;
            font-size: 20px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            position: absolute;
            top: 10px;
            left: 10px;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-callout.bp3-callout-icon {
            padding-left: 40px;
          }
          .use-notebook-styles
            .bp3-callout.bp3-callout-icon
            > .bp3-icon:first-child {
            position: absolute;
            top: 10px;
            left: 10px;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-callout .bp3-heading {
            margin-top: 0;
            margin-bottom: 5px;
            line-height: 20px;
          }
          .use-notebook-styles .bp3-callout .bp3-heading:last-child {
            margin-bottom: 0;
          }
          .use-notebook-styles .bp3-dark .bp3-callout {
            background-color: rgba(138, 155, 168, 0.2);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-callout[class*="bp3-icon-"]::before {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-callout.bp3-intent-primary {
            background-color: rgba(19, 124, 189, 0.15);
          }
          .use-notebook-styles
            .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-callout.bp3-intent-primary
            > .bp3-icon:first-child,
          .use-notebook-styles .bp3-callout.bp3-intent-primary .bp3-heading {
            color: #106ba3;
          }
          .use-notebook-styles .bp3-dark .bp3-callout.bp3-intent-primary {
            background-color: rgba(19, 124, 189, 0.25);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-primary
            > .bp3-icon:first-child,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-primary
            .bp3-heading {
            color: #48aff0;
          }
          .use-notebook-styles .bp3-callout.bp3-intent-success {
            background-color: rgba(15, 153, 96, 0.15);
          }
          .use-notebook-styles
            .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-callout.bp3-intent-success
            > .bp3-icon:first-child,
          .use-notebook-styles .bp3-callout.bp3-intent-success .bp3-heading {
            color: #0d8050;
          }
          .use-notebook-styles .bp3-dark .bp3-callout.bp3-intent-success {
            background-color: rgba(15, 153, 96, 0.25);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-success
            > .bp3-icon:first-child,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-success
            .bp3-heading {
            color: #3dcc91;
          }
          .use-notebook-styles .bp3-callout.bp3-intent-warning {
            background-color: rgba(217, 130, 43, 0.15);
          }
          .use-notebook-styles
            .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-callout.bp3-intent-warning
            > .bp3-icon:first-child,
          .use-notebook-styles .bp3-callout.bp3-intent-warning .bp3-heading {
            color: #bf7326;
          }
          .use-notebook-styles .bp3-dark .bp3-callout.bp3-intent-warning {
            background-color: rgba(217, 130, 43, 0.25);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-warning
            > .bp3-icon:first-child,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-warning
            .bp3-heading {
            color: #ffb366;
          }
          .use-notebook-styles .bp3-callout.bp3-intent-danger {
            background-color: rgba(219, 55, 55, 0.15);
          }
          .use-notebook-styles
            .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-callout.bp3-intent-danger
            > .bp3-icon:first-child,
          .use-notebook-styles .bp3-callout.bp3-intent-danger .bp3-heading {
            color: #c23030;
          }
          .use-notebook-styles .bp3-dark .bp3-callout.bp3-intent-danger {
            background-color: rgba(219, 55, 55, 0.25);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-danger
            > .bp3-icon:first-child,
          .use-notebook-styles
            .bp3-dark
            .bp3-callout.bp3-intent-danger
            .bp3-heading {
            color: #ff7373;
          }
          .use-notebook-styles .bp3-running-text .bp3-callout {
            margin: 20px 0;
          }
          .use-notebook-styles .bp3-card {
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            background-color: #ffffff;
            padding: 20px;
            -webkit-transition: -webkit-transform 200ms
                cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
              box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
              box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles .bp3-card.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-card {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            background-color: #30404d;
          }
          .use-notebook-styles .bp3-elevation-0 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          }
          .use-notebook-styles .bp3-elevation-0.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-elevation-0 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          }
          .use-notebook-styles .bp3-elevation-1 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-elevation-1.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-elevation-1 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-elevation-2 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-elevation-2.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-elevation-2 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-elevation-3 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-elevation-3.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-elevation-3 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-elevation-4 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-elevation-4.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-elevation-4 {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-card.bp3-interactive:hover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            cursor: pointer;
          }
          .use-notebook-styles .bp3-card.bp3-interactive:hover.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-card.bp3-interactive:hover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-card.bp3-interactive:active {
            opacity: 0.9;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
            -webkit-transition-duration: 0;
            transition-duration: 0;
          }
          .use-notebook-styles .bp3-card.bp3-interactive:active.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-card.bp3-interactive:active {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-collapse {
            height: 0;
            overflow-y: hidden;
            -webkit-transition: height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles .bp3-collapse .bp3-collapse-body {
            -webkit-transition: -webkit-transform 200ms
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles
            .bp3-collapse
            .bp3-collapse-body[aria-hidden="true"] {
            display: none;
          }
          .use-notebook-styles .bp3-context-menu .bp3-popover-target {
            display: block;
          }
          .use-notebook-styles .bp3-context-menu-popover-target {
            position: fixed;
          }
          .use-notebook-styles .bp3-divider {
            margin: 5px;
            border-right: 1px solid rgba(16, 22, 26, 0.15);
            border-bottom: 1px solid rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles .bp3-dark .bp3-divider {
            border-color: rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dialog-container {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            width: 100%;
            min-height: 100%;
            pointer-events: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles
            .bp3-dialog-container.bp3-overlay-enter
            > .bp3-dialog,
          .use-notebook-styles
            .bp3-dialog-container.bp3-overlay-appear
            > .bp3-dialog {
            opacity: 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }
          .use-notebook-styles
            .bp3-dialog-container.bp3-overlay-enter-active
            > .bp3-dialog,
          .use-notebook-styles
            .bp3-dialog-container.bp3-overlay-appear-active
            > .bp3-dialog {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            transition-property: opacity, transform;
            transition-property: opacity, transform, -webkit-transform;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(
              0.54,
              1.12,
              0.38,
              1.11
            );
            transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles
            .bp3-dialog-container.bp3-overlay-exit
            > .bp3-dialog {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .use-notebook-styles
            .bp3-dialog-container.bp3-overlay-exit-active
            > .bp3-dialog {
            opacity: 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            transition-property: opacity, transform;
            transition-property: opacity, transform, -webkit-transform;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(
              0.54,
              1.12,
              0.38,
              1.11
            );
            transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-dialog {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            margin: 30px 0;
            border-radius: 6px;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
            background: #ebf1f5;
            width: 500px;
            padding-bottom: 20px;
            pointer-events: all;
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
          }
          .use-notebook-styles .bp3-dialog:focus {
            outline: 0;
          }
          .use-notebook-styles .bp3-dialog.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-dialog {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
            background: #293742;
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dialog-header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border-radius: 6px 6px 0 0;
            -webkit-box-shadow: 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow: 0 1px 0 rgba(16, 22, 26, 0.15);
            background: #ffffff;
            min-height: 40px;
            padding-right: 5px;
            padding-left: 20px;
          }
          .use-notebook-styles .bp3-dialog-header .bp3-icon-large,
          .use-notebook-styles .bp3-dialog-header .bp3-icon {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            margin-right: 10px;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-dialog-header .bp3-heading {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            margin: 0;
            line-height: inherit;
          }
          .use-notebook-styles .bp3-dialog-header .bp3-heading:last-child {
            margin-right: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-dialog-header {
            -webkit-box-shadow: 0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow: 0 1px 0 rgba(16, 22, 26, 0.4);
            background: #30404d;
          }
          .use-notebook-styles .bp3-dark .bp3-dialog-header .bp3-icon-large,
          .use-notebook-styles .bp3-dark .bp3-dialog-header .bp3-icon {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dialog-body {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            margin: 20px;
            line-height: 18px;
          }
          .use-notebook-styles .bp3-dialog-footer {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            margin: 0 20px;
          }
          .use-notebook-styles .bp3-dialog-footer-actions {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
          }
          .use-notebook-styles .bp3-dialog-footer-actions .bp3-button {
            margin-left: 10px;
          }
          .use-notebook-styles .bp3-drawer {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            margin: 0;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
            background: #ffffff;
            padding: 0;
          }
          .use-notebook-styles .bp3-drawer:focus {
            outline: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-top {
            top: 0;
            right: 0;
            left: 0;
            height: 50%;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-top.bp3-overlay-enter,
          .use-notebook-styles .bp3-drawer.bp3-position-top.bp3-overlay-appear {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-top.bp3-overlay-enter-active,
          .use-notebook-styles
            .bp3-drawer.bp3-position-top.bp3-overlay-appear-active {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-top.bp3-overlay-exit {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-top.bp3-overlay-exit-active {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-bottom {
            right: 0;
            bottom: 0;
            left: 0;
            height: 50%;
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-bottom.bp3-overlay-enter,
          .use-notebook-styles
            .bp3-drawer.bp3-position-bottom.bp3-overlay-appear {
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-bottom.bp3-overlay-enter-active,
          .use-notebook-styles
            .bp3-drawer.bp3-position-bottom.bp3-overlay-appear-active {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-bottom.bp3-overlay-exit {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-bottom.bp3-overlay-exit-active {
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-left {
            top: 0;
            bottom: 0;
            left: 0;
            width: 50%;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-left.bp3-overlay-enter,
          .use-notebook-styles
            .bp3-drawer.bp3-position-left.bp3-overlay-appear {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-left.bp3-overlay-enter-active,
          .use-notebook-styles
            .bp3-drawer.bp3-position-left.bp3-overlay-appear-active {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-left.bp3-overlay-exit {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-left.bp3-overlay-exit-active {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-right {
            top: 0;
            right: 0;
            bottom: 0;
            width: 50%;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-right.bp3-overlay-enter,
          .use-notebook-styles
            .bp3-drawer.bp3-position-right.bp3-overlay-appear {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-right.bp3-overlay-enter-active,
          .use-notebook-styles
            .bp3-drawer.bp3-position-right.bp3-overlay-appear-active {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-position-right.bp3-overlay-exit {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
          .use-notebook-styles
            .bp3-drawer.bp3-position-right.bp3-overlay-exit-active {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right):not(.bp3-vertical) {
            top: 0;
            right: 0;
            bottom: 0;
            width: 50%;
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right):not(.bp3-vertical).bp3-overlay-enter,
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right):not(.bp3-vertical).bp3-overlay-appear {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right):not(.bp3-vertical).bp3-overlay-enter-active,
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right):not(.bp3-vertical).bp3-overlay-appear-active {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right):not(.bp3-vertical).bp3-overlay-exit {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right):not(.bp3-vertical).bp3-overlay-exit-active {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right).bp3-vertical {
            right: 0;
            bottom: 0;
            left: 0;
            height: 50%;
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right).bp3-vertical.bp3-overlay-enter,
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right).bp3-vertical.bp3-overlay-appear {
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right).bp3-vertical.bp3-overlay-enter-active,
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right).bp3-vertical.bp3-overlay-appear-active {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right).bp3-vertical.bp3-overlay-exit {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          .use-notebook-styles
            .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(.bp3-position-right).bp3-vertical.bp3-overlay-exit-active {
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-drawer.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-drawer {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
            background: #30404d;
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-drawer-header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            border-radius: 0;
            -webkit-box-shadow: 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow: 0 1px 0 rgba(16, 22, 26, 0.15);
            min-height: 40px;
            padding: 5px;
            padding-left: 20px;
          }
          .use-notebook-styles .bp3-drawer-header .bp3-icon-large,
          .use-notebook-styles .bp3-drawer-header .bp3-icon {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            margin-right: 10px;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-drawer-header .bp3-heading {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            margin: 0;
            line-height: inherit;
          }
          .use-notebook-styles .bp3-drawer-header .bp3-heading:last-child {
            margin-right: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-drawer-header {
            -webkit-box-shadow: 0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow: 0 1px 0 rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-drawer-header .bp3-icon-large,
          .use-notebook-styles .bp3-dark .bp3-drawer-header .bp3-icon {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-drawer-body {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            overflow: auto;
            line-height: 18px;
          }
          .use-notebook-styles .bp3-drawer-footer {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            position: relative;
            -webkit-box-shadow: inset 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow: inset 0 1px 0 rgba(16, 22, 26, 0.15);
            padding: 10px 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-drawer-footer {
            -webkit-box-shadow: inset 0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 1px 0 rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-editable-text {
            display: inline-block;
            position: relative;
            cursor: text;
            max-width: 100%;
            vertical-align: top;
            white-space: nowrap;
          }
          .use-notebook-styles .bp3-editable-text::before {
            position: absolute;
            top: -3px;
            right: -3px;
            bottom: -3px;
            left: -3px;
            border-radius: 3px;
            content: "";
            -webkit-transition: background-color 100ms
                cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9),
              box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9),
              box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles .bp3-editable-text:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            background-color: #ffffff;
          }
          .use-notebook-styles .bp3-editable-text.bp3-disabled::before {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-primary
            .bp3-editable-text-input,
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-primary
            .bp3-editable-text-content {
            color: #137cbd;
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-primary:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(19, 124, 189, 0.4);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(19, 124, 189, 0.4);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-success
            .bp3-editable-text-input,
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-success
            .bp3-editable-text-content {
            color: #0f9960;
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-success:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0),
              inset 0 0 0 1px rgba(15, 153, 96, 0.4);
            box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0),
              inset 0 0 0 1px rgba(15, 153, 96, 0.4);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #0f9960,
              0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-warning
            .bp3-editable-text-input,
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-warning
            .bp3-editable-text-content {
            color: #d9822b;
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-warning:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0),
              inset 0 0 0 1px rgba(217, 130, 43, 0.4);
            box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0),
              inset 0 0 0 1px rgba(217, 130, 43, 0.4);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #d9822b,
              0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-danger
            .bp3-editable-text-input,
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-danger
            .bp3-editable-text-content {
            color: #db3737;
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-danger:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0),
              inset 0 0 0 1px rgba(219, 55, 55, 0.4);
            box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0),
              inset 0 0 0 1px rgba(219, 55, 55, 0.4);
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #db3737,
              0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-dark .bp3-editable-text:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            background-color: rgba(16, 22, 26, 0.3);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-disabled::before {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-primary
            .bp3-editable-text-content {
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-primary:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(72, 175, 240, 0),
              0 0 0 0 rgba(72, 175, 240, 0),
              inset 0 0 0 1px rgba(72, 175, 240, 0.4);
            box-shadow: 0 0 0 0 rgba(72, 175, 240, 0),
              0 0 0 0 rgba(72, 175, 240, 0),
              inset 0 0 0 1px rgba(72, 175, 240, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #48aff0,
              0 0 0 3px rgba(72, 175, 240, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-success
            .bp3-editable-text-content {
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-success:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(61, 204, 145, 0),
              0 0 0 0 rgba(61, 204, 145, 0),
              inset 0 0 0 1px rgba(61, 204, 145, 0.4);
            box-shadow: 0 0 0 0 rgba(61, 204, 145, 0),
              0 0 0 0 rgba(61, 204, 145, 0),
              inset 0 0 0 1px rgba(61, 204, 145, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #3dcc91,
              0 0 0 3px rgba(61, 204, 145, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-warning
            .bp3-editable-text-content {
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-warning:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(255, 179, 102, 0),
              0 0 0 0 rgba(255, 179, 102, 0),
              inset 0 0 0 1px rgba(255, 179, 102, 0.4);
            box-shadow: 0 0 0 0 rgba(255, 179, 102, 0),
              0 0 0 0 rgba(255, 179, 102, 0),
              inset 0 0 0 1px rgba(255, 179, 102, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #ffb366,
              0 0 0 3px rgba(255, 179, 102, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-danger
            .bp3-editable-text-content {
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-danger:hover::before {
            -webkit-box-shadow: 0 0 0 0 rgba(255, 115, 115, 0),
              0 0 0 0 rgba(255, 115, 115, 0),
              inset 0 0 0 1px rgba(255, 115, 115, 0.4);
            box-shadow: 0 0 0 0 rgba(255, 115, 115, 0),
              0 0 0 0 rgba(255, 115, 115, 0),
              inset 0 0 0 1px rgba(255, 115, 115, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before {
            -webkit-box-shadow: 0 0 0 1px #ff7373,
              0 0 0 3px rgba(255, 115, 115, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-editable-text-input,
          .use-notebook-styles .bp3-editable-text-content {
            display: inherit;
            position: relative;
            min-width: inherit;
            max-width: inherit;
            vertical-align: top;
            text-transform: inherit;
            letter-spacing: inherit;
            color: inherit;
            font: inherit;
            resize: none;
          }
          .use-notebook-styles .bp3-editable-text-input {
            border: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            width: 100%;
            padding: 0;
            white-space: pre-wrap;
          }
          .use-notebook-styles
            .bp3-editable-text-input::-webkit-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-editable-text-input::-moz-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-editable-text-input:-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-editable-text-input::-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-editable-text-input::placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-editable-text-input:focus {
            outline: none;
          }
          .use-notebook-styles .bp3-editable-text-input::-ms-clear {
            display: none;
          }
          .use-notebook-styles .bp3-editable-text-content {
            overflow: hidden;
            padding-right: 2px;
            text-overflow: ellipsis;
            white-space: pre;
          }
          .use-notebook-styles
            .bp3-editable-text-editing
            > .bp3-editable-text-content {
            position: absolute;
            left: 0;
            visibility: hidden;
          }
          .use-notebook-styles
            .bp3-editable-text-placeholder
            > .bp3-editable-text-content {
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-editable-text-placeholder
            > .bp3-editable-text-content {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-editable-text.bp3-multiline {
            display: block;
          }
          .use-notebook-styles
            .bp3-editable-text.bp3-multiline
            .bp3-editable-text-content {
            overflow: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .use-notebook-styles .bp3-control-group {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
          }
          .use-notebook-styles .bp3-control-group > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-control-group > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-control-group .bp3-button,
          .use-notebook-styles .bp3-control-group .bp3-html-select,
          .use-notebook-styles .bp3-control-group .bp3-input,
          .use-notebook-styles .bp3-control-group .bp3-select {
            position: relative;
          }
          .use-notebook-styles .bp3-control-group .bp3-input {
            z-index: 2;
            border-radius: inherit;
          }
          .use-notebook-styles .bp3-control-group .bp3-input:focus {
            z-index: 14;
            border-radius: 3px;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-input[class*="bp3-intent"] {
            z-index: 13;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-input[class*="bp3-intent"]:focus {
            z-index: 15;
          }
          .use-notebook-styles .bp3-control-group .bp3-input[readonly],
          .use-notebook-styles .bp3-control-group .bp3-input:disabled,
          .use-notebook-styles .bp3-control-group .bp3-input.bp3-disabled {
            z-index: 1;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-input-group[class*="bp3-intent"]
            .bp3-input {
            z-index: 13;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-input-group[class*="bp3-intent"]
            .bp3-input:focus {
            z-index: 15;
          }
          .use-notebook-styles .bp3-control-group .bp3-button,
          .use-notebook-styles .bp3-control-group .bp3-html-select select,
          .use-notebook-styles .bp3-control-group .bp3-select select {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            z-index: 4;
            border-radius: inherit;
          }
          .use-notebook-styles .bp3-control-group .bp3-button:focus,
          .use-notebook-styles .bp3-control-group .bp3-html-select select:focus,
          .use-notebook-styles .bp3-control-group .bp3-select select:focus {
            z-index: 5;
          }
          .use-notebook-styles .bp3-control-group .bp3-button:hover,
          .use-notebook-styles .bp3-control-group .bp3-html-select select:hover,
          .use-notebook-styles .bp3-control-group .bp3-select select:hover {
            z-index: 6;
          }
          .use-notebook-styles .bp3-control-group .bp3-button:active,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select:active,
          .use-notebook-styles .bp3-control-group .bp3-select select:active {
            z-index: 7;
          }
          .use-notebook-styles .bp3-control-group .bp3-button[readonly],
          .use-notebook-styles .bp3-control-group .bp3-button:disabled,
          .use-notebook-styles .bp3-control-group .bp3-button.bp3-disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[readonly],
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select:disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select.bp3-disabled,
          .use-notebook-styles .bp3-control-group .bp3-select select[readonly],
          .use-notebook-styles .bp3-control-group .bp3-select select:disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select.bp3-disabled {
            z-index: 3;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-button[class*="bp3-intent"],
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[class*="bp3-intent"],
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select[class*="bp3-intent"] {
            z-index: 9;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-button[class*="bp3-intent"]:focus,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[class*="bp3-intent"]:focus,
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select[class*="bp3-intent"]:focus {
            z-index: 10;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-button[class*="bp3-intent"]:hover,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[class*="bp3-intent"]:hover,
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select[class*="bp3-intent"]:hover {
            z-index: 11;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-button[class*="bp3-intent"]:active,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[class*="bp3-intent"]:active,
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select[class*="bp3-intent"]:active {
            z-index: 12;
          }
          .use-notebook-styles
            .bp3-control-group
            .bp3-button[class*="bp3-intent"][readonly],
          .use-notebook-styles
            .bp3-control-group
            .bp3-button[class*="bp3-intent"]:disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-button[class*="bp3-intent"].bp3-disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[class*="bp3-intent"][readonly],
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[class*="bp3-intent"]:disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-html-select
            select[class*="bp3-intent"].bp3-disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select[class*="bp3-intent"][readonly],
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select[class*="bp3-intent"]:disabled,
          .use-notebook-styles
            .bp3-control-group
            .bp3-select
            select[class*="bp3-intent"].bp3-disabled {
            z-index: 8;
          }
          .use-notebook-styles .bp3-control-group .bp3-input-group > .bp3-icon,
          .use-notebook-styles
            .bp3-control-group
            .bp3-input-group
            > .bp3-button,
          .use-notebook-styles
            .bp3-control-group
            .bp3-input-group
            > .bp3-input-action {
            z-index: 16;
          }
          .use-notebook-styles .bp3-control-group .bp3-select::after,
          .use-notebook-styles .bp3-control-group .bp3-html-select::after,
          .use-notebook-styles .bp3-control-group .bp3-select > .bp3-icon,
          .use-notebook-styles .bp3-control-group .bp3-html-select > .bp3-icon {
            z-index: 17;
          }
          .use-notebook-styles .bp3-control-group:not(.bp3-vertical) > * {
            margin-right: -1px;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control-group:not(.bp3-vertical)
            > * {
            margin-right: 0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control-group:not(.bp3-vertical)
            > .bp3-button
            + .bp3-button {
            margin-left: 1px;
          }
          .use-notebook-styles .bp3-control-group .bp3-popover-wrapper,
          .use-notebook-styles .bp3-control-group .bp3-popover-target {
            border-radius: inherit;
          }
          .use-notebook-styles .bp3-control-group > :first-child {
            border-radius: 3px 0 0 3px;
          }
          .use-notebook-styles .bp3-control-group > :last-child {
            margin-right: 0;
            border-radius: 0 3px 3px 0;
          }
          .use-notebook-styles .bp3-control-group > :only-child {
            margin-right: 0;
            border-radius: 3px;
          }
          .use-notebook-styles .bp3-control-group .bp3-input-group .bp3-button {
            border-radius: 3px;
          }
          .use-notebook-styles .bp3-control-group > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
          }
          .use-notebook-styles .bp3-control-group.bp3-fill > *:not(.bp3-fixed) {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
          }
          .use-notebook-styles .bp3-control-group.bp3-vertical {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          .use-notebook-styles .bp3-control-group.bp3-vertical > * {
            margin-top: -1px;
          }
          .use-notebook-styles .bp3-control-group.bp3-vertical > :first-child {
            margin-top: 0;
            border-radius: 3px 3px 0 0;
          }
          .use-notebook-styles .bp3-control-group.bp3-vertical > :last-child {
            border-radius: 0 0 3px 3px;
          }
          .use-notebook-styles .bp3-control {
            display: block;
            position: relative;
            margin-bottom: 10px;
            cursor: pointer;
            text-transform: none;
          }
          .use-notebook-styles
            .bp3-control
            input:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #137cbd;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.1)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            color: #ffffff;
          }
          .use-notebook-styles
            .bp3-control:hover
            input:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #106ba3;
          }
          .use-notebook-styles
            .bp3-control
            input:not(:disabled):active:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background: #0e5a8a;
          }
          .use-notebook-styles
            .bp3-control
            input:disabled:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(19, 124, 189, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control
            input:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control:hover
            input:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control
            input:not(:disabled):active:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #0e5a8a;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control
            input:disabled:checked
            ~ .bp3-control-indicator {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(14, 90, 138, 0.5);
          }
          .use-notebook-styles .bp3-control:not(.bp3-align-right) {
            padding-left: 26px;
          }
          .use-notebook-styles
            .bp3-control:not(.bp3-align-right)
            .bp3-control-indicator {
            margin-left: -26px;
          }
          .use-notebook-styles .bp3-control.bp3-align-right {
            padding-right: 26px;
          }
          .use-notebook-styles
            .bp3-control.bp3-align-right
            .bp3-control-indicator {
            margin-right: -26px;
          }
          .use-notebook-styles .bp3-control.bp3-disabled {
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-control.bp3-inline {
            display: inline-block;
            margin-right: 20px;
          }
          .use-notebook-styles .bp3-control input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: -1;
          }
          .use-notebook-styles .bp3-control .bp3-control-indicator {
            display: inline-block;
            position: relative;
            margin-top: -3px;
            margin-right: 10px;
            border: none;
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-clip: padding-box;
            background-color: #f5f8fa;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.8)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            );
            cursor: pointer;
            width: 1em;
            height: 1em;
            vertical-align: middle;
            font-size: 16px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .bp3-control .bp3-control-indicator::before {
            display: block;
            width: 1em;
            height: 1em;
            content: "";
          }
          .use-notebook-styles .bp3-control:hover .bp3-control-indicator {
            background-color: #ebf1f5;
          }
          .use-notebook-styles
            .bp3-control
            input:not(:disabled):active
            ~ .bp3-control-indicator {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background: #d8e1e8;
          }
          .use-notebook-styles
            .bp3-control
            input:disabled
            ~ .bp3-control-indicator {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(206, 217, 224, 0.5);
            cursor: not-allowed;
          }
          .use-notebook-styles
            .bp3-control
            input:focus
            ~ .bp3-control-indicator {
            outline: rgba(19, 124, 189, 0.6) auto 2px;
            outline-offset: 2px;
            -moz-outline-radius: 6px;
          }
          .use-notebook-styles
            .bp3-control.bp3-align-right
            .bp3-control-indicator {
            float: right;
            margin-top: 1px;
            margin-left: 10px;
          }
          .use-notebook-styles .bp3-control.bp3-large {
            font-size: 16px;
          }
          .use-notebook-styles .bp3-control.bp3-large:not(.bp3-align-right) {
            padding-left: 30px;
          }
          .use-notebook-styles
            .bp3-control.bp3-large:not(.bp3-align-right)
            .bp3-control-indicator {
            margin-left: -30px;
          }
          .use-notebook-styles .bp3-control.bp3-large.bp3-align-right {
            padding-right: 30px;
          }
          .use-notebook-styles
            .bp3-control.bp3-large.bp3-align-right
            .bp3-control-indicator {
            margin-right: -30px;
          }
          .use-notebook-styles .bp3-control.bp3-large .bp3-control-indicator {
            font-size: 20px;
          }
          .use-notebook-styles
            .bp3-control.bp3-large.bp3-align-right
            .bp3-control-indicator {
            margin-top: 0;
          }
          .use-notebook-styles
            .bp3-control.bp3-checkbox
            input:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #137cbd;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.1)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            color: #ffffff;
          }
          .use-notebook-styles
            .bp3-control.bp3-checkbox:hover
            input:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            background-color: #106ba3;
          }
          .use-notebook-styles
            .bp3-control.bp3-checkbox
            input:not(:disabled):active:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background: #0e5a8a;
          }
          .use-notebook-styles
            .bp3-control.bp3-checkbox
            input:disabled:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(19, 124, 189, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-checkbox
            input:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-checkbox:hover
            input:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-checkbox
            input:not(:disabled):active:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #0e5a8a;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-checkbox
            input:disabled:indeterminate
            ~ .bp3-control-indicator {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(14, 90, 138, 0.5);
          }
          .use-notebook-styles
            .bp3-control.bp3-checkbox
            .bp3-control-indicator {
            border-radius: 3px;
          }
          .use-notebook-styles
            .bp3-control.bp3-checkbox
            input:checked
            ~ .bp3-control-indicator::before {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z' fill='white'/%3e%3c/svg%3e");
          }
          .use-notebook-styles
            .bp3-control.bp3-checkbox
            input:indeterminate
            ~ .bp3-control-indicator::before {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='white'/%3e%3c/svg%3e");
          }
          .use-notebook-styles .bp3-control.bp3-radio .bp3-control-indicator {
            border-radius: 50%;
          }
          .use-notebook-styles
            .bp3-control.bp3-radio
            input:checked
            ~ .bp3-control-indicator::before {
            background-image: radial-gradient(
              #ffffff,
              #ffffff 28%,
              transparent 32%
            );
          }
          .use-notebook-styles
            .bp3-control.bp3-radio
            input:checked:disabled
            ~ .bp3-control-indicator::before {
            opacity: 0.5;
          }
          .use-notebook-styles
            .bp3-control.bp3-radio
            input:focus
            ~ .bp3-control-indicator {
            -moz-outline-radius: 16px;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input
            ~ .bp3-control-indicator {
            background: rgba(167, 182, 194, 0.5);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch:hover
            input
            ~ .bp3-control-indicator {
            background: rgba(115, 134, 148, 0.5);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:not(:disabled):active
            ~ .bp3-control-indicator {
            background: rgba(92, 112, 128, 0.5);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:disabled
            ~ .bp3-control-indicator {
            background: rgba(206, 217, 224, 0.5);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:disabled
            ~ .bp3-control-indicator::before {
            background: rgba(255, 255, 255, 0.8);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:checked
            ~ .bp3-control-indicator {
            background: #137cbd;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch:hover
            input:checked
            ~ .bp3-control-indicator {
            background: #106ba3;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:checked:not(:disabled):active
            ~ .bp3-control-indicator {
            background: #0e5a8a;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:checked:disabled
            ~ .bp3-control-indicator {
            background: rgba(19, 124, 189, 0.5);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:checked:disabled
            ~ .bp3-control-indicator::before {
            background: rgba(255, 255, 255, 0.8);
          }
          .use-notebook-styles .bp3-control.bp3-switch:not(.bp3-align-right) {
            padding-left: 38px;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch:not(.bp3-align-right)
            .bp3-control-indicator {
            margin-left: -38px;
          }
          .use-notebook-styles .bp3-control.bp3-switch.bp3-align-right {
            padding-right: 38px;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch.bp3-align-right
            .bp3-control-indicator {
            margin-right: -38px;
          }
          .use-notebook-styles .bp3-control.bp3-switch .bp3-control-indicator {
            border: none;
            border-radius: 1.75em;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            width: auto;
            min-width: 1.75em;
            -webkit-transition: background-color 100ms
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            .bp3-control-indicator::before {
            position: absolute;
            left: 0;
            margin: 2px;
            border-radius: 50%;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.2);
            background: #ffffff;
            width: calc(1em - 4px);
            height: calc(1em - 4px);
            -webkit-transition: left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:checked
            ~ .bp3-control-indicator::before {
            left: calc(100% - 1em);
          }
          .use-notebook-styles
            .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) {
            padding-left: 45px;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right)
            .bp3-control-indicator {
            margin-left: -45px;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch.bp3-large.bp3-align-right {
            padding-right: 45px;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch.bp3-large.bp3-align-right
            .bp3-control-indicator {
            margin-right: -45px;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input
            ~ .bp3-control-indicator {
            background: rgba(16, 22, 26, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch:hover
            input
            ~ .bp3-control-indicator {
            background: rgba(16, 22, 26, 0.7);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:not(:disabled):active
            ~ .bp3-control-indicator {
            background: rgba(16, 22, 26, 0.9);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:disabled
            ~ .bp3-control-indicator {
            background: rgba(57, 75, 89, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:disabled
            ~ .bp3-control-indicator::before {
            background: rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:checked
            ~ .bp3-control-indicator {
            background: #137cbd;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch:hover
            input:checked
            ~ .bp3-control-indicator {
            background: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:checked:not(:disabled):active
            ~ .bp3-control-indicator {
            background: #0e5a8a;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:checked:disabled
            ~ .bp3-control-indicator {
            background: rgba(14, 90, 138, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:checked:disabled
            ~ .bp3-control-indicator::before {
            background: rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            .bp3-control-indicator::before {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background: #394b59;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-switch
            input:checked
            ~ .bp3-control-indicator::before {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-control.bp3-switch .bp3-switch-inner-text {
            text-align: center;
            font-size: 0.7em;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            .bp3-control-indicator-child:first-child {
            visibility: hidden;
            margin-right: 1.2em;
            margin-left: 0.5em;
            line-height: 0;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            .bp3-control-indicator-child:last-child {
            visibility: visible;
            margin-right: 0.5em;
            margin-left: 1.2em;
            line-height: 1em;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:checked
            ~ .bp3-control-indicator
            .bp3-control-indicator-child:first-child {
            visibility: visible;
            line-height: 1em;
          }
          .use-notebook-styles
            .bp3-control.bp3-switch
            input:checked
            ~ .bp3-control-indicator
            .bp3-control-indicator-child:last-child {
            visibility: hidden;
            line-height: 0;
          }
          .use-notebook-styles .bp3-dark .bp3-control {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-control.bp3-disabled {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-control .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #394b59;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.05)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0)
            );
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control:hover
            .bp3-control-indicator {
            background-color: #30404d;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control
            input:not(:disabled):active
            ~ .bp3-control-indicator {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background: #202b33;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control
            input:disabled
            ~ .bp3-control-indicator {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(57, 75, 89, 0.5);
            cursor: not-allowed;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-checkbox
            input:disabled:checked
            ~ .bp3-control-indicator,
          .use-notebook-styles
            .bp3-dark
            .bp3-control.bp3-checkbox
            input:disabled:indeterminate
            ~ .bp3-control-indicator {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-file-input {
            display: inline-block;
            position: relative;
            cursor: pointer;
            height: 30px;
          }
          .use-notebook-styles .bp3-file-input input {
            opacity: 0;
            margin: 0;
            min-width: 200px;
          }
          .use-notebook-styles
            .bp3-file-input
            input:disabled
            + .bp3-file-upload-input,
          .use-notebook-styles
            .bp3-file-input
            input.bp3-disabled
            + .bp3-file-upload-input {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(206, 217, 224, 0.5);
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
            resize: none;
          }
          .use-notebook-styles
            .bp3-file-input
            input:disabled
            + .bp3-file-upload-input::after,
          .use-notebook-styles
            .bp3-file-input
            input.bp3-disabled
            + .bp3-file-upload-input::after {
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(206, 217, 224, 0.5);
            background-image: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles
            .bp3-file-input
            input:disabled
            + .bp3-file-upload-input::after.bp3-active,
          .use-notebook-styles
            .bp3-file-input
            input:disabled
            + .bp3-file-upload-input::after.bp3-active:hover,
          .use-notebook-styles
            .bp3-file-input
            input.bp3-disabled
            + .bp3-file-upload-input::after.bp3-active,
          .use-notebook-styles
            .bp3-file-input
            input.bp3-disabled
            + .bp3-file-upload-input::after.bp3-active:hover {
            background: rgba(206, 217, 224, 0.7);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-input
            input:disabled
            + .bp3-file-upload-input,
          .use-notebook-styles
            .bp3-dark
            .bp3-file-input
            input.bp3-disabled
            + .bp3-file-upload-input {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(57, 75, 89, 0.5);
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-input
            input:disabled
            + .bp3-file-upload-input::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-file-input
            input.bp3-disabled
            + .bp3-file-upload-input::after {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(57, 75, 89, 0.5);
            background-image: none;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-input
            input:disabled
            + .bp3-file-upload-input::after.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-file-input
            input.bp3-disabled
            + .bp3-file-upload-input::after.bp3-active {
            background: rgba(57, 75, 89, 0.7);
          }
          .use-notebook-styles
            .bp3-file-input.bp3-file-input-has-selection
            .bp3-file-upload-input {
            color: #182026;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-input.bp3-file-input-has-selection
            .bp3-file-upload-input {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-file-input.bp3-fill {
            width: 100%;
          }
          .use-notebook-styles .bp3-file-input.bp3-large,
          .use-notebook-styles .bp3-large .bp3-file-input {
            height: 40px;
          }
          .use-notebook-styles
            .bp3-file-input
            .bp3-file-upload-input-custom-text::after {
            content: attr(bp3-button-text);
          }
          .use-notebook-styles .bp3-file-upload-input {
            outline: none;
            border: none;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            background: #ffffff;
            height: 30px;
            padding: 0 10px;
            vertical-align: middle;
            line-height: 30px;
            color: #182026;
            font-size: 14px;
            font-weight: 400;
            -webkit-transition: -webkit-box-shadow 100ms
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            padding-right: 80px;
            color: rgba(92, 112, 128, 0.6);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles
            .bp3-file-upload-input::-webkit-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-file-upload-input::-moz-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-file-upload-input:-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-file-upload-input::-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-file-upload-input::placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-file-upload-input:focus,
          .use-notebook-styles .bp3-file-upload-input.bp3-active {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-file-upload-input[type="search"],
          .use-notebook-styles .bp3-file-upload-input.bp3-round {
            border-radius: 30px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding-left: 10px;
          }
          .use-notebook-styles .bp3-file-upload-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles .bp3-file-upload-input:disabled,
          .use-notebook-styles .bp3-file-upload-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(206, 217, 224, 0.5);
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
            resize: none;
          }
          .use-notebook-styles .bp3-file-upload-input::after {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-color: #f5f8fa;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.8)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            );
            color: #182026;
            min-width: 24px;
            min-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            position: absolute;
            top: 0;
            right: 0;
            margin: 3px;
            border-radius: 3px;
            width: 70px;
            text-align: center;
            line-height: 24px;
            content: "Browse";
          }
          .use-notebook-styles .bp3-file-upload-input::after:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-clip: padding-box;
            background-color: #ebf1f5;
          }
          .use-notebook-styles .bp3-file-upload-input::after:active,
          .use-notebook-styles .bp3-file-upload-input::after.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #d8e1e8;
            background-image: none;
          }
          .use-notebook-styles .bp3-file-upload-input::after:disabled,
          .use-notebook-styles .bp3-file-upload-input::after.bp3-disabled {
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(206, 217, 224, 0.5);
            background-image: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles
            .bp3-file-upload-input::after:disabled.bp3-active,
          .use-notebook-styles
            .bp3-file-upload-input::after:disabled.bp3-active:hover,
          .use-notebook-styles
            .bp3-file-upload-input::after.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-file-upload-input::after.bp3-disabled.bp3-active:hover {
            background: rgba(206, 217, 224, 0.7);
          }
          .use-notebook-styles .bp3-file-upload-input:hover::after {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-clip: padding-box;
            background-color: #ebf1f5;
          }
          .use-notebook-styles .bp3-file-upload-input:active::after {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #d8e1e8;
            background-image: none;
          }
          .use-notebook-styles .bp3-large .bp3-file-upload-input {
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            padding-right: 95px;
          }
          .use-notebook-styles .bp3-large .bp3-file-upload-input[type="search"],
          .use-notebook-styles .bp3-large .bp3-file-upload-input.bp3-round {
            padding: 0 15px;
          }
          .use-notebook-styles .bp3-large .bp3-file-upload-input::after {
            min-width: 30px;
            min-height: 30px;
            margin: 5px;
            width: 85px;
            line-height: 30px;
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            background: rgba(16, 22, 26, 0.3);
            color: #f5f8fa;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::-webkit-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::-moz-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input:-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input::placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input:focus {
            -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input:disabled,
          .use-notebook-styles .bp3-dark .bp3-file-upload-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(57, 75, 89, 0.5);
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input::after {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #394b59;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.05)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0)
            );
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input::after:hover,
          .use-notebook-styles .bp3-dark .bp3-file-upload-input::after:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::after.bp3-active {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input::after:hover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #30404d;
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input::after:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::after.bp3-active {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #202b33;
            background-image: none;
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input::after:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::after.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(57, 75, 89, 0.5);
            background-image: none;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::after:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::after.bp3-disabled.bp3-active {
            background: rgba(57, 75, 89, 0.7);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-file-upload-input::after
            .bp3-button-spinner
            .bp3-spinner-head {
            background: rgba(16, 22, 26, 0.5);
            stroke: #8a9ba8;
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input:hover::after {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #30404d;
          }
          .use-notebook-styles .bp3-dark .bp3-file-upload-input:active::after {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #202b33;
            background-image: none;
          }
          .use-notebook-styles .bp3-file-upload-input::after {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          }
          .use-notebook-styles .bp3-form-group {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            margin: 0 0 15px;
          }
          .use-notebook-styles .bp3-form-group label.bp3-label {
            margin-bottom: 5px;
          }
          .use-notebook-styles .bp3-form-group .bp3-control {
            margin-top: 7px;
          }
          .use-notebook-styles .bp3-form-group .bp3-form-helper-text {
            margin-top: 5px;
            color: #5c7080;
            font-size: 12px;
          }
          .use-notebook-styles
            .bp3-form-group.bp3-intent-primary
            .bp3-form-helper-text {
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-form-group.bp3-intent-success
            .bp3-form-helper-text {
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-form-group.bp3-intent-warning
            .bp3-form-helper-text {
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-form-group.bp3-intent-danger
            .bp3-form-helper-text {
            color: #c23030;
          }
          .use-notebook-styles .bp3-form-group.bp3-inline {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
          }
          .use-notebook-styles
            .bp3-form-group.bp3-inline.bp3-large
            label.bp3-label {
            margin: 0 10px 0 0;
            line-height: 40px;
          }
          .use-notebook-styles .bp3-form-group.bp3-inline label.bp3-label {
            margin: 0 10px 0 0;
            line-height: 30px;
          }
          .use-notebook-styles .bp3-form-group.bp3-disabled .bp3-label,
          .use-notebook-styles .bp3-form-group.bp3-disabled .bp3-text-muted,
          .use-notebook-styles
            .bp3-form-group.bp3-disabled
            .bp3-form-helper-text {
            color: rgba(92, 112, 128, 0.6) !important;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-form-group.bp3-intent-primary
            .bp3-form-helper-text {
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-form-group.bp3-intent-success
            .bp3-form-helper-text {
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-form-group.bp3-intent-warning
            .bp3-form-helper-text {
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-form-group.bp3-intent-danger
            .bp3-form-helper-text {
            color: #ff7373;
          }
          .use-notebook-styles .bp3-dark .bp3-form-group .bp3-form-helper-text {
            color: #a7b6c2;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-form-group.bp3-disabled
            .bp3-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-form-group.bp3-disabled
            .bp3-text-muted,
          .use-notebook-styles
            .bp3-dark
            .bp3-form-group.bp3-disabled
            .bp3-form-helper-text {
            color: rgba(167, 182, 194, 0.6) !important;
          }
          .use-notebook-styles .bp3-input-group {
            display: block;
            position: relative;
          }
          .use-notebook-styles .bp3-input-group .bp3-input {
            position: relative;
            width: 100%;
          }
          .use-notebook-styles .bp3-input-group .bp3-input:not(:first-child) {
            padding-left: 30px;
          }
          .use-notebook-styles .bp3-input-group .bp3-input:not(:last-child) {
            padding-right: 30px;
          }
          .use-notebook-styles .bp3-input-group .bp3-input-action,
          .use-notebook-styles .bp3-input-group > .bp3-button,
          .use-notebook-styles .bp3-input-group > .bp3-icon {
            position: absolute;
            top: 0;
          }
          .use-notebook-styles .bp3-input-group .bp3-input-action:first-child,
          .use-notebook-styles .bp3-input-group > .bp3-button:first-child,
          .use-notebook-styles .bp3-input-group > .bp3-icon:first-child {
            left: 0;
          }
          .use-notebook-styles .bp3-input-group .bp3-input-action:last-child,
          .use-notebook-styles .bp3-input-group > .bp3-button:last-child,
          .use-notebook-styles .bp3-input-group > .bp3-icon:last-child {
            right: 0;
          }
          .use-notebook-styles .bp3-input-group .bp3-button {
            min-width: 24px;
            min-height: 24px;
            margin: 3px;
            padding: 0 7px;
          }
          .use-notebook-styles .bp3-input-group .bp3-button:empty {
            padding: 0;
          }
          .use-notebook-styles .bp3-input-group > .bp3-icon {
            z-index: 1;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-input-group > .bp3-icon:empty {
            line-height: 1;
            font-family: "Icons16", sans-serif;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }
          .use-notebook-styles .bp3-input-group > .bp3-icon,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input-action
            > .bp3-spinner {
            margin: 7px;
          }
          .use-notebook-styles .bp3-input-group .bp3-tag {
            margin: 5px;
          }
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:not(:hover):not(:focus),
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:not(:hover):not(:focus) {
            color: #5c7080;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:not(:hover):not(:focus),
          .use-notebook-styles
            .bp3-dark
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:not(:hover):not(:focus) {
            color: #a7b6c2;
          }
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:not(:hover):not(:focus)
            .bp3-icon,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:not(:hover):not(:focus)
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:not(:hover):not(:focus)
            .bp3-icon-large,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:not(:hover):not(:focus)
            .bp3-icon,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:not(:hover):not(:focus)
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:not(:hover):not(:focus)
            .bp3-icon-large {
            color: #5c7080;
          }
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:disabled,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:disabled {
            color: rgba(92, 112, 128, 0.6) !important;
          }
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:disabled
            .bp3-icon,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:disabled
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-button.bp3-minimal:disabled
            .bp3-icon-large,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:disabled
            .bp3-icon,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:disabled
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-input-group
            .bp3-input:not(:focus)
            + .bp3-input-action
            .bp3-button.bp3-minimal:disabled
            .bp3-icon-large {
            color: rgba(92, 112, 128, 0.6) !important;
          }
          .use-notebook-styles .bp3-input-group.bp3-disabled {
            cursor: not-allowed;
          }
          .use-notebook-styles .bp3-input-group.bp3-disabled .bp3-icon {
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input-group.bp3-large .bp3-button {
            min-width: 30px;
            min-height: 30px;
            margin: 5px;
          }
          .use-notebook-styles .bp3-input-group.bp3-large > .bp3-icon,
          .use-notebook-styles
            .bp3-input-group.bp3-large
            .bp3-input-action
            > .bp3-spinner {
            margin: 12px;
          }
          .use-notebook-styles .bp3-input-group.bp3-large .bp3-input {
            height: 40px;
            line-height: 40px;
            font-size: 16px;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-large
            .bp3-input[type="search"],
          .use-notebook-styles .bp3-input-group.bp3-large .bp3-input.bp3-round {
            padding: 0 15px;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-large
            .bp3-input:not(:first-child) {
            padding-left: 40px;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-large
            .bp3-input:not(:last-child) {
            padding-right: 40px;
          }
          .use-notebook-styles .bp3-input-group.bp3-small .bp3-button {
            min-width: 20px;
            min-height: 20px;
            margin: 2px;
          }
          .use-notebook-styles .bp3-input-group.bp3-small .bp3-tag {
            min-width: 20px;
            min-height: 20px;
            margin: 2px;
          }
          .use-notebook-styles .bp3-input-group.bp3-small > .bp3-icon,
          .use-notebook-styles
            .bp3-input-group.bp3-small
            .bp3-input-action
            > .bp3-spinner {
            margin: 4px;
          }
          .use-notebook-styles .bp3-input-group.bp3-small .bp3-input {
            height: 24px;
            padding-right: 8px;
            padding-left: 8px;
            line-height: 24px;
            font-size: 12px;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-small
            .bp3-input[type="search"],
          .use-notebook-styles .bp3-input-group.bp3-small .bp3-input.bp3-round {
            padding: 0 12px;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-small
            .bp3-input:not(:first-child) {
            padding-left: 24px;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-small
            .bp3-input:not(:last-child) {
            padding-right: 24px;
          }
          .use-notebook-styles .bp3-input-group.bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            width: 100%;
          }
          .use-notebook-styles .bp3-input-group.bp3-round .bp3-button,
          .use-notebook-styles .bp3-input-group.bp3-round .bp3-input,
          .use-notebook-styles .bp3-input-group.bp3-round .bp3-tag {
            border-radius: 30px;
          }
          .use-notebook-styles .bp3-dark .bp3-input-group .bp3-icon {
            color: #a7b6c2;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input-group.bp3-disabled
            .bp3-icon {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-primary .bp3-input {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-primary
            .bp3-input:focus {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-primary
            .bp3-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #137cbd;
            box-shadow: inset 0 0 0 1px #137cbd;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-primary
            .bp3-input:disabled,
          .use-notebook-styles
            .bp3-input-group.bp3-intent-primary
            .bp3-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-primary > .bp3-icon {
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input-group.bp3-intent-primary
            > .bp3-icon {
            color: #48aff0;
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-success .bp3-input {
            -webkit-box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-success
            .bp3-input:focus {
            -webkit-box-shadow: 0 0 0 1px #0f9960,
              0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-success
            .bp3-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #0f9960;
            box-shadow: inset 0 0 0 1px #0f9960;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-success
            .bp3-input:disabled,
          .use-notebook-styles
            .bp3-input-group.bp3-intent-success
            .bp3-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-success > .bp3-icon {
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input-group.bp3-intent-success
            > .bp3-icon {
            color: #3dcc91;
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-warning .bp3-input {
            -webkit-box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-warning
            .bp3-input:focus {
            -webkit-box-shadow: 0 0 0 1px #d9822b,
              0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-warning
            .bp3-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #d9822b;
            box-shadow: inset 0 0 0 1px #d9822b;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-warning
            .bp3-input:disabled,
          .use-notebook-styles
            .bp3-input-group.bp3-intent-warning
            .bp3-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-warning > .bp3-icon {
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input-group.bp3-intent-warning
            > .bp3-icon {
            color: #ffb366;
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-danger .bp3-input {
            -webkit-box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-danger
            .bp3-input:focus {
            -webkit-box-shadow: 0 0 0 1px #db3737,
              0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-danger
            .bp3-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #db3737;
            box-shadow: inset 0 0 0 1px #db3737;
          }
          .use-notebook-styles
            .bp3-input-group.bp3-intent-danger
            .bp3-input:disabled,
          .use-notebook-styles
            .bp3-input-group.bp3-intent-danger
            .bp3-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input-group.bp3-intent-danger > .bp3-icon {
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input-group.bp3-intent-danger
            > .bp3-icon {
            color: #ff7373;
          }
          .use-notebook-styles .bp3-input {
            outline: none;
            border: none;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            background: #ffffff;
            height: 30px;
            padding: 0 10px;
            vertical-align: middle;
            line-height: 30px;
            color: #182026;
            font-size: 14px;
            font-weight: 400;
            -webkit-transition: -webkit-box-shadow 100ms
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
          .use-notebook-styles .bp3-input::-webkit-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input::-moz-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input:-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input::-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input::placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input:focus,
          .use-notebook-styles .bp3-input.bp3-active {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input[type="search"],
          .use-notebook-styles .bp3-input.bp3-round {
            border-radius: 30px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding-left: 10px;
          }
          .use-notebook-styles .bp3-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles .bp3-input:disabled,
          .use-notebook-styles .bp3-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(206, 217, 224, 0.5);
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
            resize: none;
          }
          .use-notebook-styles .bp3-input.bp3-large {
            height: 40px;
            line-height: 40px;
            font-size: 16px;
          }
          .use-notebook-styles .bp3-input.bp3-large[type="search"],
          .use-notebook-styles .bp3-input.bp3-large.bp3-round {
            padding: 0 15px;
          }
          .use-notebook-styles .bp3-input.bp3-small {
            height: 24px;
            padding-right: 8px;
            padding-left: 8px;
            line-height: 24px;
            font-size: 12px;
          }
          .use-notebook-styles .bp3-input.bp3-small[type="search"],
          .use-notebook-styles .bp3-input.bp3-small.bp3-round {
            padding: 0 12px;
          }
          .use-notebook-styles .bp3-input.bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            width: 100%;
          }
          .use-notebook-styles .bp3-dark .bp3-input {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            background: rgba(16, 22, 26, 0.3);
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-input::-webkit-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-input::-moz-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-input:-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-input::-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-input::placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-input:focus {
            -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-input:disabled,
          .use-notebook-styles .bp3-dark .bp3-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(57, 75, 89, 0.5);
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-input.bp3-intent-primary {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-primary:focus {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-primary[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #137cbd;
            box-shadow: inset 0 0 0 1px #137cbd;
          }
          .use-notebook-styles .bp3-input.bp3-intent-primary:disabled,
          .use-notebook-styles .bp3-input.bp3-intent-primary.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-primary {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-primary:focus {
            -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-primary[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #137cbd;
            box-shadow: inset 0 0 0 1px #137cbd;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-primary.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input.bp3-intent-success {
            -webkit-box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-success:focus {
            -webkit-box-shadow: 0 0 0 1px #0f9960,
              0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-success[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #0f9960;
            box-shadow: inset 0 0 0 1px #0f9960;
          }
          .use-notebook-styles .bp3-input.bp3-intent-success:disabled,
          .use-notebook-styles .bp3-input.bp3-intent-success.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-success {
            -webkit-box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0),
              inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0),
              inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-success:focus {
            -webkit-box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960,
              0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960,
              0 0 0 3px rgba(15, 153, 96, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-success[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #0f9960;
            box-shadow: inset 0 0 0 1px #0f9960;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-success.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input.bp3-intent-warning {
            -webkit-box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-warning:focus {
            -webkit-box-shadow: 0 0 0 1px #d9822b,
              0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-warning[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #d9822b;
            box-shadow: inset 0 0 0 1px #d9822b;
          }
          .use-notebook-styles .bp3-input.bp3-intent-warning:disabled,
          .use-notebook-styles .bp3-input.bp3-intent-warning.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-warning {
            -webkit-box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0),
              inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0),
              inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-warning:focus {
            -webkit-box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b,
              0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b,
              0 0 0 3px rgba(217, 130, 43, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-warning[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #d9822b;
            box-shadow: inset 0 0 0 1px #d9822b;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-warning.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input.bp3-intent-danger {
            -webkit-box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-danger:focus {
            -webkit-box-shadow: 0 0 0 1px #db3737,
              0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-input.bp3-intent-danger[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #db3737;
            box-shadow: inset 0 0 0 1px #db3737;
          }
          .use-notebook-styles .bp3-input.bp3-intent-danger:disabled,
          .use-notebook-styles .bp3-input.bp3-intent-danger.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-danger {
            -webkit-box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0),
              inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0),
              inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-danger:focus {
            -webkit-box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737,
              0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737,
              0 0 0 3px rgba(219, 55, 55, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-danger[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px #db3737;
            box-shadow: inset 0 0 0 1px #db3737;
          }
          .use-notebook-styles .bp3-dark .bp3-input.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-input.bp3-intent-danger.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-input::-ms-clear {
            display: none;
          }
          .use-notebook-styles textarea.bp3-input {
            max-width: 100%;
            padding: 10px;
          }
          .use-notebook-styles textarea.bp3-input,
          .use-notebook-styles textarea.bp3-input.bp3-large,
          .use-notebook-styles textarea.bp3-input.bp3-small {
            height: auto;
            line-height: inherit;
          }
          .use-notebook-styles textarea.bp3-input.bp3-small {
            padding: 8px;
          }
          .use-notebook-styles .bp3-dark textarea.bp3-input {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            background: rgba(16, 22, 26, 0.3);
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            textarea.bp3-input::-webkit-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark textarea.bp3-input::-moz-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            textarea.bp3-input:-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            textarea.bp3-input::-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark textarea.bp3-input::placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark textarea.bp3-input:focus {
            -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark textarea.bp3-input[readonly] {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark textarea.bp3-input:disabled,
          .use-notebook-styles .bp3-dark textarea.bp3-input.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(57, 75, 89, 0.5);
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles label.bp3-label {
            display: block;
            margin-top: 0;
            margin-bottom: 15px;
          }
          .use-notebook-styles label.bp3-label .bp3-html-select,
          .use-notebook-styles label.bp3-label .bp3-input,
          .use-notebook-styles label.bp3-label .bp3-select,
          .use-notebook-styles label.bp3-label .bp3-slider,
          .use-notebook-styles label.bp3-label .bp3-popover-wrapper {
            display: block;
            margin-top: 5px;
            text-transform: none;
          }
          .use-notebook-styles label.bp3-label .bp3-button-group {
            margin-top: 5px;
          }
          .use-notebook-styles label.bp3-label .bp3-select select,
          .use-notebook-styles label.bp3-label .bp3-html-select select {
            width: 100%;
            vertical-align: top;
            font-weight: 400;
          }
          .use-notebook-styles label.bp3-label.bp3-disabled,
          .use-notebook-styles label.bp3-label.bp3-disabled .bp3-text-muted {
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles label.bp3-label.bp3-inline {
            line-height: 30px;
          }
          .use-notebook-styles label.bp3-label.bp3-inline .bp3-html-select,
          .use-notebook-styles label.bp3-label.bp3-inline .bp3-input,
          .use-notebook-styles label.bp3-label.bp3-inline .bp3-input-group,
          .use-notebook-styles label.bp3-label.bp3-inline .bp3-select,
          .use-notebook-styles label.bp3-label.bp3-inline .bp3-popover-wrapper {
            display: inline-block;
            margin: 0 0 0 5px;
            vertical-align: top;
          }
          .use-notebook-styles label.bp3-label.bp3-inline .bp3-button-group {
            margin: 0 0 0 5px;
          }
          .use-notebook-styles
            label.bp3-label.bp3-inline
            .bp3-input-group
            .bp3-input {
            margin-left: 0;
          }
          .use-notebook-styles label.bp3-label.bp3-inline.bp3-large {
            line-height: 40px;
          }
          .use-notebook-styles
            label.bp3-label:not(.bp3-inline)
            .bp3-popover-target {
            display: block;
          }
          .use-notebook-styles .bp3-dark label.bp3-label {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark label.bp3-label.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            label.bp3-label.bp3-disabled
            .bp3-text-muted {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-numeric-input
            .bp3-button-group.bp3-vertical
            > .bp3-button {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 14px;
            flex: 1 1 14px;
            width: 30px;
            min-height: 0;
            padding: 0;
          }
          .use-notebook-styles
            .bp3-numeric-input
            .bp3-button-group.bp3-vertical
            > .bp3-button:first-child {
            border-radius: 0 3px 0 0;
          }
          .use-notebook-styles
            .bp3-numeric-input
            .bp3-button-group.bp3-vertical
            > .bp3-button:last-child {
            border-radius: 0 0 3px 0;
          }
          .use-notebook-styles
            .bp3-numeric-input
            .bp3-button-group.bp3-vertical:first-child
            > .bp3-button:first-child {
            border-radius: 3px 0 0 0;
          }
          .use-notebook-styles
            .bp3-numeric-input
            .bp3-button-group.bp3-vertical:first-child
            > .bp3-button:last-child {
            border-radius: 0 0 0 3px;
          }
          .use-notebook-styles
            .bp3-numeric-input.bp3-large
            .bp3-button-group.bp3-vertical
            > .bp3-button {
            width: 40px;
          }
          .use-notebook-styles form {
            display: block;
          }
          .use-notebook-styles .bp3-html-select select,
          .use-notebook-styles .bp3-select select {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            padding: 5px 10px;
            vertical-align: middle;
            text-align: left;
            font-size: 14px;
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-color: #f5f8fa;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.8)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            );
            color: #182026;
            border-radius: 3px;
            width: 100%;
            height: 30px;
            padding: 0 25px 0 10px;
            -moz-appearance: none;
            -webkit-appearance: none;
          }
          .use-notebook-styles .bp3-html-select select > *,
          .use-notebook-styles .bp3-select select > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-html-select select > .bp3-fill,
          .use-notebook-styles .bp3-select select > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-html-select select::before,
          .use-notebook-styles .bp3-select select::before,
          .use-notebook-styles .bp3-html-select select > *,
          .use-notebook-styles .bp3-select select > * {
            margin-right: 7px;
          }
          .use-notebook-styles .bp3-html-select select:empty::before,
          .use-notebook-styles .bp3-select select:empty::before,
          .use-notebook-styles .bp3-html-select select > :last-child,
          .use-notebook-styles .bp3-select select > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-html-select select:hover,
          .use-notebook-styles .bp3-select select:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-clip: padding-box;
            background-color: #ebf1f5;
          }
          .use-notebook-styles .bp3-html-select select:active,
          .use-notebook-styles .bp3-select select:active,
          .use-notebook-styles .bp3-html-select select.bp3-active,
          .use-notebook-styles .bp3-select select.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #d8e1e8;
            background-image: none;
          }
          .use-notebook-styles .bp3-html-select select:disabled,
          .use-notebook-styles .bp3-select select:disabled,
          .use-notebook-styles .bp3-html-select select.bp3-disabled,
          .use-notebook-styles .bp3-select select.bp3-disabled {
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(206, 217, 224, 0.5);
            background-image: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-html-select select:disabled.bp3-active,
          .use-notebook-styles .bp3-select select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select
            select:disabled.bp3-active:hover,
          .use-notebook-styles .bp3-select select:disabled.bp3-active:hover,
          .use-notebook-styles .bp3-html-select select.bp3-disabled.bp3-active,
          .use-notebook-styles .bp3-select select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select
            select.bp3-disabled.bp3-active:hover,
          .use-notebook-styles
            .bp3-select
            select.bp3-disabled.bp3-active:hover {
            background: rgba(206, 217, 224, 0.7);
          }
          .use-notebook-styles .bp3-html-select.bp3-minimal select,
          .use-notebook-styles .bp3-select.bp3-minimal select {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
          }
          .use-notebook-styles .bp3-html-select.bp3-minimal select:hover,
          .use-notebook-styles .bp3-select.bp3-minimal select:hover {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(167, 182, 194, 0.3);
            text-decoration: none;
            color: #182026;
          }
          .use-notebook-styles .bp3-html-select.bp3-minimal select:active,
          .use-notebook-styles .bp3-select.bp3-minimal select:active,
          .use-notebook-styles .bp3-html-select.bp3-minimal select.bp3-active,
          .use-notebook-styles .bp3-select.bp3-minimal select.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(115, 134, 148, 0.3);
            color: #182026;
          }
          .use-notebook-styles .bp3-html-select.bp3-minimal select:disabled,
          .use-notebook-styles .bp3-select.bp3-minimal select:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select:disabled:hover,
          .use-notebook-styles .bp3-select.bp3-minimal select:disabled:hover,
          .use-notebook-styles .bp3-html-select.bp3-minimal select.bp3-disabled,
          .use-notebook-styles .bp3-select.bp3-minimal select.bp3-disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-disabled:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-disabled:hover {
            background: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-disabled:hover.bp3-active {
            background: rgba(115, 134, 148, 0.3);
          }
          .use-notebook-styles .bp3-dark .bp3-html-select.bp3-minimal select,
          .use-notebook-styles .bp3-html-select.bp3-minimal .bp3-dark select,
          .use-notebook-styles .bp3-dark .bp3-select.bp3-minimal select,
          .use-notebook-styles .bp3-select.bp3-minimal .bp3-dark select {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: inherit;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:hover,
          .use-notebook-styles .bp3-dark .bp3-select.bp3-minimal select:hover,
          .use-notebook-styles .bp3-select.bp3-minimal .bp3-dark select:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:active,
          .use-notebook-styles .bp3-dark .bp3-select.bp3-minimal select:active,
          .use-notebook-styles .bp3-select.bp3-minimal .bp3-dark select:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:hover,
          .use-notebook-styles .bp3-dark .bp3-select.bp3-minimal select:hover,
          .use-notebook-styles .bp3-select.bp3-minimal .bp3-dark select:hover {
            background: rgba(138, 155, 168, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:active,
          .use-notebook-styles .bp3-dark .bp3-select.bp3-minimal select:active,
          .use-notebook-styles .bp3-select.bp3-minimal .bp3-dark select:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-active {
            background: rgba(138, 155, 168, 0.3);
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:disabled:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:disabled:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select:disabled:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select:disabled:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-disabled:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-disabled:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled:hover {
            background: none;
            cursor: not-allowed;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select:disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-disabled:hover.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-disabled:hover.bp3-active {
            background: rgba(138, 155, 168, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary {
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:hover {
            background: rgba(19, 124, 189, 0.15);
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary.bp3-active {
            background: rgba(19, 124, 189, 0.3);
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled {
            background: none;
            color: rgba(16, 107, 163, 0.5);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled.bp3-active {
            background: rgba(19, 124, 189, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary
            .bp3-button-spinner
            .bp3-spinner-head,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-primary
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary {
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:hover {
            background: rgba(19, 124, 189, 0.2);
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary.bp3-active {
            background: rgba(19, 124, 189, 0.3);
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary.bp3-disabled {
            background: none;
            color: rgba(72, 175, 240, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-primary.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-primary.bp3-disabled.bp3-active {
            background: rgba(19, 124, 189, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success {
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success:hover {
            background: rgba(15, 153, 96, 0.15);
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success.bp3-active {
            background: rgba(15, 153, 96, 0.3);
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled {
            background: none;
            color: rgba(13, 128, 80, 0.5);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled.bp3-active {
            background: rgba(15, 153, 96, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success
            .bp3-button-spinner
            .bp3-spinner-head,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-success
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #0d8050;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success {
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:hover {
            background: rgba(15, 153, 96, 0.2);
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success.bp3-active {
            background: rgba(15, 153, 96, 0.3);
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success.bp3-disabled {
            background: none;
            color: rgba(61, 204, 145, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-success.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-success.bp3-disabled.bp3-active {
            background: rgba(15, 153, 96, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning {
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:hover {
            background: rgba(217, 130, 43, 0.15);
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning.bp3-active {
            background: rgba(217, 130, 43, 0.3);
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled {
            background: none;
            color: rgba(191, 115, 38, 0.5);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled.bp3-active {
            background: rgba(217, 130, 43, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning
            .bp3-button-spinner
            .bp3-spinner-head,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-warning
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #bf7326;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning {
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:hover {
            background: rgba(217, 130, 43, 0.2);
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning.bp3-active {
            background: rgba(217, 130, 43, 0.3);
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning.bp3-disabled {
            background: none;
            color: rgba(255, 179, 102, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-warning.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-warning.bp3-disabled.bp3-active {
            background: rgba(217, 130, 43, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger {
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger.bp3-active {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:hover {
            background: rgba(219, 55, 55, 0.15);
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger.bp3-active {
            background: rgba(219, 55, 55, 0.3);
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled {
            background: none;
            color: rgba(194, 48, 48, 0.5);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled.bp3-active {
            background: rgba(219, 55, 55, 0.3);
          }
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger
            .bp3-button-spinner
            .bp3-spinner-head,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            select.bp3-intent-danger
            .bp3-button-spinner
            .bp3-spinner-head {
            stroke: #c23030;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger {
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:hover {
            background: rgba(219, 55, 55, 0.2);
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger.bp3-active {
            background: rgba(219, 55, 55, 0.3);
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger.bp3-disabled,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger.bp3-disabled {
            background: none;
            color: rgba(255, 115, 115, 0.5);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-html-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select.bp3-minimal
            select.bp3-intent-danger.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-select.bp3-minimal
            .bp3-dark
            select.bp3-intent-danger.bp3-disabled.bp3-active {
            background: rgba(219, 55, 55, 0.3);
          }
          .use-notebook-styles .bp3-html-select.bp3-large select,
          .use-notebook-styles .bp3-select.bp3-large select {
            height: 40px;
            padding-right: 35px;
            font-size: 16px;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select select,
          .use-notebook-styles .bp3-dark .bp3-select select {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #394b59;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.05)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0)
            );
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select select:hover,
          .use-notebook-styles .bp3-dark .bp3-select select:hover,
          .use-notebook-styles .bp3-dark .bp3-html-select select:active,
          .use-notebook-styles .bp3-dark .bp3-select select:active,
          .use-notebook-styles .bp3-dark .bp3-html-select select.bp3-active,
          .use-notebook-styles .bp3-dark .bp3-select select.bp3-active {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select select:hover,
          .use-notebook-styles .bp3-dark .bp3-select select:hover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #30404d;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select select:active,
          .use-notebook-styles .bp3-dark .bp3-select select:active,
          .use-notebook-styles .bp3-dark .bp3-html-select select.bp3-active,
          .use-notebook-styles .bp3-dark .bp3-select select.bp3-active {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #202b33;
            background-image: none;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select select:disabled,
          .use-notebook-styles .bp3-dark .bp3-select select:disabled,
          .use-notebook-styles .bp3-dark .bp3-html-select select.bp3-disabled,
          .use-notebook-styles .bp3-dark .bp3-select select.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(57, 75, 89, 0.5);
            background-image: none;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select
            select:disabled.bp3-active,
          .use-notebook-styles .bp3-dark .bp3-select select:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select
            select.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-select
            select.bp3-disabled.bp3-active {
            background: rgba(57, 75, 89, 0.7);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-html-select
            select
            .bp3-button-spinner
            .bp3-spinner-head,
          .use-notebook-styles
            .bp3-dark
            .bp3-select
            select
            .bp3-button-spinner
            .bp3-spinner-head {
            background: rgba(16, 22, 26, 0.5);
            stroke: #8a9ba8;
          }
          .use-notebook-styles .bp3-html-select select:disabled,
          .use-notebook-styles .bp3-select select:disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(206, 217, 224, 0.5);
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-html-select .bp3-icon,
          .use-notebook-styles .bp3-select .bp3-icon,
          .use-notebook-styles .bp3-select::after {
            position: absolute;
            top: 7px;
            right: 7px;
            color: #5c7080;
            pointer-events: none;
          }
          .use-notebook-styles .bp3-html-select .bp3-disabled.bp3-icon,
          .use-notebook-styles .bp3-select .bp3-disabled.bp3-icon,
          .use-notebook-styles .bp3-disabled.bp3-select::after {
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-html-select,
          .use-notebook-styles .bp3-select {
            display: inline-block;
            position: relative;
            vertical-align: middle;
            letter-spacing: normal;
          }
          .use-notebook-styles .bp3-html-select select::-ms-expand,
          .use-notebook-styles .bp3-select select::-ms-expand {
            display: none;
          }
          .use-notebook-styles .bp3-html-select .bp3-icon,
          .use-notebook-styles .bp3-select .bp3-icon {
            color: #5c7080;
          }
          .use-notebook-styles .bp3-html-select .bp3-icon:hover,
          .use-notebook-styles .bp3-select .bp3-icon:hover {
            color: #182026;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select .bp3-icon,
          .use-notebook-styles .bp3-dark .bp3-select .bp3-icon {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select .bp3-icon:hover,
          .use-notebook-styles .bp3-dark .bp3-select .bp3-icon:hover {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-html-select.bp3-large::after,
          .use-notebook-styles .bp3-html-select.bp3-large .bp3-icon,
          .use-notebook-styles .bp3-select.bp3-large::after,
          .use-notebook-styles .bp3-select.bp3-large .bp3-icon {
            top: 12px;
            right: 12px;
          }
          .use-notebook-styles .bp3-html-select.bp3-fill,
          .use-notebook-styles .bp3-html-select.bp3-fill select,
          .use-notebook-styles .bp3-select.bp3-fill,
          .use-notebook-styles .bp3-select.bp3-fill select {
            width: 100%;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select option,
          .use-notebook-styles .bp3-dark .bp3-select option {
            background-color: #30404d;
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-html-select::after,
          .use-notebook-styles .bp3-dark .bp3-select::after {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-select::after {
            line-height: 1;
            font-family: "Icons16", sans-serif;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            content: "";
          }
          .use-notebook-styles .bp3-running-text table,
          .use-notebook-styles table.bp3-html-table {
            border-spacing: 0;
            font-size: 14px;
          }
          .use-notebook-styles .bp3-running-text table th,
          .use-notebook-styles table.bp3-html-table th,
          .use-notebook-styles .bp3-running-text table td,
          .use-notebook-styles table.bp3-html-table td {
            padding: 11px;
            vertical-align: top;
            text-align: left;
          }
          .use-notebook-styles .bp3-running-text table th,
          .use-notebook-styles table.bp3-html-table th {
            color: #182026;
            font-weight: 600;
          }
          .use-notebook-styles .bp3-running-text table td,
          .use-notebook-styles table.bp3-html-table td {
            color: #182026;
          }
          .use-notebook-styles .bp3-running-text table tbody tr:first-child th,
          .use-notebook-styles table.bp3-html-table tbody tr:first-child th,
          .use-notebook-styles .bp3-running-text table tbody tr:first-child td,
          .use-notebook-styles table.bp3-html-table tbody tr:first-child td {
            -webkit-box-shadow: inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow: inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles .bp3-dark .bp3-running-text table th,
          .use-notebook-styles .bp3-running-text .bp3-dark table th,
          .use-notebook-styles .bp3-dark table.bp3-html-table th {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-running-text table td,
          .use-notebook-styles .bp3-running-text .bp3-dark table td,
          .use-notebook-styles .bp3-dark table.bp3-html-table td {
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-running-text
            table
            tbody
            tr:first-child
            th,
          .use-notebook-styles
            .bp3-running-text
            .bp3-dark
            table
            tbody
            tr:first-child
            th,
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table
            tbody
            tr:first-child
            th,
          .use-notebook-styles
            .bp3-dark
            .bp3-running-text
            table
            tbody
            tr:first-child
            td,
          .use-notebook-styles
            .bp3-running-text
            .bp3-dark
            table
            tbody
            tr:first-child
            td,
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table
            tbody
            tr:first-child
            td {
            -webkit-box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles table.bp3-html-table.bp3-html-table-condensed th,
          .use-notebook-styles table.bp3-html-table.bp3-html-table-condensed td,
          .use-notebook-styles table.bp3-html-table.bp3-small th,
          .use-notebook-styles table.bp3-html-table.bp3-small td {
            padding-top: 6px;
            padding-bottom: 6px;
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-html-table-striped
            tbody
            tr:nth-child(odd)
            td {
            background: rgba(191, 204, 214, 0.15);
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-html-table-bordered
            th:not(:first-child) {
            -webkit-box-shadow: inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
            box-shadow: inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-html-table-bordered
            tbody
            tr
            td {
            -webkit-box-shadow: inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow: inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-html-table-bordered
            tbody
            tr
            td:not(:first-child) {
            -webkit-box-shadow: inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow: inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped
            tbody
            tr:not(:first-child)
            td {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped
            tbody
            tr:not(:first-child)
            td:not(:first-child) {
            -webkit-box-shadow: inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
            box-shadow: inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-interactive
            tbody
            tr:hover
            td {
            background-color: rgba(191, 204, 214, 0.3);
            cursor: pointer;
          }
          .use-notebook-styles
            table.bp3-html-table.bp3-interactive
            tbody
            tr:active
            td {
            background-color: rgba(191, 204, 214, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-html-table-striped
            tbody
            tr:nth-child(odd)
            td {
            background: rgba(92, 112, 128, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-html-table-bordered
            th:not(:first-child) {
            -webkit-box-shadow: inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
            box-shadow: inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-html-table-bordered
            tbody
            tr
            td {
            -webkit-box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-html-table-bordered
            tbody
            tr
            td:not(:first-child) {
            -webkit-box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped
            tbody
            tr:not(:first-child)
            td {
            -webkit-box-shadow: inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
            box-shadow: inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped
            tbody
            tr:not(:first-child)
            td:first-child {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-interactive
            tbody
            tr:hover
            td {
            background-color: rgba(92, 112, 128, 0.3);
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-dark
            table.bp3-html-table.bp3-interactive
            tbody
            tr:active
            td {
            background-color: rgba(92, 112, 128, 0.4);
          }
          .use-notebook-styles .bp3-key-combo {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .use-notebook-styles .bp3-key-combo > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-key-combo > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-key-combo::before,
          .use-notebook-styles .bp3-key-combo > * {
            margin-right: 5px;
          }
          .use-notebook-styles .bp3-key-combo:empty::before,
          .use-notebook-styles .bp3-key-combo > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-hotkey-dialog {
            top: 40px;
            padding-bottom: 0;
          }
          .use-notebook-styles .bp3-hotkey-dialog .bp3-dialog-body {
            margin: 0;
            padding: 0;
          }
          .use-notebook-styles .bp3-hotkey-dialog .bp3-hotkey-label {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
          }
          .use-notebook-styles .bp3-hotkey-column {
            margin: auto;
            max-height: 80vh;
            overflow-y: auto;
            padding: 30px;
          }
          .use-notebook-styles .bp3-hotkey-column .bp3-heading {
            margin-bottom: 20px;
          }
          .use-notebook-styles
            .bp3-hotkey-column
            .bp3-heading:not(:first-child) {
            margin-top: 40px;
          }
          .use-notebook-styles .bp3-hotkey {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-right: 0;
            margin-left: 0;
          }
          .use-notebook-styles .bp3-hotkey:not(:last-child) {
            margin-bottom: 10px;
          }
          .use-notebook-styles .bp3-icon {
            display: inline-block;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            vertical-align: text-bottom;
          }
          .use-notebook-styles .bp3-icon:not(:empty)::before {
            content: "" !important;
            content: unset !important;
          }
          .use-notebook-styles .bp3-icon > svg {
            display: block;
          }
          .use-notebook-styles .bp3-icon > svg:not([fill]) {
            fill: currentColor;
          }
          .use-notebook-styles .bp3-icon.bp3-intent-primary,
          .use-notebook-styles .bp3-icon-standard.bp3-intent-primary,
          .use-notebook-styles .bp3-icon-large.bp3-intent-primary {
            color: #106ba3;
          }
          .use-notebook-styles .bp3-dark .bp3-icon.bp3-intent-primary,
          .use-notebook-styles .bp3-dark .bp3-icon-standard.bp3-intent-primary,
          .use-notebook-styles .bp3-dark .bp3-icon-large.bp3-intent-primary {
            color: #48aff0;
          }
          .use-notebook-styles .bp3-icon.bp3-intent-success,
          .use-notebook-styles .bp3-icon-standard.bp3-intent-success,
          .use-notebook-styles .bp3-icon-large.bp3-intent-success {
            color: #0d8050;
          }
          .use-notebook-styles .bp3-dark .bp3-icon.bp3-intent-success,
          .use-notebook-styles .bp3-dark .bp3-icon-standard.bp3-intent-success,
          .use-notebook-styles .bp3-dark .bp3-icon-large.bp3-intent-success {
            color: #3dcc91;
          }
          .use-notebook-styles .bp3-icon.bp3-intent-warning,
          .use-notebook-styles .bp3-icon-standard.bp3-intent-warning,
          .use-notebook-styles .bp3-icon-large.bp3-intent-warning {
            color: #bf7326;
          }
          .use-notebook-styles .bp3-dark .bp3-icon.bp3-intent-warning,
          .use-notebook-styles .bp3-dark .bp3-icon-standard.bp3-intent-warning,
          .use-notebook-styles .bp3-dark .bp3-icon-large.bp3-intent-warning {
            color: #ffb366;
          }
          .use-notebook-styles .bp3-icon.bp3-intent-danger,
          .use-notebook-styles .bp3-icon-standard.bp3-intent-danger,
          .use-notebook-styles .bp3-icon-large.bp3-intent-danger {
            color: #c23030;
          }
          .use-notebook-styles .bp3-dark .bp3-icon.bp3-intent-danger,
          .use-notebook-styles .bp3-dark .bp3-icon-standard.bp3-intent-danger,
          .use-notebook-styles .bp3-dark .bp3-icon-large.bp3-intent-danger {
            color: #ff7373;
          }
          .use-notebook-styles span.bp3-icon-standard {
            line-height: 1;
            font-family: "Icons16", sans-serif;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            display: inline-block;
          }
          .use-notebook-styles span.bp3-icon-large {
            line-height: 1;
            font-family: "Icons20", sans-serif;
            font-size: 20px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            display: inline-block;
          }
          .use-notebook-styles span.bp3-icon:empty {
            line-height: 1;
            font-family: "Icons20";
            font-size: inherit;
            font-weight: 400;
            font-style: normal;
          }
          .use-notebook-styles span.bp3-icon:empty::before {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }
          .use-notebook-styles .bp3-icon-add::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-add-column-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-add-column-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-add-row-bottom::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-add-row-top::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-add-to-artifact::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-add-to-folder::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-airplane::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-align-center::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-align-justify::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-align-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-align-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-alignment-bottom::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-alignment-horizontal-center::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-alignment-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-alignment-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-alignment-top::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-alignment-vertical-center::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-annotation::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-application::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-applications::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-archive::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-arrow-bottom-left::before {
            content: "↙";
          }
          .use-notebook-styles .bp3-icon-arrow-bottom-right::before {
            content: "↘";
          }
          .use-notebook-styles .bp3-icon-arrow-down::before {
            content: "↓";
          }
          .use-notebook-styles .bp3-icon-arrow-left::before {
            content: "←";
          }
          .use-notebook-styles .bp3-icon-arrow-right::before {
            content: "→";
          }
          .use-notebook-styles .bp3-icon-arrow-top-left::before {
            content: "↖";
          }
          .use-notebook-styles .bp3-icon-arrow-top-right::before {
            content: "↗";
          }
          .use-notebook-styles .bp3-icon-arrow-up::before {
            content: "↑";
          }
          .use-notebook-styles .bp3-icon-arrows-horizontal::before {
            content: "↔";
          }
          .use-notebook-styles .bp3-icon-arrows-vertical::before {
            content: "↕";
          }
          .use-notebook-styles .bp3-icon-asterisk::before {
            content: "*";
          }
          .use-notebook-styles .bp3-icon-automatic-updates::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-badge::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-ban-circle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-bank-account::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-barcode::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-blank::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-blocked-person::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-bold::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-book::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-bookmark::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-box::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-briefcase::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-bring-data::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-build::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-calculator::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-calendar::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-camera::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-caret-down::before {
            content: "⌄";
          }
          .use-notebook-styles .bp3-icon-caret-left::before {
            content: "〈";
          }
          .use-notebook-styles .bp3-icon-caret-right::before {
            content: "〉";
          }
          .use-notebook-styles .bp3-icon-caret-up::before {
            content: "⌃";
          }
          .use-notebook-styles .bp3-icon-cell-tower::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-changes::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chat::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chevron-backward::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chevron-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chevron-forward::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chevron-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chevron-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-chevron-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-circle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-circle-arrow-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-circle-arrow-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-circle-arrow-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-circle-arrow-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-citation::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-clean::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-clipboard::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cloud::before {
            content: "☁";
          }
          .use-notebook-styles .bp3-icon-cloud-download::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cloud-upload::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-code::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-code-block::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cog::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-collapse-all::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-column-layout::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-comment::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-comparison::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-compass::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-compressed::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-confirm::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-console::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-contrast::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-control::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-credit-card::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cross::before {
            content: "✗";
          }
          .use-notebook-styles .bp3-icon-crown::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cube::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cube-add::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cube-remove::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-curved-range-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-cut::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-dashboard::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-data-lineage::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-database::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-delete::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-delta::before {
            content: "Δ";
          }
          .use-notebook-styles .bp3-icon-derive-column::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-desktop::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-diagram-tree::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-direction-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-direction-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-disable::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-document::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-document-open::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-document-share::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-dollar::before {
            content: "$";
          }
          .use-notebook-styles .bp3-icon-dot::before {
            content: "•";
          }
          .use-notebook-styles .bp3-icon-double-caret-horizontal::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-double-caret-vertical::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-double-chevron-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-double-chevron-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-double-chevron-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-double-chevron-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-doughnut-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-download::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-drag-handle-horizontal::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-drag-handle-vertical::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-draw::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-drive-time::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-duplicate::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-edit::before {
            content: "✎";
          }
          .use-notebook-styles .bp3-icon-eject::before {
            content: "⏏";
          }
          .use-notebook-styles .bp3-icon-endorsed::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-envelope::before {
            content: "✉";
          }
          .use-notebook-styles .bp3-icon-equals::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-eraser::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-error::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-euro::before {
            content: "€";
          }
          .use-notebook-styles .bp3-icon-exchange::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-exclude-row::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-expand-all::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-export::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-eye-off::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-eye-on::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-eye-open::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-fast-backward::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-fast-forward::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-feed::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-feed-subscribed::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-film::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-filter::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-filter-keep::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-filter-list::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-filter-open::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-filter-remove::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flag::before {
            content: "⚑";
          }
          .use-notebook-styles .bp3-icon-flame::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flash::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-floppy-disk::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flow-branch::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flow-end::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flow-linear::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flow-review::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flow-review-branch::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-flows::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-folder-close::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-folder-new::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-folder-open::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-folder-shared::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-folder-shared-open::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-follower::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-following::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-font::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-fork::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-form::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-full-circle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-full-stacked-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-fullscreen::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-function::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-gantt-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-geolocation::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-geosearch::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-git-branch::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-git-commit::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-git-merge::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-git-new-branch::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-git-pull::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-git-push::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-git-repo::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-glass::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-globe::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-globe-network::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-graph::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-graph-remove::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-greater-than::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-greater-than-or-equal-to::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-grid::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-grid-view::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-group-objects::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-grouped-bar-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-hand::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-hand-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-hand-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-hand-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-hand-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-header::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-header-one::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-header-two::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-headset::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-heart::before {
            content: "♥";
          }
          .use-notebook-styles .bp3-icon-heart-broken::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-heat-grid::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-heatmap::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-help::before {
            content: "?";
          }
          .use-notebook-styles .bp3-icon-helper-management::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-highlight::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-history::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-home::before {
            content: "⌂";
          }
          .use-notebook-styles .bp3-icon-horizontal-bar-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-horizontal-bar-chart-asc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-horizontal-bar-chart-desc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-horizontal-distribution::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-id-number::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-image-rotate-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-image-rotate-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-import::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-inbox::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-inbox-filtered::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-inbox-geo::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-inbox-search::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-inbox-update::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-info-sign::before {
            content: "ℹ";
          }
          .use-notebook-styles .bp3-icon-inheritance::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-inner-join::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-insert::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-intersection::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-ip-address::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-issue::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-issue-closed::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-issue-new::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-italic::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-join-table::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-backspace::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-command::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-control::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-delete::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-enter::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-escape::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-option::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-shift::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-key-tab::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-known-vehicle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-label::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layer::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layers::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-auto::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-balloon::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-circle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-grid::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-group-by::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-hierarchy::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-linear::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-skew-grid::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-layout-sorted-clusters::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-learning::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-left-join::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-less-than::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-less-than-or-equal-to::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-lifesaver::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-lightbulb::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-link::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-list::before {
            content: "☰";
          }
          .use-notebook-styles .bp3-icon-list-columns::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-list-detail-view::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-locate::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-lock::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-log-in::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-log-out::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-manual::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-manually-entered-data::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-map::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-map-create::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-map-marker::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-maximize::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-media::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-menu::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-menu-closed::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-menu-open::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-merge-columns::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-merge-links::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-minimize::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-minus::before {
            content: "−";
          }
          .use-notebook-styles .bp3-icon-mobile-phone::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-mobile-video::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-moon::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-more::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-mountain::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-move::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-mugshot::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-multi-select::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-music::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-drawing::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-grid-item::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-layer::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-layers::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-link::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-object::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-person::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-prescription::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-new-text-box::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-ninja::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-not-equal-to::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-notifications::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-notifications-updated::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-numbered-list::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-numerical::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-office::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-offline::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-oil-field::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-one-column::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-outdated::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-page-layout::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-panel-stats::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-panel-table::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-paperclip::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-paragraph::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-path::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-path-search::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-pause::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-people::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-percentage::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-person::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-phone::before {
            content: "☎";
          }
          .use-notebook-styles .bp3-icon-pie-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-pin::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-pivot::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-pivot-table::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-play::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-plus::before {
            content: "+";
          }
          .use-notebook-styles .bp3-icon-polygon-filter::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-power::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-predictive-analysis::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-prescription::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-presentation::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-print::before {
            content: "⎙";
          }
          .use-notebook-styles .bp3-icon-projects::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-properties::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-property::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-publish-function::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-pulse::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-random::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-record::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-redo::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-refresh::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-regression-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-remove::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-remove-column::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-remove-column-left::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-remove-column-right::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-remove-row-bottom::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-remove-row-top::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-repeat::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-reset::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-resolve::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-rig::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-right-join::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-ring::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-rotate-document::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-rotate-page::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-satellite::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-saved::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-scatter-plot::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-search::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-search-around::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-search-template::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-search-text::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-segmented-control::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-select::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-selection::before {
            content: "⦿";
          }
          .use-notebook-styles .bp3-icon-send-to::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-send-to-graph::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-send-to-map::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-series-add::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-series-configuration::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-series-derived::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-series-filtered::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-series-search::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-settings::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-share::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-shield::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-shop::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-shopping-cart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-signal-search::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sim-card::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-slash::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-small-cross::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-small-minus::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-small-plus::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-small-tick::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-snowflake::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-social-media::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sort::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sort-alphabetical::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sort-alphabetical-desc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sort-asc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sort-desc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sort-numerical::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-sort-numerical-desc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-split-columns::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-square::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-stacked-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-star::before {
            content: "★";
          }
          .use-notebook-styles .bp3-icon-star-empty::before {
            content: "☆";
          }
          .use-notebook-styles .bp3-icon-step-backward::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-step-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-step-forward::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-stop::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-stopwatch::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-strikethrough::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-style::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-swap-horizontal::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-swap-vertical::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-symbol-circle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-symbol-cross::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-symbol-diamond::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-symbol-square::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-symbol-triangle-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-symbol-triangle-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-tag::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-take-action::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-taxi::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-text-highlight::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-th::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-th-derived::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-th-disconnect::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-th-filtered::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-th-list::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-thumbs-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-thumbs-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-tick::before {
            content: "✓";
          }
          .use-notebook-styles .bp3-icon-tick-circle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-time::before {
            content: "⏲";
          }
          .use-notebook-styles .bp3-icon-timeline-area-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-timeline-bar-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-timeline-events::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-timeline-line-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-tint::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-torch::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-tractor::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-train::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-translate::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-trash::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-tree::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-trending-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-trending-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-truck::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-two-columns::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-unarchive::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-underline::before {
            content: "⎁";
          }
          .use-notebook-styles .bp3-icon-undo::before {
            content: "⎌";
          }
          .use-notebook-styles .bp3-icon-ungroup-objects::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-unknown-vehicle::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-unlock::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-unpin::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-unresolve::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-updated::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-upload::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-user::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-variable::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-vertical-bar-chart-asc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-vertical-bar-chart-desc::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-vertical-distribution::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-video::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-volume-down::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-volume-off::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-volume-up::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-walk::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-warning-sign::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-waterfall-chart::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-widget::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-widget-button::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-widget-footer::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-widget-header::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-wrench::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-zoom-in::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-zoom-out::before {
            content: "";
          }
          .use-notebook-styles .bp3-icon-zoom-to-fit::before {
            content: "";
          }
          .use-notebook-styles .bp3-submenu > .bp3-popover-wrapper {
            display: block;
          }
          .use-notebook-styles .bp3-submenu .bp3-popover-target {
            display: block;
          }
          .use-notebook-styles .bp3-submenu.bp3-popover {
            -webkit-box-shadow: none;
            box-shadow: none;
            padding: 0 5px;
          }
          .use-notebook-styles .bp3-submenu.bp3-popover > .bp3-popover-content {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-dark .bp3-submenu.bp3-popover,
          .use-notebook-styles .bp3-submenu.bp3-popover.bp3-dark {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu.bp3-popover
            > .bp3-popover-content,
          .use-notebook-styles
            .bp3-submenu.bp3-popover.bp3-dark
            > .bp3-popover-content {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-menu {
            margin: 0;
            border-radius: 3px;
            background: #ffffff;
            min-width: 180px;
            padding: 5px;
            list-style: none;
            text-align: left;
            color: #182026;
          }
          .use-notebook-styles .bp3-menu-divider {
            display: block;
            margin: 5px;
            border-top: 1px solid rgba(16, 22, 26, 0.15);
          }
          .use-notebook-styles .bp3-dark .bp3-menu-divider {
            border-top-color: rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles .bp3-menu-item {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            border-radius: 2px;
            padding: 5px 7px;
            text-decoration: none;
            line-height: 20px;
            color: inherit;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .bp3-menu-item > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-menu-item > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-menu-item::before,
          .use-notebook-styles .bp3-menu-item > * {
            margin-right: 7px;
          }
          .use-notebook-styles .bp3-menu-item:empty::before,
          .use-notebook-styles .bp3-menu-item > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-menu-item > .bp3-fill {
            word-break: break-word;
          }
          .use-notebook-styles .bp3-menu-item:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-menu-item {
            background-color: rgba(167, 182, 194, 0.3);
            cursor: pointer;
            text-decoration: none;
          }
          .use-notebook-styles .bp3-menu-item.bp3-disabled {
            background-color: inherit;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item {
            color: inherit;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-menu-item {
            background-color: rgba(138, 155, 168, 0.15);
            color: inherit;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-disabled {
            background-color: inherit;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary {
            color: #106ba3;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-primary
            .bp3-menu-item-label {
            color: #106ba3;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary.bp3-active {
            background-color: #137cbd;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:active {
            background-color: #106ba3;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:hover::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:hover::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-primary:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:active,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:active::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary:active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-primary:active
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-primary.bp3-active,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-primary.bp3-active::before,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-primary.bp3-active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-primary.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-success {
            color: #0d8050;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-success .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-success::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-success
            .bp3-menu-item-label {
            color: #0d8050;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success.bp3-active {
            background-color: #0f9960;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:active {
            background-color: #0d8050;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:hover::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:hover::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-success:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:active,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:active::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success:active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-success:active
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-success.bp3-active,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-success.bp3-active::before,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-success.bp3-active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-success.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning {
            color: #bf7326;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-warning
            .bp3-menu-item-label {
            color: #bf7326;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning.bp3-active {
            background-color: #d9822b;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:active {
            background-color: #bf7326;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:hover::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:hover::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-warning:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:active,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:active::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning:active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-warning:active
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-warning.bp3-active,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-warning.bp3-active::before,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-warning.bp3-active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-warning.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger {
            color: #c23030;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-danger
            .bp3-menu-item-label {
            color: #c23030;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger.bp3-active {
            background-color: #db3737;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:active {
            background-color: #c23030;
          }
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:hover::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:hover::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-danger:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:active,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:active::before,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger:active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-danger:active
            .bp3-menu-item-label,
          .use-notebook-styles .bp3-menu-item.bp3-intent-danger.bp3-active,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-danger.bp3-active::before,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-danger.bp3-active::after,
          .use-notebook-styles
            .bp3-menu-item.bp3-intent-danger.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-menu-item::before {
            line-height: 1;
            font-family: "Icons16", sans-serif;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            margin-right: 7px;
          }
          .use-notebook-styles .bp3-menu-item::before,
          .use-notebook-styles .bp3-menu-item > .bp3-icon {
            margin-top: 2px;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-menu-item .bp3-menu-item-label {
            color: #5c7080;
          }
          .use-notebook-styles .bp3-menu-item:hover,
          .use-notebook-styles
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-menu-item {
            color: inherit;
          }
          .use-notebook-styles .bp3-menu-item.bp3-active,
          .use-notebook-styles .bp3-menu-item:active {
            background-color: rgba(115, 134, 148, 0.3);
          }
          .use-notebook-styles .bp3-menu-item.bp3-disabled {
            outline: none !important;
            background-color: inherit !important;
            cursor: not-allowed !important;
            color: rgba(92, 112, 128, 0.6) !important;
          }
          .use-notebook-styles .bp3-menu-item.bp3-disabled::before,
          .use-notebook-styles .bp3-menu-item.bp3-disabled > .bp3-icon,
          .use-notebook-styles
            .bp3-menu-item.bp3-disabled
            .bp3-menu-item-label {
            color: rgba(92, 112, 128, 0.6) !important;
          }
          .use-notebook-styles .bp3-large .bp3-menu-item {
            padding: 9px 7px;
            line-height: 22px;
            font-size: 16px;
          }
          .use-notebook-styles .bp3-large .bp3-menu-item .bp3-icon {
            margin-top: 3px;
          }
          .use-notebook-styles .bp3-large .bp3-menu-item::before {
            line-height: 1;
            font-family: "Icons20", sans-serif;
            font-size: 20px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            margin-top: 1px;
            margin-right: 10px;
          }
          .use-notebook-styles button.bp3-menu-item {
            border: none;
            background: none;
            width: 100%;
            text-align: left;
          }
          .use-notebook-styles .bp3-menu-header {
            display: block;
            margin: 5px;
            border-top: 1px solid rgba(16, 22, 26, 0.15);
            cursor: default;
            padding-left: 2px;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-header {
            border-top-color: rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles .bp3-menu-header:first-of-type {
            border-top: none;
          }
          .use-notebook-styles .bp3-menu-header > h6 {
            color: #182026;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            margin: 0;
            padding: 10px 7px 0 1px;
            line-height: 17px;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-header > h6 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-menu-header:first-of-type > h6 {
            padding-top: 0;
          }
          .use-notebook-styles .bp3-large .bp3-menu-header > h6 {
            padding-top: 15px;
            padding-bottom: 5px;
            font-size: 18px;
          }
          .use-notebook-styles .bp3-large .bp3-menu-header:first-of-type > h6 {
            padding-top: 0;
          }
          .use-notebook-styles .bp3-dark .bp3-menu {
            background: #30404d;
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-intent-primary {
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary
            .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary
            .bp3-menu-item-label {
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary.bp3-active {
            background-color: #137cbd;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:active {
            background-color: #106ba3;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:hover::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:hover::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-primary.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary:active
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary.bp3-active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary.bp3-active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-primary.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-intent-success {
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success
            .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success
            .bp3-menu-item-label {
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success.bp3-active {
            background-color: #0f9960;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:active {
            background-color: #0d8050;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:hover::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:hover::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-success.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success:active
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success.bp3-active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success.bp3-active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-success.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-intent-warning {
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning
            .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning
            .bp3-menu-item-label {
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning.bp3-active {
            background-color: #d9822b;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:active {
            background-color: #bf7326;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:hover::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:hover::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-warning.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning:active
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning.bp3-active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning.bp3-active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-warning.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-intent-danger {
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger
            .bp3-icon {
            color: inherit;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger
            .bp3-menu-item-label {
            color: #ff7373;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger.bp3-active {
            background-color: #db3737;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:active {
            background-color: #c23030;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-intent-danger:hover,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:hover::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:hover::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:hover
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-submenu
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-submenu
            .bp3-dark
            .bp3-popover-target.bp3-popover-open
            > .bp3-intent-danger.bp3-menu-item
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger:active
            .bp3-menu-item-label,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger.bp3-active::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger.bp3-active::after,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-intent-danger.bp3-active
            .bp3-menu-item-label {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item::before,
          .use-notebook-styles .bp3-dark .bp3-menu-item > .bp3-icon {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item .bp3-menu-item-label {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-active,
          .use-notebook-styles .bp3-dark .bp3-menu-item:active {
            background-color: rgba(138, 155, 168, 0.3);
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-disabled {
            color: rgba(167, 182, 194, 0.6) !important;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-item.bp3-disabled::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-disabled
            > .bp3-icon,
          .use-notebook-styles
            .bp3-dark
            .bp3-menu-item.bp3-disabled
            .bp3-menu-item-label {
            color: rgba(167, 182, 194, 0.6) !important;
          }
          .use-notebook-styles .bp3-dark .bp3-menu-divider,
          .use-notebook-styles .bp3-dark .bp3-menu-header {
            border-color: rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles .bp3-dark .bp3-menu-header > h6 {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-label .bp3-menu {
            margin-top: 5px;
          }
          .use-notebook-styles .bp3-navbar {
            position: relative;
            z-index: 10;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
            background-color: #ffffff;
            width: 100%;
            height: 50px;
            padding: 0 15px;
          }
          .use-notebook-styles .bp3-navbar.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-navbar {
            background-color: #394b59;
          }
          .use-notebook-styles .bp3-navbar.bp3-dark {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-dark .bp3-navbar {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-navbar.bp3-fixed-top {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
          }
          .use-notebook-styles .bp3-navbar-heading {
            margin-right: 15px;
            font-size: 16px;
          }
          .use-notebook-styles .bp3-navbar-group {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 50px;
          }
          .use-notebook-styles .bp3-navbar-group.bp3-align-left {
            float: left;
          }
          .use-notebook-styles .bp3-navbar-group.bp3-align-right {
            float: right;
          }
          .use-notebook-styles .bp3-navbar-divider {
            margin: 0 10px;
            border-left: 1px solid rgba(16, 22, 26, 0.15);
            height: 20px;
          }
          .use-notebook-styles .bp3-dark .bp3-navbar-divider {
            border-left-color: rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles .bp3-non-ideal-state {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .use-notebook-styles .bp3-non-ideal-state > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-non-ideal-state > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-non-ideal-state::before,
          .use-notebook-styles .bp3-non-ideal-state > * {
            margin-bottom: 20px;
          }
          .use-notebook-styles .bp3-non-ideal-state:empty::before,
          .use-notebook-styles .bp3-non-ideal-state > :last-child {
            margin-bottom: 0;
          }
          .use-notebook-styles .bp3-non-ideal-state > * {
            max-width: 400px;
          }
          .use-notebook-styles .bp3-non-ideal-state-visual {
            color: rgba(92, 112, 128, 0.6);
            font-size: 60px;
          }
          .use-notebook-styles .bp3-dark .bp3-non-ideal-state-visual {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-overflow-list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            min-width: 0;
          }
          .use-notebook-styles .bp3-overflow-list-spacer {
            -ms-flex-negative: 1;
            flex-shrink: 1;
            width: 1px;
          }
          .use-notebook-styles body.bp3-overlay-open {
            overflow: hidden;
          }
          .use-notebook-styles .bp3-overlay {
            position: static;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 20;
          }
          .use-notebook-styles .bp3-overlay:not(.bp3-overlay-open) {
            pointer-events: none;
          }
          .use-notebook-styles .bp3-overlay.bp3-overlay-container {
            position: fixed;
            overflow: hidden;
          }
          .use-notebook-styles
            .bp3-overlay.bp3-overlay-container.bp3-overlay-inline {
            position: absolute;
          }
          .use-notebook-styles .bp3-overlay.bp3-overlay-scroll-container {
            position: fixed;
            overflow: auto;
          }
          .use-notebook-styles
            .bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline {
            position: absolute;
          }
          .use-notebook-styles .bp3-overlay.bp3-overlay-inline {
            display: inline;
            overflow: visible;
          }
          .use-notebook-styles .bp3-overlay-content {
            position: fixed;
            z-index: 20;
          }
          .use-notebook-styles .bp3-overlay-inline .bp3-overlay-content,
          .use-notebook-styles
            .bp3-overlay-scroll-container
            .bp3-overlay-content {
            position: absolute;
          }
          .use-notebook-styles .bp3-overlay-backdrop {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 1;
            z-index: 20;
            background-color: rgba(16, 22, 26, 0.7);
            overflow: auto;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .bp3-overlay-backdrop.bp3-overlay-enter,
          .use-notebook-styles .bp3-overlay-backdrop.bp3-overlay-appear {
            opacity: 0;
          }
          .use-notebook-styles .bp3-overlay-backdrop.bp3-overlay-enter-active,
          .use-notebook-styles .bp3-overlay-backdrop.bp3-overlay-appear-active {
            opacity: 1;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-overlay-backdrop.bp3-overlay-exit {
            opacity: 1;
          }
          .use-notebook-styles .bp3-overlay-backdrop.bp3-overlay-exit-active {
            opacity: 0;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-overlay-backdrop:focus {
            outline: none;
          }
          .use-notebook-styles .bp3-overlay-inline .bp3-overlay-backdrop {
            position: absolute;
          }
          .use-notebook-styles .bp3-panel-stack {
            position: relative;
            overflow: hidden;
          }
          .use-notebook-styles .bp3-panel-stack-header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            z-index: 1;
            -webkit-box-shadow: 0 1px rgba(16, 22, 26, 0.15);
            box-shadow: 0 1px rgba(16, 22, 26, 0.15);
            height: 30px;
          }
          .use-notebook-styles .bp3-dark .bp3-panel-stack-header {
            -webkit-box-shadow: 0 1px rgba(255, 255, 255, 0.15);
            box-shadow: 0 1px rgba(255, 255, 255, 0.15);
          }
          .use-notebook-styles .bp3-panel-stack-header > span {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
          }
          .use-notebook-styles .bp3-panel-stack-header .bp3-heading {
            margin: 0 5px;
          }
          .use-notebook-styles .bp3-button.bp3-panel-stack-header-back {
            margin-left: 5px;
            padding-left: 0;
            white-space: nowrap;
          }
          .use-notebook-styles
            .bp3-button.bp3-panel-stack-header-back
            .bp3-icon {
            margin: 0 2px;
          }
          .use-notebook-styles .bp3-panel-stack-view {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            margin-right: -1px;
            border-right: 1px solid rgba(16, 22, 26, 0.15);
            background-color: #ffffff;
            overflow-y: auto;
          }
          .use-notebook-styles .bp3-dark .bp3-panel-stack-view {
            background-color: #30404d;
          }
          .use-notebook-styles .bp3-panel-stack-push .bp3-panel-stack-enter,
          .use-notebook-styles .bp3-panel-stack-push .bp3-panel-stack-appear {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          }
          .use-notebook-styles
            .bp3-panel-stack-push
            .bp3-panel-stack-enter-active,
          .use-notebook-styles
            .bp3-panel-stack-push
            .bp3-panel-stack-appear-active {
            -webkit-transform: translate(0%);
            transform: translate(0%);
            opacity: 1;
            -webkit-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            transition-property: transform, opacity;
            transition-property: transform, opacity, -webkit-transform;
            -webkit-transition-duration: 400ms;
            transition-duration: 400ms;
            -webkit-transition-timing-function: ease;
            transition-timing-function: ease;
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-panel-stack-push .bp3-panel-stack-exit {
            -webkit-transform: translate(0%);
            transform: translate(0%);
            opacity: 1;
          }
          .use-notebook-styles
            .bp3-panel-stack-push
            .bp3-panel-stack-exit-active {
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            opacity: 0;
            -webkit-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            transition-property: transform, opacity;
            transition-property: transform, opacity, -webkit-transform;
            -webkit-transition-duration: 400ms;
            transition-duration: 400ms;
            -webkit-transition-timing-function: ease;
            transition-timing-function: ease;
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-panel-stack-pop .bp3-panel-stack-enter,
          .use-notebook-styles .bp3-panel-stack-pop .bp3-panel-stack-appear {
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            opacity: 0;
          }
          .use-notebook-styles
            .bp3-panel-stack-pop
            .bp3-panel-stack-enter-active,
          .use-notebook-styles
            .bp3-panel-stack-pop
            .bp3-panel-stack-appear-active {
            -webkit-transform: translate(0%);
            transform: translate(0%);
            opacity: 1;
            -webkit-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            transition-property: transform, opacity;
            transition-property: transform, opacity, -webkit-transform;
            -webkit-transition-duration: 400ms;
            transition-duration: 400ms;
            -webkit-transition-timing-function: ease;
            transition-timing-function: ease;
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-panel-stack-pop .bp3-panel-stack-exit {
            -webkit-transform: translate(0%);
            transform: translate(0%);
            opacity: 1;
          }
          .use-notebook-styles
            .bp3-panel-stack-pop
            .bp3-panel-stack-exit-active {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
            -webkit-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            transition-property: transform, opacity;
            transition-property: transform, opacity, -webkit-transform;
            -webkit-transition-duration: 400ms;
            transition-duration: 400ms;
            -webkit-transition-timing-function: ease;
            transition-timing-function: ease;
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-popover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            -webkit-transform: scale(1);
            transform: scale(1);
            display: inline-block;
            z-index: 20;
            border-radius: 3px;
          }
          .use-notebook-styles .bp3-popover .bp3-popover-arrow {
            position: absolute;
            width: 30px;
            height: 30px;
          }
          .use-notebook-styles .bp3-popover .bp3-popover-arrow::before {
            margin: 5px;
            width: 20px;
            height: 20px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top
            > .bp3-popover {
            margin-top: -17px;
            margin-bottom: 17px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top
            > .bp3-popover
            > .bp3-popover-arrow {
            bottom: -11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top
            > .bp3-popover
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(-90deg);
            transform: rotate(-90deg);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-right
            > .bp3-popover {
            margin-left: 17px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-right
            > .bp3-popover
            > .bp3-popover-arrow {
            left: -11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-right
            > .bp3-popover
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom
            > .bp3-popover {
            margin-top: 17px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom
            > .bp3-popover
            > .bp3-popover-arrow {
            top: -11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom
            > .bp3-popover
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-left
            > .bp3-popover {
            margin-right: 17px;
            margin-left: -17px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-left
            > .bp3-popover
            > .bp3-popover-arrow {
            right: -11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-left
            > .bp3-popover
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle
            > .bp3-popover
            > .bp3-popover-arrow {
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-center
            > .bp3-popover
            > .bp3-popover-arrow {
            right: 50%;
            -webkit-transform: translateX(50%);
            transform: translateX(50%);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-top
            > .bp3-popover
            > .bp3-popover-arrow {
            top: -0.3934px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-right
            > .bp3-popover
            > .bp3-popover-arrow {
            right: -0.3934px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-left
            > .bp3-popover
            > .bp3-popover-arrow {
            left: -0.3934px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom
            > .bp3-popover
            > .bp3-popover-arrow {
            bottom: -0.3934px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-element-attached-left
            > .bp3-popover {
            -webkit-transform-origin: top left;
            transform-origin: top left;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-element-attached-center
            > .bp3-popover {
            -webkit-transform-origin: top center;
            transform-origin: top center;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-element-attached-right
            > .bp3-popover {
            -webkit-transform-origin: top right;
            transform-origin: top right;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle.bp3-tether-element-attached-left
            > .bp3-popover {
            -webkit-transform-origin: center left;
            transform-origin: center left;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle.bp3-tether-element-attached-center
            > .bp3-popover {
            -webkit-transform-origin: center center;
            transform-origin: center center;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle.bp3-tether-element-attached-right
            > .bp3-popover {
            -webkit-transform-origin: center right;
            transform-origin: center right;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left
            > .bp3-popover {
            -webkit-transform-origin: bottom left;
            transform-origin: bottom left;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center
            > .bp3-popover {
            -webkit-transform-origin: bottom center;
            transform-origin: bottom center;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right
            > .bp3-popover {
            -webkit-transform-origin: bottom right;
            transform-origin: bottom right;
          }
          .use-notebook-styles .bp3-popover .bp3-popover-content {
            background: #ffffff;
            color: inherit;
          }
          .use-notebook-styles .bp3-popover .bp3-popover-arrow::before {
            -webkit-box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-popover .bp3-popover-arrow-border {
            fill: #10161a;
            fill-opacity: 0.1;
          }
          .use-notebook-styles .bp3-popover .bp3-popover-arrow-fill {
            fill: #ffffff;
          }
          .use-notebook-styles .bp3-popover-enter > .bp3-popover,
          .use-notebook-styles .bp3-popover-appear > .bp3-popover {
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
          }
          .use-notebook-styles .bp3-popover-enter-active > .bp3-popover,
          .use-notebook-styles .bp3-popover-appear-active > .bp3-popover {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(
              0.54,
              1.12,
              0.38,
              1.11
            );
            transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-popover-exit > .bp3-popover {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .use-notebook-styles .bp3-popover-exit-active > .bp3-popover {
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(
              0.54,
              1.12,
              0.38,
              1.11
            );
            transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-popover .bp3-popover-content {
            position: relative;
            border-radius: 3px;
          }
          .use-notebook-styles
            .bp3-popover.bp3-popover-content-sizing
            .bp3-popover-content {
            max-width: 350px;
            padding: 20px;
          }
          .use-notebook-styles
            .bp3-popover-target
            + .bp3-overlay
            .bp3-popover.bp3-popover-content-sizing {
            width: 350px;
          }
          .use-notebook-styles .bp3-popover.bp3-minimal {
            margin: 0 !important;
          }
          .use-notebook-styles .bp3-popover.bp3-minimal .bp3-popover-arrow {
            display: none;
          }
          .use-notebook-styles .bp3-popover.bp3-minimal.bp3-popover {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .use-notebook-styles
            .bp3-popover-enter
            > .bp3-popover.bp3-minimal.bp3-popover,
          .use-notebook-styles
            .bp3-popover-appear
            > .bp3-popover.bp3-minimal.bp3-popover {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .use-notebook-styles
            .bp3-popover-enter-active
            > .bp3-popover.bp3-minimal.bp3-popover,
          .use-notebook-styles
            .bp3-popover-appear-active
            > .bp3-popover.bp3-minimal.bp3-popover {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles
            .bp3-popover-exit
            > .bp3-popover.bp3-minimal.bp3-popover {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .use-notebook-styles
            .bp3-popover-exit-active
            > .bp3-popover.bp3-minimal.bp3-popover {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-popover.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-popover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-popover.bp3-dark .bp3-popover-content,
          .use-notebook-styles .bp3-dark .bp3-popover .bp3-popover-content {
            background: #30404d;
            color: inherit;
          }
          .use-notebook-styles .bp3-popover.bp3-dark .bp3-popover-arrow::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-popover
            .bp3-popover-arrow::before {
            -webkit-box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.4);
            box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-popover.bp3-dark .bp3-popover-arrow-border,
          .use-notebook-styles
            .bp3-dark
            .bp3-popover
            .bp3-popover-arrow-border {
            fill: #10161a;
            fill-opacity: 0.2;
          }
          .use-notebook-styles .bp3-popover.bp3-dark .bp3-popover-arrow-fill,
          .use-notebook-styles .bp3-dark .bp3-popover .bp3-popover-arrow-fill {
            fill: #30404d;
          }
          .use-notebook-styles .bp3-popover-arrow::before {
            display: block;
            position: absolute;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            border-radius: 2px;
            content: "";
          }
          .use-notebook-styles .bp3-tether-pinned .bp3-popover-arrow {
            display: none;
          }
          .use-notebook-styles .bp3-popover-backdrop {
            background: rgba(255, 255, 255, 0);
          }
          .use-notebook-styles .bp3-transition-container {
            opacity: 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            z-index: 20;
          }
          .use-notebook-styles .bp3-transition-container.bp3-popover-enter,
          .use-notebook-styles .bp3-transition-container.bp3-popover-appear {
            opacity: 0;
          }
          .use-notebook-styles
            .bp3-transition-container.bp3-popover-enter-active,
          .use-notebook-styles
            .bp3-transition-container.bp3-popover-appear-active {
            opacity: 1;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-transition-container.bp3-popover-exit {
            opacity: 1;
          }
          .use-notebook-styles
            .bp3-transition-container.bp3-popover-exit-active {
            opacity: 0;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-transition-container:focus {
            outline: none;
          }
          .use-notebook-styles
            .bp3-transition-container.bp3-popover-leave
            .bp3-popover-content {
            pointer-events: none;
          }
          .use-notebook-styles
            .bp3-transition-container[data-x-out-of-boundaries] {
            display: none;
          }
          .use-notebook-styles span.bp3-popover-target {
            display: inline-block;
          }
          .use-notebook-styles .bp3-popover-wrapper.bp3-fill {
            width: 100%;
          }
          .use-notebook-styles .bp3-portal {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
          }
          @-webkit-keyframes linear-progress-bar-stripes {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 30px 0;
            }
          }
          @keyframes linear-progress-bar-stripes {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 30px 0;
            }
          }
          .use-notebook-styles .bp3-progress-bar {
            display: block;
            position: relative;
            border-radius: 40px;
            background: rgba(92, 112, 128, 0.2);
            width: 100%;
            height: 8px;
            overflow: hidden;
          }
          .use-notebook-styles .bp3-progress-bar .bp3-progress-meter {
            position: absolute;
            border-radius: 40px;
            background: linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.2) 25%,
              transparent 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.2) 75%,
              transparent 75%
            );
            background-color: rgba(92, 112, 128, 0.8);
            background-size: 30px 30px;
            width: 100%;
            height: 100%;
            -webkit-transition: width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles
            .bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes)
            .bp3-progress-meter {
            animation: linear-progress-bar-stripes 300ms linear infinite reverse;
          }
          .use-notebook-styles
            .bp3-progress-bar.bp3-no-stripes
            .bp3-progress-meter {
            background-image: none;
          }
          .use-notebook-styles .bp3-dark .bp3-progress-bar {
            background: rgba(16, 22, 26, 0.5);
          }
          .use-notebook-styles .bp3-dark .bp3-progress-bar .bp3-progress-meter {
            background-color: #8a9ba8;
          }
          .use-notebook-styles
            .bp3-progress-bar.bp3-intent-primary
            .bp3-progress-meter {
            background-color: #137cbd;
          }
          .use-notebook-styles
            .bp3-progress-bar.bp3-intent-success
            .bp3-progress-meter {
            background-color: #0f9960;
          }
          .use-notebook-styles
            .bp3-progress-bar.bp3-intent-warning
            .bp3-progress-meter {
            background-color: #d9822b;
          }
          .use-notebook-styles
            .bp3-progress-bar.bp3-intent-danger
            .bp3-progress-meter {
            background-color: #db3737;
          }
          @-webkit-keyframes skeleton-glow {
            from {
              border-color: rgba(206, 217, 224, 0.2);
              background: rgba(206, 217, 224, 0.2);
            }
            to {
              border-color: rgba(92, 112, 128, 0.2);
              background: rgba(92, 112, 128, 0.2);
            }
          }
          @keyframes skeleton-glow {
            from {
              border-color: rgba(206, 217, 224, 0.2);
              background: rgba(206, 217, 224, 0.2);
            }
            to {
              border-color: rgba(92, 112, 128, 0.2);
              background: rgba(92, 112, 128, 0.2);
            }
          }
          .use-notebook-styles .bp3-skeleton {
            border-color: rgba(206, 217, 224, 0.2) !important;
            border-radius: 2px;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            background: rgba(206, 217, 224, 0.2);
            background-clip: padding-box !important;
            cursor: default;
            color: transparent !important;
            -webkit-animation: 1000ms linear infinite alternate skeleton-glow;
            animation: 1000ms linear infinite alternate skeleton-glow;
            pointer-events: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .bp3-skeleton::before,
          .use-notebook-styles .bp3-skeleton::after,
          .use-notebook-styles .bp3-skeleton * {
            visibility: hidden !important;
          }
          .use-notebook-styles .bp3-slider {
            width: 100%;
            min-width: 150px;
            height: 40px;
            position: relative;
            outline: none;
            cursor: default;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .bp3-slider:hover {
            cursor: pointer;
          }
          .use-notebook-styles .bp3-slider:active {
            cursor: -webkit-grabbing;
            cursor: grabbing;
          }
          .use-notebook-styles .bp3-slider.bp3-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .use-notebook-styles .bp3-slider.bp3-slider-unlabeled {
            height: 16px;
          }
          .use-notebook-styles .bp3-slider-track,
          .use-notebook-styles .bp3-slider-progress {
            top: 5px;
            right: 0;
            left: 0;
            height: 6px;
            position: absolute;
          }
          .use-notebook-styles .bp3-slider-track {
            border-radius: 3px;
            overflow: hidden;
          }
          .use-notebook-styles .bp3-slider-progress {
            background: rgba(92, 112, 128, 0.2);
          }
          .use-notebook-styles .bp3-dark .bp3-slider-progress {
            background: rgba(16, 22, 26, 0.5);
          }
          .use-notebook-styles .bp3-slider-progress.bp3-intent-primary {
            background-color: #137cbd;
          }
          .use-notebook-styles .bp3-slider-progress.bp3-intent-success {
            background-color: #0f9960;
          }
          .use-notebook-styles .bp3-slider-progress.bp3-intent-warning {
            background-color: #d9822b;
          }
          .use-notebook-styles .bp3-slider-progress.bp3-intent-danger {
            background-color: #db3737;
          }
          .use-notebook-styles .bp3-slider-handle {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-color: #f5f8fa;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.8)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            );
            color: #182026;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.2);
            cursor: pointer;
            width: 16px;
            height: 16px;
          }
          .use-notebook-styles .bp3-slider-handle:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-clip: padding-box;
            background-color: #ebf1f5;
          }
          .use-notebook-styles .bp3-slider-handle:active,
          .use-notebook-styles .bp3-slider-handle.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #d8e1e8;
            background-image: none;
          }
          .use-notebook-styles .bp3-slider-handle:disabled,
          .use-notebook-styles .bp3-slider-handle.bp3-disabled {
            outline: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(206, 217, 224, 0.5);
            background-image: none;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-slider-handle:disabled.bp3-active,
          .use-notebook-styles .bp3-slider-handle:disabled.bp3-active:hover,
          .use-notebook-styles .bp3-slider-handle.bp3-disabled.bp3-active,
          .use-notebook-styles
            .bp3-slider-handle.bp3-disabled.bp3-active:hover {
            background: rgba(206, 217, 224, 0.7);
          }
          .use-notebook-styles .bp3-slider-handle:focus {
            z-index: 1;
          }
          .use-notebook-styles .bp3-slider-handle:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            background-clip: padding-box;
            background-color: #ebf1f5;
            z-index: 2;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 1px 1px rgba(16, 22, 26, 0.2);
            cursor: -webkit-grab;
            cursor: grab;
          }
          .use-notebook-styles .bp3-slider-handle.bp3-active {
            -webkit-box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #d8e1e8;
            background-image: none;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 1px rgba(16, 22, 26, 0.1);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              inset 0 1px 1px rgba(16, 22, 26, 0.1);
            cursor: -webkit-grabbing;
            cursor: grabbing;
          }
          .use-notebook-styles .bp3-disabled .bp3-slider-handle {
            -webkit-box-shadow: none;
            box-shadow: none;
            background: #bfccd6;
            pointer-events: none;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #394b59;
            background-image: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(255, 255, 255, 0.05)),
              to(rgba(255, 255, 255, 0))
            );
            background-image: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0)
            );
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle:hover,
          .use-notebook-styles .bp3-dark .bp3-slider-handle:active,
          .use-notebook-styles .bp3-dark .bp3-slider-handle.bp3-active {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle:hover {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.4);
            background-color: #30404d;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle:active,
          .use-notebook-styles .bp3-dark .bp3-slider-handle.bp3-active {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.6),
              inset 0 1px 2px rgba(16, 22, 26, 0.2);
            background-color: #202b33;
            background-image: none;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle:disabled,
          .use-notebook-styles .bp3-dark .bp3-slider-handle.bp3-disabled {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(57, 75, 89, 0.5);
            background-image: none;
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle:disabled.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-slider-handle.bp3-disabled.bp3-active {
            background: rgba(57, 75, 89, 0.7);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-slider-handle
            .bp3-button-spinner
            .bp3-spinner-head {
            background: rgba(16, 22, 26, 0.5);
            stroke: #8a9ba8;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle,
          .use-notebook-styles .bp3-dark .bp3-slider-handle:hover {
            background-color: #394b59;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle.bp3-active {
            background-color: #293742;
          }
          .use-notebook-styles .bp3-dark .bp3-disabled .bp3-slider-handle {
            border-color: #5c7080;
            -webkit-box-shadow: none;
            box-shadow: none;
            background: #5c7080;
          }
          .use-notebook-styles .bp3-slider-handle .bp3-slider-label {
            margin-left: 8px;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            background: #394b59;
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-slider-handle .bp3-slider-label {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            background: #e1e8ed;
            color: #394b59;
          }
          .use-notebook-styles
            .bp3-disabled
            .bp3-slider-handle
            .bp3-slider-label {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-slider-handle.bp3-start,
          .use-notebook-styles .bp3-slider-handle.bp3-end {
            width: 8px;
          }
          .use-notebook-styles .bp3-slider-handle.bp3-start {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .use-notebook-styles .bp3-slider-handle.bp3-end {
            margin-left: 8px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .use-notebook-styles .bp3-slider-handle.bp3-end .bp3-slider-label {
            margin-left: 0;
          }
          .use-notebook-styles .bp3-slider-label {
            -webkit-transform: translate(-50%, 20px);
            transform: translate(-50%, 20px);
            display: inline-block;
            position: absolute;
            padding: 2px 5px;
            vertical-align: top;
            line-height: 1;
            font-size: 12px;
          }
          .use-notebook-styles .bp3-slider.bp3-vertical {
            width: 40px;
            min-width: 40px;
            height: 150px;
          }
          .use-notebook-styles .bp3-slider.bp3-vertical .bp3-slider-track,
          .use-notebook-styles .bp3-slider.bp3-vertical .bp3-slider-progress {
            top: 0;
            bottom: 0;
            left: 5px;
            width: 6px;
            height: auto;
          }
          .use-notebook-styles .bp3-slider.bp3-vertical .bp3-slider-progress {
            top: auto;
          }
          .use-notebook-styles .bp3-slider.bp3-vertical .bp3-slider-label {
            -webkit-transform: translate(20px, 50%);
            transform: translate(20px, 50%);
          }
          .use-notebook-styles .bp3-slider.bp3-vertical .bp3-slider-handle {
            top: auto;
          }
          .use-notebook-styles
            .bp3-slider.bp3-vertical
            .bp3-slider-handle
            .bp3-slider-label {
            margin-top: -8px;
            margin-left: 0;
          }
          .use-notebook-styles
            .bp3-slider.bp3-vertical
            .bp3-slider-handle.bp3-end,
          .use-notebook-styles
            .bp3-slider.bp3-vertical
            .bp3-slider-handle.bp3-start {
            margin-left: 0;
            width: 16px;
            height: 8px;
          }
          .use-notebook-styles
            .bp3-slider.bp3-vertical
            .bp3-slider-handle.bp3-start {
            border-top-left-radius: 0;
            border-bottom-right-radius: 3px;
          }
          .use-notebook-styles
            .bp3-slider.bp3-vertical
            .bp3-slider-handle.bp3-start
            .bp3-slider-label {
            -webkit-transform: translate(20px);
            transform: translate(20px);
          }
          .use-notebook-styles
            .bp3-slider.bp3-vertical
            .bp3-slider-handle.bp3-end {
            margin-bottom: 8px;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          @-webkit-keyframes pt-spinner-animation {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          @keyframes pt-spinner-animation {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          .use-notebook-styles .bp3-spinner {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            overflow: visible;
            vertical-align: middle;
          }
          .use-notebook-styles .bp3-spinner svg {
            display: block;
          }
          .use-notebook-styles .bp3-spinner path {
            fill-opacity: 0;
          }
          .use-notebook-styles .bp3-spinner .bp3-spinner-head {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transition: stroke-dashoffset 200ms
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            stroke: rgba(92, 112, 128, 0.8);
            stroke-linecap: round;
          }
          .use-notebook-styles .bp3-spinner .bp3-spinner-track {
            stroke: rgba(92, 112, 128, 0.2);
          }
          .use-notebook-styles .bp3-spinner-animation {
            -webkit-animation: pt-spinner-animation 500ms linear infinite;
            animation: pt-spinner-animation 500ms linear infinite;
          }
          .use-notebook-styles .bp3-no-spin > .bp3-spinner-animation {
            -webkit-animation: none;
            animation: none;
          }
          .use-notebook-styles .bp3-dark .bp3-spinner .bp3-spinner-head {
            stroke: #8a9ba8;
          }
          .use-notebook-styles .bp3-dark .bp3-spinner .bp3-spinner-track {
            stroke: rgba(16, 22, 26, 0.5);
          }
          .use-notebook-styles
            .bp3-spinner.bp3-intent-primary
            .bp3-spinner-head {
            stroke: #137cbd;
          }
          .use-notebook-styles
            .bp3-spinner.bp3-intent-success
            .bp3-spinner-head {
            stroke: #0f9960;
          }
          .use-notebook-styles
            .bp3-spinner.bp3-intent-warning
            .bp3-spinner-head {
            stroke: #d9822b;
          }
          .use-notebook-styles
            .bp3-spinner.bp3-intent-danger
            .bp3-spinner-head {
            stroke: #db3737;
          }
          .use-notebook-styles .bp3-tabs.bp3-vertical {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .use-notebook-styles .bp3-tabs.bp3-vertical > .bp3-tab-list {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
          }
          .use-notebook-styles .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab {
            border-radius: 3px;
            width: 100%;
            padding: 0 10px;
          }
          .use-notebook-styles
            .bp3-tabs.bp3-vertical
            > .bp3-tab-list
            .bp3-tab[aria-selected="true"] {
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(19, 124, 189, 0.2);
          }
          .use-notebook-styles
            .bp3-tabs.bp3-vertical
            > .bp3-tab-list
            .bp3-tab-indicator-wrapper
            .bp3-tab-indicator {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 3px;
            background-color: rgba(19, 124, 189, 0.2);
            height: auto;
          }
          .use-notebook-styles .bp3-tabs.bp3-vertical > .bp3-tab-panel {
            margin-top: 0;
            padding-left: 20px;
          }
          .use-notebook-styles .bp3-tab-list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end;
            position: relative;
            margin: 0;
            border: none;
            padding: 0;
            list-style: none;
          }
          .use-notebook-styles .bp3-tab-list > *:not(:last-child) {
            margin-right: 20px;
          }
          .use-notebook-styles .bp3-tab {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            position: relative;
            cursor: pointer;
            max-width: 100%;
            vertical-align: top;
            line-height: 30px;
            color: #182026;
            font-size: 14px;
          }
          .use-notebook-styles .bp3-tab a {
            display: block;
            text-decoration: none;
            color: inherit;
          }
          .use-notebook-styles .bp3-tab-indicator-wrapper ~ .bp3-tab {
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            background-color: transparent !important;
          }
          .use-notebook-styles .bp3-tab[aria-disabled="true"] {
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-tab[aria-selected="true"] {
            border-radius: 0;
            -webkit-box-shadow: inset 0 -3px 0 #106ba3;
            box-shadow: inset 0 -3px 0 #106ba3;
          }
          .use-notebook-styles .bp3-tab[aria-selected="true"],
          .use-notebook-styles .bp3-tab:not([aria-disabled="true"]):hover {
            color: #106ba3;
          }
          .use-notebook-styles .bp3-tab:focus {
            -moz-outline-radius: 0;
          }
          .use-notebook-styles .bp3-large > .bp3-tab {
            line-height: 40px;
            font-size: 16px;
          }
          .use-notebook-styles .bp3-tab-panel {
            margin-top: 20px;
          }
          .use-notebook-styles .bp3-tab-panel[aria-hidden="true"] {
            display: none;
          }
          .use-notebook-styles .bp3-tab-indicator-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            -webkit-transform: translateX(0), translateY(0);
            transform: translateX(0), translateY(0);
            -webkit-transition: height, width, -webkit-transform;
            transition: height, width, -webkit-transform;
            transition: height, transform, width;
            transition: height, transform, width, -webkit-transform;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            pointer-events: none;
          }
          .use-notebook-styles .bp3-tab-indicator-wrapper .bp3-tab-indicator {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #106ba3;
            height: 3px;
          }
          .use-notebook-styles .bp3-tab-indicator-wrapper.bp3-no-animation {
            -webkit-transition: none;
            transition: none;
          }
          .use-notebook-styles .bp3-dark .bp3-tab {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-dark .bp3-tab[aria-disabled="true"] {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-tab[aria-selected="true"] {
            -webkit-box-shadow: inset 0 -3px 0 #48aff0;
            box-shadow: inset 0 -3px 0 #48aff0;
          }
          .use-notebook-styles .bp3-dark .bp3-tab[aria-selected="true"],
          .use-notebook-styles
            .bp3-dark
            .bp3-tab:not([aria-disabled="true"]):hover {
            color: #48aff0;
          }
          .use-notebook-styles .bp3-dark .bp3-tab-indicator {
            background-color: #48aff0;
          }
          .use-notebook-styles .bp3-flex-expander {
            -webkit-box-flex: 1;
            -ms-flex: 1 1;
            flex: 1 1;
          }
          .use-notebook-styles .bp3-tag {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            border: none;
            border-radius: 3px;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: #5c7080;
            min-width: 20px;
            max-width: 100%;
            min-height: 20px;
            padding: 2px 6px;
            line-height: 16px;
            color: #f5f8fa;
            font-size: 12px;
          }
          .use-notebook-styles .bp3-tag.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles .bp3-tag.bp3-interactive:hover {
            background-color: rgba(92, 112, 128, 0.85);
          }
          .use-notebook-styles .bp3-tag.bp3-interactive.bp3-active,
          .use-notebook-styles .bp3-tag.bp3-interactive:active {
            background-color: rgba(92, 112, 128, 0.7);
          }
          .use-notebook-styles .bp3-tag > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-tag > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-tag::before,
          .use-notebook-styles .bp3-tag > * {
            margin-right: 4px;
          }
          .use-notebook-styles .bp3-tag:empty::before,
          .use-notebook-styles .bp3-tag > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-tag:focus {
            outline: rgba(19, 124, 189, 0.6) auto 2px;
            outline-offset: 0;
            -moz-outline-radius: 6px;
          }
          .use-notebook-styles .bp3-tag.bp3-round {
            border-radius: 30px;
            padding-right: 8px;
            padding-left: 8px;
          }
          .use-notebook-styles .bp3-dark .bp3-tag {
            background-color: #bfccd6;
            color: #182026;
          }
          .use-notebook-styles .bp3-dark .bp3-tag.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles .bp3-dark .bp3-tag.bp3-interactive:hover {
            background-color: rgba(191, 204, 214, 0.85);
          }
          .use-notebook-styles .bp3-dark .bp3-tag.bp3-interactive.bp3-active,
          .use-notebook-styles .bp3-dark .bp3-tag.bp3-interactive:active {
            background-color: rgba(191, 204, 214, 0.7);
          }
          .use-notebook-styles .bp3-dark .bp3-tag > .bp3-icon,
          .use-notebook-styles .bp3-dark .bp3-tag .bp3-icon-standard,
          .use-notebook-styles .bp3-dark .bp3-tag .bp3-icon-large {
            fill: currentColor;
          }
          .use-notebook-styles .bp3-tag > .bp3-icon,
          .use-notebook-styles .bp3-tag .bp3-icon-standard,
          .use-notebook-styles .bp3-tag .bp3-icon-large {
            fill: #ffffff;
          }
          .use-notebook-styles .bp3-tag.bp3-large,
          .use-notebook-styles .bp3-large .bp3-tag {
            min-width: 30px;
            min-height: 30px;
            padding: 0 10px;
            line-height: 20px;
            font-size: 14px;
          }
          .use-notebook-styles .bp3-tag.bp3-large::before,
          .use-notebook-styles .bp3-tag.bp3-large > *,
          .use-notebook-styles .bp3-large .bp3-tag::before,
          .use-notebook-styles .bp3-large .bp3-tag > * {
            margin-right: 7px;
          }
          .use-notebook-styles .bp3-tag.bp3-large:empty::before,
          .use-notebook-styles .bp3-tag.bp3-large > :last-child,
          .use-notebook-styles .bp3-large .bp3-tag:empty::before,
          .use-notebook-styles .bp3-large .bp3-tag > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-tag.bp3-large.bp3-round,
          .use-notebook-styles .bp3-large .bp3-tag.bp3-round {
            padding-right: 12px;
            padding-left: 12px;
          }
          .use-notebook-styles .bp3-tag.bp3-intent-primary {
            background: #137cbd;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-tag.bp3-intent-primary.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-primary.bp3-interactive:hover {
            background-color: rgba(19, 124, 189, 0.85);
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-intent-primary.bp3-interactive:active {
            background-color: rgba(19, 124, 189, 0.7);
          }
          .use-notebook-styles .bp3-tag.bp3-intent-success {
            background: #0f9960;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-tag.bp3-intent-success.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-success.bp3-interactive:hover {
            background-color: rgba(15, 153, 96, 0.85);
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-success.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-intent-success.bp3-interactive:active {
            background-color: rgba(15, 153, 96, 0.7);
          }
          .use-notebook-styles .bp3-tag.bp3-intent-warning {
            background: #d9822b;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-tag.bp3-intent-warning.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-warning.bp3-interactive:hover {
            background-color: rgba(217, 130, 43, 0.85);
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-intent-warning.bp3-interactive:active {
            background-color: rgba(217, 130, 43, 0.7);
          }
          .use-notebook-styles .bp3-tag.bp3-intent-danger {
            background: #db3737;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-tag.bp3-intent-danger.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-danger.bp3-interactive:hover {
            background-color: rgba(219, 55, 55, 0.85);
          }
          .use-notebook-styles
            .bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-intent-danger.bp3-interactive:active {
            background-color: rgba(219, 55, 55, 0.7);
          }
          .use-notebook-styles .bp3-tag.bp3-fill {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
          }
          .use-notebook-styles .bp3-tag.bp3-minimal > .bp3-icon,
          .use-notebook-styles .bp3-tag.bp3-minimal .bp3-icon-standard,
          .use-notebook-styles .bp3-tag.bp3-minimal .bp3-icon-large {
            fill: #5c7080;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) {
            background-color: rgba(138, 155, 168, 0.2);
            color: #182026;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover {
            background-color: rgba(92, 112, 128, 0.3);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active {
            background-color: rgba(92, 112, 128, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) {
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover {
            background-color: rgba(191, 204, 214, 0.3);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active {
            background-color: rgba(191, 204, 214, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"])
            > .bp3-icon,
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"])
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal:not([class*="bp3-intent-"])
            .bp3-icon-large {
            fill: #a7b6c2;
          }
          .use-notebook-styles .bp3-tag.bp3-minimal.bp3-intent-primary {
            background-color: rgba(19, 124, 189, 0.15);
            color: #106ba3;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover {
            background-color: rgba(19, 124, 189, 0.25);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active {
            background-color: rgba(19, 124, 189, 0.35);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-primary
            > .bp3-icon,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-primary
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-primary
            .bp3-icon-large {
            fill: #137cbd;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-primary {
            background-color: rgba(19, 124, 189, 0.25);
            color: #48aff0;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover {
            background-color: rgba(19, 124, 189, 0.35);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active {
            background-color: rgba(19, 124, 189, 0.45);
          }
          .use-notebook-styles .bp3-tag.bp3-minimal.bp3-intent-success {
            background-color: rgba(15, 153, 96, 0.15);
            color: #0d8050;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover {
            background-color: rgba(15, 153, 96, 0.25);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active {
            background-color: rgba(15, 153, 96, 0.35);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-success
            > .bp3-icon,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-success
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-success
            .bp3-icon-large {
            fill: #0f9960;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-success {
            background-color: rgba(15, 153, 96, 0.25);
            color: #3dcc91;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover {
            background-color: rgba(15, 153, 96, 0.35);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active {
            background-color: rgba(15, 153, 96, 0.45);
          }
          .use-notebook-styles .bp3-tag.bp3-minimal.bp3-intent-warning {
            background-color: rgba(217, 130, 43, 0.15);
            color: #bf7326;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover {
            background-color: rgba(217, 130, 43, 0.25);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active {
            background-color: rgba(217, 130, 43, 0.35);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-warning
            > .bp3-icon,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-warning
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-warning
            .bp3-icon-large {
            fill: #d9822b;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-warning {
            background-color: rgba(217, 130, 43, 0.25);
            color: #ffb366;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover {
            background-color: rgba(217, 130, 43, 0.35);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active {
            background-color: rgba(217, 130, 43, 0.45);
          }
          .use-notebook-styles .bp3-tag.bp3-minimal.bp3-intent-danger {
            background-color: rgba(219, 55, 55, 0.15);
            color: #c23030;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover {
            background-color: rgba(219, 55, 55, 0.25);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active {
            background-color: rgba(219, 55, 55, 0.35);
          }
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-danger
            > .bp3-icon,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-danger
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-tag.bp3-minimal.bp3-intent-danger
            .bp3-icon-large {
            fill: #db3737;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-danger {
            background-color: rgba(219, 55, 55, 0.25);
            color: #ff7373;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive {
            cursor: pointer;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover {
            background-color: rgba(219, 55, 55, 0.35);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active,
          .use-notebook-styles
            .bp3-dark
            .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active {
            background-color: rgba(219, 55, 55, 0.45);
          }
          .use-notebook-styles .bp3-tag-remove {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            opacity: 0.5;
            margin-top: -2px;
            margin-right: -6px !important;
            margin-bottom: -2px;
            border: none;
            background: none;
            cursor: pointer;
            padding: 2px;
            padding-left: 0;
            color: inherit;
          }
          .use-notebook-styles .bp3-tag-remove:hover {
            opacity: 0.8;
            background: none;
            text-decoration: none;
          }
          .use-notebook-styles .bp3-tag-remove:active {
            opacity: 1;
          }
          .use-notebook-styles .bp3-tag-remove:empty::before {
            line-height: 1;
            font-family: "Icons16", sans-serif;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            content: "";
          }
          .use-notebook-styles .bp3-large .bp3-tag-remove {
            margin-right: -10px !important;
            padding: 5px;
            padding-left: 0;
          }
          .use-notebook-styles .bp3-large .bp3-tag-remove:empty::before {
            line-height: 1;
            font-family: "Icons20", sans-serif;
            font-size: 20px;
            font-weight: 400;
            font-style: normal;
          }
          .use-notebook-styles .bp3-tag-input {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            cursor: text;
            height: auto;
            min-height: 30px;
            padding-right: 0;
            padding-left: 5px;
            line-height: inherit;
          }
          .use-notebook-styles .bp3-tag-input > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles .bp3-tag-input > .bp3-tag-input-values {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-tag-input .bp3-tag-input-icon {
            margin-top: 7px;
            margin-right: 7px;
            margin-left: 2px;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-tag-input .bp3-tag-input-values {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-item-align: stretch;
            align-self: stretch;
            margin-top: 5px;
            margin-right: 7px;
            min-width: 0;
          }
          .use-notebook-styles .bp3-tag-input .bp3-tag-input-values > * {
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
          }
          .use-notebook-styles
            .bp3-tag-input
            .bp3-tag-input-values
            > .bp3-fill {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .bp3-tag-input .bp3-tag-input-values::before,
          .use-notebook-styles .bp3-tag-input .bp3-tag-input-values > * {
            margin-right: 5px;
          }
          .use-notebook-styles
            .bp3-tag-input
            .bp3-tag-input-values:empty::before,
          .use-notebook-styles
            .bp3-tag-input
            .bp3-tag-input-values
            > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles
            .bp3-tag-input
            .bp3-tag-input-values:first-child
            .bp3-input-ghost:first-child {
            padding-left: 5px;
          }
          .use-notebook-styles .bp3-tag-input .bp3-tag-input-values > * {
            margin-bottom: 5px;
          }
          .use-notebook-styles .bp3-tag-input .bp3-tag {
            overflow-wrap: break-word;
          }
          .use-notebook-styles .bp3-tag-input .bp3-tag.bp3-active {
            outline: rgba(19, 124, 189, 0.6) auto 2px;
            outline-offset: 0;
            -moz-outline-radius: 6px;
          }
          .use-notebook-styles .bp3-tag-input .bp3-input-ghost {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            width: 80px;
            line-height: 20px;
          }
          .use-notebook-styles .bp3-tag-input .bp3-input-ghost:disabled,
          .use-notebook-styles .bp3-tag-input .bp3-input-ghost.bp3-disabled {
            cursor: not-allowed;
          }
          .use-notebook-styles .bp3-tag-input .bp3-button,
          .use-notebook-styles .bp3-tag-input .bp3-spinner {
            margin: 3px;
            margin-left: 0;
          }
          .use-notebook-styles .bp3-tag-input .bp3-button {
            min-width: 24px;
            min-height: 24px;
            padding: 0 7px;
          }
          .use-notebook-styles .bp3-tag-input.bp3-large {
            height: auto;
            min-height: 40px;
          }
          .use-notebook-styles .bp3-tag-input.bp3-large::before,
          .use-notebook-styles .bp3-tag-input.bp3-large > * {
            margin-right: 10px;
          }
          .use-notebook-styles .bp3-tag-input.bp3-large:empty::before,
          .use-notebook-styles .bp3-tag-input.bp3-large > :last-child {
            margin-right: 0;
          }
          .use-notebook-styles .bp3-tag-input.bp3-large .bp3-tag-input-icon {
            margin-top: 10px;
            margin-left: 5px;
          }
          .use-notebook-styles .bp3-tag-input.bp3-large .bp3-input-ghost {
            line-height: 30px;
          }
          .use-notebook-styles .bp3-tag-input.bp3-large .bp3-button {
            min-width: 30px;
            min-height: 30px;
            padding: 5px 10px;
            margin: 5px;
            margin-left: 0;
          }
          .use-notebook-styles .bp3-tag-input.bp3-large .bp3-spinner {
            margin: 8px;
            margin-left: 0;
          }
          .use-notebook-styles .bp3-tag-input.bp3-active {
            -webkit-box-shadow: 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            background-color: #ffffff;
          }
          .use-notebook-styles .bp3-tag-input.bp3-active.bp3-intent-primary {
            -webkit-box-shadow: 0 0 0 1px #106ba3,
              0 0 0 3px rgba(16, 107, 163, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-tag-input.bp3-active.bp3-intent-success {
            -webkit-box-shadow: 0 0 0 1px #0d8050,
              0 0 0 3px rgba(13, 128, 80, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-tag-input.bp3-active.bp3-intent-warning {
            -webkit-box-shadow: 0 0 0 1px #bf7326,
              0 0 0 3px rgba(191, 115, 38, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-tag-input.bp3-active.bp3-intent-danger {
            -webkit-box-shadow: 0 0 0 1px #c23030,
              0 0 0 3px rgba(194, 48, 48, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-dark .bp3-tag-input .bp3-tag-input-icon,
          .use-notebook-styles .bp3-tag-input.bp3-dark .bp3-tag-input-icon {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-tag-input .bp3-input-ghost,
          .use-notebook-styles .bp3-tag-input.bp3-dark .bp3-input-ghost {
            color: #f5f8fa;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input
            .bp3-input-ghost::-webkit-input-placeholder,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark
            .bp3-input-ghost::-webkit-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input
            .bp3-input-ghost::-moz-placeholder,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark
            .bp3-input-ghost::-moz-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input
            .bp3-input-ghost:-ms-input-placeholder,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark
            .bp3-input-ghost:-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input
            .bp3-input-ghost::-ms-input-placeholder,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark
            .bp3-input-ghost::-ms-input-placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input
            .bp3-input-ghost::placeholder,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark
            .bp3-input-ghost::placeholder {
            color: rgba(167, 182, 194, 0.6);
          }
          .use-notebook-styles .bp3-dark .bp3-tag-input.bp3-active,
          .use-notebook-styles .bp3-tag-input.bp3-dark.bp3-active {
            -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd,
              0 0 0 3px rgba(19, 124, 189, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            background-color: rgba(16, 22, 26, 0.3);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input.bp3-active.bp3-intent-primary,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-primary {
            -webkit-box-shadow: 0 0 0 1px #106ba3,
              0 0 0 3px rgba(16, 107, 163, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input.bp3-active.bp3-intent-success,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-success {
            -webkit-box-shadow: 0 0 0 1px #0d8050,
              0 0 0 3px rgba(13, 128, 80, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input.bp3-active.bp3-intent-warning,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-warning {
            -webkit-box-shadow: 0 0 0 1px #bf7326,
              0 0 0 3px rgba(191, 115, 38, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tag-input.bp3-active.bp3-intent-danger,
          .use-notebook-styles
            .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-danger {
            -webkit-box-shadow: 0 0 0 1px #c23030,
              0 0 0 3px rgba(194, 48, 48, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3),
              inset 0 0 0 1px rgba(16, 22, 26, 0.3),
              inset 0 1px 1px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-input-ghost {
            border: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background: none;
            padding: 0;
          }
          .use-notebook-styles .bp3-input-ghost::-webkit-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input-ghost::-moz-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input-ghost:-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input-ghost::-ms-input-placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input-ghost::placeholder {
            opacity: 1;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-input-ghost:focus {
            outline: none !important;
          }
          .use-notebook-styles .bp3-toast {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            position: relative !important;
            margin: 20px 0 0;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            background-color: #ffffff;
            min-width: 300px;
            max-width: 500px;
            pointer-events: all;
          }
          .use-notebook-styles .bp3-toast.bp3-toast-enter,
          .use-notebook-styles .bp3-toast.bp3-toast-appear {
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
          }
          .use-notebook-styles .bp3-toast.bp3-toast-enter-active,
          .use-notebook-styles .bp3-toast.bp3-toast-appear-active {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(
              0.54,
              1.12,
              0.38,
              1.11
            );
            transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-toast.bp3-toast-enter ~ .bp3-toast,
          .use-notebook-styles .bp3-toast.bp3-toast-appear ~ .bp3-toast {
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
          }
          .use-notebook-styles .bp3-toast.bp3-toast-enter-active ~ .bp3-toast,
          .use-notebook-styles .bp3-toast.bp3-toast-appear-active ~ .bp3-toast {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(
              0.54,
              1.12,
              0.38,
              1.11
            );
            transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-toast.bp3-toast-exit {
            opacity: 1;
            -webkit-filter: blur(0);
            filter: blur(0);
          }
          .use-notebook-styles .bp3-toast.bp3-toast-exit-active {
            opacity: 0;
            -webkit-filter: blur(10px);
            filter: blur(10px);
            -webkit-transition-property: opacity, -webkit-filter;
            transition-property: opacity, -webkit-filter;
            transition-property: opacity, filter;
            transition-property: opacity, filter, -webkit-filter;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-toast.bp3-toast-exit ~ .bp3-toast {
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
          .use-notebook-styles .bp3-toast.bp3-toast-exit-active ~ .bp3-toast {
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 50ms;
            transition-delay: 50ms;
          }
          .use-notebook-styles .bp3-toast .bp3-button-group {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding: 5px;
            padding-left: 0;
          }
          .use-notebook-styles .bp3-toast > .bp3-icon {
            margin: 12px;
            margin-right: 0;
            color: #5c7080;
          }
          .use-notebook-styles .bp3-toast.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-toast {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            background-color: #394b59;
          }
          .use-notebook-styles .bp3-toast.bp3-dark > .bp3-icon,
          .use-notebook-styles .bp3-dark .bp3-toast > .bp3-icon {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-toast[class*="bp3-intent-"] a {
            color: rgba(255, 255, 255, 0.7);
          }
          .use-notebook-styles .bp3-toast[class*="bp3-intent-"] a:hover {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-toast[class*="bp3-intent-"] > .bp3-icon {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-toast[class*="bp3-intent-"] .bp3-button,
          .use-notebook-styles
            .bp3-toast[class*="bp3-intent-"]
            .bp3-button::before,
          .use-notebook-styles
            .bp3-toast[class*="bp3-intent-"]
            .bp3-button
            .bp3-icon,
          .use-notebook-styles
            .bp3-toast[class*="bp3-intent-"]
            .bp3-button:active {
            color: rgba(255, 255, 255, 0.7) !important;
          }
          .use-notebook-styles
            .bp3-toast[class*="bp3-intent-"]
            .bp3-button:focus {
            outline-color: rgba(255, 255, 255, 0.5);
          }
          .use-notebook-styles
            .bp3-toast[class*="bp3-intent-"]
            .bp3-button:hover {
            background-color: rgba(255, 255, 255, 0.15) !important;
            color: #ffffff !important;
          }
          .use-notebook-styles
            .bp3-toast[class*="bp3-intent-"]
            .bp3-button:active {
            background-color: rgba(255, 255, 255, 0.3) !important;
            color: #ffffff !important;
          }
          .use-notebook-styles
            .bp3-toast[class*="bp3-intent-"]
            .bp3-button::after {
            background: rgba(255, 255, 255, 0.3) !important;
          }
          .use-notebook-styles .bp3-toast.bp3-intent-primary {
            background-color: #137cbd;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-toast.bp3-intent-success {
            background-color: #0f9960;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-toast.bp3-intent-warning {
            background-color: #d9822b;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-toast.bp3-intent-danger {
            background-color: #db3737;
            color: #ffffff;
          }
          .use-notebook-styles .bp3-toast-message {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            padding: 11px;
            word-break: break-word;
          }
          .use-notebook-styles .bp3-toast-container {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: fixed;
            right: 0;
            left: 0;
            z-index: 40;
            overflow: hidden;
            padding: 0 20px 20px;
            pointer-events: none;
          }
          .use-notebook-styles .bp3-toast-container.bp3-toast-container-top {
            top: 0;
            bottom: auto;
          }
          .use-notebook-styles .bp3-toast-container.bp3-toast-container-bottom {
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
            top: auto;
            bottom: 0;
          }
          .use-notebook-styles .bp3-toast-container.bp3-toast-container-left {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
          }
          .use-notebook-styles .bp3-toast-container.bp3-toast-container-right {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end;
          }
          .use-notebook-styles
            .bp3-toast-container-bottom
            .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),
          .use-notebook-styles
            .bp3-toast-container-bottom
            .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active)
            ~ .bp3-toast,
          .use-notebook-styles
            .bp3-toast-container-bottom
            .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active),
          .use-notebook-styles
            .bp3-toast-container-bottom
            .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active)
            ~ .bp3-toast,
          .use-notebook-styles
            .bp3-toast-container-bottom
            .bp3-toast.bp3-toast-leave-active
            ~ .bp3-toast {
            -webkit-transform: translateY(60px);
            transform: translateY(60px);
          }
          .use-notebook-styles .bp3-tooltip {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .use-notebook-styles .bp3-tooltip .bp3-popover-arrow {
            position: absolute;
            width: 22px;
            height: 22px;
          }
          .use-notebook-styles .bp3-tooltip .bp3-popover-arrow::before {
            margin: 4px;
            width: 14px;
            height: 14px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top
            > .bp3-tooltip {
            margin-top: -11px;
            margin-bottom: 11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top
            > .bp3-tooltip
            > .bp3-popover-arrow {
            bottom: -8px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top
            > .bp3-tooltip
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(-90deg);
            transform: rotate(-90deg);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-right
            > .bp3-tooltip {
            margin-left: 11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-right
            > .bp3-tooltip
            > .bp3-popover-arrow {
            left: -8px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-right
            > .bp3-tooltip
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom
            > .bp3-tooltip {
            margin-top: 11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom
            > .bp3-tooltip
            > .bp3-popover-arrow {
            top: -8px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom
            > .bp3-tooltip
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-left
            > .bp3-tooltip {
            margin-right: 11px;
            margin-left: -11px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-left
            > .bp3-tooltip
            > .bp3-popover-arrow {
            right: -8px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-left
            > .bp3-tooltip
            > .bp3-popover-arrow
            svg {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle
            > .bp3-tooltip
            > .bp3-popover-arrow {
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-center
            > .bp3-tooltip
            > .bp3-popover-arrow {
            right: 50%;
            -webkit-transform: translateX(50%);
            transform: translateX(50%);
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-target-attached-top
            > .bp3-tooltip
            > .bp3-popover-arrow {
            top: -0.22183px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-right.bp3-tether-target-attached-right
            > .bp3-tooltip
            > .bp3-popover-arrow {
            right: -0.22183px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-left.bp3-tether-target-attached-left
            > .bp3-tooltip
            > .bp3-popover-arrow {
            left: -0.22183px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom
            > .bp3-tooltip
            > .bp3-popover-arrow {
            bottom: -0.22183px;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-element-attached-left
            > .bp3-tooltip {
            -webkit-transform-origin: top left;
            transform-origin: top left;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-element-attached-center
            > .bp3-tooltip {
            -webkit-transform-origin: top center;
            transform-origin: top center;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-top.bp3-tether-element-attached-right
            > .bp3-tooltip {
            -webkit-transform-origin: top right;
            transform-origin: top right;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle.bp3-tether-element-attached-left
            > .bp3-tooltip {
            -webkit-transform-origin: center left;
            transform-origin: center left;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle.bp3-tether-element-attached-center
            > .bp3-tooltip {
            -webkit-transform-origin: center center;
            transform-origin: center center;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-middle.bp3-tether-element-attached-right
            > .bp3-tooltip {
            -webkit-transform-origin: center right;
            transform-origin: center right;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left
            > .bp3-tooltip {
            -webkit-transform-origin: bottom left;
            transform-origin: bottom left;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center
            > .bp3-tooltip {
            -webkit-transform-origin: bottom center;
            transform-origin: bottom center;
          }
          .use-notebook-styles
            .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right
            > .bp3-tooltip {
            -webkit-transform-origin: bottom right;
            transform-origin: bottom right;
          }
          .use-notebook-styles .bp3-tooltip .bp3-popover-content {
            background: #394b59;
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-tooltip .bp3-popover-arrow::before {
            -webkit-box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-tooltip .bp3-popover-arrow-border {
            fill: #10161a;
            fill-opacity: 0.1;
          }
          .use-notebook-styles .bp3-tooltip .bp3-popover-arrow-fill {
            fill: #394b59;
          }
          .use-notebook-styles .bp3-popover-enter > .bp3-tooltip,
          .use-notebook-styles .bp3-popover-appear > .bp3-tooltip {
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
          }
          .use-notebook-styles .bp3-popover-enter-active > .bp3-tooltip,
          .use-notebook-styles .bp3-popover-appear-active > .bp3-tooltip {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-popover-exit > .bp3-tooltip {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .use-notebook-styles .bp3-popover-exit-active > .bp3-tooltip {
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-duration: 100ms;
            transition-duration: 100ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-tooltip .bp3-popover-content {
            padding: 10px 12px;
          }
          .use-notebook-styles .bp3-tooltip.bp3-dark,
          .use-notebook-styles .bp3-dark .bp3-tooltip {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-tooltip.bp3-dark .bp3-popover-content,
          .use-notebook-styles .bp3-dark .bp3-tooltip .bp3-popover-content {
            background: #e1e8ed;
            color: #394b59;
          }
          .use-notebook-styles .bp3-tooltip.bp3-dark .bp3-popover-arrow::before,
          .use-notebook-styles
            .bp3-dark
            .bp3-tooltip
            .bp3-popover-arrow::before {
            -webkit-box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.4);
            box-shadow: 1px 1px 6px rgba(16, 22, 26, 0.4);
          }
          .use-notebook-styles .bp3-tooltip.bp3-dark .bp3-popover-arrow-border,
          .use-notebook-styles
            .bp3-dark
            .bp3-tooltip
            .bp3-popover-arrow-border {
            fill: #10161a;
            fill-opacity: 0.2;
          }
          .use-notebook-styles .bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,
          .use-notebook-styles .bp3-dark .bp3-tooltip .bp3-popover-arrow-fill {
            fill: #e1e8ed;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-primary
            .bp3-popover-content {
            background: #137cbd;
            color: #ffffff;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-primary
            .bp3-popover-arrow-fill {
            fill: #137cbd;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-success
            .bp3-popover-content {
            background: #0f9960;
            color: #ffffff;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-success
            .bp3-popover-arrow-fill {
            fill: #0f9960;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-warning
            .bp3-popover-content {
            background: #d9822b;
            color: #ffffff;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-warning
            .bp3-popover-arrow-fill {
            fill: #d9822b;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-danger
            .bp3-popover-content {
            background: #db3737;
            color: #ffffff;
          }
          .use-notebook-styles
            .bp3-tooltip.bp3-intent-danger
            .bp3-popover-arrow-fill {
            fill: #db3737;
          }
          .use-notebook-styles .bp3-tooltip-indicator {
            border-bottom: dotted 1px;
            cursor: help;
          }
          .use-notebook-styles .bp3-tree .bp3-icon,
          .use-notebook-styles .bp3-tree .bp3-icon-standard,
          .use-notebook-styles .bp3-tree .bp3-icon-large {
            color: #5c7080;
          }
          .use-notebook-styles .bp3-tree .bp3-icon.bp3-intent-primary,
          .use-notebook-styles .bp3-tree .bp3-icon-standard.bp3-intent-primary,
          .use-notebook-styles .bp3-tree .bp3-icon-large.bp3-intent-primary {
            color: #137cbd;
          }
          .use-notebook-styles .bp3-tree .bp3-icon.bp3-intent-success,
          .use-notebook-styles .bp3-tree .bp3-icon-standard.bp3-intent-success,
          .use-notebook-styles .bp3-tree .bp3-icon-large.bp3-intent-success {
            color: #0f9960;
          }
          .use-notebook-styles .bp3-tree .bp3-icon.bp3-intent-warning,
          .use-notebook-styles .bp3-tree .bp3-icon-standard.bp3-intent-warning,
          .use-notebook-styles .bp3-tree .bp3-icon-large.bp3-intent-warning {
            color: #d9822b;
          }
          .use-notebook-styles .bp3-tree .bp3-icon.bp3-intent-danger,
          .use-notebook-styles .bp3-tree .bp3-icon-standard.bp3-intent-danger,
          .use-notebook-styles .bp3-tree .bp3-icon-large.bp3-intent-danger {
            color: #db3737;
          }
          .use-notebook-styles .bp3-tree-node-list {
            margin: 0;
            padding-left: 0;
            list-style: none;
          }
          .use-notebook-styles .bp3-tree-root {
            position: relative;
            background-color: transparent;
            cursor: default;
            padding-left: 0;
          }
          .use-notebook-styles .bp3-tree-node-content-0 {
            padding-left: 0px;
          }
          .use-notebook-styles .bp3-tree-node-content-1 {
            padding-left: 23px;
          }
          .use-notebook-styles .bp3-tree-node-content-2 {
            padding-left: 46px;
          }
          .use-notebook-styles .bp3-tree-node-content-3 {
            padding-left: 69px;
          }
          .use-notebook-styles .bp3-tree-node-content-4 {
            padding-left: 92px;
          }
          .use-notebook-styles .bp3-tree-node-content-5 {
            padding-left: 115px;
          }
          .use-notebook-styles .bp3-tree-node-content-6 {
            padding-left: 138px;
          }
          .use-notebook-styles .bp3-tree-node-content-7 {
            padding-left: 161px;
          }
          .use-notebook-styles .bp3-tree-node-content-8 {
            padding-left: 184px;
          }
          .use-notebook-styles .bp3-tree-node-content-9 {
            padding-left: 207px;
          }
          .use-notebook-styles .bp3-tree-node-content-10 {
            padding-left: 230px;
          }
          .use-notebook-styles .bp3-tree-node-content-11 {
            padding-left: 253px;
          }
          .use-notebook-styles .bp3-tree-node-content-12 {
            padding-left: 276px;
          }
          .use-notebook-styles .bp3-tree-node-content-13 {
            padding-left: 299px;
          }
          .use-notebook-styles .bp3-tree-node-content-14 {
            padding-left: 322px;
          }
          .use-notebook-styles .bp3-tree-node-content-15 {
            padding-left: 345px;
          }
          .use-notebook-styles .bp3-tree-node-content-16 {
            padding-left: 368px;
          }
          .use-notebook-styles .bp3-tree-node-content-17 {
            padding-left: 391px;
          }
          .use-notebook-styles .bp3-tree-node-content-18 {
            padding-left: 414px;
          }
          .use-notebook-styles .bp3-tree-node-content-19 {
            padding-left: 437px;
          }
          .use-notebook-styles .bp3-tree-node-content-20 {
            padding-left: 460px;
          }
          .use-notebook-styles .bp3-tree-node-content {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 100%;
            height: 30px;
            padding-right: 5px;
          }
          .use-notebook-styles .bp3-tree-node-content:hover {
            background-color: rgba(191, 204, 214, 0.4);
          }
          .use-notebook-styles .bp3-tree-node-caret,
          .use-notebook-styles .bp3-tree-node-caret-none {
            min-width: 30px;
          }
          .use-notebook-styles .bp3-tree-node-caret {
            color: #5c7080;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            cursor: pointer;
            padding: 7px;
            -webkit-transition: -webkit-transform 200ms
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .use-notebook-styles .bp3-tree-node-caret:hover {
            color: #182026;
          }
          .use-notebook-styles .bp3-dark .bp3-tree-node-caret {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-tree-node-caret:hover {
            color: #f5f8fa;
          }
          .use-notebook-styles .bp3-tree-node-caret.bp3-tree-node-caret-open {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }
          .use-notebook-styles .bp3-tree-node-caret.bp3-icon-standard::before {
            content: "";
          }
          .use-notebook-styles .bp3-tree-node-icon {
            position: relative;
            margin-right: 7px;
          }
          .use-notebook-styles .bp3-tree-node-label {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            position: relative;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .bp3-tree-node-label span {
            display: inline;
          }
          .use-notebook-styles .bp3-tree-node-secondary-label {
            padding: 0 5px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles
            .bp3-tree-node-secondary-label
            .bp3-popover-wrapper,
          .use-notebook-styles
            .bp3-tree-node-secondary-label
            .bp3-popover-target {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .use-notebook-styles
            .bp3-tree-node.bp3-disabled
            .bp3-tree-node-content {
            background-color: inherit;
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles .bp3-tree-node.bp3-disabled .bp3-tree-node-caret,
          .use-notebook-styles .bp3-tree-node.bp3-disabled .bp3-tree-node-icon {
            cursor: not-allowed;
            color: rgba(92, 112, 128, 0.6);
          }
          .use-notebook-styles
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content {
            background-color: #137cbd;
          }
          .use-notebook-styles
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content,
          .use-notebook-styles
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content
            .bp3-icon,
          .use-notebook-styles
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content
            .bp3-icon-standard,
          .use-notebook-styles
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content
            .bp3-icon-large {
            color: #ffffff;
          }
          .use-notebook-styles
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content
            .bp3-tree-node-caret::before {
            color: rgba(255, 255, 255, 0.7);
          }
          .use-notebook-styles
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content
            .bp3-tree-node-caret:hover::before {
            color: #ffffff;
          }
          .use-notebook-styles .bp3-dark .bp3-tree-node-content:hover {
            background-color: rgba(92, 112, 128, 0.3);
          }
          .use-notebook-styles .bp3-dark .bp3-tree .bp3-icon,
          .use-notebook-styles .bp3-dark .bp3-tree .bp3-icon-standard,
          .use-notebook-styles .bp3-dark .bp3-tree .bp3-icon-large {
            color: #a7b6c2;
          }
          .use-notebook-styles .bp3-dark .bp3-tree .bp3-icon.bp3-intent-primary,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-standard.bp3-intent-primary,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-large.bp3-intent-primary {
            color: #137cbd;
          }
          .use-notebook-styles .bp3-dark .bp3-tree .bp3-icon.bp3-intent-success,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-standard.bp3-intent-success,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-large.bp3-intent-success {
            color: #0f9960;
          }
          .use-notebook-styles .bp3-dark .bp3-tree .bp3-icon.bp3-intent-warning,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-standard.bp3-intent-warning,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-large.bp3-intent-warning {
            color: #d9822b;
          }
          .use-notebook-styles .bp3-dark .bp3-tree .bp3-icon.bp3-intent-danger,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-standard.bp3-intent-danger,
          .use-notebook-styles
            .bp3-dark
            .bp3-tree
            .bp3-icon-large.bp3-intent-danger {
            color: #db3737;
          }
          .use-notebook-styles
            .bp3-dark
            .bp3-tree-node.bp3-tree-node-selected
            > .bp3-tree-node-content {
            background-color: #137cbd;
          }
          .use-notebook-styles .bp3-omnibar {
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
            top: 20vh;
            left: calc(50% - 250px);
            z-index: 21;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
            background-color: #ffffff;
            width: 500px;
          }
          .use-notebook-styles .bp3-omnibar.bp3-overlay-enter,
          .use-notebook-styles .bp3-omnibar.bp3-overlay-appear {
            -webkit-filter: blur(20px);
            filter: blur(20px);
            opacity: 0.2;
          }
          .use-notebook-styles .bp3-omnibar.bp3-overlay-enter-active,
          .use-notebook-styles .bp3-omnibar.bp3-overlay-appear-active {
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
            -webkit-transition-property: opacity, -webkit-filter;
            transition-property: opacity, -webkit-filter;
            transition-property: filter, opacity;
            transition-property: filter, opacity, -webkit-filter;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-omnibar.bp3-overlay-exit {
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
          }
          .use-notebook-styles .bp3-omnibar.bp3-overlay-exit-active {
            -webkit-filter: blur(20px);
            filter: blur(20px);
            opacity: 0.2;
            -webkit-transition-property: opacity, -webkit-filter;
            transition-property: opacity, -webkit-filter;
            transition-property: filter, opacity;
            transition-property: filter, opacity, -webkit-filter;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-transition-delay: 0;
            transition-delay: 0;
          }
          .use-notebook-styles .bp3-omnibar .bp3-input {
            border-radius: 0;
            background-color: transparent;
          }
          .use-notebook-styles .bp3-omnibar .bp3-input,
          .use-notebook-styles .bp3-omnibar .bp3-input:focus {
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .use-notebook-styles .bp3-omnibar .bp3-menu {
            border-radius: 0;
            -webkit-box-shadow: inset 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow: inset 0 1px 0 rgba(16, 22, 26, 0.15);
            background-color: transparent;
            max-height: calc(60vh - 40px);
            overflow: auto;
          }
          .use-notebook-styles .bp3-omnibar .bp3-menu:empty {
            display: none;
          }
          .use-notebook-styles .bp3-dark .bp3-omnibar,
          .use-notebook-styles .bp3-omnibar.bp3-dark {
            -webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2),
              0 4px 8px rgba(16, 22, 26, 0.4),
              0 18px 46px 6px rgba(16, 22, 26, 0.4);
            background-color: #30404d;
          }
          .use-notebook-styles .bp3-omnibar-overlay .bp3-overlay-backdrop {
            background-color: rgba(16, 22, 26, 0.2);
          }
          .use-notebook-styles .bp3-select-popover .bp3-popover-content {
            padding: 5px;
          }
          .use-notebook-styles .bp3-select-popover .bp3-input-group {
            margin-bottom: 0;
          }
          .use-notebook-styles .bp3-select-popover .bp3-menu {
            max-width: 400px;
            max-height: 300px;
            overflow: auto;
            padding: 0;
          }
          .use-notebook-styles .bp3-select-popover .bp3-menu:not(:first-child) {
            padding-top: 5px;
          }
          .use-notebook-styles .bp3-multi-select {
            min-width: 150px;
          }
          .use-notebook-styles .bp3-multi-select-popover .bp3-menu {
            max-width: 400px;
            max-height: 300px;
            overflow: auto;
          }
          .use-notebook-styles .bp3-select-popover .bp3-popover-content {
            padding: 5px;
          }
          .use-notebook-styles .bp3-select-popover .bp3-input-group {
            margin-bottom: 0;
          }
          .use-notebook-styles .bp3-select-popover .bp3-menu {
            max-width: 400px;
            max-height: 300px;
            overflow: auto;
            padding: 0;
          }
          .use-notebook-styles .bp3-select-popover .bp3-menu:not(:first-child) {
            padding-top: 5px;
          }
          .use-notebook-styles :root {
            --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDhoLTIuODFjLS40NS0uNzgtMS4wNy0xLjQ1LTEuODItMS45NkwxNyA0LjQxIDE1LjU5IDNsLTIuMTcgMi4xN0MxMi45NiA1LjA2IDEyLjQ5IDUgMTIgNWMtLjQ5IDAtLjk2LjA2LTEuNDEuMTdMOC40MSAzIDcgNC40MWwxLjYyIDEuNjNDNy44OCA2LjU1IDcuMjYgNy4yMiA2LjgxIDhINHYyaDIuMDljLS4wNS4zMy0uMDkuNjYtLjA5IDF2MUg0djJoMnYxYzAgLjM0LjA0LjY3LjA5IDFINHYyaDIuODFjMS4wNCAxLjc5IDIuOTcgMyA1LjE5IDNzNC4xNS0xLjIxIDUuMTktM0gyMHYtMmgtMi4wOWMuMDUtLjMzLjA5LS42Ni4wOS0xdi0xaDJ2LTJoLTJ2LTFjMC0uMzQtLjA0LS42Ny0uMDktMUgyMFY4em0tNiA4aC00di0yaDR2MnptMC00aC00di0yaDR2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
            --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
            --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1pY29uLWJyYW5kMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNmZmYiPgogICAgPHBhdGggZD0iTTEwNSAxMjcuM2g0MHYxMi44aC00MHpNNTEuMSA3N0w3NCA5OS45bC0yMy4zIDIzLjMgMTAuNSAxMC41IDIzLjMtMjMuM0w5NSA5OS45IDg0LjUgODkuNCA2MS42IDY2LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
            --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
            --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
            --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
            --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
            --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNGOUE4MjUiPgogICAgPHBhdGggZD0iTTIwLjIgMTEuOGMtMS42IDAtMS43LjUtMS43IDEgMCAuNC4xLjkuMSAxLjMuMS41LjEuOS4xIDEuMyAwIDEuNy0xLjQgMi4zLTMuNSAyLjNoLS45di0xLjloLjVjMS4xIDAgMS40IDAgMS40LS44IDAtLjMgMC0uNi0uMS0xIDAtLjQtLjEtLjgtLjEtMS4yIDAtMS4zIDAtMS44IDEuMy0yLTEuMy0uMi0xLjMtLjctMS4zLTIgMC0uNC4xLS44LjEtMS4yLjEtLjQuMS0uNy4xLTEgMC0uOC0uNC0uNy0xLjQtLjhoLS41VjQuMWguOWMyLjIgMCAzLjUuNyAzLjUgMi4zIDAgLjQtLjEuOS0uMSAxLjMtLjEuNS0uMS45LS4xIDEuMyAwIC41LjIgMSAxLjcgMXYxLjh6TTEuOCAxMC4xYzEuNiAwIDEuNy0uNSAxLjctMSAwLS40LS4xLS45LS4xLTEuMy0uMS0uNS0uMS0uOS0uMS0xLjMgMC0xLjYgMS40LTIuMyAzLjUtMi4zaC45djEuOWgtLjVjLTEgMC0xLjQgMC0xLjQuOCAwIC4zIDAgLjYuMSAxIDAgLjIuMS42LjEgMSAwIDEuMyAwIDEuOC0xLjMgMkM2IDExLjIgNiAxMS43IDYgMTNjMCAuNC0uMS44LS4xIDEuMi0uMS4zLS4xLjctLjEgMSAwIC44LjMuOCAxLjQuOGguNXYxLjloLS45Yy0yLjEgMC0zLjUtLjYtMy41LTIuMyAwLS40LjEtLjkuMS0xLjMuMS0uNS4xLS45LjEtMS4zIDAtLjUtLjItMS0xLjctMXYtMS45eiIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMy44IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY3g9IjExIiBjeT0iOC4yIiByPSIyLjEiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgPGcgY2xhc3M9ImpwLWljb24td2FybjAiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
            --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
            --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
            --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
            --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
            --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4=);
            --jp-icon-listings-info: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAuOTc4IDUwLjk3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAuOTc4IDUwLjk3ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik00My41Miw3LjQ1OEMzOC43MTEsMi42NDgsMzIuMzA3LDAsMjUuNDg5LDBDMTguNjcsMCwxMi4yNjYsMi42NDgsNy40NTgsNy40NTgNCgkJCQljLTkuOTQzLDkuOTQxLTkuOTQzLDI2LjExOSwwLDM2LjA2MmM0LjgwOSw0LjgwOSwxMS4yMTIsNy40NTYsMTguMDMxLDcuNDU4YzAsMCwwLjAwMSwwLDAuMDAyLDANCgkJCQljNi44MTYsMCwxMy4yMjEtMi42NDgsMTguMDI5LTcuNDU4YzQuODA5LTQuODA5LDcuNDU3LTExLjIxMiw3LjQ1Ny0xOC4wM0M1MC45NzcsMTguNjcsNDguMzI4LDEyLjI2Niw0My41Miw3LjQ1OHoNCgkJCQkgTTQyLjEwNiw0Mi4xMDVjLTQuNDMyLDQuNDMxLTEwLjMzMiw2Ljg3Mi0xNi42MTUsNi44NzJoLTAuMDAyYy02LjI4NS0wLjAwMS0xMi4xODctMi40NDEtMTYuNjE3LTYuODcyDQoJCQkJYy05LjE2Mi05LjE2My05LjE2Mi0yNC4wNzEsMC0zMy4yMzNDMTMuMzAzLDQuNDQsMTkuMjA0LDIsMjUuNDg5LDJjNi4yODQsMCwxMi4xODYsMi40NCwxNi42MTcsNi44NzINCgkJCQljNC40MzEsNC40MzEsNi44NzEsMTAuMzMyLDYuODcxLDE2LjYxN0M0OC45NzcsMzEuNzcyLDQ2LjUzNiwzNy42NzUsNDIuMTA2LDQyLjEwNXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjMuNTc4LDMyLjIxOGMtMC4wMjMtMS43MzQsMC4xNDMtMy4wNTksMC40OTYtMy45NzJjMC4zNTMtMC45MTMsMS4xMS0xLjk5NywyLjI3Mi0zLjI1Mw0KCQkJCWMwLjQ2OC0wLjUzNiwwLjkyMy0xLjA2MiwxLjM2Ny0xLjU3NWMwLjYyNi0wLjc1MywxLjEwNC0xLjQ3OCwxLjQzNi0yLjE3NWMwLjMzMS0wLjcwNywwLjQ5NS0xLjU0MSwwLjQ5NS0yLjUNCgkJCQljMC0xLjA5Ni0wLjI2LTIuMDg4LTAuNzc5LTIuOTc5Yy0wLjU2NS0wLjg3OS0xLjUwMS0xLjMzNi0yLjgwNi0xLjM2OWMtMS44MDIsMC4wNTctMi45ODUsMC42NjctMy41NSwxLjgzMg0KCQkJCWMtMC4zMDEsMC41MzUtMC41MDMsMS4xNDEtMC42MDcsMS44MTRjLTAuMTM5LDAuNzA3LTAuMjA3LDEuNDMyLTAuMjA3LDIuMTc0aC0yLjkzN2MtMC4wOTEtMi4yMDgsMC40MDctNC4xMTQsMS40OTMtNS43MTkNCgkJCQljMS4wNjItMS42NCwyLjg1NS0yLjQ4MSw1LjM3OC0yLjUyN2MyLjE2LDAuMDIzLDMuODc0LDAuNjA4LDUuMTQxLDEuNzU4YzEuMjc4LDEuMTYsMS45MjksMi43NjQsMS45NSw0LjgxMQ0KCQkJCWMwLDEuMTQyLTAuMTM3LDIuMTExLTAuNDEsMi45MTFjLTAuMzA5LDAuODQ1LTAuNzMxLDEuNTkzLTEuMjY4LDIuMjQzYy0wLjQ5MiwwLjY1LTEuMDY4LDEuMzE4LTEuNzMsMi4wMDINCgkJCQljLTAuNjUsMC42OTctMS4zMTMsMS40NzktMS45ODcsMi4zNDZjLTAuMjM5LDAuMzc3LTAuNDI5LDAuNzc3LTAuNTY1LDEuMTk5Yy0wLjE2LDAuOTU5LTAuMjE3LDEuOTUxLTAuMTcxLDIuOTc5DQoJCQkJQzI2LjU4OSwzMi4yMTgsMjMuNTc4LDMyLjIxOCwyMy41NzgsMzIuMjE4eiBNMjMuNTc4LDM4LjIydi0zLjQ4NGgzLjA3NnYzLjQ4NEgyMy41Nzh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
            --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
            --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
            --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMEQ0N0ExIj4KICAgIDxwYXRoIGQ9Ik0xMS4xIDYuOVY1LjhINi45YzAtLjUgMC0xLjMuMi0xLjYuNC0uNy44LTEuMSAxLjctMS40IDEuNy0uMyAyLjUtLjMgMy45LS4xIDEgLjEgMS45LjkgMS45IDEuOXY0LjJjMCAuNS0uOSAxLjYtMiAxLjZIOC44Yy0xLjUgMC0yLjQgMS40LTIuNCAyLjh2Mi4ySDQuN0MzLjUgMTUuMSAzIDE0IDMgMTMuMVY5Yy0uMS0xIC42LTIgMS44LTIgMS41LS4xIDYuMy0uMSA2LjMtLjF6Ii8+CiAgICA8cGF0aCBkPSJNMTAuOSAxNS4xdjEuMWg0LjJjMCAuNSAwIDEuMy0uMiAxLjYtLjQuNy0uOCAxLjEtMS43IDEuNC0xLjcuMy0yLjUuMy0zLjkuMS0xLS4xLTEuOS0uOS0xLjktMS45di00LjJjMC0uNS45LTEuNiAyLTEuNmgzLjhjMS41IDAgMi40LTEuNCAyLjQtMi44VjYuNmgxLjdDMTguNSA2LjkgMTkgOCAxOSA4LjlWMTNjMCAxLS43IDIuMS0xLjkgMi4xaC02LjJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
            --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
            --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
            --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
            --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
            --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
            --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
            --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiMzMzMzMzMiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uLWFjY2VudDIganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGQ9Ik01LjA1NjY0IDguNzYxNzJDNS4wNTY2NCA4LjU5NzY2IDUuMDMxMjUgOC40NTMxMiA0Ljk4MDQ3IDguMzI4MTJDNC45MzM1OSA4LjE5OTIyIDQuODU1NDcgOC4wODIwMyA0Ljc0NjA5IDcuOTc2NTZDNC42NDA2MiA3Ljg3MTA5IDQuNSA3Ljc3NTM5IDQuMzI0MjIgNy42ODk0NUM0LjE1MjM0IDcuNTk5NjEgMy45NDMzNiA3LjUxMTcyIDMuNjk3MjcgNy40MjU3OEMzLjMwMjczIDcuMjg1MTYgMi45NDMzNiA3LjEzNjcyIDIuNjE5MTQgNi45ODA0N0MyLjI5NDkyIDYuODI0MjIgMi4wMTc1OCA2LjY0MjU4IDEuNzg3MTEgNi40MzU1NUMxLjU2MDU1IDYuMjI4NTIgMS4zODQ3NyA1Ljk4ODI4IDEuMjU5NzcgNS43MTQ4NEMxLjEzNDc3IDUuNDM3NSAxLjA3MjI3IDUuMTA5MzggMS4wNzIyNyA0LjczMDQ3QzEuMDcyMjcgNC4zOTg0NCAxLjEyODkxIDQuMDk1NyAxLjI0MjE5IDMuODIyMjdDMS4zNTU0NyAzLjU0NDkyIDEuNTE1NjIgMy4zMDQ2OSAxLjcyMjY2IDMuMTAxNTZDMS45Mjk2OSAyLjg5ODQ0IDIuMTc5NjkgMi43MzQzNyAyLjQ3MjY2IDIuNjA5MzhDMi43NjU2MiAyLjQ4NDM4IDMuMDkxOCAyLjQwNDMgMy40NTExNyAyLjM2OTE0VjEuMTA5MzhINC4zODg2N1YyLjM4MDg2QzQuNzQwMjMgMi40Mjc3MyA1LjA1NjY0IDIuNTIzNDQgNS4zMzc4OSAyLjY2Nzk3QzUuNjE5MTQgMi44MTI1IDUuODU3NDIgMy4wMDE5NSA2LjA1MjczIDMuMjM2MzNDNi4yNTE5NSAzLjQ2NjggNi40MDQzIDMuNzQwMjMgNi41MDk3NyA0LjA1NjY0QzYuNjE5MTQgNC4zNjkxNCA2LjY3MzgzIDQuNzIwNyA2LjY3MzgzIDUuMTExMzNINS4wNDQ5MkM1LjA0NDkyIDQuNjM4NjcgNC45Mzc1IDQuMjgxMjUgNC43MjI2NiA0LjAzOTA2QzQuNTA3ODEgMy43OTI5NyA0LjIxNjggMy42Njk5MiAzLjg0OTYxIDMuNjY5OTJDMy42NTAzOSAzLjY2OTkyIDMuNDc2NTYgMy42OTcyNyAzLjMyODEyIDMuNzUxOTVDMy4xODM1OSAzLjgwMjczIDMuMDY0NDUgMy44NzY5NSAyLjk3MDcgMy45NzQ2MUMyLjg3Njk1IDQuMDY4MzYgMi44MDY2NCA0LjE3OTY5IDIuNzU5NzcgNC4zMDg1OUMyLjcxNjggNC40Mzc1IDIuNjk1MzEgNC41NzgxMiAyLjY5NTMxIDQuNzMwNDdDMi42OTUzMSA0Ljg4MjgxIDIuNzE2OCA1LjAxOTUzIDIuNzU5NzcgNS4xNDA2MkMyLjgwNjY0IDUuMjU3ODEgMi44ODI4MSA1LjM2NzE5IDIuOTg4MjggNS40Njg3NUMzLjA5NzY2IDUuNTcwMzEgMy4yNDAyMyA1LjY2Nzk3IDMuNDE2MDIgNS43NjE3MkMzLjU5MTggNS44NTE1NiAzLjgxMDU1IDUuOTQzMzYgNC4wNzIyNyA2LjAzNzExQzQuNDY2OCA2LjE4NTU1IDQuODI0MjIgNi4zMzk4NCA1LjE0NDUzIDYuNUM1LjQ2NDg0IDYuNjU2MjUgNS43MzgyOCA2LjgzOTg0IDUuOTY0ODQgNy4wNTA3OEM2LjE5NTMxIDcuMjU3ODEgNi4zNzEwOSA3LjUgNi40OTIxOSA3Ljc3NzM0QzYuNjE3MTkgOC4wNTA3OCA2LjY3OTY5IDguMzc1IDYuNjc5NjkgOC43NUM2LjY3OTY5IDkuMDkzNzUgNi42MjMwNSA5LjQwNDMgNi41MDk3NyA5LjY4MTY0QzYuMzk2NDggOS45NTUwOCA2LjIzNDM4IDEwLjE5MTQgNi4wMjM0NCAxMC4zOTA2QzUuODEyNSAxMC41ODk4IDUuNTU4NTkgMTAuNzUgNS4yNjE3MiAxMC44NzExQzQuOTY0ODQgMTAuOTg4MyA0LjYzMjgxIDExLjA2NDUgNC4yNjU2MiAxMS4wOTk2VjEyLjI0OEgzLjMzMzk4VjExLjA5OTZDMy4wMDE5NSAxMS4wNjg0IDIuNjc5NjkgMTAuOTk2MSAyLjM2NzE5IDEwLjg4MjhDMi4wNTQ2OSAxMC43NjU2IDEuNzc3MzQgMTAuNTk3NyAxLjUzNTE2IDEwLjM3ODlDMS4yOTY4OCAxMC4xNjAyIDEuMTA1NDcgOS44ODQ3NyAwLjk2MDkzOCA5LjU1MjczQzAuODE2NDA2IDkuMjE2OCAwLjc0NDE0MSA4LjgxNDQ1IDAuNzQ0MTQxIDguMzQ1N0gyLjM3ODkxQzIuMzc4OTEgOC42MjY5NSAyLjQxOTkyIDguODYzMjggMi41MDE5NSA5LjA1NDY5QzIuNTgzOTggOS4yNDIxOSAyLjY4OTQ1IDkuMzkyNTggMi44MTgzNiA5LjUwNTg2QzIuOTUxMTcgOS42MTUyMyAzLjEwMTU2IDkuNjkzMzYgMy4yNjk1MyA5Ljc0MDIzQzMuNDM3NSA5Ljc4NzExIDMuNjA5MzggOS44MTA1NSAzLjc4NTE2IDkuODEwNTVDNC4yMDMxMiA5LjgxMDU1IDQuNTE5NTMgOS43MTI4OSA0LjczNDM4IDkuNTE3NThDNC45NDkyMiA5LjMyMjI3IDUuMDU2NjQgOS4wNzAzMSA1LjA1NjY0IDguNzYxNzJaTTEzLjQxOCAxMi4yNzE1SDguMDc0MjJWMTFIMTMuNDE4VjEyLjI3MTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk1MjY0IDYpIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
            --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThIM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+Cjwvc3ZnPgo=);
            --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
            --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
            --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
          }
          .use-notebook-styles .jp-AddIcon {
            background-image: var(--jp-icon-add);
          }
          .use-notebook-styles .jp-BugIcon {
            background-image: var(--jp-icon-bug);
          }
          .use-notebook-styles .jp-BuildIcon {
            background-image: var(--jp-icon-build);
          }
          .use-notebook-styles .jp-CaretDownEmptyIcon {
            background-image: var(--jp-icon-caret-down-empty);
          }
          .use-notebook-styles .jp-CaretDownEmptyThinIcon {
            background-image: var(--jp-icon-caret-down-empty-thin);
          }
          .use-notebook-styles .jp-CaretDownIcon {
            background-image: var(--jp-icon-caret-down);
          }
          .use-notebook-styles .jp-CaretLeftIcon {
            background-image: var(--jp-icon-caret-left);
          }
          .use-notebook-styles .jp-CaretRightIcon {
            background-image: var(--jp-icon-caret-right);
          }
          .use-notebook-styles .jp-CaretUpEmptyThinIcon {
            background-image: var(--jp-icon-caret-up-empty-thin);
          }
          .use-notebook-styles .jp-CaretUpIcon {
            background-image: var(--jp-icon-caret-up);
          }
          .use-notebook-styles .jp-CaseSensitiveIcon {
            background-image: var(--jp-icon-case-sensitive);
          }
          .use-notebook-styles .jp-CheckIcon {
            background-image: var(--jp-icon-check);
          }
          .use-notebook-styles .jp-CircleEmptyIcon {
            background-image: var(--jp-icon-circle-empty);
          }
          .use-notebook-styles .jp-CircleIcon {
            background-image: var(--jp-icon-circle);
          }
          .use-notebook-styles .jp-ClearIcon {
            background-image: var(--jp-icon-clear);
          }
          .use-notebook-styles .jp-CloseIcon {
            background-image: var(--jp-icon-close);
          }
          .use-notebook-styles .jp-ConsoleIcon {
            background-image: var(--jp-icon-console);
          }
          .use-notebook-styles .jp-CopyIcon {
            background-image: var(--jp-icon-copy);
          }
          .use-notebook-styles .jp-CutIcon {
            background-image: var(--jp-icon-cut);
          }
          .use-notebook-styles .jp-DownloadIcon {
            background-image: var(--jp-icon-download);
          }
          .use-notebook-styles .jp-EditIcon {
            background-image: var(--jp-icon-edit);
          }
          .use-notebook-styles .jp-EllipsesIcon {
            background-image: var(--jp-icon-ellipses);
          }
          .use-notebook-styles .jp-ExtensionIcon {
            background-image: var(--jp-icon-extension);
          }
          .use-notebook-styles .jp-FastForwardIcon {
            background-image: var(--jp-icon-fast-forward);
          }
          .use-notebook-styles .jp-FileIcon {
            background-image: var(--jp-icon-file);
          }
          .use-notebook-styles .jp-FileUploadIcon {
            background-image: var(--jp-icon-file-upload);
          }
          .use-notebook-styles .jp-FilterListIcon {
            background-image: var(--jp-icon-filter-list);
          }
          .use-notebook-styles .jp-FolderIcon {
            background-image: var(--jp-icon-folder);
          }
          .use-notebook-styles .jp-Html5Icon {
            background-image: var(--jp-icon-html5);
          }
          .use-notebook-styles .jp-ImageIcon {
            background-image: var(--jp-icon-image);
          }
          .use-notebook-styles .jp-InspectorIcon {
            background-image: var(--jp-icon-inspector);
          }
          .use-notebook-styles .jp-JsonIcon {
            background-image: var(--jp-icon-json);
          }
          .use-notebook-styles .jp-JupyterFaviconIcon {
            background-image: var(--jp-icon-jupyter-favicon);
          }
          .use-notebook-styles .jp-JupyterIcon {
            background-image: var(--jp-icon-jupyter);
          }
          .use-notebook-styles .jp-JupyterlabWordmarkIcon {
            background-image: var(--jp-icon-jupyterlab-wordmark);
          }
          .use-notebook-styles .jp-KernelIcon {
            background-image: var(--jp-icon-kernel);
          }
          .use-notebook-styles .jp-KeyboardIcon {
            background-image: var(--jp-icon-keyboard);
          }
          .use-notebook-styles .jp-LauncherIcon {
            background-image: var(--jp-icon-launcher);
          }
          .use-notebook-styles .jp-LineFormIcon {
            background-image: var(--jp-icon-line-form);
          }
          .use-notebook-styles .jp-LinkIcon {
            background-image: var(--jp-icon-link);
          }
          .use-notebook-styles .jp-ListIcon {
            background-image: var(--jp-icon-list);
          }
          .use-notebook-styles .jp-ListingsInfoIcon {
            background-image: var(--jp-icon-listings-info);
          }
          .use-notebook-styles .jp-MarkdownIcon {
            background-image: var(--jp-icon-markdown);
          }
          .use-notebook-styles .jp-NewFolderIcon {
            background-image: var(--jp-icon-new-folder);
          }
          .use-notebook-styles .jp-NotTrustedIcon {
            background-image: var(--jp-icon-not-trusted);
          }
          .use-notebook-styles .jp-NotebookIcon {
            background-image: var(--jp-icon-notebook);
          }
          .use-notebook-styles .jp-PaletteIcon {
            background-image: var(--jp-icon-palette);
          }
          .use-notebook-styles .jp-PasteIcon {
            background-image: var(--jp-icon-paste);
          }
          .use-notebook-styles .jp-PythonIcon {
            background-image: var(--jp-icon-python);
          }
          .use-notebook-styles .jp-RKernelIcon {
            background-image: var(--jp-icon-r-kernel);
          }
          .use-notebook-styles .jp-ReactIcon {
            background-image: var(--jp-icon-react);
          }
          .use-notebook-styles .jp-RefreshIcon {
            background-image: var(--jp-icon-refresh);
          }
          .use-notebook-styles .jp-RegexIcon {
            background-image: var(--jp-icon-regex);
          }
          .use-notebook-styles .jp-RunIcon {
            background-image: var(--jp-icon-run);
          }
          .use-notebook-styles .jp-RunningIcon {
            background-image: var(--jp-icon-running);
          }
          .use-notebook-styles .jp-SaveIcon {
            background-image: var(--jp-icon-save);
          }
          .use-notebook-styles .jp-SearchIcon {
            background-image: var(--jp-icon-search);
          }
          .use-notebook-styles .jp-SettingsIcon {
            background-image: var(--jp-icon-settings);
          }
          .use-notebook-styles .jp-SpreadsheetIcon {
            background-image: var(--jp-icon-spreadsheet);
          }
          .use-notebook-styles .jp-StopIcon {
            background-image: var(--jp-icon-stop);
          }
          .use-notebook-styles .jp-TabIcon {
            background-image: var(--jp-icon-tab);
          }
          .use-notebook-styles .jp-TerminalIcon {
            background-image: var(--jp-icon-terminal);
          }
          .use-notebook-styles .jp-TextEditorIcon {
            background-image: var(--jp-icon-text-editor);
          }
          .use-notebook-styles .jp-TrustedIcon {
            background-image: var(--jp-icon-trusted);
          }
          .use-notebook-styles .jp-UndoIcon {
            background-image: var(--jp-icon-undo);
          }
          .use-notebook-styles .jp-VegaIcon {
            background-image: var(--jp-icon-vega);
          }
          .use-notebook-styles .jp-YamlIcon {
            background-image: var(--jp-icon-yaml);
          }
          .use-notebook-styles :root {
            --jp-icon-search-white: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
          }
          .use-notebook-styles .jp-Icon,
          .use-notebook-styles .jp-MaterialIcon {
            background-position: center;
            background-repeat: no-repeat;
            background-size: 16px;
            min-width: 16px;
            min-height: 16px;
          }
          .use-notebook-styles .jp-Icon-cover {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .use-notebook-styles .jp-Icon-16 {
            background-size: 16px;
            min-width: 16px;
            min-height: 16px;
          }
          .use-notebook-styles .jp-Icon-18 {
            background-size: 18px;
            min-width: 18px;
            min-height: 18px;
          }
          .use-notebook-styles .jp-Icon-20 {
            background-size: 20px;
            min-width: 20px;
            min-height: 20px;
          }
          .use-notebook-styles .jp-icon0[fill] {
            fill: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles .jp-icon1[fill] {
            fill: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles .jp-icon2[fill] {
            fill: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles .jp-icon3[fill] {
            fill: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles .jp-icon4[fill] {
            fill: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles .jp-icon0[stroke] {
            stroke: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles .jp-icon1[stroke] {
            stroke: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles .jp-icon2[stroke] {
            stroke: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles .jp-icon3[stroke] {
            stroke: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles .jp-icon4[stroke] {
            stroke: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles .jp-icon-accent0[fill] {
            fill: var(--jp-layout-color0);
          }
          .use-notebook-styles .jp-icon-accent1[fill] {
            fill: var(--jp-layout-color1);
          }
          .use-notebook-styles .jp-icon-accent2[fill] {
            fill: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-icon-accent3[fill] {
            fill: var(--jp-layout-color3);
          }
          .use-notebook-styles .jp-icon-accent4[fill] {
            fill: var(--jp-layout-color4);
          }
          .use-notebook-styles .jp-icon-accent0[stroke] {
            stroke: var(--jp-layout-color0);
          }
          .use-notebook-styles .jp-icon-accent1[stroke] {
            stroke: var(--jp-layout-color1);
          }
          .use-notebook-styles .jp-icon-accent2[stroke] {
            stroke: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-icon-accent3[stroke] {
            stroke: var(--jp-layout-color3);
          }
          .use-notebook-styles .jp-icon-accent4[stroke] {
            stroke: var(--jp-layout-color4);
          }
          .use-notebook-styles .jp-icon-none[fill] {
            fill: none;
          }
          .use-notebook-styles .jp-icon-none[stroke] {
            stroke: none;
          }
          .use-notebook-styles .jp-icon-brand0[fill] {
            fill: var(--jp-brand-color0);
          }
          .use-notebook-styles .jp-icon-brand1[fill] {
            fill: var(--jp-brand-color1);
          }
          .use-notebook-styles .jp-icon-brand2[fill] {
            fill: var(--jp-brand-color2);
          }
          .use-notebook-styles .jp-icon-brand3[fill] {
            fill: var(--jp-brand-color3);
          }
          .use-notebook-styles .jp-icon-brand4[fill] {
            fill: var(--jp-brand-color4);
          }
          .use-notebook-styles .jp-icon-brand0[stroke] {
            stroke: var(--jp-brand-color0);
          }
          .use-notebook-styles .jp-icon-brand1[stroke] {
            stroke: var(--jp-brand-color1);
          }
          .use-notebook-styles .jp-icon-brand2[stroke] {
            stroke: var(--jp-brand-color2);
          }
          .use-notebook-styles .jp-icon-brand3[stroke] {
            stroke: var(--jp-brand-color3);
          }
          .use-notebook-styles .jp-icon-brand4[stroke] {
            stroke: var(--jp-brand-color4);
          }
          .use-notebook-styles .jp-icon-warn0[fill] {
            fill: var(--jp-warn-color0);
          }
          .use-notebook-styles .jp-icon-warn1[fill] {
            fill: var(--jp-warn-color1);
          }
          .use-notebook-styles .jp-icon-warn2[fill] {
            fill: var(--jp-warn-color2);
          }
          .use-notebook-styles .jp-icon-warn3[fill] {
            fill: var(--jp-warn-color3);
          }
          .use-notebook-styles .jp-icon-warn0[stroke] {
            stroke: var(--jp-warn-color0);
          }
          .use-notebook-styles .jp-icon-warn1[stroke] {
            stroke: var(--jp-warn-color1);
          }
          .use-notebook-styles .jp-icon-warn2[stroke] {
            stroke: var(--jp-warn-color2);
          }
          .use-notebook-styles .jp-icon-warn3[stroke] {
            stroke: var(--jp-warn-color3);
          }
          .use-notebook-styles .jp-icon-contrast0[fill] {
            fill: var(--jp-icon-contrast-color0);
          }
          .use-notebook-styles .jp-icon-contrast1[fill] {
            fill: var(--jp-icon-contrast-color1);
          }
          .use-notebook-styles .jp-icon-contrast2[fill] {
            fill: var(--jp-icon-contrast-color2);
          }
          .use-notebook-styles .jp-icon-contrast3[fill] {
            fill: var(--jp-icon-contrast-color3);
          }
          .use-notebook-styles .jp-icon-contrast0[stroke] {
            stroke: var(--jp-icon-contrast-color0);
          }
          .use-notebook-styles .jp-icon-contrast1[stroke] {
            stroke: var(--jp-icon-contrast-color1);
          }
          .use-notebook-styles .jp-icon-contrast2[stroke] {
            stroke: var(--jp-icon-contrast-color2);
          }
          .use-notebook-styles .jp-icon-contrast3[stroke] {
            stroke: var(--jp-icon-contrast-color3);
          }
          .use-notebook-styles
            #setting-editor
            .jp-PluginList
            .jp-mod-selected
            .jp-icon-selectable[fill] {
            fill: #fff;
          }
          .use-notebook-styles
            #setting-editor
            .jp-PluginList
            .jp-mod-selected
            .jp-icon-selectable-inverse[fill] {
            fill: var(--jp-brand-color1);
          }
          .use-notebook-styles
            .jp-DirListing-item.jp-mod-selected
            .jp-icon-selectable[fill] {
            fill: #fff;
          }
          .use-notebook-styles
            .jp-DirListing-item.jp-mod-selected
            .jp-icon-selectable-inverse[fill] {
            fill: var(--jp-brand-color1);
          }
          .use-notebook-styles
            #tab-manager
            .lm-TabBar-tab.jp-mod-active
            .jp-icon-selectable[fill] {
            fill: #fff;
          }
          .use-notebook-styles
            #tab-manager
            .lm-TabBar-tab.jp-mod-active
            .jp-icon-selectable-inverse[fill] {
            fill: var(--jp-brand-color1);
          }
          .use-notebook-styles
            #tab-manager
            .lm-TabBar-tab.jp-mod-active
            .jp-icon-hover
            :hover
            .jp-icon-selectable[fill] {
            fill: var(--jp-brand-color1);
          }
          .use-notebook-styles
            #tab-manager
            .lm-TabBar-tab.jp-mod-active
            .jp-icon-hover
            :hover
            .jp-icon-selectable-inverse[fill] {
            fill: #fff;
          }
          .use-notebook-styles
            #tab-manager
            .lm-TabBar-tab.jp-mod-dirty
            > .lm-TabBar-tabCloseIcon
            > :not(:hover)
            > .jp-icon3[fill] {
            fill: none;
          }
          .use-notebook-styles
            #tab-manager
            .lm-TabBar-tab.jp-mod-dirty
            > .lm-TabBar-tabCloseIcon
            > :not(:hover)
            > .jp-icon-busy[fill] {
            fill: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles
            #tab-manager
            .lm-TabBar-tab.jp-mod-dirty.jp-mod-active
            > .lm-TabBar-tabCloseIcon
            > :not(:hover)
            > .jp-icon-busy[fill] {
            fill: #fff;
          }
          .use-notebook-styles
            .lm-DockPanel-tabBar
            .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
            > .lm-TabBar-tabCloseIcon
            > :not(:hover)
            > .jp-icon3[fill] {
            fill: none;
          }
          .use-notebook-styles
            .lm-DockPanel-tabBar
            .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
            > .lm-TabBar-tabCloseIcon
            > :not(:hover)
            > .jp-icon-busy[fill] {
            fill: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles
            #jp-main-statusbar
            .jp-mod-selected
            .jp-icon-selectable[fill] {
            fill: #fff;
          }
          .use-notebook-styles
            #jp-main-statusbar
            .jp-mod-selected
            .jp-icon-selectable-inverse[fill] {
            fill: var(--jp-brand-color1);
          }
          .use-notebook-styles :root {
            --jp-warn-color0: var(--md-orange-700);
          }
          .use-notebook-styles .jp-DragIcon {
            margin-right: 4px;
          }
          .use-notebook-styles .jp-icon-alt .jp-icon0[fill] {
            fill: var(--jp-layout-color0);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon1[fill] {
            fill: var(--jp-layout-color1);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon2[fill] {
            fill: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon3[fill] {
            fill: var(--jp-layout-color3);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon4[fill] {
            fill: var(--jp-layout-color4);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon0[stroke] {
            stroke: var(--jp-layout-color0);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon1[stroke] {
            stroke: var(--jp-layout-color1);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon2[stroke] {
            stroke: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon3[stroke] {
            stroke: var(--jp-layout-color3);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon4[stroke] {
            stroke: var(--jp-layout-color4);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent0[fill] {
            fill: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent1[fill] {
            fill: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent2[fill] {
            fill: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent3[fill] {
            fill: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent4[fill] {
            fill: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent0[stroke] {
            stroke: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent1[stroke] {
            stroke: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent2[stroke] {
            stroke: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent3[stroke] {
            stroke: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles .jp-icon-alt .jp-icon-accent4[stroke] {
            stroke: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles .jp-icon-hoverShow:not(:hover) svg {
            display: none !important;
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon0-hover[fill] {
            fill: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon1-hover[fill] {
            fill: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon2-hover[fill] {
            fill: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon3-hover[fill] {
            fill: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon4-hover[fill] {
            fill: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon0-hover[stroke] {
            stroke: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon1-hover[stroke] {
            stroke: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon2-hover[stroke] {
            stroke: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon3-hover[stroke] {
            stroke: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon4-hover[stroke] {
            stroke: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent0-hover[fill] {
            fill: var(--jp-layout-color0);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent1-hover[fill] {
            fill: var(--jp-layout-color1);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent2-hover[fill] {
            fill: var(--jp-layout-color2);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent3-hover[fill] {
            fill: var(--jp-layout-color3);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent4-hover[fill] {
            fill: var(--jp-layout-color4);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent0-hover[stroke] {
            stroke: var(--jp-layout-color0);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent1-hover[stroke] {
            stroke: var(--jp-layout-color1);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent2-hover[stroke] {
            stroke: var(--jp-layout-color2);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent3-hover[stroke] {
            stroke: var(--jp-layout-color3);
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-accent4-hover[stroke] {
            stroke: var(--jp-layout-color4);
          }
          .use-notebook-styles .jp-icon-hover :hover .jp-icon-none-hover[fill] {
            fill: none;
          }
          .use-notebook-styles
            .jp-icon-hover
            :hover
            .jp-icon-none-hover[stroke] {
            stroke: none;
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon0-hover[fill] {
            fill: var(--jp-layout-color0);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon1-hover[fill] {
            fill: var(--jp-layout-color1);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon2-hover[fill] {
            fill: var(--jp-layout-color2);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon3-hover[fill] {
            fill: var(--jp-layout-color3);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon4-hover[fill] {
            fill: var(--jp-layout-color4);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon0-hover[stroke] {
            stroke: var(--jp-layout-color0);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon1-hover[stroke] {
            stroke: var(--jp-layout-color1);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon2-hover[stroke] {
            stroke: var(--jp-layout-color2);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon3-hover[stroke] {
            stroke: var(--jp-layout-color3);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon4-hover[stroke] {
            stroke: var(--jp-layout-color4);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent0-hover[fill] {
            fill: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent1-hover[fill] {
            fill: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent2-hover[fill] {
            fill: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent3-hover[fill] {
            fill: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent4-hover[fill] {
            fill: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent0-hover[stroke] {
            stroke: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent1-hover[stroke] {
            stroke: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent2-hover[stroke] {
            stroke: var(--jp-inverse-layout-color2);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent3-hover[stroke] {
            stroke: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles
            .jp-icon-hover.jp-icon-alt
            :hover
            .jp-icon-accent4-hover[stroke] {
            stroke: var(--jp-inverse-layout-color4);
          }
          .use-notebook-styles .jp-Button {
            border-radius: var(--jp-border-radius);
            padding: 0px 12px;
            font-size: var(--jp-ui-font-size1);
          }
          .use-notebook-styles button.jp-Button.bp3-button.bp3-minimal:hover {
            background-color: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-Button.minimal {
            color: unset !important;
          }
          .use-notebook-styles .jp-Button.jp-ToolbarButtonComponent {
            text-transform: none;
          }
          .use-notebook-styles .jp-InputGroup input {
            box-sizing: border-box;
            border-radius: 0;
            background-color: transparent;
            color: var(--jp-ui-font-color0);
            box-shadow: inset 0 0 0 var(--jp-border-width)
              var(--jp-input-border-color);
          }
          .use-notebook-styles .jp-InputGroup input:focus {
            box-shadow: inset 0 0 0 var(--jp-border-width)
                var(--jp-input-active-box-shadow-color),
              inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
          }
          .use-notebook-styles .jp-InputGroup input::placeholder,
          .use-notebook-styles input::placeholder {
            color: var(--jp-ui-font-color3);
          }
          .use-notebook-styles .jp-BPIcon {
            display: inline-block;
            vertical-align: middle;
            margin: auto;
          }
          .use-notebook-styles .bp3-icon.jp-BPIcon > svg:not([fill]) {
            fill: var(--jp-inverse-layout-color3);
          }
          .use-notebook-styles .jp-InputGroupAction {
            padding: 6px;
          }
          .use-notebook-styles .jp-HTMLSelect.jp-DefaultStyle select {
            background-color: initial;
            border: none;
            border-radius: 0;
            box-shadow: none;
            color: var(--jp-ui-font-color0);
            display: block;
            font-size: var(--jp-ui-font-size1);
            height: 24px;
            line-height: 14px;
            padding: 0 25px 0 10px;
            text-align: left;
            -moz-appearance: none;
            -webkit-appearance: none;
          }
          .use-notebook-styles .jp-HTMLSelect.jp-DefaultStyle select:hover,
          .use-notebook-styles .jp-HTMLSelect.jp-DefaultStyle select > option {
            background-color: var(--jp-layout-color2);
            color: var(--jp-ui-font-color0);
          }
          .use-notebook-styles select {
            box-sizing: border-box;
          }
          .use-notebook-styles .jp-Collapse {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            border-top: 1px solid var(--jp-border-color2);
            border-bottom: 1px solid var(--jp-border-color2);
          }
          .use-notebook-styles .jp-Collapse-header {
            padding: 1px 12px;
            color: var(--jp-ui-font-color1);
            background-color: var(--jp-layout-color1);
            font-size: var(--jp-ui-font-size2);
          }
          .use-notebook-styles .jp-Collapse-header:hover {
            background-color: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-Collapse-contents {
            padding: 0px 12px 0px 12px;
            background-color: var(--jp-layout-color1);
            color: var(--jp-ui-font-color1);
            overflow: auto;
          }
          .use-notebook-styles :root {
            --jp-private-commandpalette-search-height: 28px;
          }
          .use-notebook-styles .lm-CommandPalette {
            padding-bottom: 0px;
            color: var(--jp-ui-font-color1);
            background: var(--jp-layout-color1);
            font-size: var(--jp-ui-font-size1);
          }
          .use-notebook-styles .lm-CommandPalette-search {
            padding: 4px;
            background-color: var(--jp-layout-color1);
            z-index: 2;
          }
          .use-notebook-styles .lm-CommandPalette-wrapper {
            overflow: overlay;
            padding: 0px 9px;
            background-color: var(--jp-input-active-background);
            height: 30px;
            box-shadow: inset 0 0 0 var(--jp-border-width)
              var(--jp-input-border-color);
          }
          .use-notebook-styles
            .lm-CommandPalette.lm-mod-focused
            .lm-CommandPalette-wrapper {
            box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
              inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
          }
          .use-notebook-styles .lm-CommandPalette-wrapper::after {
            content: " ";
            color: white;
            background-color: var(--jp-brand-color1);
            position: absolute;
            top: 4px;
            right: 4px;
            height: 30px;
            width: 10px;
            padding: 0px 10px;
            background-image: var(--jp-icon-search-white);
            background-size: 20px;
            background-repeat: no-repeat;
            background-position: center;
          }
          .use-notebook-styles .lm-CommandPalette-input {
            background: transparent;
            width: calc(100% - 18px);
            float: left;
            border: none;
            outline: none;
            font-size: var(--jp-ui-font-size1);
            color: var(--jp-ui-font-color0);
            line-height: var(--jp-private-commandpalette-search-height);
          }
          .use-notebook-styles
            .lm-CommandPalette-input::-webkit-input-placeholder,
          .use-notebook-styles .lm-CommandPalette-input::-moz-placeholder,
          .use-notebook-styles .lm-CommandPalette-input:-ms-input-placeholder {
            color: var(--jp-ui-font-color3);
            font-size: var(--jp-ui-font-size1);
          }
          .use-notebook-styles .lm-CommandPalette-header:first-child {
            margin-top: 0px;
          }
          .use-notebook-styles .lm-CommandPalette-header {
            border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
            color: var(--jp-ui-font-color1);
            cursor: pointer;
            display: flex;
            font-size: var(--jp-ui-font-size0);
            font-weight: 600;
            letter-spacing: 1px;
            margin-top: 8px;
            padding: 8px 0 8px 12px;
            text-transform: uppercase;
          }
          .use-notebook-styles .lm-CommandPalette-header.lm-mod-active {
            background: var(--jp-layout-color2);
          }
          .use-notebook-styles .lm-CommandPalette-header > mark {
            background-color: transparent;
            font-weight: bold;
            color: var(--jp-ui-font-color1);
          }
          .use-notebook-styles .lm-CommandPalette-item {
            padding: 4px 12px 4px 4px;
            color: var(--jp-ui-font-color1);
            font-size: var(--jp-ui-font-size1);
            font-weight: 400;
            display: flex;
          }
          .use-notebook-styles .lm-CommandPalette-item.lm-mod-disabled {
            color: var(--jp-ui-font-color3);
          }
          .use-notebook-styles .lm-CommandPalette-item.lm-mod-active {
            background: var(--jp-layout-color3);
          }
          .use-notebook-styles
            .lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
            background: var(--jp-layout-color4);
          }
          .use-notebook-styles
            .lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
            background: var(--jp-layout-color2);
          }
          .use-notebook-styles .lm-CommandPalette-itemContent {
            overflow: hidden;
          }
          .use-notebook-styles .lm-CommandPalette-itemLabel > mark {
            color: var(--jp-ui-font-color0);
            background-color: transparent;
            font-weight: bold;
          }
          .use-notebook-styles .lm-CommandPalette-item.lm-mod-disabled mark {
            color: var(--jp-ui-font-color3);
          }
          .use-notebook-styles
            .lm-CommandPalette-item
            .lm-CommandPalette-itemIcon {
            margin: 0 4px 0 0;
            position: relative;
            width: 16px;
            top: 2px;
            flex: 0 0 auto;
          }
          .use-notebook-styles
            .lm-CommandPalette-item.lm-mod-disabled
            .lm-CommandPalette-itemIcon {
            opacity: 0.4;
          }
          .use-notebook-styles
            .lm-CommandPalette-item
            .lm-CommandPalette-itemShortcut {
            flex: 0 0 auto;
          }
          .use-notebook-styles .lm-CommandPalette-itemCaption {
            display: none;
          }
          .use-notebook-styles .lm-CommandPalette-content {
            background-color: var(--jp-layout-color1);
          }
          .use-notebook-styles .lm-CommandPalette-content:empty:after {
            content: "No results";
            margin: auto;
            margin-top: 20px;
            width: 100px;
            display: block;
            font-size: var(--jp-ui-font-size2);
            font-family: var(--jp-ui-font-family);
            font-weight: lighter;
          }
          .use-notebook-styles .lm-CommandPalette-emptyMessage {
            text-align: center;
            margin-top: 24px;
            line-height: 1.32;
            padding: 0px 8px;
            color: var(--jp-content-font-color3);
          }
          .use-notebook-styles .jp-Dialog {
            position: absolute;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            top: 0px;
            left: 0px;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: var(--jp-dialog-background);
          }
          .use-notebook-styles .jp-Dialog-content {
            display: flex;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            background: var(--jp-layout-color1);
            padding: 24px;
            padding-bottom: 12px;
            min-width: 300px;
            min-height: 150px;
            max-width: 1000px;
            max-height: 500px;
            box-sizing: border-box;
            box-shadow: var(--jp-elevation-z20);
            word-wrap: break-word;
            border-radius: var(--jp-border-radius);
            font-size: var(--jp-ui-font-size1);
            color: var(--jp-ui-font-color1);
          }
          .use-notebook-styles .jp-Dialog-button {
            overflow: visible;
          }
          .use-notebook-styles button.jp-Dialog-button:focus {
            outline: 1px solid var(--jp-brand-color1);
            outline-offset: 4px;
            -moz-outline-radius: 0px;
          }
          .use-notebook-styles button.jp-Dialog-button:focus::-moz-focus-inner {
            border: 0;
          }
          .use-notebook-styles .jp-Dialog-header {
            flex: 0 0 auto;
            padding-bottom: 12px;
            font-size: var(--jp-ui-font-size3);
            font-weight: 400;
            color: var(--jp-ui-font-color0);
          }
          .use-notebook-styles .jp-Dialog-body {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            font-size: var(--jp-ui-font-size1);
            background: var(--jp-layout-color1);
            overflow: auto;
          }
          .use-notebook-styles .jp-Dialog-footer {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            flex: 0 0 auto;
            margin-left: -12px;
            margin-right: -12px;
            padding: 12px;
          }
          .use-notebook-styles .jp-Dialog-title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .use-notebook-styles .jp-Dialog-body > .jp-select-wrapper {
            width: 100%;
          }
          .use-notebook-styles .jp-Dialog-body > button {
            padding: 0px 16px;
          }
          .use-notebook-styles .jp-Dialog-body > label {
            line-height: 1.4;
            color: var(--jp-ui-font-color0);
          }
          .use-notebook-styles
            .jp-Dialog-button.jp-mod-styled:not(:last-child) {
            margin-right: 12px;
          }
          .use-notebook-styles .jp-HoverBox {
            position: fixed;
          }
          .use-notebook-styles .jp-HoverBox.jp-mod-outofview {
            display: none;
          }
          .use-notebook-styles .jp-IFrame {
            width: 100%;
            height: 100%;
          }
          .use-notebook-styles .jp-IFrame > iframe {
            border: none;
          }
          .use-notebook-styles body.lm-mod-override-cursor .jp-IFrame {
            position: relative;
          }
          .use-notebook-styles body.lm-mod-override-cursor .jp-IFrame:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: transparent;
          }
          .use-notebook-styles .jp-MainAreaWidget > :focus {
            outline: none;
          }
          .use-notebook-styles :root {
            --md-red-50: #ffebee;
            --md-red-100: #ffcdd2;
            --md-red-200: #ef9a9a;
            --md-red-300: #e57373;
            --md-red-400: #ef5350;
            --md-red-500: #f44336;
            --md-red-600: #e53935;
            --md-red-700: #d32f2f;
            --md-red-800: #c62828;
            --md-red-900: #b71c1c;
            --md-red-A100: #ff8a80;
            --md-red-A200: #ff5252;
            --md-red-A400: #ff1744;
            --md-red-A700: #d50000;
            --md-pink-50: #fce4ec;
            --md-pink-100: #f8bbd0;
            --md-pink-200: #f48fb1;
            --md-pink-300: #f06292;
            --md-pink-400: #ec407a;
            --md-pink-500: #e91e63;
            --md-pink-600: #d81b60;
            --md-pink-700: #c2185b;
            --md-pink-800: #ad1457;
            --md-pink-900: #880e4f;
            --md-pink-A100: #ff80ab;
            --md-pink-A200: #ff4081;
            --md-pink-A400: #f50057;
            --md-pink-A700: #c51162;
            --md-purple-50: #f3e5f5;
            --md-purple-100: #e1bee7;
            --md-purple-200: #ce93d8;
            --md-purple-300: #ba68c8;
            --md-purple-400: #ab47bc;
            --md-purple-500: #9c27b0;
            --md-purple-600: #8e24aa;
            --md-purple-700: #7b1fa2;
            --md-purple-800: #6a1b9a;
            --md-purple-900: #4a148c;
            --md-purple-A100: #ea80fc;
            --md-purple-A200: #e040fb;
            --md-purple-A400: #d500f9;
            --md-purple-A700: #aa00ff;
            --md-deep-purple-50: #ede7f6;
            --md-deep-purple-100: #d1c4e9;
            --md-deep-purple-200: #b39ddb;
            --md-deep-purple-300: #9575cd;
            --md-deep-purple-400: #7e57c2;
            --md-deep-purple-500: #673ab7;
            --md-deep-purple-600: #5e35b1;
            --md-deep-purple-700: #512da8;
            --md-deep-purple-800: #4527a0;
            --md-deep-purple-900: #311b92;
            --md-deep-purple-A100: #b388ff;
            --md-deep-purple-A200: #7c4dff;
            --md-deep-purple-A400: #651fff;
            --md-deep-purple-A700: #6200ea;
            --md-indigo-50: #e8eaf6;
            --md-indigo-100: #c5cae9;
            --md-indigo-200: #9fa8da;
            --md-indigo-300: #7986cb;
            --md-indigo-400: #5c6bc0;
            --md-indigo-500: #3f51b5;
            --md-indigo-600: #3949ab;
            --md-indigo-700: #303f9f;
            --md-indigo-800: #283593;
            --md-indigo-900: #1a237e;
            --md-indigo-A100: #8c9eff;
            --md-indigo-A200: #536dfe;
            --md-indigo-A400: #3d5afe;
            --md-indigo-A700: #304ffe;
            --md-blue-50: #e3f2fd;
            --md-blue-100: #bbdefb;
            --md-blue-200: #90caf9;
            --md-blue-300: #64b5f6;
            --md-blue-400: #42a5f5;
            --md-blue-500: #2196f3;
            --md-blue-600: #1e88e5;
            --md-blue-700: #1976d2;
            --md-blue-800: #1565c0;
            --md-blue-900: #0d47a1;
            --md-blue-A100: #82b1ff;
            --md-blue-A200: #448aff;
            --md-blue-A400: #2979ff;
            --md-blue-A700: #2962ff;
            --md-light-blue-50: #e1f5fe;
            --md-light-blue-100: #b3e5fc;
            --md-light-blue-200: #81d4fa;
            --md-light-blue-300: #4fc3f7;
            --md-light-blue-400: #29b6f6;
            --md-light-blue-500: #03a9f4;
            --md-light-blue-600: #039be5;
            --md-light-blue-700: #0288d1;
            --md-light-blue-800: #0277bd;
            --md-light-blue-900: #01579b;
            --md-light-blue-A100: #80d8ff;
            --md-light-blue-A200: #40c4ff;
            --md-light-blue-A400: #00b0ff;
            --md-light-blue-A700: #0091ea;
            --md-cyan-50: #e0f7fa;
            --md-cyan-100: #b2ebf2;
            --md-cyan-200: #80deea;
            --md-cyan-300: #4dd0e1;
            --md-cyan-400: #26c6da;
            --md-cyan-500: #00bcd4;
            --md-cyan-600: #00acc1;
            --md-cyan-700: #0097a7;
            --md-cyan-800: #00838f;
            --md-cyan-900: #006064;
            --md-cyan-A100: #84ffff;
            --md-cyan-A200: #18ffff;
            --md-cyan-A400: #00e5ff;
            --md-cyan-A700: #00b8d4;
            --md-teal-50: #e0f2f1;
            --md-teal-100: #b2dfdb;
            --md-teal-200: #80cbc4;
            --md-teal-300: #4db6ac;
            --md-teal-400: #26a69a;
            --md-teal-500: #009688;
            --md-teal-600: #00897b;
            --md-teal-700: #00796b;
            --md-teal-800: #00695c;
            --md-teal-900: #004d40;
            --md-teal-A100: #a7ffeb;
            --md-teal-A200: #64ffda;
            --md-teal-A400: #1de9b6;
            --md-teal-A700: #00bfa5;
            --md-green-50: #e8f5e9;
            --md-green-100: #c8e6c9;
            --md-green-200: #a5d6a7;
            --md-green-300: #81c784;
            --md-green-400: #66bb6a;
            --md-green-500: #4caf50;
            --md-green-600: #43a047;
            --md-green-700: #388e3c;
            --md-green-800: #2e7d32;
            --md-green-900: #1b5e20;
            --md-green-A100: #b9f6ca;
            --md-green-A200: #69f0ae;
            --md-green-A400: #00e676;
            --md-green-A700: #00c853;
            --md-light-green-50: #f1f8e9;
            --md-light-green-100: #dcedc8;
            --md-light-green-200: #c5e1a5;
            --md-light-green-300: #aed581;
            --md-light-green-400: #9ccc65;
            --md-light-green-500: #8bc34a;
            --md-light-green-600: #7cb342;
            --md-light-green-700: #689f38;
            --md-light-green-800: #558b2f;
            --md-light-green-900: #33691e;
            --md-light-green-A100: #ccff90;
            --md-light-green-A200: #b2ff59;
            --md-light-green-A400: #76ff03;
            --md-light-green-A700: #64dd17;
            --md-lime-50: #f9fbe7;
            --md-lime-100: #f0f4c3;
            --md-lime-200: #e6ee9c;
            --md-lime-300: #dce775;
            --md-lime-400: #d4e157;
            --md-lime-500: #cddc39;
            --md-lime-600: #c0ca33;
            --md-lime-700: #afb42b;
            --md-lime-800: #9e9d24;
            --md-lime-900: #827717;
            --md-lime-A100: #f4ff81;
            --md-lime-A200: #eeff41;
            --md-lime-A400: #c6ff00;
            --md-lime-A700: #aeea00;
            --md-yellow-50: #fffde7;
            --md-yellow-100: #fff9c4;
            --md-yellow-200: #fff59d;
            --md-yellow-300: #fff176;
            --md-yellow-400: #ffee58;
            --md-yellow-500: #ffeb3b;
            --md-yellow-600: #fdd835;
            --md-yellow-700: #fbc02d;
            --md-yellow-800: #f9a825;
            --md-yellow-900: #f57f17;
            --md-yellow-A100: #ffff8d;
            --md-yellow-A200: #ffff00;
            --md-yellow-A400: #ffea00;
            --md-yellow-A700: #ffd600;
            --md-amber-50: #fff8e1;
            --md-amber-100: #ffecb3;
            --md-amber-200: #ffe082;
            --md-amber-300: #ffd54f;
            --md-amber-400: #ffca28;
            --md-amber-500: #ffc107;
            --md-amber-600: #ffb300;
            --md-amber-700: #ffa000;
            --md-amber-800: #ff8f00;
            --md-amber-900: #ff6f00;
            --md-amber-A100: #ffe57f;
            --md-amber-A200: #ffd740;
            --md-amber-A400: #ffc400;
            --md-amber-A700: #ffab00;
            --md-orange-50: #fff3e0;
            --md-orange-100: #ffe0b2;
            --md-orange-200: #ffcc80;
            --md-orange-300: #ffb74d;
            --md-orange-400: #ffa726;
            --md-orange-500: #ff9800;
            --md-orange-600: #fb8c00;
            --md-orange-700: #f57c00;
            --md-orange-800: #ef6c00;
            --md-orange-900: #e65100;
            --md-orange-A100: #ffd180;
            --md-orange-A200: #ffab40;
            --md-orange-A400: #ff9100;
            --md-orange-A700: #ff6d00;
            --md-deep-orange-50: #fbe9e7;
            --md-deep-orange-100: #ffccbc;
            --md-deep-orange-200: #ffab91;
            --md-deep-orange-300: #ff8a65;
            --md-deep-orange-400: #ff7043;
            --md-deep-orange-500: #ff5722;
            --md-deep-orange-600: #f4511e;
            --md-deep-orange-700: #e64a19;
            --md-deep-orange-800: #d84315;
            --md-deep-orange-900: #bf360c;
            --md-deep-orange-A100: #ff9e80;
            --md-deep-orange-A200: #ff6e40;
            --md-deep-orange-A400: #ff3d00;
            --md-deep-orange-A700: #dd2c00;
            --md-brown-50: #efebe9;
            --md-brown-100: #d7ccc8;
            --md-brown-200: #bcaaa4;
            --md-brown-300: #a1887f;
            --md-brown-400: #8d6e63;
            --md-brown-500: #795548;
            --md-brown-600: #6d4c41;
            --md-brown-700: #5d4037;
            --md-brown-800: #4e342e;
            --md-brown-900: #3e2723;
            --md-grey-50: #fafafa;
            --md-grey-100: #f5f5f5;
            --md-grey-200: #eeeeee;
            --md-grey-300: #e0e0e0;
            --md-grey-400: #bdbdbd;
            --md-grey-500: #9e9e9e;
            --md-grey-600: #757575;
            --md-grey-700: #616161;
            --md-grey-800: #424242;
            --md-grey-900: #212121;
            --md-blue-grey-50: #eceff1;
            --md-blue-grey-100: #cfd8dc;
            --md-blue-grey-200: #b0bec5;
            --md-blue-grey-300: #90a4ae;
            --md-blue-grey-400: #78909c;
            --md-blue-grey-500: #607d8b;
            --md-blue-grey-600: #546e7a;
            --md-blue-grey-700: #455a64;
            --md-blue-grey-800: #37474f;
            --md-blue-grey-900: #263238;
          }
          .use-notebook-styles .jp-Spinner {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: var(--jp-layout-color0);
            outline: none;
          }
          .use-notebook-styles .jp-SpinnerContent {
            font-size: 10px;
            margin: 50px auto;
            text-indent: -9999em;
            width: 3em;
            height: 3em;
            border-radius: 50%;
            background: var(--jp-brand-color3);
            background: linear-gradient(
              to right,
              #f37626 10%,
              rgba(255, 255, 255, 0) 42%
            );
            position: relative;
            animation: load3 1s infinite linear, fadeIn 1s;
          }
          .use-notebook-styles .jp-SpinnerContent:before {
            width: 50%;
            height: 50%;
            background: #f37626;
            border-radius: 100% 0 0 0;
            position: absolute;
            top: 0;
            left: 0;
            content: "";
          }
          .use-notebook-styles .jp-SpinnerContent:after {
            background: var(--jp-layout-color0);
            width: 75%;
            height: 75%;
            border-radius: 50%;
            content: "";
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes load3 {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .use-notebook-styles button.jp-mod-styled {
            font-size: var(--jp-ui-font-size1);
            color: var(--jp-ui-font-color0);
            border: none;
            box-sizing: border-box;
            text-align: center;
            line-height: 32px;
            height: 32px;
            padding: 0px 12px;
            letter-spacing: 0.8px;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
          .use-notebook-styles input.jp-mod-styled {
            background: var(--jp-input-background);
            height: 28px;
            box-sizing: border-box;
            border: var(--jp-border-width) solid var(--jp-border-color1);
            padding-left: 7px;
            padding-right: 7px;
            font-size: var(--jp-ui-font-size2);
            color: var(--jp-ui-font-color0);
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
          .use-notebook-styles input.jp-mod-styled:focus {
            border: var(--jp-border-width) solid var(--md-blue-500);
            box-shadow: inset 0 0 4px var(--md-blue-300);
          }
          .use-notebook-styles .jp-select-wrapper {
            display: flex;
            position: relative;
            flex-direction: column;
            padding: 1px;
            background-color: var(--jp-layout-color1);
            height: 28px;
            box-sizing: border-box;
            margin-bottom: 12px;
          }
          .use-notebook-styles
            .jp-select-wrapper.jp-mod-focused
            select.jp-mod-styled {
            border: var(--jp-border-width) solid
              var(--jp-input-active-border-color);
            box-shadow: var(--jp-input-box-shadow);
            background-color: var(--jp-input-active-background);
          }
          .use-notebook-styles select.jp-mod-styled:hover {
            background-color: var(--jp-layout-color1);
            cursor: pointer;
            color: var(--jp-ui-font-color0);
            background-color: var(--jp-input-hover-background);
            box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
          }
          .use-notebook-styles select.jp-mod-styled {
            flex: 1 1 auto;
            height: 32px;
            width: 100%;
            font-size: var(--jp-ui-font-size2);
            background: var(--jp-input-background);
            color: var(--jp-ui-font-color0);
            padding: 0 25px 0 8px;
            border: var(--jp-border-width) solid var(--jp-input-border-color);
            border-radius: 0px;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
          .use-notebook-styles :root {
            --jp-private-toolbar-height: calc(28px + var(--jp-border-width));
          }
          .use-notebook-styles .jp-Toolbar {
            color: var(--jp-ui-font-color1);
            flex: 0 0 auto;
            display: flex;
            flex-direction: row;
            border-bottom: var(--jp-border-width) solid
              var(--jp-toolbar-border-color);
            box-shadow: var(--jp-toolbar-box-shadow);
            background: var(--jp-toolbar-background);
            min-height: var(--jp-toolbar-micro-height);
            padding: 2px;
            z-index: 1;
          }
          .use-notebook-styles
            .jp-Toolbar
            > .jp-Toolbar-item.jp-Toolbar-spacer {
            flex-grow: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .jp-Toolbar-item.jp-Toolbar-kernelStatus {
            display: inline-block;
            width: 32px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 16px;
          }
          .use-notebook-styles .jp-Toolbar > .jp-Toolbar-item {
            flex: 0 0 auto;
            display: flex;
            padding-left: 1px;
            padding-right: 1px;
            font-size: var(--jp-ui-font-size1);
            line-height: var(--jp-private-toolbar-height);
            height: 100%;
          }
          .use-notebook-styles div.jp-ToolbarButton {
            color: transparent;
            border: none;
            box-sizing: border-box;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            padding: 0px;
            margin: 0px;
          }
          .use-notebook-styles button.jp-ToolbarButtonComponent {
            background: var(--jp-layout-color1);
            border: none;
            box-sizing: border-box;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            padding: 0px 6px;
            margin: 0px;
            height: 24px;
            border-radius: var(--jp-border-radius);
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 14px;
            min-width: unset;
            min-height: unset;
          }
          .use-notebook-styles button.jp-ToolbarButtonComponent:disabled {
            opacity: 0.4;
          }
          .use-notebook-styles button.jp-ToolbarButtonComponent span {
            padding: 0px;
            flex: 0 0 auto;
          }
          .use-notebook-styles
            button.jp-ToolbarButtonComponent
            .jp-ToolbarButtonComponent-label {
            font-size: var(--jp-ui-font-size1);
            line-height: 100%;
            padding-left: 2px;
            color: var(--jp-ui-font-color1);
          }
          .use-notebook-styles body.p-mod-override-cursor *,
          .use-notebook-styles body.lm-mod-override-cursor * {
            cursor: inherit !important;
          }
          .use-notebook-styles .jp-JSONEditor {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .use-notebook-styles .jp-JSONEditor-host {
            flex: 1 1 auto;
            border: var(--jp-border-width) solid var(--jp-input-border-color);
            border-radius: 0px;
            background: var(--jp-layout-color0);
            min-height: 50px;
            padding: 1px;
          }
          .use-notebook-styles .jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
            border-color: red;
            outline-color: red;
          }
          .use-notebook-styles .jp-JSONEditor-header {
            display: flex;
            flex: 1 0 auto;
            padding: 0 0 0 12px;
          }
          .use-notebook-styles .jp-JSONEditor-header label {
            flex: 0 0 auto;
          }
          .use-notebook-styles .jp-JSONEditor-commitButton {
            height: 16px;
            width: 16px;
            background-size: 18px;
            background-repeat: no-repeat;
            background-position: center;
          }
          .use-notebook-styles .jp-JSONEditor-host.jp-mod-focused {
            background-color: var(--jp-input-active-background);
            border: 1px solid var(--jp-input-active-border-color);
            box-shadow: var(--jp-input-box-shadow);
          }
          .use-notebook-styles .jp-Editor.jp-mod-dropTarget {
            border: var(--jp-border-width) solid
              var(--jp-input-active-border-color);
            box-shadow: var(--jp-input-box-shadow);
          }
          .use-notebook-styles .CodeMirror {
            font-family: monospace;
            height: 300px;
            color: black;
            direction: ltr;
          }
          .use-notebook-styles .CodeMirror-lines {
            padding: 4px 0;
          }
          .use-notebook-styles .CodeMirror pre.CodeMirror-line,
          .use-notebook-styles .CodeMirror pre.CodeMirror-line-like {
            padding: 0 4px;
          }
          .use-notebook-styles .CodeMirror-scrollbar-filler,
          .use-notebook-styles .CodeMirror-gutter-filler {
            background-color: white;
          }
          .use-notebook-styles .CodeMirror-gutters {
            border-right: 1px solid #ddd;
            background-color: #f7f7f7;
            white-space: nowrap;
          }
          .use-notebook-styles .CodeMirror-linenumber {
            padding: 0 3px 0 5px;
            min-width: 20px;
            text-align: right;
            color: #999;
            white-space: nowrap;
          }
          .use-notebook-styles .CodeMirror-guttermarker {
            color: black;
          }
          .use-notebook-styles .CodeMirror-guttermarker-subtle {
            color: #999;
          }
          .use-notebook-styles .CodeMirror-cursor {
            border-left: 1px solid black;
            border-right: none;
            width: 0;
          }
          .use-notebook-styles .CodeMirror div.CodeMirror-secondarycursor {
            border-left: 1px solid silver;
          }
          .use-notebook-styles .cm-fat-cursor .CodeMirror-cursor {
            width: auto;
            border: 0 !important;
            background: #7e7;
          }
          .use-notebook-styles .cm-fat-cursor div.CodeMirror-cursors {
            z-index: 1;
          }
          .use-notebook-styles .cm-fat-cursor-mark {
            background-color: rgba(20, 255, 20, 0.5);
            -webkit-animation: blink 1.06s steps(1) infinite;
            -moz-animation: blink 1.06s steps(1) infinite;
            animation: blink 1.06s steps(1) infinite;
          }
          .use-notebook-styles .cm-fat-cursor-mark {
            background-color: rgba(20, 255, 20, 0.5);
            -webkit-animation: blink 1.06s steps(1) infinite;
            -moz-animation: blink 1.06s steps(1) infinite;
            animation: blink 1.06s steps(1) infinite;
          }
          .use-notebook-styles .cm-animate-fat-cursor {
            width: auto;
            border: 0;
            -webkit-animation: blink 1.06s steps(1) infinite;
            -moz-animation: blink 1.06s steps(1) infinite;
            animation: blink 1.06s steps(1) infinite;
            background-color: #7e7;
          }
          @-moz-keyframes blink {
            50% {
              background-color: transparent;
            }
          }
          @-webkit-keyframes blink {
            50% {
              background-color: transparent;
            }
          }
          @keyframes blink {
            50% {
              background-color: transparent;
            }
          }
          .use-notebook-styles .cm-tab {
            display: inline-block;
            text-decoration: inherit;
          }
          .use-notebook-styles .CodeMirror-rulers {
            position: absolute;
            left: 0;
            right: 0;
            top: -50px;
            bottom: 0;
            overflow: hidden;
          }
          .use-notebook-styles .CodeMirror-ruler {
            border-left: 1px solid #ccc;
            top: 0;
            bottom: 0;
            position: absolute;
          }
          .use-notebook-styles .cm-s-default .cm-header {
            color: blue;
          }
          .use-notebook-styles .cm-s-default .cm-quote {
            color: #090;
          }
          .use-notebook-styles .cm-negative {
            color: #d44;
          }
          .use-notebook-styles .cm-positive {
            color: #292;
          }
          .use-notebook-styles .cm-header,
          .use-notebook-styles .cm-strong {
            font-weight: bold;
          }
          .use-notebook-styles .cm-em {
            font-style: italic;
          }
          .use-notebook-styles .cm-link {
            text-decoration: underline;
          }
          .use-notebook-styles .cm-strikethrough {
            text-decoration: line-through;
          }
          .use-notebook-styles .cm-s-default .cm-keyword {
            color: #708;
          }
          .use-notebook-styles .cm-s-default .cm-atom {
            color: #219;
          }
          .use-notebook-styles .cm-s-default .cm-number {
            color: #164;
          }
          .use-notebook-styles .cm-s-default .cm-def {
            color: #00f;
          }
          .use-notebook-styles .cm-s-default .cm-variable-2 {
            color: #05a;
          }
          .use-notebook-styles .cm-s-default .cm-variable-3,
          .use-notebook-styles .cm-s-default .cm-type {
            color: #085;
          }
          .use-notebook-styles .cm-s-default .cm-comment {
            color: #a50;
          }
          .use-notebook-styles .cm-s-default .cm-string {
            color: #a11;
          }
          .use-notebook-styles .cm-s-default .cm-string-2 {
            color: #f50;
          }
          .use-notebook-styles .cm-s-default .cm-meta {
            color: #555;
          }
          .use-notebook-styles .cm-s-default .cm-qualifier {
            color: #555;
          }
          .use-notebook-styles .cm-s-default .cm-builtin {
            color: #30a;
          }
          .use-notebook-styles .cm-s-default .cm-bracket {
            color: #997;
          }
          .use-notebook-styles .cm-s-default .cm-tag {
            color: #170;
          }
          .use-notebook-styles .cm-s-default .cm-attribute {
            color: #00c;
          }
          .use-notebook-styles .cm-s-default .cm-hr {
            color: #999;
          }
          .use-notebook-styles .cm-s-default .cm-link {
            color: #00c;
          }
          .use-notebook-styles .cm-s-default .cm-error {
            color: #f00;
          }
          .use-notebook-styles .cm-invalidchar {
            color: #f00;
          }
          .use-notebook-styles .CodeMirror-composing {
            border-bottom: 2px solid;
          }
          .use-notebook-styles div.CodeMirror span.CodeMirror-matchingbracket {
            color: #0b0;
          }
          .use-notebook-styles
            div.CodeMirror
            span.CodeMirror-nonmatchingbracket {
            color: #a22;
          }
          .use-notebook-styles .CodeMirror-matchingtag {
            background: rgba(255, 150, 0, 0.3);
          }
          .use-notebook-styles .CodeMirror-activeline-background {
            background: #e8f2ff;
          }
          .use-notebook-styles .CodeMirror {
            position: relative;
            overflow: hidden;
            background: white;
          }
          .use-notebook-styles .CodeMirror-scroll {
            overflow: scroll !important;
            margin-bottom: -30px;
            margin-right: -30px;
            padding-bottom: 30px;
            height: 100%;
            outline: none;
            position: relative;
          }
          .use-notebook-styles .CodeMirror-sizer {
            position: relative;
            border-right: 30px solid transparent;
          }
          .use-notebook-styles .CodeMirror-vscrollbar,
          .use-notebook-styles .CodeMirror-hscrollbar,
          .use-notebook-styles .CodeMirror-scrollbar-filler,
          .use-notebook-styles .CodeMirror-gutter-filler {
            position: absolute;
            z-index: 6;
            display: none;
          }
          .use-notebook-styles .CodeMirror-vscrollbar {
            right: 0;
            top: 0;
            overflow-x: hidden;
            overflow-y: scroll;
          }
          .use-notebook-styles .CodeMirror-hscrollbar {
            bottom: 0;
            left: 0;
            overflow-y: hidden;
            overflow-x: scroll;
          }
          .use-notebook-styles .CodeMirror-scrollbar-filler {
            right: 0;
            bottom: 0;
          }
          .use-notebook-styles .CodeMirror-gutter-filler {
            left: 0;
            bottom: 0;
          }
          .use-notebook-styles .CodeMirror-gutters {
            position: absolute;
            left: 0;
            top: 0;
            min-height: 100%;
            z-index: 3;
          }
          .use-notebook-styles .CodeMirror-gutter {
            white-space: normal;
            height: 100%;
            display: inline-block;
            vertical-align: top;
            margin-bottom: -30px;
          }
          .use-notebook-styles .CodeMirror-gutter-wrapper {
            position: absolute;
            z-index: 4;
            background: none !important;
            border: none !important;
          }
          .use-notebook-styles .CodeMirror-gutter-background {
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 4;
          }
          .use-notebook-styles .CodeMirror-gutter-elt {
            position: absolute;
            cursor: default;
            z-index: 4;
          }
          .use-notebook-styles .CodeMirror-gutter-wrapper ::selection {
            background-color: transparent;
          }
          .use-notebook-styles .CodeMirror-gutter-wrapper ::-moz-selection {
            background-color: transparent;
          }
          .use-notebook-styles .CodeMirror-lines {
            cursor: text;
            min-height: 1px;
          }
          .use-notebook-styles .CodeMirror pre.CodeMirror-line,
          .use-notebook-styles .CodeMirror pre.CodeMirror-line-like {
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
            border-radius: 0;
            border-width: 0;
            background: transparent;
            font-family: inherit;
            font-size: inherit;
            margin: 0;
            white-space: pre;
            word-wrap: normal;
            line-height: inherit;
            color: inherit;
            z-index: 2;
            position: relative;
            overflow: visible;
            -webkit-tap-highlight-color: transparent;
            -webkit-font-variant-ligatures: contextual;
            font-variant-ligatures: contextual;
          }
          .use-notebook-styles .CodeMirror-wrap pre.CodeMirror-line,
          .use-notebook-styles .CodeMirror-wrap pre.CodeMirror-line-like {
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: normal;
          }
          .use-notebook-styles .CodeMirror-linebackground {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 0;
          }
          .use-notebook-styles .CodeMirror-linewidget {
            position: relative;
            z-index: 2;
            padding: 0.1px;
          }
          .use-notebook-styles .CodeMirror-rtl pre {
            direction: rtl;
          }
          .use-notebook-styles .CodeMirror-code {
            outline: none;
          }
          .use-notebook-styles .CodeMirror-scroll,
          .use-notebook-styles .CodeMirror-sizer,
          .use-notebook-styles .CodeMirror-gutter,
          .use-notebook-styles .CodeMirror-gutters,
          .use-notebook-styles .CodeMirror-linenumber {
            -moz-box-sizing: content-box;
            box-sizing: content-box;
          }
          .use-notebook-styles .CodeMirror-measure {
            position: absolute;
            width: 100%;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }
          .use-notebook-styles .CodeMirror-cursor {
            position: absolute;
            pointer-events: none;
          }
          .use-notebook-styles .CodeMirror-measure pre {
            position: static;
          }
          .use-notebook-styles div.CodeMirror-cursors {
            visibility: hidden;
            position: relative;
            z-index: 3;
          }
          .use-notebook-styles div.CodeMirror-dragcursors {
            visibility: visible;
          }
          .use-notebook-styles .CodeMirror-focused div.CodeMirror-cursors {
            visibility: visible;
          }
          .use-notebook-styles .CodeMirror-selected {
            background: #d9d9d9;
          }
          .use-notebook-styles .CodeMirror-focused .CodeMirror-selected {
            background: #d7d4f0;
          }
          .use-notebook-styles .CodeMirror-crosshair {
            cursor: crosshair;
          }
          .use-notebook-styles .CodeMirror-line::selection,
          .use-notebook-styles .CodeMirror-line > span::selection,
          .use-notebook-styles .CodeMirror-line > span > span::selection {
            background: #d7d4f0;
          }
          .use-notebook-styles .CodeMirror-line::-moz-selection,
          .use-notebook-styles .CodeMirror-line > span::-moz-selection,
          .use-notebook-styles .CodeMirror-line > span > span::-moz-selection {
            background: #d7d4f0;
          }
          .use-notebook-styles .cm-searching {
            background-color: #ffa;
            background-color: rgba(255, 255, 0, 0.4);
          }
          .use-notebook-styles .cm-force-border {
            padding-right: 0.1px;
          }
          @media print {
            .use-notebook-styles .CodeMirror div.CodeMirror-cursors {
              visibility: hidden;
            }
          }
          .use-notebook-styles .cm-tab-wrap-hack:after {
            content: "";
          }
          .use-notebook-styles span.CodeMirror-selectedtext {
            background: none;
          }
          .use-notebook-styles .CodeMirror-dialog {
            position: absolute;
            left: 0;
            right: 0;
            background: inherit;
            z-index: 15;
            padding: 0.1em 0.8em;
            overflow: hidden;
            color: inherit;
          }
          .use-notebook-styles .CodeMirror-dialog-top {
            border-bottom: 1px solid #eee;
            top: 0;
          }
          .use-notebook-styles .CodeMirror-dialog-bottom {
            border-top: 1px solid #eee;
            bottom: 0;
          }
          .use-notebook-styles .CodeMirror-dialog input {
            border: none;
            outline: none;
            background: transparent;
            width: 20em;
            color: inherit;
            font-family: monospace;
          }
          .use-notebook-styles .CodeMirror-dialog button {
            font-size: 70%;
          }
          .use-notebook-styles .CodeMirror-foldmarker {
            color: blue;
            text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px,
              #b9f -1px 1px 2px;
            font-family: arial;
            line-height: 0.3;
            cursor: pointer;
          }
          .use-notebook-styles .CodeMirror-foldgutter {
            width: 0.7em;
          }
          .use-notebook-styles .CodeMirror-foldgutter-open,
          .use-notebook-styles .CodeMirror-foldgutter-folded {
            cursor: pointer;
          }
          .use-notebook-styles .CodeMirror-foldgutter-open:after {
            content: "\\25BE";
          }
          .use-notebook-styles .CodeMirror-foldgutter-folded:after {
            content: "\\25B8";
          }
          .use-notebook-styles .cm-s-material.CodeMirror {
            background-color: #263238;
            color: #eeffff;
          }
          .use-notebook-styles .cm-s-material .CodeMirror-gutters {
            background: #263238;
            color: #546e7a;
            border: none;
          }
          .use-notebook-styles .cm-s-material .CodeMirror-guttermarker,
          .use-notebook-styles .cm-s-material .CodeMirror-guttermarker-subtle,
          .use-notebook-styles .cm-s-material .CodeMirror-linenumber {
            color: #546e7a;
          }
          .use-notebook-styles .cm-s-material .CodeMirror-cursor {
            border-left: 1px solid #ffcc00;
          }
          .use-notebook-styles .cm-s-material div.CodeMirror-selected {
            background: rgba(128, 203, 196, 0.2);
          }
          .use-notebook-styles
            .cm-s-material.CodeMirror-focused
            div.CodeMirror-selected {
            background: rgba(128, 203, 196, 0.2);
          }
          .use-notebook-styles .cm-s-material .CodeMirror-line::selection,
          .use-notebook-styles
            .cm-s-material
            .CodeMirror-line
            > span::selection,
          .use-notebook-styles
            .cm-s-material
            .CodeMirror-line
            > span
            > span::selection {
            background: rgba(128, 203, 196, 0.2);
          }
          .use-notebook-styles .cm-s-material .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-material
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-material
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(128, 203, 196, 0.2);
          }
          .use-notebook-styles
            .cm-s-material
            .CodeMirror-activeline-background {
            background: rgba(0, 0, 0, 0.5);
          }
          .use-notebook-styles .cm-s-material .cm-keyword {
            color: #c792ea;
          }
          .use-notebook-styles .cm-s-material .cm-operator {
            color: #89ddff;
          }
          .use-notebook-styles .cm-s-material .cm-variable-2 {
            color: #eeffff;
          }
          .use-notebook-styles .cm-s-material .cm-variable-3,
          .use-notebook-styles .cm-s-material .cm-type {
            color: #f07178;
          }
          .use-notebook-styles .cm-s-material .cm-builtin {
            color: #ffcb6b;
          }
          .use-notebook-styles .cm-s-material .cm-atom {
            color: #f78c6c;
          }
          .use-notebook-styles .cm-s-material .cm-number {
            color: #ff5370;
          }
          .use-notebook-styles .cm-s-material .cm-def {
            color: #82aaff;
          }
          .use-notebook-styles .cm-s-material .cm-string {
            color: #c3e88d;
          }
          .use-notebook-styles .cm-s-material .cm-string-2 {
            color: #f07178;
          }
          .use-notebook-styles .cm-s-material .cm-comment {
            color: #546e7a;
          }
          .use-notebook-styles .cm-s-material .cm-variable {
            color: #f07178;
          }
          .use-notebook-styles .cm-s-material .cm-tag {
            color: #ff5370;
          }
          .use-notebook-styles .cm-s-material .cm-meta {
            color: #ffcb6b;
          }
          .use-notebook-styles .cm-s-material .cm-attribute {
            color: #c792ea;
          }
          .use-notebook-styles .cm-s-material .cm-property {
            color: #c792ea;
          }
          .use-notebook-styles .cm-s-material .cm-qualifier {
            color: #decb6b;
          }
          .use-notebook-styles .cm-s-material .cm-variable-3,
          .use-notebook-styles .cm-s-material .cm-type {
            color: #decb6b;
          }
          .use-notebook-styles .cm-s-material .cm-error {
            color: #fff;
            background-color: #ff5370;
          }
          .use-notebook-styles .cm-s-material .CodeMirror-matchingbracket {
            text-decoration: underline;
            color: white !important;
          }
          .use-notebook-styles .cm-s-zenburn .CodeMirror-gutters {
            background: #3f3f3f !important;
          }
          .use-notebook-styles .cm-s-zenburn .CodeMirror-foldgutter-open,
          .use-notebook-styles .CodeMirror-foldgutter-folded {
            color: #999;
          }
          .use-notebook-styles .cm-s-zenburn .CodeMirror-cursor {
            border-left: 1px solid white;
          }
          .use-notebook-styles .cm-s-zenburn {
            background-color: #3f3f3f;
            color: #dcdccc;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-builtin {
            color: #dcdccc;
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-comment {
            color: #7f9f7f;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-keyword {
            color: #f0dfaf;
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-atom {
            color: #bfebbf;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-def {
            color: #dcdccc;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-variable {
            color: #dfaf8f;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-variable-2 {
            color: #dcdccc;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-string {
            color: #cc9393;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-string-2 {
            color: #cc9393;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-number {
            color: #dcdccc;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-tag {
            color: #93e0e3;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-property {
            color: #dfaf8f;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-attribute {
            color: #dfaf8f;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-qualifier {
            color: #7cb8bb;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-meta {
            color: #f0dfaf;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-header {
            color: #f0efd0;
          }
          .use-notebook-styles .cm-s-zenburn span.cm-operator {
            color: #f0efd0;
          }
          .use-notebook-styles .cm-s-zenburn span.CodeMirror-matchingbracket {
            box-sizing: border-box;
            background: transparent;
            border-bottom: 1px solid;
          }
          .use-notebook-styles
            .cm-s-zenburn
            span.CodeMirror-nonmatchingbracket {
            border-bottom: 1px solid;
            background: none;
          }
          .use-notebook-styles .cm-s-zenburn .CodeMirror-activeline {
            background: #000000;
          }
          .use-notebook-styles .cm-s-zenburn .CodeMirror-activeline-background {
            background: #000000;
          }
          .use-notebook-styles .cm-s-zenburn div.CodeMirror-selected {
            background: #545454;
          }
          .use-notebook-styles
            .cm-s-zenburn
            .CodeMirror-focused
            div.CodeMirror-selected {
            background: #4f4f4f;
          }
          .use-notebook-styles .cm-s-abcdef.CodeMirror {
            background: #0f0f0f;
            color: #defdef;
          }
          .use-notebook-styles .cm-s-abcdef div.CodeMirror-selected {
            background: #515151;
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-line::selection,
          .use-notebook-styles .cm-s-abcdef .CodeMirror-line > span::selection,
          .use-notebook-styles
            .cm-s-abcdef
            .CodeMirror-line
            > span
            > span::selection {
            background: rgba(56, 56, 56, 0.99);
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-abcdef
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-abcdef
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(56, 56, 56, 0.99);
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-gutters {
            background: #555;
            border-right: 2px solid #314151;
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-guttermarker {
            color: #222;
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-guttermarker-subtle {
            color: azure;
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-linenumber {
            color: #ffffff;
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-cursor {
            border-left: 1px solid #00ff00;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-keyword {
            color: darkgoldenrod;
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-atom {
            color: #77f;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-number {
            color: violet;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-def {
            color: #fffabc;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-variable {
            color: #abcdef;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-variable-2 {
            color: #cacbcc;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-variable-3,
          .use-notebook-styles .cm-s-abcdef span.cm-type {
            color: #def;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-property {
            color: #fedcba;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-operator {
            color: #ff0;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-comment {
            color: #7a7b7c;
            font-style: italic;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-string {
            color: #2b4;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-meta {
            color: #c9f;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-qualifier {
            color: #fff700;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-builtin {
            color: #30aabc;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-bracket {
            color: #8a8a8a;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-tag {
            color: #ffdd44;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-attribute {
            color: #ddff00;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-error {
            color: #ff0000;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-header {
            color: aquamarine;
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-abcdef span.cm-link {
            color: blueviolet;
          }
          .use-notebook-styles .cm-s-abcdef .CodeMirror-activeline-background {
            background: #314151;
          }
          .use-notebook-styles .cm-s-base16-light.CodeMirror {
            background: #f5f5f5;
            color: #202020;
          }
          .use-notebook-styles .cm-s-base16-light div.CodeMirror-selected {
            background: #e0e0e0;
          }
          .use-notebook-styles .cm-s-base16-light .CodeMirror-line::selection,
          .use-notebook-styles
            .cm-s-base16-light
            .CodeMirror-line
            > span::selection,
          .use-notebook-styles
            .cm-s-base16-light
            .CodeMirror-line
            > span
            > span::selection {
            background: #e0e0e0;
          }
          .use-notebook-styles
            .cm-s-base16-light
            .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-base16-light
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-base16-light
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: #e0e0e0;
          }
          .use-notebook-styles .cm-s-base16-light .CodeMirror-gutters {
            background: #f5f5f5;
            border-right: 0px;
          }
          .use-notebook-styles .cm-s-base16-light .CodeMirror-guttermarker {
            color: #ac4142;
          }
          .use-notebook-styles
            .cm-s-base16-light
            .CodeMirror-guttermarker-subtle {
            color: #b0b0b0;
          }
          .use-notebook-styles .cm-s-base16-light .CodeMirror-linenumber {
            color: #b0b0b0;
          }
          .use-notebook-styles .cm-s-base16-light .CodeMirror-cursor {
            border-left: 1px solid #505050;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-comment {
            color: #8f5536;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-atom {
            color: #aa759f;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-number {
            color: #aa759f;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-property,
          .use-notebook-styles .cm-s-base16-light span.cm-attribute {
            color: #90a959;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-keyword {
            color: #ac4142;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-string {
            color: #f4bf75;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-variable {
            color: #90a959;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-variable-2 {
            color: #6a9fb5;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-def {
            color: #d28445;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-bracket {
            color: #202020;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-tag {
            color: #ac4142;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-link {
            color: #aa759f;
          }
          .use-notebook-styles .cm-s-base16-light span.cm-error {
            background: #ac4142;
            color: #505050;
          }
          .use-notebook-styles
            .cm-s-base16-light
            .CodeMirror-activeline-background {
            background: #dddcdc;
          }
          .use-notebook-styles .cm-s-base16-light .CodeMirror-matchingbracket {
            color: #f5f5f5 !important;
            background-color: #6a9fb5 !important;
          }
          .use-notebook-styles .cm-s-base16-dark.CodeMirror {
            background: #151515;
            color: #e0e0e0;
          }
          .use-notebook-styles .cm-s-base16-dark div.CodeMirror-selected {
            background: #303030;
          }
          .use-notebook-styles .cm-s-base16-dark .CodeMirror-line::selection,
          .use-notebook-styles
            .cm-s-base16-dark
            .CodeMirror-line
            > span::selection,
          .use-notebook-styles
            .cm-s-base16-dark
            .CodeMirror-line
            > span
            > span::selection {
            background: rgba(48, 48, 48, 0.99);
          }
          .use-notebook-styles
            .cm-s-base16-dark
            .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-base16-dark
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-base16-dark
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(48, 48, 48, 0.99);
          }
          .use-notebook-styles .cm-s-base16-dark .CodeMirror-gutters {
            background: #151515;
            border-right: 0px;
          }
          .use-notebook-styles .cm-s-base16-dark .CodeMirror-guttermarker {
            color: #ac4142;
          }
          .use-notebook-styles
            .cm-s-base16-dark
            .CodeMirror-guttermarker-subtle {
            color: #505050;
          }
          .use-notebook-styles .cm-s-base16-dark .CodeMirror-linenumber {
            color: #505050;
          }
          .use-notebook-styles .cm-s-base16-dark .CodeMirror-cursor {
            border-left: 1px solid #b0b0b0;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-comment {
            color: #8f5536;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-atom {
            color: #aa759f;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-number {
            color: #aa759f;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-property,
          .use-notebook-styles .cm-s-base16-dark span.cm-attribute {
            color: #90a959;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-keyword {
            color: #ac4142;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-string {
            color: #f4bf75;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-variable {
            color: #90a959;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-variable-2 {
            color: #6a9fb5;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-def {
            color: #d28445;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-bracket {
            color: #e0e0e0;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-tag {
            color: #ac4142;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-link {
            color: #aa759f;
          }
          .use-notebook-styles .cm-s-base16-dark span.cm-error {
            background: #ac4142;
            color: #b0b0b0;
          }
          .use-notebook-styles
            .cm-s-base16-dark
            .CodeMirror-activeline-background {
            background: #202020;
          }
          .use-notebook-styles .cm-s-base16-dark .CodeMirror-matchingbracket {
            text-decoration: underline;
            color: white !important;
          }
          .use-notebook-styles .cm-s-dracula.CodeMirror,
          .use-notebook-styles .cm-s-dracula .CodeMirror-gutters {
            background-color: #282a36 !important;
            color: #f8f8f2 !important;
            border: none;
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-gutters {
            color: #282a36;
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-cursor {
            border-left: solid thin #f8f8f0;
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-linenumber {
            color: #6d8a88;
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-selected {
            background: rgba(255, 255, 255, 0.1);
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-line::selection,
          .use-notebook-styles .cm-s-dracula .CodeMirror-line > span::selection,
          .use-notebook-styles
            .cm-s-dracula
            .CodeMirror-line
            > span
            > span::selection {
            background: rgba(255, 255, 255, 0.1);
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-dracula
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-dracula
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(255, 255, 255, 0.1);
          }
          .use-notebook-styles .cm-s-dracula span.cm-comment {
            color: #6272a4;
          }
          .use-notebook-styles .cm-s-dracula span.cm-string,
          .use-notebook-styles .cm-s-dracula span.cm-string-2 {
            color: #f1fa8c;
          }
          .use-notebook-styles .cm-s-dracula span.cm-number {
            color: #bd93f9;
          }
          .use-notebook-styles .cm-s-dracula span.cm-variable {
            color: #50fa7b;
          }
          .use-notebook-styles .cm-s-dracula span.cm-variable-2 {
            color: white;
          }
          .use-notebook-styles .cm-s-dracula span.cm-def {
            color: #50fa7b;
          }
          .use-notebook-styles .cm-s-dracula span.cm-operator {
            color: #ff79c6;
          }
          .use-notebook-styles .cm-s-dracula span.cm-keyword {
            color: #ff79c6;
          }
          .use-notebook-styles .cm-s-dracula span.cm-atom {
            color: #bd93f9;
          }
          .use-notebook-styles .cm-s-dracula span.cm-meta {
            color: #f8f8f2;
          }
          .use-notebook-styles .cm-s-dracula span.cm-tag {
            color: #ff79c6;
          }
          .use-notebook-styles .cm-s-dracula span.cm-attribute {
            color: #50fa7b;
          }
          .use-notebook-styles .cm-s-dracula span.cm-qualifier {
            color: #50fa7b;
          }
          .use-notebook-styles .cm-s-dracula span.cm-property {
            color: #66d9ef;
          }
          .use-notebook-styles .cm-s-dracula span.cm-builtin {
            color: #50fa7b;
          }
          .use-notebook-styles .cm-s-dracula span.cm-variable-3,
          .use-notebook-styles .cm-s-dracula span.cm-type {
            color: #ffb86c;
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-activeline-background {
            background: rgba(255, 255, 255, 0.1);
          }
          .use-notebook-styles .cm-s-dracula .CodeMirror-matchingbracket {
            text-decoration: underline;
            color: white !important;
          }
          .use-notebook-styles .cm-s-hopscotch.CodeMirror {
            background: #322931;
            color: #d5d3d5;
          }
          .use-notebook-styles .cm-s-hopscotch div.CodeMirror-selected {
            background: #433b42 !important;
          }
          .use-notebook-styles .cm-s-hopscotch .CodeMirror-gutters {
            background: #322931;
            border-right: 0px;
          }
          .use-notebook-styles .cm-s-hopscotch .CodeMirror-linenumber {
            color: #797379;
          }
          .use-notebook-styles .cm-s-hopscotch .CodeMirror-cursor {
            border-left: 1px solid #989498 !important;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-comment {
            color: #b33508;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-atom {
            color: #c85e7c;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-number {
            color: #c85e7c;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-property,
          .use-notebook-styles .cm-s-hopscotch span.cm-attribute {
            color: #8fc13e;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-keyword {
            color: #dd464c;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-string {
            color: #fdcc59;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-variable {
            color: #8fc13e;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-variable-2 {
            color: #1290bf;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-def {
            color: #fd8b19;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-error {
            background: #dd464c;
            color: #989498;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-bracket {
            color: #d5d3d5;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-tag {
            color: #dd464c;
          }
          .use-notebook-styles .cm-s-hopscotch span.cm-link {
            color: #c85e7c;
          }
          .use-notebook-styles .cm-s-hopscotch .CodeMirror-matchingbracket {
            text-decoration: underline;
            color: white !important;
          }
          .use-notebook-styles
            .cm-s-hopscotch
            .CodeMirror-activeline-background {
            background: #302020;
          }
          .use-notebook-styles .cm-s-mbo.CodeMirror {
            background: #2c2c2c;
            color: #ffffec;
          }
          .use-notebook-styles .cm-s-mbo div.CodeMirror-selected {
            background: #716c62;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-line::selection,
          .use-notebook-styles .cm-s-mbo .CodeMirror-line > span::selection,
          .use-notebook-styles
            .cm-s-mbo
            .CodeMirror-line
            > span
            > span::selection {
            background: rgba(113, 108, 98, 0.99);
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-mbo
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-mbo
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(113, 108, 98, 0.99);
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-gutters {
            background: #4e4e4e;
            border-right: 0px;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-guttermarker {
            color: white;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-guttermarker-subtle {
            color: grey;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-linenumber {
            color: #dadada;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-cursor {
            border-left: 1px solid #ffffec;
          }
          .use-notebook-styles .cm-s-mbo span.cm-comment {
            color: #95958a;
          }
          .use-notebook-styles .cm-s-mbo span.cm-atom {
            color: #00a8c6;
          }
          .use-notebook-styles .cm-s-mbo span.cm-number {
            color: #00a8c6;
          }
          .use-notebook-styles .cm-s-mbo span.cm-property,
          .use-notebook-styles .cm-s-mbo span.cm-attribute {
            color: #9ddfe9;
          }
          .use-notebook-styles .cm-s-mbo span.cm-keyword {
            color: #ffb928;
          }
          .use-notebook-styles .cm-s-mbo span.cm-string {
            color: #ffcf6c;
          }
          .use-notebook-styles .cm-s-mbo span.cm-string.cm-property {
            color: #ffffec;
          }
          .use-notebook-styles .cm-s-mbo span.cm-variable {
            color: #ffffec;
          }
          .use-notebook-styles .cm-s-mbo span.cm-variable-2 {
            color: #00a8c6;
          }
          .use-notebook-styles .cm-s-mbo span.cm-def {
            color: #ffffec;
          }
          .use-notebook-styles .cm-s-mbo span.cm-bracket {
            color: #fffffc;
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-mbo span.cm-tag {
            color: #9ddfe9;
          }
          .use-notebook-styles .cm-s-mbo span.cm-link {
            color: #f54b07;
          }
          .use-notebook-styles .cm-s-mbo span.cm-error {
            border-bottom: #636363;
            color: #ffffec;
          }
          .use-notebook-styles .cm-s-mbo span.cm-qualifier {
            color: #ffffec;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-activeline-background {
            background: #494b41;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-matchingbracket {
            color: #ffb928 !important;
          }
          .use-notebook-styles .cm-s-mbo .CodeMirror-matchingtag {
            background: rgba(255, 255, 255, 0.37);
          }
          .use-notebook-styles .cm-s-mdn-like.CodeMirror {
            color: #999;
            background-color: #fff;
          }
          .use-notebook-styles .cm-s-mdn-like div.CodeMirror-selected {
            background: #cfc;
          }
          .use-notebook-styles .cm-s-mdn-like .CodeMirror-line::selection,
          .use-notebook-styles
            .cm-s-mdn-like
            .CodeMirror-line
            > span::selection,
          .use-notebook-styles
            .cm-s-mdn-like
            .CodeMirror-line
            > span
            > span::selection {
            background: #cfc;
          }
          .use-notebook-styles .cm-s-mdn-like .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-mdn-like
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-mdn-like
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: #cfc;
          }
          .use-notebook-styles .cm-s-mdn-like .CodeMirror-gutters {
            background: #f8f8f8;
            border-left: 6px solid rgba(0, 83, 159, 0.65);
            color: #333;
          }
          .use-notebook-styles .cm-s-mdn-like .CodeMirror-linenumber {
            color: #aaa;
            padding-left: 8px;
          }
          .use-notebook-styles .cm-s-mdn-like .CodeMirror-cursor {
            border-left: 2px solid #222;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-keyword {
            color: #6262ff;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-atom {
            color: #f90;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-number {
            color: #ca7841;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-def {
            color: #8da6ce;
          }
          .use-notebook-styles .cm-s-mdn-like span.cm-variable-2,
          .use-notebook-styles .cm-s-mdn-like span.cm-tag {
            color: #690;
          }
          .use-notebook-styles .cm-s-mdn-like span.cm-variable-3,
          .use-notebook-styles .cm-s-mdn-like span.cm-def,
          .use-notebook-styles .cm-s-mdn-like span.cm-type {
            color: #07a;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-variable {
            color: #07a;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-property {
            color: #905;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-qualifier {
            color: #690;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-operator {
            color: #cda869;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-comment {
            color: #777;
            font-weight: normal;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-string {
            color: #07a;
            font-style: italic;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-string-2 {
            color: #bd6b18;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-meta {
            color: #000;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-builtin {
            color: #9b7536;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-tag {
            color: #997643;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-attribute {
            color: #d6bb6d;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-header {
            color: #ff6400;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-hr {
            color: #aeaeae;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-link {
            color: #ad9361;
            font-style: italic;
            text-decoration: none;
          }
          .use-notebook-styles .cm-s-mdn-like .cm-error {
            border-bottom: 1px solid red;
          }
          .use-notebook-styles
            div.cm-s-mdn-like
            .CodeMirror-activeline-background {
            background: #efefff;
          }
          .use-notebook-styles
            div.cm-s-mdn-like
            span.CodeMirror-matchingbracket {
            outline: 1px solid grey;
            color: inherit;
          }
          .use-notebook-styles .cm-s-mdn-like.CodeMirror {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAyCAYAAAAp8UeFAAAHvklEQVR42s2b63bcNgyEQZCSHCdt2vd/0tWF7I+Q6XgMXiTtuvU5Pl57ZQKkKHzEAOtF5KeIJBGJ8uvL599FRFREZhFx8DeXv8trn68RuGaC8TRfo3SNp9dlDDHedyLyTUTeRWStXKPZrjtpZxaRw5hPqozRs1N8/enzIiQRWcCgy4MUA0f+XWliDhyL8Lfyvx7ei/Ae3iQFHyw7U/59pQVIMEEPEz0G7XiwdRjzSfC3UTtz9vchIntxvry5iMgfIhJoEflOz2CQr3F5h/HfeFe+GTdLaKcu9L8LTeQb/R/7GgbsfKedyNdoHsN31uRPWrfZ5wsj/NzzRQHuToIdU3ahwnsKPxXCjJITuOsi7XLc7SG/v5GdALs7wf8JjTFiB5+QvTEfRyGOfX3Lrx8wxyQi3sNq46O7QahQiCsRFgqddjBouVEHOKDgXAQHD9gJCr5sMKkEdjwsarG/ww3BMHBU7OBjXnzdyY7SfCxf5/z6ATccrwlKuwC/jhznnPF4CgVzhhVf4xp2EixcBActO75iZ8/fM9zAs2OMzKdslgXWJ9XG8PQoOAMA5fGcsvORgv0doBXyHrCwfLJAOwo71QLNkb8n2Pl6EWiR7OCibtkPaz4Kc/0NNAze2gju3zOwekALDaCFPI5vjPFmgGY5AZqyGEvH1x7QfIb8YtxMnA/b+QQ0aQDAwc6JMFg8CbQZ4qoYEEHbRwNojuK3EHwd7VALSgq+MNDKzfT58T8qdpADrgW0GmgcAS1lhzztJmkAzcPNOQbsWEALBDSlMKUG0Eq4CLAQWvEVQ9WU57gZJwZtgPO3r9oBTQ9WO8TjqXINx8R0EYpiZEUWOF3FxkbJkgU9B2f41YBrIj5ZfsQa0M5kTgiAAqM3ShXLgu8XMqcrQBvJ0CL5pnTsfMB13oB8athpAq2XOQmcGmoACCLydx7nToa23ATaSIY2ichfOdPTGxlasXMLaL0MLZAOwAKIM+y8CmicobGdCcbbK9DzN+yYGVoNNI5iUKTMyYOjPse4A8SM1MmcXgU0toOq1yO/v8FOxlASyc7TgeYaAMBJHcY1CcCwGI/TK4AmDbDyKYBBtFUkRwto8gygiQEaByFgJ00BH2M8JWwQS1nafDXQCidWyOI8AcjDCSjCLk8ngObuAm3JAHAdubAmOaK06V8MNEsKPJOhobSprwQa6gD7DclRQdqcwL4zxqgBrQcabUiBLclRDKAlWp+etPkBaNMA0AKlrHwTdEByZAA4GM+SNluSY6wAzcMNewxmgig5Ks0nkrSpBvSaQHMdKTBAnLojOdYyGpQ254602ZILPdTD1hdlggdIm74jbTp8vDwF5ZYUeLWGJpWsh6XNyXgcYwVoJQTEhhTYkxzZjiU5npU2TaB979TQehlaAVq4kaGpiPwwwLkYUuBbQwocyQTv1tA0+1UFWoJF3iv1oq+qoSk8EQdJmwHkziIF7oOZk14EGitibAdjLYYK78H5vZOhtWpoI0ATGHs0Q8OMb4Ey+2bU2UYztCtA0wFAs7TplGLRVQCcqaFdGSPCeTI1QNIC52iWNzof6Uib7xjEp07mNNoUYmVosVItHrHzRlLgBn9LFyRHaQCtVUMbtTNhoXWiTOO9k/V8BdAc1Oq0ArSQs6/5SU0hckNy9NnXqQY0PGYo5dWJ7nINaN6o958FWin27aBaWRka1r5myvLOAm0j30eBJqCxHLReVclxhxOEN2JfDWjxBtAC7MIH1fVaGdoOp4qJYDgKtKPSFNID2gSnGldrCqkFZ+5UeQXQBIRrSwocbdZYQT/2LwRahBPBXoHrB8nxaGROST62DKUbQOMMzZIC9abkuELfQzQALWTnDNAm8KHWFOJgJ5+SHIvTPcmx1xQyZRhNL5Qci689aXMEaN/uNIWkEwDAvFpOZmgsBaaGnbs1NPa1Jm32gBZAIh1pCtG7TSH4aE0y1uVY4uqoFPisGlpP2rSA5qTecWn5agK6BzSpgAyD+wFaqhnYoSZ1Vwr8CmlTQbrcO3ZaX0NAEyMbYaAlyquFoLKK3SPby9CeVUPThrSJmkCAE0CrKUQadi4DrdSlWhmah0YL9z9vClH59YGbHx1J8VZTyAjQepJjmXwAKTDQI3omc3p1U4gDUf6RfcdYfrUp5ClAi2J3Ba6UOXGo+K+bQrjjssitG2SJzshaLwMtXgRagUNpYYoVkMSBLM+9GGiJZMvduG6DRZ4qc04DMPtQQxOjEtACmhO7K1AbNbQDEggZyJwscFpAGwENhoBeUwh3bWolhe8BTYVKxQEWrSUn/uhcM5KhvUu/+eQu0Lzhi+VrK0PrZZNDQKs9cpYUuFYgMVpD4/NxenJTiMCNqdUEUf1qZWjppLT5qSkkUZbCwkbZMSuVnu80hfSkzRbQeqCZSAh6huR4VtoM2gHAlLf72smuWgE+VV7XpE25Ab2WFDgyhnSuKbs4GuGzCjR+tIoUuMFg3kgcWKLTwRqanJQ2W00hAsenfaApRC42hbCvK1SlE0HtE9BGgneJO+ELamitD1YjjOYnNYVcraGhtKkW0EqVVeDx733I2NH581k1NNxNLG0i0IJ8/NjVaOZ0tYZ2Vtr0Xv7tPV3hkWp9EFkgS/J0vosngTaSoaG06WHi+xObQkaAdlbanP8B2+2l0f90LmUAAAAASUVORK5CYII=);
          }
          .use-notebook-styles .cm-s-seti.CodeMirror {
            background-color: #151718 !important;
            color: #cfd2d1 !important;
            border: none;
          }
          .use-notebook-styles .cm-s-seti .CodeMirror-gutters {
            color: #404b53;
            background-color: #0e1112;
            border: none;
          }
          .use-notebook-styles .cm-s-seti .CodeMirror-cursor {
            border-left: solid thin #f8f8f0;
          }
          .use-notebook-styles .cm-s-seti .CodeMirror-linenumber {
            color: #6d8a88;
          }
          .use-notebook-styles
            .cm-s-seti.CodeMirror-focused
            div.CodeMirror-selected {
            background: rgba(255, 255, 255, 0.1);
          }
          .use-notebook-styles .cm-s-seti .CodeMirror-line::selection,
          .use-notebook-styles .cm-s-seti .CodeMirror-line > span::selection,
          .use-notebook-styles
            .cm-s-seti
            .CodeMirror-line
            > span
            > span::selection {
            background: rgba(255, 255, 255, 0.1);
          }
          .use-notebook-styles .cm-s-seti .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-seti
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-seti
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(255, 255, 255, 0.1);
          }
          .use-notebook-styles .cm-s-seti span.cm-comment {
            color: #41535b;
          }
          .use-notebook-styles .cm-s-seti span.cm-string,
          .use-notebook-styles .cm-s-seti span.cm-string-2 {
            color: #55b5db;
          }
          .use-notebook-styles .cm-s-seti span.cm-number {
            color: #cd3f45;
          }
          .use-notebook-styles .cm-s-seti span.cm-variable {
            color: #55b5db;
          }
          .use-notebook-styles .cm-s-seti span.cm-variable-2 {
            color: #a074c4;
          }
          .use-notebook-styles .cm-s-seti span.cm-def {
            color: #55b5db;
          }
          .use-notebook-styles .cm-s-seti span.cm-keyword {
            color: #ff79c6;
          }
          .use-notebook-styles .cm-s-seti span.cm-operator {
            color: #9fca56;
          }
          .use-notebook-styles .cm-s-seti span.cm-keyword {
            color: #e6cd69;
          }
          .use-notebook-styles .cm-s-seti span.cm-atom {
            color: #cd3f45;
          }
          .use-notebook-styles .cm-s-seti span.cm-meta {
            color: #55b5db;
          }
          .use-notebook-styles .cm-s-seti span.cm-tag {
            color: #55b5db;
          }
          .use-notebook-styles .cm-s-seti span.cm-attribute {
            color: #9fca56;
          }
          .use-notebook-styles .cm-s-seti span.cm-qualifier {
            color: #9fca56;
          }
          .use-notebook-styles .cm-s-seti span.cm-property {
            color: #a074c4;
          }
          .use-notebook-styles .cm-s-seti span.cm-variable-3,
          .use-notebook-styles .cm-s-seti span.cm-type {
            color: #9fca56;
          }
          .use-notebook-styles .cm-s-seti span.cm-builtin {
            color: #9fca56;
          }
          .use-notebook-styles .cm-s-seti .CodeMirror-activeline-background {
            background: #101213;
          }
          .use-notebook-styles .cm-s-seti .CodeMirror-matchingbracket {
            text-decoration: underline;
            color: white !important;
          }
          .use-notebook-styles .solarized.base03 {
            color: #002b36;
          }
          .use-notebook-styles .solarized.base02 {
            color: #073642;
          }
          .use-notebook-styles .solarized.base01 {
            color: #586e75;
          }
          .use-notebook-styles .solarized.base00 {
            color: #657b83;
          }
          .use-notebook-styles .solarized.base0 {
            color: #839496;
          }
          .use-notebook-styles .solarized.base1 {
            color: #93a1a1;
          }
          .use-notebook-styles .solarized.base2 {
            color: #eee8d5;
          }
          .use-notebook-styles .solarized.base3 {
            color: #fdf6e3;
          }
          .use-notebook-styles .solarized.solar-yellow {
            color: #b58900;
          }
          .use-notebook-styles .solarized.solar-orange {
            color: #cb4b16;
          }
          .use-notebook-styles .solarized.solar-red {
            color: #dc322f;
          }
          .use-notebook-styles .solarized.solar-magenta {
            color: #d33682;
          }
          .use-notebook-styles .solarized.solar-violet {
            color: #6c71c4;
          }
          .use-notebook-styles .solarized.solar-blue {
            color: #268bd2;
          }
          .use-notebook-styles .solarized.solar-cyan {
            color: #2aa198;
          }
          .use-notebook-styles .solarized.solar-green {
            color: #859900;
          }
          .use-notebook-styles .cm-s-solarized {
            line-height: 1.45em;
            color-profile: sRGB;
            rendering-intent: auto;
          }
          .use-notebook-styles .cm-s-solarized.cm-s-dark {
            color: #839496;
            background-color: #002b36;
            text-shadow: #002b36 0 1px;
          }
          .use-notebook-styles .cm-s-solarized.cm-s-light {
            background-color: #fdf6e3;
            color: #657b83;
            text-shadow: #eee8d5 0 1px;
          }
          .use-notebook-styles .cm-s-solarized .CodeMirror-widget {
            text-shadow: none;
          }
          .use-notebook-styles .cm-s-solarized .cm-header {
            color: #586e75;
          }
          .use-notebook-styles .cm-s-solarized .cm-quote {
            color: #93a1a1;
          }
          .use-notebook-styles .cm-s-solarized .cm-keyword {
            color: #cb4b16;
          }
          .use-notebook-styles .cm-s-solarized .cm-atom {
            color: #d33682;
          }
          .use-notebook-styles .cm-s-solarized .cm-number {
            color: #d33682;
          }
          .use-notebook-styles .cm-s-solarized .cm-def {
            color: #2aa198;
          }
          .use-notebook-styles .cm-s-solarized .cm-variable {
            color: #839496;
          }
          .use-notebook-styles .cm-s-solarized .cm-variable-2 {
            color: #b58900;
          }
          .use-notebook-styles .cm-s-solarized .cm-variable-3,
          .use-notebook-styles .cm-s-solarized .cm-type {
            color: #6c71c4;
          }
          .use-notebook-styles .cm-s-solarized .cm-property {
            color: #2aa198;
          }
          .use-notebook-styles .cm-s-solarized .cm-operator {
            color: #6c71c4;
          }
          .use-notebook-styles .cm-s-solarized .cm-comment {
            color: #586e75;
            font-style: italic;
          }
          .use-notebook-styles .cm-s-solarized .cm-string {
            color: #859900;
          }
          .use-notebook-styles .cm-s-solarized .cm-string-2 {
            color: #b58900;
          }
          .use-notebook-styles .cm-s-solarized .cm-meta {
            color: #859900;
          }
          .use-notebook-styles .cm-s-solarized .cm-qualifier {
            color: #b58900;
          }
          .use-notebook-styles .cm-s-solarized .cm-builtin {
            color: #d33682;
          }
          .use-notebook-styles .cm-s-solarized .cm-bracket {
            color: #cb4b16;
          }
          .use-notebook-styles .cm-s-solarized .CodeMirror-matchingbracket {
            color: #859900;
          }
          .use-notebook-styles .cm-s-solarized .CodeMirror-nonmatchingbracket {
            color: #dc322f;
          }
          .use-notebook-styles .cm-s-solarized .cm-tag {
            color: #93a1a1;
          }
          .use-notebook-styles .cm-s-solarized .cm-attribute {
            color: #2aa198;
          }
          .use-notebook-styles .cm-s-solarized .cm-hr {
            color: transparent;
            border-top: 1px solid #586e75;
            display: block;
          }
          .use-notebook-styles .cm-s-solarized .cm-link {
            color: #93a1a1;
            cursor: pointer;
          }
          .use-notebook-styles .cm-s-solarized .cm-special {
            color: #6c71c4;
          }
          .use-notebook-styles .cm-s-solarized .cm-em {
            color: #999;
            text-decoration: underline;
            text-decoration-style: dotted;
          }
          .use-notebook-styles .cm-s-solarized .cm-error,
          .use-notebook-styles .cm-s-solarized .cm-invalidchar {
            color: #586e75;
            border-bottom: 1px dotted #dc322f;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark
            div.CodeMirror-selected {
            background: #073642;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark.CodeMirror
            ::selection {
            background: rgba(7, 54, 66, 0.99);
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark
            .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-dark
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-dark
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(7, 54, 66, 0.99);
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light
            div.CodeMirror-selected {
            background: #eee8d5;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light
            .CodeMirror-line::selection,
          .use-notebook-styles .cm-s-light .CodeMirror-line > span::selection,
          .use-notebook-styles
            .cm-s-light
            .CodeMirror-line
            > span
            > span::selection {
            background: #eee8d5;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light
            .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-ligh
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-ligh
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: #eee8d5;
          }
          .use-notebook-styles .cm-s-solarized.CodeMirror {
            -moz-box-shadow: inset 7px 0 12px -6px #000;
            -webkit-box-shadow: inset 7px 0 12px -6px #000;
            box-shadow: inset 7px 0 12px -6px #000;
          }
          .use-notebook-styles .cm-s-solarized .CodeMirror-gutters {
            border-right: 0;
          }
          .use-notebook-styles .cm-s-solarized.cm-s-dark .CodeMirror-gutters {
            background-color: #073642;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark
            .CodeMirror-linenumber {
            color: #586e75;
            text-shadow: #021014 0 -1px;
          }
          .use-notebook-styles .cm-s-solarized.cm-s-light .CodeMirror-gutters {
            background-color: #eee8d5;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light
            .CodeMirror-linenumber {
            color: #839496;
          }
          .use-notebook-styles .cm-s-solarized .CodeMirror-linenumber {
            padding: 0 5px;
          }
          .use-notebook-styles .cm-s-solarized .CodeMirror-guttermarker-subtle {
            color: #586e75;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark
            .CodeMirror-guttermarker {
            color: #ddd;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light
            .CodeMirror-guttermarker {
            color: #cb4b16;
          }
          .use-notebook-styles
            .cm-s-solarized
            .CodeMirror-gutter
            .CodeMirror-gutter-text {
            color: #586e75;
          }
          .use-notebook-styles .cm-s-solarized .CodeMirror-cursor {
            border-left: 1px solid #819090;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light.cm-fat-cursor
            .CodeMirror-cursor {
            background: #77ee77;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light
            .cm-animate-fat-cursor {
            background-color: #77ee77;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark.cm-fat-cursor
            .CodeMirror-cursor {
            background: #586e75;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark
            .cm-animate-fat-cursor {
            background-color: #586e75;
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-dark
            .CodeMirror-activeline-background {
            background: rgba(255, 255, 255, 0.06);
          }
          .use-notebook-styles
            .cm-s-solarized.cm-s-light
            .CodeMirror-activeline-background {
            background: rgba(0, 0, 0, 0.06);
          }
          .use-notebook-styles .cm-s-the-matrix.CodeMirror {
            background: #000000;
            color: #00ff00;
          }
          .use-notebook-styles .cm-s-the-matrix div.CodeMirror-selected {
            background: #2d2d2d;
          }
          .use-notebook-styles .cm-s-the-matrix .CodeMirror-line::selection,
          .use-notebook-styles
            .cm-s-the-matrix
            .CodeMirror-line
            > span::selection,
          .use-notebook-styles
            .cm-s-the-matrix
            .CodeMirror-line
            > span
            > span::selection {
            background: rgba(45, 45, 45, 0.99);
          }
          .use-notebook-styles
            .cm-s-the-matrix
            .CodeMirror-line::-moz-selection,
          .use-notebook-styles
            .cm-s-the-matrix
            .CodeMirror-line
            > span::-moz-selection,
          .use-notebook-styles
            .cm-s-the-matrix
            .CodeMirror-line
            > span
            > span::-moz-selection {
            background: rgba(45, 45, 45, 0.99);
          }
          .use-notebook-styles .cm-s-the-matrix .CodeMirror-gutters {
            background: #060;
            border-right: 2px solid #00ff00;
          }
          .use-notebook-styles .cm-s-the-matrix .CodeMirror-guttermarker {
            color: #0f0;
          }
          .use-notebook-styles
            .cm-s-the-matrix
            .CodeMirror-guttermarker-subtle {
            color: white;
          }
          .use-notebook-styles .cm-s-the-matrix .CodeMirror-linenumber {
            color: #ffffff;
          }
          .use-notebook-styles .cm-s-the-matrix .CodeMirror-cursor {
            border-left: 1px solid #00ff00;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-keyword {
            color: #008803;
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-atom {
            color: #3ff;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-number {
            color: #ffb94f;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-def {
            color: #99c;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-variable {
            color: #f6c;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-variable-2 {
            color: #c6f;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-variable-3,
          .use-notebook-styles .cm-s-the-matrix span.cm-type {
            color: #96f;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-property {
            color: #62ffa0;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-operator {
            color: #999;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-comment {
            color: #cccccc;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-string {
            color: #39c;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-meta {
            color: #c9f;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-qualifier {
            color: #fff700;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-builtin {
            color: #30a;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-bracket {
            color: #cc7;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-tag {
            color: #ffbd40;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-attribute {
            color: #fff700;
          }
          .use-notebook-styles .cm-s-the-matrix span.cm-error {
            color: #ff0000;
          }
          .use-notebook-styles
            .cm-s-the-matrix
            .CodeMirror-activeline-background {
            background: #040;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-keyword {
            line-height: 1em;
            font-weight: bold;
            color: #5a5cad;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-atom {
            color: #6c8cd5;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-number {
            color: #164;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-def {
            text-decoration: underline;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-variable {
            color: black;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-variable-2 {
            color: black;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-variable-3,
          .use-notebook-styles .cm-s-xq-light span.cm-type {
            color: black;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-comment {
            color: #0080ff;
            font-style: italic;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-string {
            color: red;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-meta {
            color: yellow;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-qualifier {
            color: grey;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-builtin {
            color: #7ea656;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-bracket {
            color: #cc7;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-tag {
            color: #3f7f7f;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-attribute {
            color: #7f007f;
          }
          .use-notebook-styles .cm-s-xq-light span.cm-error {
            color: #f00;
          }
          .use-notebook-styles
            .cm-s-xq-light
            .CodeMirror-activeline-background {
            background: #e8f2ff;
          }
          .use-notebook-styles .cm-s-xq-light .CodeMirror-matchingbracket {
            outline: 1px solid grey;
            color: black !important;
            background: yellow;
          }
          .use-notebook-styles .CodeMirror {
            line-height: var(--jp-code-line-height);
            font-size: var(--jp-code-font-size);
            font-family: var(--jp-code-font-family);
            border: 0;
            border-radius: 0;
            height: auto;
          }
          .use-notebook-styles .CodeMirror pre {
            padding: 0 var(--jp-code-padding);
          }
          .use-notebook-styles
            .jp-CodeMirrorEditor[data-type="inline"]
            .CodeMirror-dialog {
            background-color: var(--jp-layout-color0);
            color: var(--jp-content-font-color1);
          }
          .use-notebook-styles .CodeMirror-lines {
            padding: var(--jp-code-padding) 0;
          }
          .use-notebook-styles .CodeMirror-linenumber {
            padding: 0 8px;
          }
          .use-notebook-styles .jp-CodeMirrorEditor-static {
            margin: var(--jp-code-padding);
          }
          .use-notebook-styles .jp-CodeMirrorEditor,
          .use-notebook-styles .jp-CodeMirrorEditor-static {
            cursor: text;
          }
          .use-notebook-styles
            .jp-CodeMirrorEditor[data-type="inline"]
            .CodeMirror-cursor {
            border-left: var(--jp-code-cursor-width0) solid
              var(--jp-editor-cursor-color);
          }
          @media screen and (min-width: 2138px) and (max-width: 4319px) {
            .use-notebook-styles
              .jp-CodeMirrorEditor[data-type="inline"]
              .CodeMirror-cursor {
              border-left: var(--jp-code-cursor-width1) solid
                var(--jp-editor-cursor-color);
            }
          }
          @media screen and (min-width: 4320px) {
            .use-notebook-styles
              .jp-CodeMirrorEditor[data-type="inline"]
              .CodeMirror-cursor {
              border-left: var(--jp-code-cursor-width2) solid
                var(--jp-editor-cursor-color);
            }
          }
          .use-notebook-styles .CodeMirror.jp-mod-readOnly .CodeMirror-cursor {
            display: none;
          }
          .use-notebook-styles .CodeMirror-gutters {
            border-right: 1px solid var(--jp-border-color2);
            background-color: var(--jp-layout-color0);
          }
          .use-notebook-styles .jp-CollaboratorCursor {
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: none;
            border-bottom: 3px solid;
            background-clip: content-box;
            margin-left: -5px;
            margin-right: -5px;
          }
          .use-notebook-styles .CodeMirror-selectedtext.cm-searching {
            background-color: var(
              --jp-search-selected-match-background-color
            ) !important;
            color: var(--jp-search-selected-match-color) !important;
          }
          .use-notebook-styles .cm-searching {
            background-color: var(
              --jp-search-unselected-match-background-color
            ) !important;
            color: var(--jp-search-unselected-match-color) !important;
          }
          .use-notebook-styles .CodeMirror-focused .CodeMirror-selected {
            background-color: var(--jp-editor-selected-focused-background);
          }
          .use-notebook-styles .CodeMirror-selected {
            background-color: var(--jp-editor-selected-background);
          }
          .use-notebook-styles .jp-CollaboratorCursor-hover {
            position: absolute;
            z-index: 1;
            transform: translateX(-50%);
            color: white;
            border-radius: 3px;
            padding-left: 4px;
            padding-right: 4px;
            padding-top: 1px;
            padding-bottom: 1px;
            text-align: center;
            font-size: var(--jp-ui-font-size1);
            white-space: nowrap;
          }
          .use-notebook-styles .jp-CodeMirror-ruler {
            border-left: 1px dashed var(--jp-border-color2);
          }
          .use-notebook-styles .CodeMirror.cm-s-jupyter {
            background: var(--jp-layout-color0);
            color: var(--jp-content-font-color1);
          }
          .use-notebook-styles .jp-CodeConsole .CodeMirror.cm-s-jupyter,
          .use-notebook-styles .jp-Notebook .CodeMirror.cm-s-jupyter {
            background: transparent;
          }
          .use-notebook-styles .cm-s-jupyter .CodeMirror-cursor {
            border-left: var(--jp-code-cursor-width0) solid
              var(--jp-editor-cursor-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-keyword {
            color: var(--jp-mirror-editor-keyword-color);
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-jupyter span.cm-atom {
            color: var(--jp-mirror-editor-atom-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-number {
            color: var(--jp-mirror-editor-number-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-def {
            color: var(--jp-mirror-editor-def-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-variable {
            color: var(--jp-mirror-editor-variable-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-variable-2 {
            color: var(--jp-mirror-editor-variable-2-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-variable-3 {
            color: var(--jp-mirror-editor-variable-3-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-punctuation {
            color: var(--jp-mirror-editor-punctuation-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-property {
            color: var(--jp-mirror-editor-property-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-operator {
            color: var(--jp-mirror-editor-operator-color);
            font-weight: bold;
          }
          .use-notebook-styles .cm-s-jupyter span.cm-comment {
            color: var(--jp-mirror-editor-comment-color);
            font-style: italic;
          }
          .use-notebook-styles .cm-s-jupyter span.cm-string {
            color: var(--jp-mirror-editor-string-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-string-2 {
            color: var(--jp-mirror-editor-string-2-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-meta {
            color: var(--jp-mirror-editor-meta-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-qualifier {
            color: var(--jp-mirror-editor-qualifier-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-builtin {
            color: var(--jp-mirror-editor-builtin-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-bracket {
            color: var(--jp-mirror-editor-bracket-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-tag {
            color: var(--jp-mirror-editor-tag-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-attribute {
            color: var(--jp-mirror-editor-attribute-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-header {
            color: var(--jp-mirror-editor-header-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-quote {
            color: var(--jp-mirror-editor-quote-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-link {
            color: var(--jp-mirror-editor-link-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-error {
            color: var(--jp-mirror-editor-error-color);
          }
          .use-notebook-styles .cm-s-jupyter span.cm-hr {
            color: #999;
          }
          .use-notebook-styles .cm-s-jupyter span.cm-tab {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
            background-position: right;
            background-repeat: no-repeat;
          }
          .use-notebook-styles .cm-s-jupyter .CodeMirror-activeline-background,
          .use-notebook-styles .cm-s-jupyter .CodeMirror-gutter {
            background-color: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-RenderedText {
            text-align: left;
            padding-left: var(--jp-code-padding);
            line-height: var(--jp-code-line-height);
            font-family: var(--jp-code-font-family);
          }
          .use-notebook-styles .jp-RenderedText pre,
          .use-notebook-styles .jp-RenderedJavaScript pre,
          .use-notebook-styles .jp-RenderedHTMLCommon pre {
            color: var(--jp-content-font-color1);
            font-size: var(--jp-code-font-size);
            border: none;
            margin: 0px;
            padding: 0px;
            line-height: normal;
          }
          .use-notebook-styles .jp-RenderedText pre a:link {
            text-decoration: none;
            color: var(--jp-content-link-color);
          }
          .use-notebook-styles .jp-RenderedText pre a:hover {
            text-decoration: underline;
            color: var(--jp-content-link-color);
          }
          .use-notebook-styles .jp-RenderedText pre a:visited {
            text-decoration: none;
            color: var(--jp-content-link-color);
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-black-fg {
            color: #3e424d;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-red-fg {
            color: #e75c58;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-green-fg {
            color: #00a250;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-yellow-fg {
            color: #ddb62b;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-blue-fg {
            color: #208ffb;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-magenta-fg {
            color: #d160c4;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-cyan-fg {
            color: #60c6c8;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-white-fg {
            color: #c5c1b4;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-black-bg {
            background-color: #3e424d;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-red-bg {
            background-color: #e75c58;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-green-bg {
            background-color: #00a250;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-yellow-bg {
            background-color: #ddb62b;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-blue-bg {
            background-color: #208ffb;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-magenta-bg {
            background-color: #d160c4;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-cyan-bg {
            background-color: #60c6c8;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-white-bg {
            background-color: #c5c1b4;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-black-intense-fg {
            color: #282c36;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-red-intense-fg {
            color: #b22b31;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-green-intense-fg {
            color: #007427;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-yellow-intense-fg {
            color: #b27d12;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-blue-intense-fg {
            color: #0065ca;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-magenta-intense-fg {
            color: #a03196;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-cyan-intense-fg {
            color: #258f8f;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-white-intense-fg {
            color: #a1a6b2;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-black-intense-bg {
            background-color: #282c36;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-red-intense-bg {
            background-color: #b22b31;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-green-intense-bg {
            background-color: #007427;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-yellow-intense-bg {
            background-color: #b27d12;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-blue-intense-bg {
            background-color: #0065ca;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-magenta-intense-bg {
            background-color: #a03196;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-cyan-intense-bg {
            background-color: #258f8f;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-white-intense-bg {
            background-color: #a1a6b2;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-default-inverse-fg {
            color: var(--jp-ui-inverse-font-color0);
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-default-inverse-bg {
            background-color: var(--jp-inverse-layout-color0);
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-bold {
            font-weight: bold;
          }
          .use-notebook-styles .jp-RenderedText pre .ansi-underline {
            text-decoration: underline;
          }
          .use-notebook-styles
            .jp-RenderedText[data-mime-type="application/vnd.jupyter.stderr"] {
            background: var(--jp-rendermime-error-background);
            padding-top: var(--jp-code-padding);
          }
          .use-notebook-styles .jp-RenderedLatex {
            color: var(--jp-content-font-color1);
            font-size: var(--jp-content-font-size1);
            line-height: var(--jp-content-line-height);
          }
          .use-notebook-styles .jp-OutputArea-output.jp-RenderedLatex {
            padding: var(--jp-code-padding);
            text-align: left;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon {
            color: var(--jp-content-font-color1);
            font-family: var(--jp-content-font-family);
            font-size: var(--jp-content-font-size1);
            line-height: var(--jp-content-line-height);
            padding-right: 20px;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon em {
            font-style: italic;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon strong {
            font-weight: bold;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon u {
            text-decoration: underline;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon a:link {
            text-decoration: none;
            color: var(--jp-content-link-color);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon a:hover {
            text-decoration: underline;
            color: var(--jp-content-link-color);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon a:visited {
            text-decoration: none;
            color: var(--jp-content-link-color);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h1,
          .use-notebook-styles .jp-RenderedHTMLCommon h2,
          .use-notebook-styles .jp-RenderedHTMLCommon h3,
          .use-notebook-styles .jp-RenderedHTMLCommon h4,
          .use-notebook-styles .jp-RenderedHTMLCommon h5,
          .use-notebook-styles .jp-RenderedHTMLCommon h6 {
            line-height: var(--jp-content-heading-line-height);
            font-weight: var(--jp-content-heading-font-weight);
            font-style: normal;
            margin: var(--jp-content-heading-margin-top) 0
              var(--jp-content-heading-margin-bottom) 0;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h1:first-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h2:first-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h3:first-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h4:first-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h5:first-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h6:first-child {
            margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h1:last-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h2:last-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h3:last-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h4:last-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h5:last-child,
          .use-notebook-styles .jp-RenderedHTMLCommon h6:last-child {
            margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h1 {
            font-size: var(--jp-content-font-size5);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h2 {
            font-size: var(--jp-content-font-size4);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h3 {
            font-size: var(--jp-content-font-size3);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h4 {
            font-size: var(--jp-content-font-size2);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h5 {
            font-size: var(--jp-content-font-size1);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon h6 {
            font-size: var(--jp-content-font-size0);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ul:not(.list-inline),
          .use-notebook-styles .jp-RenderedHTMLCommon ol:not(.list-inline) {
            padding-left: 2em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ul {
            list-style: disc;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ul ul {
            list-style: square;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ul ul ul {
            list-style: circle;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ol {
            list-style: decimal;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ol ol {
            list-style: upper-alpha;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ol ol ol {
            list-style: lower-alpha;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ol ol ol ol {
            list-style: lower-roman;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ol ol ol ol ol {
            list-style: decimal;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ol,
          .use-notebook-styles .jp-RenderedHTMLCommon ul {
            margin-bottom: 1em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon ul ul,
          .use-notebook-styles .jp-RenderedHTMLCommon ul ol,
          .use-notebook-styles .jp-RenderedHTMLCommon ol ul,
          .use-notebook-styles .jp-RenderedHTMLCommon ol ol {
            margin-bottom: 0em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon hr {
            color: var(--jp-border-color2);
            background-color: var(--jp-border-color1);
            margin-top: 1em;
            margin-bottom: 1em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon > pre {
            margin: 1.5em 2em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon pre,
          .use-notebook-styles .jp-RenderedHTMLCommon code {
            border: 0;
            background-color: var(--jp-layout-color0);
            color: var(--jp-content-font-color1);
            font-family: var(--jp-code-font-family);
            font-size: inherit;
            line-height: var(--jp-code-line-height);
            padding: 0;
            white-space: pre-wrap;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon :not(pre) > code {
            background-color: var(--jp-layout-color2);
            padding: 1px 5px;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon table {
            border-collapse: collapse;
            border-spacing: 0;
            border: none;
            color: var(--jp-ui-font-color1);
            font-size: 12px;
            table-layout: fixed;
            margin-left: auto;
            margin-right: auto;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon thead {
            border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
            vertical-align: bottom;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon td,
          .use-notebook-styles .jp-RenderedHTMLCommon th,
          .use-notebook-styles .jp-RenderedHTMLCommon tr {
            vertical-align: middle;
            padding: 0.5em 0.5em;
            line-height: normal;
            white-space: normal;
            max-width: none;
            border: none;
          }
          .use-notebook-styles .jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
          .use-notebook-styles .jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
            max-width: none;
          }
          .use-notebook-styles
            :not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon
            td,
          .use-notebook-styles
            :not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon
            th,
          .use-notebook-styles
            :not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon
            tr {
            text-align: right;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon th {
            font-weight: bold;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
            background: var(--jp-layout-color0);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon tbody tr:nth-child(even) {
            background: var(--jp-rendermime-table-row-background);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon tbody tr:hover {
            background: var(--jp-rendermime-table-row-hover-background);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon table {
            margin-bottom: 1em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon p {
            text-align: left;
            margin: 0px;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon p {
            margin-bottom: 1em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon img {
            -moz-force-broken-image-icon: 1;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon > img {
            display: block;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 1em;
          }
          .use-notebook-styles
            [data-jp-theme-light="false"]
            .jp-RenderedImage
            img.jp-needs-light-background {
            background-color: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles
            [data-jp-theme-light="true"]
            .jp-RenderedImage
            img.jp-needs-dark-background {
            background-color: var(--jp-inverse-layout-color1);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon img,
          .use-notebook-styles .jp-RenderedImage img,
          .use-notebook-styles .jp-RenderedHTMLCommon svg,
          .use-notebook-styles .jp-RenderedSVG svg {
            max-width: 100%;
            height: auto;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon img.jp-mod-unconfined,
          .use-notebook-styles .jp-RenderedImage img.jp-mod-unconfined,
          .use-notebook-styles .jp-RenderedHTMLCommon svg.jp-mod-unconfined,
          .use-notebook-styles .jp-RenderedSVG svg.jp-mod-unconfined {
            max-width: none;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert {
            padding: var(--jp-notebook-padding);
            border: var(--jp-border-width) solid transparent;
            border-radius: var(--jp-border-radius);
            margin-bottom: 1em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-info {
            color: var(--jp-info-color0);
            background-color: var(--jp-info-color3);
            border-color: var(--jp-info-color2);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-info hr {
            border-color: var(--jp-info-color3);
          }
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-info
            > p:last-child,
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-info
            > ul:last-child {
            margin-bottom: 0;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-warning {
            color: var(--jp-warn-color0);
            background-color: var(--jp-warn-color3);
            border-color: var(--jp-warn-color2);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-warning hr {
            border-color: var(--jp-warn-color3);
          }
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-warning
            > p:last-child,
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-warning
            > ul:last-child {
            margin-bottom: 0;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-success {
            color: var(--jp-success-color0);
            background-color: var(--jp-success-color3);
            border-color: var(--jp-success-color2);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-success hr {
            border-color: var(--jp-success-color3);
          }
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-success
            > p:last-child,
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-success
            > ul:last-child {
            margin-bottom: 0;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-danger {
            color: var(--jp-error-color0);
            background-color: var(--jp-error-color3);
            border-color: var(--jp-error-color2);
          }
          .use-notebook-styles .jp-RenderedHTMLCommon .alert-danger hr {
            border-color: var(--jp-error-color3);
          }
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-danger
            > p:last-child,
          .use-notebook-styles
            .jp-RenderedHTMLCommon
            .alert-danger
            > ul:last-child {
            margin-bottom: 0;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon blockquote {
            margin: 1em 2em;
            padding: 0 1em;
            border-left: 5px solid var(--jp-border-color2);
          }
          .use-notebook-styles a.jp-InternalAnchorLink {
            visibility: hidden;
            margin-left: 8px;
            color: var(--md-blue-800);
          }
          .use-notebook-styles h1:hover .jp-InternalAnchorLink,
          .use-notebook-styles h2:hover .jp-InternalAnchorLink,
          .use-notebook-styles h3:hover .jp-InternalAnchorLink,
          .use-notebook-styles h4:hover .jp-InternalAnchorLink,
          .use-notebook-styles h5:hover .jp-InternalAnchorLink,
          .use-notebook-styles h6:hover .jp-InternalAnchorLink {
            visibility: visible;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon kbd {
            background-color: var(--jp-rendermime-table-row-background);
            border: 1px solid var(--jp-border-color0);
            border-bottom-color: var(--jp-border-color2);
            border-radius: 3px;
            box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
            display: inline-block;
            font-size: 0.8em;
            line-height: 1em;
            padding: 0.2em 0.5em;
          }
          .use-notebook-styles .jp-RenderedHTMLCommon > *:last-child {
            margin-bottom: 0.5em;
          }
          .use-notebook-styles .jp-MimeDocument {
            outline: none;
          }
          .use-notebook-styles :root {
            --jp-private-filebrowser-button-height: 28px;
            --jp-private-filebrowser-button-width: 48px;
          }
          .use-notebook-styles .jp-FileBrowser {
            display: flex;
            flex-direction: column;
            color: var(--jp-ui-font-color1);
            background: var(--jp-layout-color1);
            font-size: var(--jp-ui-font-size1);
          }
          .use-notebook-styles .jp-FileBrowser-toolbar.jp-Toolbar {
            border-bottom: none;
            height: auto;
            margin: var(--jp-toolbar-header-margin);
            box-shadow: none;
          }
          .use-notebook-styles .jp-BreadCrumbs {
            flex: 0 0 auto;
            margin: 4px 12px;
          }
          .use-notebook-styles .jp-BreadCrumbs-item {
            margin: 0px 2px;
            padding: 0px 2px;
            border-radius: var(--jp-border-radius);
            cursor: pointer;
          }
          .use-notebook-styles .jp-BreadCrumbs-item:hover {
            background-color: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-BreadCrumbs-item:first-child {
            margin-left: 0px;
          }
          .use-notebook-styles .jp-BreadCrumbs-item.jp-mod-dropTarget {
            background-color: var(--jp-brand-color2);
            opacity: 0.7;
          }
          .use-notebook-styles .jp-FileBrowser-toolbar.jp-Toolbar {
            padding: 0px;
          }
          .use-notebook-styles .jp-FileBrowser-toolbar.jp-Toolbar {
            justify-content: space-evenly;
          }
          .use-notebook-styles
            .jp-FileBrowser-toolbar.jp-Toolbar
            .jp-Toolbar-item {
            flex: 1;
          }
          .use-notebook-styles
            .jp-FileBrowser-toolbar.jp-Toolbar
            .jp-ToolbarButtonComponent {
            width: 100%;
          }
          .use-notebook-styles .jp-DirListing {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            outline: 0;
          }
          .use-notebook-styles .jp-DirListing-header {
            flex: 0 0 auto;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            border-top: var(--jp-border-width) solid var(--jp-border-color2);
            border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
            box-shadow: var(--jp-toolbar-box-shadow);
            z-index: 2;
          }
          .use-notebook-styles .jp-DirListing-headerItem {
            padding: 4px 12px 2px 12px;
            font-weight: 500;
          }
          .use-notebook-styles .jp-DirListing-headerItem:hover {
            background: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-DirListing-headerItem.jp-id-name {
            flex: 1 0 84px;
          }
          .use-notebook-styles .jp-DirListing-headerItem.jp-id-modified {
            flex: 0 0 112px;
            border-left: var(--jp-border-width) solid var(--jp-border-color2);
            text-align: right;
          }
          .use-notebook-styles .jp-DirListing-narrow .jp-id-modified,
          .use-notebook-styles
            .jp-DirListing-narrow
            .jp-DirListing-itemModified {
            display: none;
          }
          .use-notebook-styles .jp-DirListing-headerItem.jp-mod-selected {
            font-weight: 600;
          }
          .use-notebook-styles .jp-DirListing-content {
            flex: 1 1 auto;
            margin: 0;
            padding: 0;
            list-style-type: none;
            overflow: auto;
            background-color: var(--jp-layout-color1);
          }
          .use-notebook-styles
            .jp-DirListing.jp-mod-native-drop
            .jp-DirListing-content {
            outline: 5px dashed rgba(128, 128, 128, 0.5);
            outline-offset: -10px;
            cursor: copy;
          }
          .use-notebook-styles .jp-DirListing-item {
            display: flex;
            flex-direction: row;
            padding: 4px 12px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .jp-DirListing-item.jp-mod-selected {
            color: white;
            background: var(--jp-brand-color1);
          }
          .use-notebook-styles .jp-DirListing-item.jp-mod-dropTarget {
            background: var(--jp-brand-color3);
          }
          .use-notebook-styles .jp-DirListing-item:hover:not(.jp-mod-selected) {
            background: var(--jp-layout-color2);
          }
          .use-notebook-styles .jp-DirListing-itemIcon {
            flex: 0 0 20px;
            margin-right: 4px;
          }
          .use-notebook-styles .jp-DirListing-itemText {
            flex: 1 0 64px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            user-select: none;
          }
          .use-notebook-styles .jp-DirListing-itemModified {
            flex: 0 0 125px;
            text-align: right;
          }
          .use-notebook-styles .jp-DirListing-editor {
            flex: 1 0 64px;
            outline: none;
            border: none;
          }
          .use-notebook-styles
            .jp-DirListing-item.jp-mod-running
            .jp-DirListing-itemIcon:before {
            color: limegreen;
            content: "\\25CF";
            font-size: 8px;
            position: absolute;
            left: -8px;
          }
          .use-notebook-styles .jp-DirListing-item.lm-mod-drag-image,
          .use-notebook-styles
            .jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
            font-size: var(--jp-ui-font-size1);
            padding-left: 4px;
            margin-left: 4px;
            width: 160px;
            background-color: var(--jp-ui-inverse-font-color2);
            box-shadow: var(--jp-elevation-z2);
            border-radius: 0px;
            color: var(--jp-ui-font-color1);
            transform: translateX(-40%) translateY(-58%);
          }
          .use-notebook-styles .jp-DirListing-deadSpace {
            flex: 1 1 auto;
            margin: 0;
            padding: 0;
            list-style-type: none;
            overflow: auto;
            background-color: var(--jp-layout-color1);
          }
          .use-notebook-styles .jp-Document {
            min-width: 120px;
            min-height: 120px;
            outline: none;
          }
          .use-notebook-styles .jp-FileDialog.jp-mod-conflict input {
            color: red;
          }
          .use-notebook-styles .jp-FileDialog .jp-new-name-title {
            margin-top: 12px;
          }
          .use-notebook-styles .jp-OutputArea {
            overflow-y: auto;
          }
          .use-notebook-styles .jp-OutputArea-child {
            display: flex;
            flex-direction: row;
          }
          .use-notebook-styles .jp-OutputPrompt {
            flex: 0 0 var(--jp-cell-prompt-width);
            color: var(--jp-cell-outprompt-font-color);
            font-family: var(--jp-cell-prompt-font-family);
            padding: var(--jp-code-padding);
            letter-spacing: var(--jp-cell-prompt-letter-spacing);
            line-height: var(--jp-code-line-height);
            font-size: var(--jp-code-font-size);
            border: var(--jp-border-width) solid transparent;
            opacity: var(--jp-cell-prompt-opacity);
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .jp-OutputArea-output {
            height: auto;
            overflow: auto;
            user-select: text;
            -moz-user-select: text;
            -webkit-user-select: text;
            -ms-user-select: text;
          }
          .use-notebook-styles .jp-OutputArea-child .jp-OutputArea-output {
            flex-grow: 1;
            flex-shrink: 1;
          }
          .use-notebook-styles .jp-OutputArea-output.jp-mod-isolated {
            width: 100%;
            display: block;
          }
          .use-notebook-styles
            body.lm-mod-override-cursor
            .jp-OutputArea-output.jp-mod-isolated {
            position: relative;
          }
          .use-notebook-styles
            body.lm-mod-override-cursor
            .jp-OutputArea-output.jp-mod-isolated:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: transparent;
          }
          .use-notebook-styles .jp-OutputArea-output pre {
            border: none;
            margin: 0px;
            padding: 0px;
            overflow-x: auto;
            overflow-y: auto;
            word-break: break-all;
            word-wrap: break-word;
            white-space: pre-wrap;
          }
          .use-notebook-styles
            .jp-OutputArea-output.jp-RenderedHTMLCommon
            table {
            margin-left: 0;
            margin-right: 0;
          }
          .use-notebook-styles .jp-OutputArea-output dl,
          .use-notebook-styles .jp-OutputArea-output dt,
          .use-notebook-styles .jp-OutputArea-output dd {
            display: block;
          }
          .use-notebook-styles .jp-OutputArea-output dl {
            width: 100%;
            overflow: hidden;
            padding: 0;
            margin: 0;
          }
          .use-notebook-styles .jp-OutputArea-output dt {
            font-weight: bold;
            float: left;
            width: 20%;
            padding: 0;
            margin: 0;
          }
          .use-notebook-styles .jp-OutputArea-output dd {
            float: left;
            width: 80%;
            padding: 0;
            margin: 0;
          }
          .use-notebook-styles
            .jp-OutputArea
            .jp-OutputArea
            .jp-OutputArea-prompt {
            display: none;
          }
          .use-notebook-styles
            .jp-OutputArea-output.jp-OutputArea-executeResult {
            margin-left: 0px;
            flex: 1 1 auto;
          }
          .use-notebook-styles .jp-OutputArea-executeResult.jp-RenderedText {
            padding-top: var(--jp-code-padding);
          }
          .use-notebook-styles .jp-OutputArea-stdin {
            line-height: var(--jp-code-line-height);
            padding-top: var(--jp-code-padding);
            display: flex;
          }
          .use-notebook-styles .jp-Stdin-prompt {
            color: var(--jp-content-font-color0);
            padding-right: var(--jp-code-padding);
            vertical-align: baseline;
            flex: 0 0 auto;
          }
          .use-notebook-styles .jp-Stdin-input {
            font-family: var(--jp-code-font-family);
            font-size: inherit;
            color: inherit;
            background-color: inherit;
            width: 42%;
            min-width: 200px;
            vertical-align: baseline;
            padding: 0 0.25em;
            margin: 0 0.25em;
            flex: 0 0 70%;
          }
          .use-notebook-styles .jp-Stdin-input:focus {
            box-shadow: none;
          }
          .use-notebook-styles .jp-LinkedOutputView .jp-OutputArea {
            height: 100%;
            display: block;
          }
          .use-notebook-styles
            .jp-LinkedOutputView
            .jp-OutputArea-output:only-child {
            height: 100%;
          }
          .use-notebook-styles .jp-Collapser {
            flex: 0 0 var(--jp-cell-collapser-width);
            padding: 0px;
            margin: 0px;
            border: none;
            outline: none;
            background: transparent;
            border-radius: var(--jp-border-radius);
            opacity: 1;
          }
          .use-notebook-styles .jp-Collapser-child {
            display: block;
            width: 100%;
            box-sizing: border-box;
            position: absolute;
            top: 0px;
            bottom: 0px;
          }
          .use-notebook-styles .jp-CellHeader,
          .use-notebook-styles .jp-CellFooter {
            height: 0px;
            width: 100%;
            padding: 0px;
            margin: 0px;
            border: none;
            outline: none;
            background: transparent;
          }
          .use-notebook-styles .jp-InputArea {
            display: flex;
            flex-direction: row;
          }
          .use-notebook-styles .jp-InputArea-editor {
            flex: 1 1 auto;
          }
          .use-notebook-styles .jp-InputArea-editor {
            border: var(--jp-border-width) solid
              var(--jp-cell-editor-border-color);
            border-radius: 0px;
            background: var(--jp-cell-editor-background);
          }
          .use-notebook-styles .jp-InputPrompt {
            flex: 0 0 var(--jp-cell-prompt-width);
            color: var(--jp-cell-inprompt-font-color);
            font-family: var(--jp-cell-prompt-font-family);
            padding: var(--jp-code-padding);
            letter-spacing: var(--jp-cell-prompt-letter-spacing);
            line-height: var(--jp-code-line-height);
            font-size: var(--jp-code-font-size);
            border: var(--jp-border-width) solid transparent;
            opacity: var(--jp-cell-prompt-opacity);
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .use-notebook-styles .jp-Placeholder {
            display: flex;
            flex-direction: row;
            flex: 1 1 auto;
          }
          .use-notebook-styles .jp-Placeholder-prompt {
            box-sizing: border-box;
          }
          .use-notebook-styles .jp-Placeholder-content {
            flex: 1 1 auto;
            border: none;
            background: transparent;
            height: 20px;
            box-sizing: border-box;
          }
          .use-notebook-styles .jp-Placeholder-content .jp-MoreHorizIcon {
            width: 32px;
            height: 16px;
            border: 1px solid transparent;
            border-radius: var(--jp-border-radius);
          }
          .use-notebook-styles .jp-Placeholder-content .jp-MoreHorizIcon:hover {
            border: 1px solid var(--jp-border-color1);
            box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
            background-color: var(--jp-layout-color0);
          }
          .use-notebook-styles :root {
            --jp-private-cell-scrolling-output-offset: 5px;
          }
          .use-notebook-styles .jp-Cell {
            padding: var(--jp-cell-padding);
            margin: 0px;
            border: none;
            outline: none;
            background: transparent;
          }
          .use-notebook-styles .jp-Cell-inputWrapper,
          .use-notebook-styles .jp-Cell-outputWrapper {
            display: flex;
            flex-direction: row;
            padding: 0px;
            margin: 0px;
            overflow: visible;
          }
          .use-notebook-styles .jp-Cell-inputArea,
          .use-notebook-styles .jp-Cell-outputArea {
            flex: 1 1 auto;
          }
          .use-notebook-styles
            .jp-Cell.jp-mod-noOutputs
            .jp-Cell-outputCollapser {
            border: none !important;
            background: transparent !important;
          }
          .use-notebook-styles
            .jp-Cell:not(.jp-mod-noOutputs)
            .jp-Cell-outputCollapser {
            min-height: var(--jp-cell-collapser-min-height);
          }
          .use-notebook-styles
            .jp-Cell:not(.jp-mod-noOutputs)
            .jp-Cell-outputWrapper {
            margin-top: 5px;
          }
          .use-notebook-styles
            .jp-OutputArea-executeResult
            .jp-RenderedText.jp-OutputArea-output {
            padding-top: var(--jp-code-padding);
          }
          .use-notebook-styles
            .jp-CodeCell.jp-mod-outputsScrolled
            .jp-Cell-outputArea {
            overflow-y: auto;
            max-height: 200px;
            box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.3);
            margin-left: var(--jp-private-cell-scrolling-output-offset);
          }
          .use-notebook-styles
            .jp-CodeCell.jp-mod-outputsScrolled
            .jp-OutputArea-prompt {
            flex: 0 0
              calc(
                var(--jp-cell-prompt-width) -
                  var(--jp-private-cell-scrolling-output-offset)
              );
          }
          .use-notebook-styles .jp-MarkdownOutput {
            flex: 1 1 auto;
            margin-top: 0;
            margin-bottom: 0;
            padding-left: var(--jp-code-padding);
          }
          .use-notebook-styles .jp-MarkdownOutput.jp-RenderedHTMLCommon {
            overflow: auto;
          }
          .use-notebook-styles .jp-NotebookPanel-toolbar {
            padding: 2px;
          }
          .use-notebook-styles
            .jp-Toolbar-item.jp-Notebook-toolbarCellType
            .jp-select-wrapper.jp-mod-focused {
            border: none;
            box-shadow: none;
          }
          .use-notebook-styles .jp-Notebook-toolbarCellTypeDropdown select {
            height: 24px;
            font-size: var(--jp-ui-font-size1);
            line-height: 14px;
            border-radius: 0;
            display: block;
          }
          .use-notebook-styles .jp-Notebook-toolbarCellTypeDropdown span {
            top: 5px !important;
          }
          .use-notebook-styles :root {
            --jp-private-notebook-dragImage-width: 304px;
            --jp-private-notebook-dragImage-height: 36px;
            --jp-private-notebook-selected-color: var(--md-blue-400);
            --jp-private-notebook-active-color: var(--md-green-400);
          }
          .use-notebook-styles .jp-NotebookPanel {
            display: block;
            height: 100%;
          }
          .use-notebook-styles .jp-NotebookPanel.jp-Document {
            min-width: 240px;
            min-height: 120px;
          }
          .use-notebook-styles .jp-Notebook {
            padding: var(--jp-notebook-padding);
            outline: none;
            overflow: auto;
            background: var(--jp-layout-color0);
          }
          .use-notebook-styles .jp-Notebook.jp-mod-scrollPastEnd::after {
            display: block;
            content: "";
            min-height: var(--jp-notebook-scroll-padding);
          }
          .use-notebook-styles .jp-Notebook .jp-Cell {
            overflow: visible;
          }
          .use-notebook-styles .jp-Notebook .jp-Cell .jp-InputPrompt {
            cursor: move;
          }
          .use-notebook-styles
            .jp-Notebook
            .jp-Cell:not(.jp-mod-active)
            .jp-InputPrompt {
            opacity: var(--jp-cell-prompt-not-active-opacity);
            color: var(--jp-cell-prompt-not-active-font-color);
          }
          .use-notebook-styles
            .jp-Notebook
            .jp-Cell:not(.jp-mod-active)
            .jp-OutputPrompt {
            opacity: var(--jp-cell-prompt-not-active-opacity);
            color: var(--jp-cell-prompt-not-active-font-color);
          }
          .use-notebook-styles
            .jp-Notebook
            .jp-Cell.jp-mod-active
            .jp-Collapser {
            background: var(--jp-brand-color1);
          }
          .use-notebook-styles .jp-Notebook .jp-Cell .jp-Collapser:hover {
            box-shadow: var(--jp-elevation-z2);
            background: var(--jp-brand-color1);
            opacity: var(--jp-cell-collapser-not-active-hover-opacity);
          }
          .use-notebook-styles
            .jp-Notebook
            .jp-Cell.jp-mod-active
            .jp-Collapser:hover {
            background: var(--jp-brand-color0);
            opacity: 1;
          }
          .use-notebook-styles
            .jp-Notebook.jp-mod-commandMode
            .jp-Cell.jp-mod-selected {
            background: var(--jp-notebook-multiselected-color);
          }
          .use-notebook-styles
            .jp-Notebook.jp-mod-commandMode
            .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
            background: transparent;
          }
          .use-notebook-styles
            .jp-Notebook.jp-mod-editMode
            .jp-Cell.jp-mod-active
            .jp-InputArea-editor {
            border: var(--jp-border-width) solid
              var(--jp-cell-editor-active-border-color);
            box-shadow: var(--jp-input-box-shadow);
            background-color: var(--jp-cell-editor-active-background);
          }
          .use-notebook-styles .jp-Notebook-cell.jp-mod-dropSource {
            opacity: 0.5;
          }
          .use-notebook-styles .jp-Notebook-cell.jp-mod-dropTarget,
          .use-notebook-styles
            .jp-Notebook.jp-mod-commandMode
            .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
            border-top-color: var(--jp-private-notebook-selected-color);
            border-top-style: solid;
            border-top-width: 2px;
          }
          .use-notebook-styles .jp-dragImage {
            display: flex;
            flex-direction: row;
            width: var(--jp-private-notebook-dragImage-width);
            height: var(--jp-private-notebook-dragImage-height);
            border: var(--jp-border-width) solid
              var(--jp-cell-editor-border-color);
            background: var(--jp-cell-editor-background);
            overflow: visible;
          }
          .use-notebook-styles .jp-dragImage-singlePrompt {
            box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
          }
          .use-notebook-styles .jp-dragImage .jp-dragImage-content {
            flex: 1 1 auto;
            z-index: 2;
            font-size: var(--jp-code-font-size);
            font-family: var(--jp-code-font-family);
            line-height: var(--jp-code-line-height);
            padding: var(--jp-code-padding);
            border: var(--jp-border-width) solid
              var(--jp-cell-editor-border-color);
            background: var(--jp-cell-editor-background-color);
            color: var(--jp-content-font-color3);
            text-align: left;
            margin: 4px 4px 4px 0px;
          }
          .use-notebook-styles .jp-dragImage .jp-dragImage-prompt {
            flex: 0 0 auto;
            min-width: 36px;
            color: var(--jp-cell-inprompt-font-color);
            padding: var(--jp-code-padding);
            padding-left: 12px;
            font-family: var(--jp-cell-prompt-font-family);
            letter-spacing: var(--jp-cell-prompt-letter-spacing);
            line-height: 1.9;
            font-size: var(--jp-code-font-size);
            border: var(--jp-border-width) solid transparent;
          }
          .use-notebook-styles .jp-dragImage-multipleBack {
            z-index: -1;
            position: absolute;
            height: 32px;
            width: 300px;
            top: 8px;
            left: 8px;
            background: var(--jp-layout-color2);
            border: var(--jp-border-width) solid var(--jp-input-border-color);
            box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
          }
          .use-notebook-styles .jp-NotebookTools {
            display: block;
            min-width: var(--jp-sidebar-min-width);
            color: var(--jp-ui-font-color1);
            background: var(--jp-layout-color1);
            font-size: var(--jp-ui-font-size1);
            overflow: auto;
          }
          .use-notebook-styles .jp-NotebookTools-tool {
            padding: 0px 12px 0 12px;
          }
          .use-notebook-styles .jp-ActiveCellTool {
            padding: 12px;
            background-color: var(--jp-layout-color1);
            border-top: none !important;
          }
          .use-notebook-styles .jp-ActiveCellTool .jp-InputArea-prompt {
            flex: 0 0 auto;
            padding-left: 0px;
          }
          .use-notebook-styles .jp-ActiveCellTool .jp-InputArea-editor {
            flex: 1 1 auto;
            background: var(--jp-cell-editor-background);
            border-color: var(--jp-cell-editor-border-color);
          }
          .use-notebook-styles
            .jp-ActiveCellTool
            .jp-InputArea-editor
            .CodeMirror {
            background: transparent;
          }
          .use-notebook-styles .jp-MetadataEditorTool {
            flex-direction: column;
            padding: 12px 0px 12px 0px;
          }
          .use-notebook-styles .jp-RankedPanel > :not(:first-child) {
            margin-top: 12px;
          }
          .use-notebook-styles .jp-KeySelector select.jp-mod-styled {
            font-size: var(--jp-ui-font-size1);
            color: var(--jp-ui-font-color0);
            border: var(--jp-border-width) solid var(--jp-border-color1);
          }
          .use-notebook-styles .jp-KeySelector label,
          .use-notebook-styles .jp-MetadataEditorTool label {
            line-height: 1.4;
          }
          .use-notebook-styles .jp-mod-presentationMode .jp-Notebook {
            --jp-content-font-size1: var(--jp-content-presentation-font-size1);
            --jp-code-font-size: var(--jp-code-presentation-font-size);
          }
          .use-notebook-styles
            .jp-mod-presentationMode
            .jp-Notebook
            .jp-Cell
            .jp-InputPrompt,
          .use-notebook-styles
            .jp-mod-presentationMode
            .jp-Notebook
            .jp-Cell
            .jp-OutputPrompt {
            flex: 0 0 110px;
          }
          .use-notebook-styles a.anchor-link {
            display: none;
          }
          .use-notebook-styles .highlight {
            margin: 0.4em;
            background: var(--jp-cell-editor-background);
          }
          .use-notebook-styles pre {
            border-radius: 0;
            margin: 0;
            margin-bottom: 1em;
            padding: 12px 8px !important;
            width: auto;
            font-family: Consolas, Menlo, Monaco, Lucida Console,
              Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
              Courier New, monospace, sans-serif;
            font-size: 13px;
            background-color: #eff0f1;
            border-radius: 3px;
            white-space: pre-line;
            word-break: break-all !important;
          }
          .use-notebook-styles .CodeMirror {
            background: #0000 !important;
          }
          .use-notebook-styles .jp-InputPrompt,
          .use-notebook-styles .jp-OutputPrompt {
            overflow: initial;
          }
          .use-notebook-styles .jp-InputArea {
            overflow: hidden;
          }
          .use-notebook-styles .jp-InputArea-editor {
            overflow: hidden;
          }
          .use-notebook-styles .jp-OutputArea pre {
            background: #0000;
          }
        `}
      </style>
      <div
        dangerouslySetInnerHTML={{
          __html: notebookHtml,
        }}
      />
    </div>
  );
};

export default NBViewer;