/* @ds-bundle: {"format":4,"namespace":"TrazadoTechnicalDrawingSystem_c49611","components":[{"name":"AnnotationCallout","sourcePath":"components/drawing/AnnotationCallout.jsx"},{"name":"DimensionLine","sourcePath":"components/drawing/DimensionLine.jsx"},{"name":"Legend","sourcePath":"components/drawing/Legend.jsx"},{"name":"RevisionStamp","sourcePath":"components/drawing/RevisionStamp.jsx"},{"name":"SheetFrame","sourcePath":"components/drawing/SheetFrame.jsx"},{"name":"TitleBlock","sourcePath":"components/drawing/TitleBlock.jsx"}],"sourceHashes":{"components/drawing/AnnotationCallout.jsx":"24951a428bef","components/drawing/DimensionLine.jsx":"377310809315","components/drawing/Legend.jsx":"01ffbeb76e96","components/drawing/RevisionStamp.jsx":"e8a4d9157d54","components/drawing/SheetFrame.jsx":"a1bb4dd40130","components/drawing/TitleBlock.jsx":"827d8d73842d","ui_kits/sheets/image-slot.js":"fff26d081c8d","ui_kits/subardo/SubardoSheet.jsx":"1bcb974213a2","ui_kits/subardo/TentElevation.jsx":"5bfea18f7363","ui_kits/subardo/TentPlan.jsx":"ea63f2572de5","ui_kits/subardo/doc-page.js":"f52ae9c02fca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TrazadoTechnicalDrawingSystem_c49611 = window.TrazadoTechnicalDrawingSystem_c49611 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/drawing/AnnotationCallout.jsx
try { (() => {
function AnnotationCallout({
  text = 'ANNOTATION TEXT',
  direction = 'right',
  leaderLength = 60
}) {
  const s = {
    wrap: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: direction === 'left' ? 'row-reverse' : 'row',
      gap: 6
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--accent)',
      flexShrink: 0
    },
    line: {
      height: 1,
      width: leaderLength,
      background: 'var(--ink)',
      flexShrink: 0
    },
    text: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.dot
  }), /*#__PURE__*/React.createElement("div", {
    style: s.line
  }), /*#__PURE__*/React.createElement("div", {
    style: s.text
  }, text));
}
Object.assign(__ds_scope, { AnnotationCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drawing/AnnotationCallout.jsx", error: String((e && e.message) || e) }); }

// components/drawing/DimensionLine.jsx
try { (() => {
function DimensionLine({
  value = "6'-8\"",
  orientation = 'horizontal',
  length = 140,
  labelPosition = 'inline',
  tone = 'ink'
}) {
  const c = tone === 'accent' ? 'var(--accent)' : 'var(--ink)';
  const label = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    lineHeight: '12px',
    color: c,
    whiteSpace: 'nowrap',
    background: 'var(--paper)'
  };
  const tick = {
    position: 'absolute',
    width: 1,
    height: 9,
    background: c,
    transform: 'rotate(45deg)'
  };
  if (orientation === 'vertical') {
    const vLabel = {
      ...label,
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)'
    };
    if (labelPosition === 'above') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          width: 24,
          height: length
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: 16,
          top: 0,
          bottom: 0,
          width: 1,
          background: c
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          ...tick,
          left: 16,
          top: -4.5
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          ...tick,
          left: 16,
          bottom: -4.5
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...vLabel,
          padding: '2px 1px'
        }
      }, value)));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 14,
        height: length,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...tick,
        left: 6.5,
        top: -4.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        flex: 1,
        background: c
      }
    }), value && /*#__PURE__*/React.createElement("span", {
      style: {
        ...vLabel,
        padding: '3px 0'
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        flex: 1,
        background: c
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...tick,
        left: 6.5,
        bottom: -4.5
      }
    }));
  }
  if (labelPosition === 'above') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: length,
        height: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 2,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...label,
        padding: '0 2px'
      }
    }, value)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 16,
        height: 1,
        background: c
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...tick,
        left: -0.5,
        top: 11.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...tick,
        right: -0.5,
        top: 11.5
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: length,
      height: 14,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...tick,
      left: -0.5,
      top: 2.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      flex: 1,
      background: c
    }
  }), value && /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      padding: '0 3px'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      flex: 1,
      background: c
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...tick,
      right: -0.5,
      top: 2.5
    }
  }));
}
Object.assign(__ds_scope, { DimensionLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drawing/DimensionLine.jsx", error: String((e && e.message) || e) }); }

// components/drawing/Legend.jsx
try { (() => {
function Legend({
  items = [{
    pattern: 'hatch-45',
    label: 'Insulation'
  }, {
    pattern: 'hatch-cross',
    label: 'Concrete'
  }, {
    pattern: 'dots',
    label: 'Gravel fill'
  }],
  direction = 'row',
  size = 18
}) {
  const col = direction === 'column';
  const s = {
    wrap: {
      display: 'flex',
      flexDirection: col ? 'column' : 'row',
      gap: col ? 6 : 18,
      flexWrap: 'wrap'
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    },
    square: {
      width: size,
      height: size,
      border: '1px solid var(--ink)',
      boxSizing: 'border-box',
      flexShrink: 0
    },
    dotBox: {
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    label: {
      fontFamily: 'var(--font-mono)',
      fontSize: size < 16 ? 9 : 10,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  };
  const cls = p => p ? p.startsWith('hatch-') ? p : 'hatch-' + p : undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: s.wrap
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: s.row
  }, it.shape === 'line' ? /*#__PURE__*/React.createElement("div", {
    style: s.dotBox
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: it.weight || 2,
      background: it.fill || 'var(--ink)'
    }
  })) : it.shape === 'dot' ? /*#__PURE__*/React.createElement("div", {
    style: s.dotBox
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.round(size * 0.6),
      height: Math.round(size * 0.6),
      borderRadius: '50%',
      background: it.fill || 'var(--ink)',
      border: it.outline ? '1px solid var(--ink-soft)' : 'none',
      boxSizing: 'border-box'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: cls(it.pattern),
    style: {
      ...s.square,
      backgroundColor: it.fill || 'var(--paper)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: s.label
  }, it.label))));
}
Object.assign(__ds_scope, { Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drawing/Legend.jsx", error: String((e && e.message) || e) }); }

// components/drawing/RevisionStamp.jsx
try { (() => {
function RevisionStamp({
  label = '01',
  date,
  size = 44
}) {
  const s = {
    wrap: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '1.5px solid var(--ink)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cross: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    label: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: size * 0.24,
      color: 'var(--accent)'
    },
    date: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      color: 'var(--ink-soft)',
      marginTop: 4,
      textAlign: 'center'
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("svg", {
    style: s.cross,
    viewBox: "0 0 44 44"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "4",
    x2: "22",
    y2: "40",
    stroke: "var(--accent)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "22",
    x2: "40",
    y2: "22",
    stroke: "var(--accent)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("span", {
    style: s.label
  }, label)), date && /*#__PURE__*/React.createElement("div", {
    style: s.date
  }, date));
}
Object.assign(__ds_scope, { RevisionStamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drawing/RevisionStamp.jsx", error: String((e && e.message) || e) }); }

// components/drawing/SheetFrame.jsx
try { (() => {
function SheetFrame({
  theme = 'color',
  header,
  footer,
  children,
  cropMarks = true,
  border = true
}) {
  const s = {
    frame: {
      position: 'relative',
      width: 595,
      height: 842,
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-mono)',
      boxSizing: 'border-box'
    },
    crop: {
      position: 'absolute',
      width: 10,
      height: 10,
      borderColor: 'var(--ink)'
    },
    band: {
      flexShrink: 0,
      borderBottom: '1px solid var(--ink)',
      padding: '14px 20px',
      minHeight: 'var(--band-top)',
      boxSizing: 'border-box'
    },
    body: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden'
    },
    footerBand: {
      flexShrink: 0,
      borderTop: '1px solid var(--ink)',
      padding: '10px 20px',
      minHeight: 'var(--band-bottom)',
      boxSizing: 'border-box'
    }
  };
  const crops = [{
    top: -1,
    left: -1,
    borderTop: '2px solid',
    borderLeft: '2px solid'
  }, {
    top: -1,
    right: -1,
    borderTop: '2px solid',
    borderRight: '2px solid'
  }, {
    bottom: -1,
    left: -1,
    borderBottom: '2px solid',
    borderLeft: '2px solid'
  }, {
    bottom: -1,
    right: -1,
    borderBottom: '2px solid',
    borderRight: '2px solid'
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      ...s.frame,
      border: border ? s.frame.border : 'none'
    }
  }, cropMarks !== false && crops.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...s.crop,
      ...c,
      borderColor: 'var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: s.band
  }, header), /*#__PURE__*/React.createElement("div", {
    style: s.body
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: s.footerBand
  }, footer) : /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      borderTop: '1px solid var(--ink)',
      height: 24
    }
  }));
}
Object.assign(__ds_scope, { SheetFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drawing/SheetFrame.jsx", error: String((e && e.message) || e) }); }

// components/drawing/TitleBlock.jsx
try { (() => {
function TitleBlock({
  project = 'PROJECT NAME',
  sheetTitle = 'Sheet Title',
  sheetNumber = 'A0.0',
  date,
  meta,
  status = 'ISSUED FOR PERMITTING',
  statusPosition = 'below',
  size = 'md'
}) {
  const lg = size === 'lg';
  const s = {
    row: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    },
    project: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: lg ? 34 : 20,
      lineHeight: lg ? 1 : 1.4,
      letterSpacing: '0.02em',
      color: 'var(--ink)',
      textTransform: 'uppercase'
    },
    meta: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-soft)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      textAlign: 'right'
    },
    status: {
      background: 'var(--fill-accent)',
      color: 'var(--fill-accent-ink)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.1em',
      padding: '3px 8px',
      marginTop: lg ? 8 : 6,
      display: 'inline-block',
      textTransform: 'uppercase'
    },
    bottomRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 10
    },
    sheetTitle: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: lg ? 15 : 13,
      letterSpacing: '0.06em',
      color: 'var(--ink)',
      textTransform: 'uppercase'
    },
    sheetNumber: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: lg ? 26 : 22,
      lineHeight: 1,
      color: 'var(--ink)'
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: s.row
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: s.project
  }, project), status && statusPosition !== 'right' && /*#__PURE__*/React.createElement("div", {
    style: s.status
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: s.meta
  }, status && statusPosition === 'right' && /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.status,
      marginTop: 0,
      alignSelf: 'flex-end'
    }
  }, status), date && /*#__PURE__*/React.createElement("span", null, "Date ", date), meta && /*#__PURE__*/React.createElement("span", null, meta))), /*#__PURE__*/React.createElement("div", {
    style: s.bottomRow
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sheetTitle
  }, sheetTitle), sheetNumber && /*#__PURE__*/React.createElement("div", {
    style: s.sheetNumber
  }, sheetNumber)));
}
Object.assign(__ds_scope, { TitleBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/drawing/TitleBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sheets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sheets/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/subardo/SubardoSheet.jsx
try { (() => {
const {
  SheetFrame: SubFrame,
  TitleBlock: SubTitle,
  AnnotationCallout: SubCallout,
  DimensionLine: SubDim,
  Legend: SubLegend
} = window.TrazadoTechnicalDrawingSystem_c49611;
const SUB_S = 11.338;
const SUB_CX = 296.5;
const SUB_CY = 300;
const SUB_GS = 225;
const SUB_GF = 505;
const SUB_SE = 12.6;
const SUB_JOINTS = [0, 45, 82.5, 135, 180, 225, 262.5, 315];
const SUB_PANELS = [[1, 337.5], [2, 288.75], [3, 243.75], [4, 202.5], [5, 157.5], [6, 108.75], [7, 63.75], [8, 22.5]];
const SUB_SHEETS = {
  measures: {
    no: 'S-01',
    title: 'Measures',
    specs: [[['Diameter', '26.00 m', true], ['H.', '10.00 m'], ['h.', '3.50 m']], [['Dome diameter', '2.30 m'], ['2 antennas', '7.50 m']]],
    notes: ['All dimensions in metres.', 'Diameter taken at tent edge.', 'Nail line 3.50 m beyond tent edge.']
  },
  nails: {
    no: 'S-02',
    title: 'Tent Nails',
    key: {
      label: 'Tent nails',
      value: '44',
      unit: 'pcs'
    },
    notes: ['Nail circle = 103.67 m - Distance between nails 2.16 m.', 'Double ratchet on keys.'],
    callout: {
      t: 322.5,
      r: 'rN',
      text: 'Nail, typ.',
      leader: 40
    }
  },
  poles: {
    no: 'S-03',
    title: 'Poles',
    key: {
      label: 'Poles',
      value: '46',
      unit: 'pcs'
    },
    notes: ['No poles on doors.']
  },
  frontside: {
    no: 'S-04',
    title: 'Front & Side View',
    elev: true,
    notes: ['Side view: front on the left.', 'Main cables run from the arch to the tireforts.', {
      text: 'Tireforts FRONT/REAR=16.50 m, and SIDES=20.25 m both from the center of the tent.',
      strong: true
    }]
  },
  sidewalls: {
    no: 'S-05',
    title: 'Sidewalls',
    key: {
      label: 'Sidewall panels',
      value: '8',
      unit: 'pcs'
    },
    notes: ['8 sidewall panels, numbered counter-clockwise from the front.']
  },
  tireforts: {
    no: 'S-06',
    title: 'Tireforts',
    key: {
      label: 'Tireforts',
      value: '6',
      unit: 'pcs'
    },
    frontR: 19.6,
    notes: ['6 tireforts: 2 front, 2 rear, 1 each side.', 'Front / rear: 6.50 m from tent edge, in line with the arch ends.', 'Sides: 16.5 m from antenna.']
  }
};
function subLegend(kind, mono) {
  const tent = mono ? {
    label: 'Tent',
    pattern: 'hatch-45'
  } : {
    label: 'Tent',
    fill: 'var(--plan-fill)'
  };
  const arch = mono ? {
    label: 'Centre arch',
    pattern: 'hatch-cross'
  } : {
    label: 'Centre arch',
    fill: 'var(--ink-soft)'
  };
  const nail = {
    label: 'Nail (44)',
    shape: 'dot',
    fill: kind === 'nails' ? 'var(--accent)' : 'var(--ink-soft)'
  };
  const pole = kind === 'poles' ? {
    label: 'Side pole (46)',
    shape: 'dot',
    fill: 'var(--accent)'
  } : {
    label: 'Side pole (46)',
    shape: 'dot',
    fill: 'var(--paper)',
    outline: true
  };
  if (kind === 'frontside') return [tent, arch, {
    label: 'CABLES',
    shape: 'line',
    fill: 'var(--ink-soft)',
    weight: 1
  }, {
    label: 'Tirefort',
    fill: 'var(--ink)'
  }];
  if (kind === 'sidewalls') return [tent, {
    label: 'Sidewall',
    shape: 'line',
    fill: 'var(--accent)',
    weight: 3
  }, {
    label: 'Panel joint',
    shape: 'line',
    fill: 'var(--ink)',
    weight: 2
  }, pole];
  if (kind === 'tireforts') return [tent, arch, {
    label: 'Tirefort (6)',
    fill: 'var(--accent)'
  }, pole, nail];
  return [tent, arch, nail, pole];
}
function SubKeyFigure({
  label,
  value,
  unit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      top: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1,
      color: 'var(--accent)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--ink)',
      textTransform: 'uppercase'
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 5,
      background: 'var(--fill-highlight)'
    }
  }));
}
function SubSpecs({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      top: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, row.map(([l, v, acc], j) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, j > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 12,
      background: 'var(--line-grid)',
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: l.length > 2 ? '0.14em' : '0.04em',
      textTransform: l.length > 2 ? 'uppercase' : 'none',
      color: 'var(--ink-soft)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: acc ? 700 : 600,
      fontSize: 15,
      lineHeight: 1,
      color: acc ? 'var(--accent)' : 'var(--ink)'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 5,
      background: 'var(--fill-highlight)',
      marginTop: 2
    }
  }));
}
function SubViewLabel({
  top,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      top,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 3,
      background: 'var(--fill-highlight)'
    }
  }));
}
function SubFooterCol({
  label,
  first,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      paddingLeft: first ? 0 : 14,
      borderLeft: first ? 'none' : '1px solid var(--line-grid)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 8,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, label), children);
}
function SubChain({
  y,
  segs,
  s = SUB_S
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, segs.map(([a, b, v, acc], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: SUB_CX + a * s,
      top: y - 7
    }
  }, /*#__PURE__*/React.createElement(SubDim, {
    value: v,
    length: (b - a) * s,
    tone: acc ? 'accent' : 'ink'
  }))));
}
function SubVChain({
  segs
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, segs.map(([a, b, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: SUB_CX - 7,
      top: SUB_CY + a * SUB_S
    }
  }, /*#__PURE__*/React.createElement(SubDim, {
    value: v,
    length: (b - a) * SUB_S,
    orientation: "vertical"
  }))));
}
function SubMeasureLayer({
  g,
  t1,
  t2
}) {
  const ext = [[-20.25, t2], [-16.5, t1], [-13, t2], [-3.75, t1], [3.75, t1], [13, t2], [16.5, t1], [20.25, t2]];
  const pal = g.P(45, g.rC + 36),
    kon = g.P(90, g.rC + 36);
  const txt = {
    fontFamily: 'var(--font-mono)',
    fontSize: 9,
    letterSpacing: '0.12em',
    fill: 'var(--ink)'
  };
  return /*#__PURE__*/React.createElement("g", null, ext.map(([m, y], i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: SUB_CX + m * SUB_S,
    y1: SUB_CY,
    x2: SUB_CX + m * SUB_S,
    y2: y + 5,
    style: {
      stroke: 'var(--ink-faint)',
      strokeWidth: 0.6,
      strokeDasharray: '2 2'
    }
  })), /*#__PURE__*/React.createElement(TentArrow, {
    from: g.P(45, g.rC + 6),
    to: g.P(45, g.rC + 30)
  }), /*#__PURE__*/React.createElement("text", {
    x: pal[0],
    y: pal[1],
    dominantBaseline: "central",
    transform: `rotate(-45 ${pal[0]} ${pal[1]})`,
    style: txt
  }, "PALAPAS"), /*#__PURE__*/React.createElement(TentArrow, {
    from: g.P(90, g.rC + 6),
    to: g.P(90, g.rC + 30)
  }), /*#__PURE__*/React.createElement("text", {
    x: kon[0],
    y: kon[1],
    dominantBaseline: "central",
    style: txt
  }, "KONSUM"));
}
function SubSidewallLayer({
  g
}) {
  return /*#__PURE__*/React.createElement("g", null, SUB_JOINTS.map(t => {
    const a = g.P(t, 9.5 * SUB_S),
      b = g.P(t, 14.3 * SUB_S);
    return /*#__PURE__*/React.createElement("line", {
      key: t,
      x1: a[0],
      y1: a[1],
      x2: b[0],
      y2: b[1],
      style: {
        stroke: 'var(--ink)',
        strokeWidth: 2.2
      }
    });
  }), SUB_PANELS.map(([n, t]) => {
    const p = g.P(t, 13 * SUB_S);
    return /*#__PURE__*/React.createElement("g", {
      key: n
    }, /*#__PURE__*/React.createElement("circle", {
      cx: p[0],
      cy: p[1],
      r: 8,
      style: {
        fill: 'var(--paper)',
        stroke: 'var(--ink)',
        strokeWidth: 0.75
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: p[0],
      y: p[1],
      textAnchor: "middle",
      dominantBaseline: "central",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 10.5,
        fill: 'var(--ink)'
      }
    }, n));
  }));
}
function SubTirefortLayer() {
  const s = SUB_S,
    cx = SUB_CX,
    cy = SUB_CY;
  const acc = {
    fill: 'var(--accent)'
  };
  const dash = {
    stroke: 'var(--ink-faint)',
    strokeWidth: 0.6,
    strokeDasharray: '2 2'
  };
  return /*#__PURE__*/React.createElement("g", null, [-1, 1].map(v => [-1, 1].map(h => /*#__PURE__*/React.createElement("rect", {
    key: v + '' + h,
    x: cx + (h * 3.75 - 0.75) * s,
    y: v < 0 ? cy - 22.5 * s : cy + 19.5 * s,
    width: 1.5 * s,
    height: 3 * s,
    style: acc
  }))), /*#__PURE__*/React.createElement("rect", {
    x: cx - 23.25 * s,
    y: cy - 0.75 * s,
    width: 3 * s,
    height: 1.5 * s,
    style: acc
  }), /*#__PURE__*/React.createElement("rect", {
    x: cx + 20.5 * s,
    y: cy - 0.75 * s,
    width: 3 * s,
    height: 1.5 * s,
    style: acc
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx - 3 * s,
    y1: cy - 19.5 * s,
    x2: cx + 3 * s,
    y2: cy - 19.5 * s,
    style: dash
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx - 3 * s,
    y1: cy + 19.5 * s,
    x2: cx + 3 * s,
    y2: cy + 19.5 * s,
    style: dash
  }));
}
function SubElevations({
  theme
}) {
  const t1S = SUB_GS + 22,
    t2S = SUB_GS + 46,
    tF = SUB_GF + 22;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TentElevation, {
    theme: theme,
    view: "side",
    cx: SUB_CX,
    g0: SUB_GS,
    s: SUB_SE,
    ext: [[-19.5, t2S], [19.5, t2S], [-16.5, t1S], [16.5, t1S], [-13, t2S], [13, t2S], [0, t1S]]
  }), /*#__PURE__*/React.createElement(TentElevation, {
    theme: theme,
    view: "front",
    cx: SUB_CX,
    g0: SUB_GF,
    s: SUB_SE,
    ext: [[-20.25, tF], [20.25, tF], [-13, tF], [13, tF], [0, tF]]
  }), /*#__PURE__*/React.createElement(SubViewLabel, {
    top: 30
  }, "Side view"), /*#__PURE__*/React.createElement(SubViewLabel, {
    top: 300
  }, "Front view"), /*#__PURE__*/React.createElement(SubChain, {
    s: SUB_SE,
    y: t1S,
    segs: [[-16.5, -13, '3.500'], [-13, 0, '13.000'], [0, 13, '13.000'], [13, 16.5, '3.500']]
  }), /*#__PURE__*/React.createElement(SubChain, {
    s: SUB_SE,
    y: t2S,
    segs: [[-19.5, -13, '6.500'], [-13, 13, '26.000', true], [13, 19.5, '6.500']]
  }), /*#__PURE__*/React.createElement(SubChain, {
    s: SUB_SE,
    y: tF,
    segs: [[-20.25, -13, '7.250'], [-13, 0, '13.000'], [0, 13, '13.000'], [13, 20.25, '7.250']]
  }));
}
function SubardoSheet({
  kind,
  theme
}) {
  const cfg = SUB_SHEETS[kind];
  const mono = theme === 'mono';
  const g = tentGeometry({
    cx: SUB_CX,
    cy: SUB_CY,
    s: SUB_S
  });
  const t1 = SUB_CY + g.rC + 28,
    t2 = t1 + 26;
  let callout = null;
  if (cfg.callout) {
    const [x, y] = g.P(cfg.callout.t, g[cfg.callout.r]);
    callout = /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: x + 2.5,
        top: y,
        transform: 'translate(-100%,-50%)'
      }
    }, /*#__PURE__*/React.createElement(SubCallout, {
      text: cfg.callout.text,
      direction: "left",
      leaderLength: cfg.callout.leader
    }));
  }
  return /*#__PURE__*/React.createElement(SubFrame, {
    theme: theme,
    cropMarks: false,
    border: false,
    header: /*#__PURE__*/React.createElement(SubTitle, {
      size: "lg",
      project: "Subardo",
      sheetTitle: cfg.title,
      sheetNumber: "",
      status: "Edit 2026",
      statusPosition: "right"
    }),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(SubFooterCol, {
      label: "Notes",
      first: true
    }, /*#__PURE__*/React.createElement("ol", {
      style: {
        margin: 0,
        paddingLeft: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        fontFamily: 'var(--font-mono)',
        fontSize: 9.5,
        lineHeight: 1.35,
        color: 'var(--ink)'
      }
    }, cfg.notes.map((n, i) => {
      const obj = typeof n === 'object';
      return /*#__PURE__*/React.createElement("li", {
        key: i,
        style: obj && n.strong ? {
          color: 'var(--accent)',
          fontWeight: 600
        } : undefined
      }, obj ? n.text : n);
    }))), /*#__PURE__*/React.createElement(SubFooterCol, {
      label: "Legend"
    }, /*#__PURE__*/React.createElement(SubLegend, {
      direction: "column",
      size: 12,
      items: subLegend(kind, mono)
    })))
  }, cfg.elev ? /*#__PURE__*/React.createElement(SubElevations, {
    theme: theme
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TentPlan, {
    theme: theme,
    highlight: kind,
    g: g,
    cx: SUB_CX,
    cy: SUB_CY,
    s: SUB_S,
    frontR: cfg.frontR
  }, kind === 'measures' && /*#__PURE__*/React.createElement(SubMeasureLayer, {
    g: g,
    t1: t1,
    t2: t2
  }), kind === 'sidewalls' && /*#__PURE__*/React.createElement(SubSidewallLayer, {
    g: g
  }), kind === 'tireforts' && /*#__PURE__*/React.createElement(SubTirefortLayer, null)), kind === 'measures' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SubChain, {
    y: t1,
    segs: [[-16.5, -13, '3.500'], [-13, -3.75, '9.250'], [-3.75, 3.75, '7.500'], [3.75, 13, '9.250'], [13, 16.5, '3.500']]
  }), /*#__PURE__*/React.createElement(SubChain, {
    y: t2,
    segs: [[-20.25, -13, '7.250'], [-13, 13, '26.000', true], [13, 20.25, '7.250']]
  })), kind === 'tireforts' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SubChain, {
    y: SUB_CY,
    segs: [[-20.25, -13, '7.250'], [-13, -3.75, '9.250'], [-3.75, 3.75, ''], [3.75, 13, '9.250'], [13, 20.5, '7.500']]
  }), /*#__PURE__*/React.createElement(SubVChain, {
    segs: [[-19.5, -13, '6.500'], [-13, 0, '13.000'], [0, 13, '13.000'], [13, 19.5, '6.500']]
  }))), cfg.key && /*#__PURE__*/React.createElement(SubKeyFigure, cfg.key), cfg.specs && /*#__PURE__*/React.createElement(SubSpecs, {
    rows: cfg.specs
  }), callout);
}
Object.assign(window, {
  SubardoSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/subardo/SubardoSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/subardo/TentElevation.jsx
try { (() => {
// Elevation of the tent. Units in metres, origin at centre on the ground, y up.
// Wall 3.40 m, cap peak 10.70 m, arch top 13.40 m (arch r 3.75 m to centreline, 0.60 m thick).
// Nail-line fans are orthographic projections of the guys at 7.5° steps, drawn behind the tent body.
const TENT_FANS = [[13, 16.36], [12.89, 16.36], [12.56, 15.94], [12.01, 15.24], [11.26, 14.29], [10.31, 13.09]];
function TentElevation({
  theme,
  view,
  cx,
  g0,
  s,
  ext = [],
  outlineAccent = true,
  tirefortAccent = false
}) {
  const mono = theme === 'mono';
  const side = view === 'side';
  const X = m => cx + m * s,
    Y = m => g0 - m * s;
  const pt = (x, y) => `${X(x)},${Y(y)}`;
  const ink = 'var(--ink)',
    soft = 'var(--ink-soft)',
    faint = 'var(--ink-faint)',
    acc = 'var(--accent)',
    paper = 'var(--paper)';
  const anchor = side ? 19.5 : 20.25;
  const guy = {
    stroke: mono ? ink : soft,
    strokeWidth: 0.6,
    fill: 'none'
  };
  const archStroke = mono ? ink : soft;
  const body = `M ${pt(-13, 0)} L ${pt(-13, 3.4)} Q ${pt(-3, 5.8)} ${pt(-1, 9.85)} L ${pt(-1.15, 10.05)} L ${pt(0, 10.7)} L ${pt(1.15, 10.05)} L ${pt(1, 9.85)} Q ${pt(3, 5.8)} ${pt(13, 3.4)} L ${pt(13, 0)} Z`;
  const arc = r => `M ${pt(-r, 5.5)} L ${pt(-r, 9.35)} A ${r * s} ${r * s} 0 0 1 ${pt(r, 9.35)} L ${pt(r, 5.5)}`;
  const mainFrom = side ? [0.22, 10.7] : [4.05, 9.35];
  const block = {
    fill: tirefortAccent ? acc : ink
  };
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, ext.map(([m, y], i) => /*#__PURE__*/React.createElement("line", {
    key: 'x' + i,
    x1: X(m),
    y1: g0 + 3,
    x2: X(m),
    y2: y + 5,
    style: {
      stroke: faint,
      strokeWidth: 0.6,
      strokeDasharray: '2 2'
    }
  })), TENT_FANS.map(([a, b], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: 'f' + i
  }, /*#__PURE__*/React.createElement("line", {
    x1: X(-a),
    y1: Y(3.4),
    x2: X(-b),
    y2: Y(0),
    style: guy
  }), /*#__PURE__*/React.createElement("line", {
    x1: X(a),
    y1: Y(3.4),
    x2: X(b),
    y2: Y(0),
    style: guy
  }))), [-1, 1].map(d => /*#__PURE__*/React.createElement("line", {
    key: 'm' + d,
    x1: X(d * mainFrom[0]),
    y1: Y(mainFrom[1]),
    x2: X(d * anchor),
    y2: Y(0.55),
    style: guy
  })), !side && /*#__PURE__*/React.createElement("path", {
    d: arc(3.75),
    style: {
      fill: 'none',
      stroke: archStroke,
      strokeWidth: 0.6 * s
    }
  }), !side && mono && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: arc(4.05),
    style: {
      fill: 'none',
      stroke: ink,
      strokeWidth: 0.6
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: arc(3.45),
    style: {
      fill: 'none',
      stroke: ink,
      strokeWidth: 0.6
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: body,
    style: {
      fill: mono ? paper : 'var(--plan-fill)',
      stroke: outlineAccent ? acc : ink,
      strokeWidth: outlineAccent ? 1.5 : 1.25,
      strokeLinejoin: 'round'
    }
  }), mono && /*#__PURE__*/React.createElement(HatchLines, {
    clip: /*#__PURE__*/React.createElement("path", {
      d: body
    }),
    cx: cx,
    cy: g0 - 6 * s,
    angle: 45,
    spacing: 5,
    reach: 16 * s,
    stroke: ink
  }), side && /*#__PURE__*/React.createElement("rect", {
    x: X(-0.22),
    y: Y(13.4),
    width: 0.44 * s,
    height: (13.4 - 7.8) * s,
    style: {
      fill: mono ? paper : soft,
      stroke: ink,
      strokeWidth: 0.6
    }
  }), !side && [-1, 1].map(d => /*#__PURE__*/React.createElement("line", {
    key: 'c' + d,
    x1: X(d * 3.05),
    y1: Y(11.0),
    x2: X(d * 1.1),
    y2: Y(9.95),
    style: guy
  })), !side && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: `M ${pt(-1.4, 0)} Q ${pt(-0.15, 1.2)} ${pt(-0.1, 3.6)} L ${pt(-0.1, 0)} Z`,
    style: {
      fill: ink
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${pt(-0.1, 3.6)} C ${pt(-0.4, 2.6)} ${pt(-1.0, 1.9)} ${pt(-1.6, 1.65)} C ${pt(-1.25, 1.4)} ${pt(-1.3, 0.6)} ${pt(-1.4, 0)} Q ${pt(-0.15, 1.2)} ${pt(-0.1, 3.6)} Z`,
    style: {
      fill: faint
    }
  })), /*#__PURE__*/React.createElement("line", {
    x1: X(-22.6),
    y1: g0,
    x2: X(22.6),
    y2: g0,
    style: {
      stroke: ink,
      strokeWidth: 0.75
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: X(-anchor - 1.5),
    y: Y(0.55),
    width: 1.5 * s,
    height: 0.55 * s,
    style: block
  }), /*#__PURE__*/React.createElement("rect", {
    x: X(anchor),
    y: Y(0.55),
    width: 1.5 * s,
    height: 0.55 * s,
    style: block
  }), side && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("text", {
    x: 20,
    y: g0 - 34,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      fill: ink
    }
  }, "FRONT"), /*#__PURE__*/React.createElement(TentArrow, {
    from: [62, g0 - 22],
    to: [22, g0 - 22]
  })));
}
Object.assign(window, {
  TentElevation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/subardo/TentElevation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/subardo/TentPlan.jsx
try { (() => {
function HatchLines({
  clip,
  cx,
  cy,
  angle = 45,
  spacing = 5,
  reach = 200,
  stroke = 'var(--ink)'
}) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const n = Math.ceil(reach * 2 / spacing);
  const lines = [];
  for (let i = -n; i <= n; i++) {
    const off = i * spacing;
    lines.push(/*#__PURE__*/React.createElement("line", {
      key: i,
      x1: cx - reach,
      y1: cy + off,
      x2: cx + reach,
      y2: cy + off,
      stroke: stroke,
      strokeWidth: 0.7,
      vectorEffect: "non-scaling-stroke"
    }));
  }
  const cid = 'hc' + uid;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("clipPath", {
    id: cid
  }, clip), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#${cid})`
  }, /*#__PURE__*/React.createElement("g", {
    transform: `rotate(${angle} ${cx} ${cy})`
  }, lines)));
}
function tentGeometry({
  cx,
  cy,
  s
}) {
  const R = 13 * s,
    rN = 16.5 * s,
    rP = 12 * s,
    rC = 17.5 * s;
  const P = (t, r) => {
    const a = t * Math.PI / 180;
    return [cx + r * Math.sin(a), cy - r * Math.cos(a)];
  };
  const nails = [];
  let n = 0;
  for (let k = 0; k < 48; k++) {
    if (k % 12 === 0) continue;
    const t = k * 7.5;
    n++;
    nails.push({
      n,
      t,
      base: P(t, R),
      tip: P(t, rN),
      label: P(t, rN + 11)
    });
  }
  const vees = [90, 270].map(c => ({
    base: P(c, R),
    a: P(c - 7.5, rN),
    b: P(c + 7.5, rN)
  }));
  const poles = [];
  for (let k = 0; k < 48; k++) {
    if (k === 0 || k === 24) continue;
    poles.push({
      t: k * 7.5,
      p: P(k * 7.5, rP)
    });
  }
  return {
    R,
    rN,
    rP,
    rC,
    P,
    nails,
    vees,
    poles
  };
}
function TentPlan({
  theme,
  highlight,
  g,
  cx,
  cy,
  s,
  frontR = 17.5,
  children
}) {
  const mono = theme === 'mono';
  const hl = highlight;
  const ink = 'var(--ink)',
    soft = 'var(--ink-soft)',
    faint = 'var(--ink-faint)',
    acc = 'var(--accent)',
    paper = 'var(--paper)';
  const guy = {
    stroke: mono ? ink : soft,
    strokeWidth: 0.75,
    fill: 'none'
  };
  const axis = {
    stroke: faint,
    strokeWidth: 0.6,
    strokeDasharray: '3 3'
  };
  const barW = 7.5 * s,
    barH = 0.8 * s,
    top = cy - frontR * s;
  const edge = hl === 'sidewalls' ? {
    stroke: acc,
    strokeWidth: 3.5
  } : hl === 'measures' ? {
    stroke: acc,
    strokeWidth: 2
  } : {
    stroke: ink,
    strokeWidth: 1.25
  };
  const barX = cx - barW / 2,
    barY = cy - barH / 2;
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, g.nails.map(nl => /*#__PURE__*/React.createElement("line", {
    key: 'g' + nl.n,
    x1: nl.base[0],
    y1: nl.base[1],
    x2: nl.tip[0],
    y2: nl.tip[1],
    style: guy
  })), g.vees.map((v, i) => /*#__PURE__*/React.createElement("polyline", {
    key: 'v' + i,
    points: `${v.a} ${v.base} ${v.b}`,
    style: guy
  })), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: g.R,
    style: {
      fill: mono ? paper : 'var(--plan-fill)',
      ...edge
    }
  }), mono && /*#__PURE__*/React.createElement(HatchLines, {
    clip: /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: g.R
    }),
    cx: cx,
    cy: cy,
    spacing: 5,
    reach: g.R * 1.5,
    stroke: ink
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx - g.rC - 10,
    y1: cy,
    x2: cx + g.rC + 4,
    y2: cy,
    style: axis
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: top - 4,
    x2: cx,
    y2: cy + frontR * s + 6,
    style: axis
  }), /*#__PURE__*/React.createElement("rect", {
    x: barX,
    y: barY,
    width: barW,
    height: barH,
    style: {
      fill: mono ? paper : soft,
      stroke: ink,
      strokeWidth: 0.75
    }
  }), mono && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HatchLines, {
    clip: /*#__PURE__*/React.createElement("rect", {
      x: barX,
      y: barY,
      width: barW,
      height: barH
    }),
    cx: cx,
    cy: cy,
    angle: 45,
    spacing: 3.5,
    reach: 60,
    stroke: ink
  }), /*#__PURE__*/React.createElement(HatchLines, {
    clip: /*#__PURE__*/React.createElement("rect", {
      x: barX,
      y: barY,
      width: barW,
      height: barH
    }),
    cx: cx,
    cy: cy,
    angle: -45,
    spacing: 3.5,
    reach: 60,
    stroke: ink
  })), g.poles.map((p, i) => hl === 'poles' ? /*#__PURE__*/React.createElement("circle", {
    key: 'p' + i,
    cx: p.p[0],
    cy: p.p[1],
    r: 3.3,
    style: {
      fill: acc,
      stroke: paper,
      strokeWidth: 1
    }
  }) : /*#__PURE__*/React.createElement("circle", {
    key: 'p' + i,
    cx: p.p[0],
    cy: p.p[1],
    r: 1.9,
    style: {
      fill: paper,
      stroke: mono ? ink : soft,
      strokeWidth: 0.75
    }
  })), g.nails.map(nl => /*#__PURE__*/React.createElement("circle", {
    key: 'n' + nl.n,
    cx: nl.tip[0],
    cy: nl.tip[1],
    r: hl === 'nails' ? 3.3 : 1.6,
    style: {
      fill: hl === 'nails' ? acc : mono ? ink : soft
    }
  })), hl === 'nails' && g.nails.map(nl => /*#__PURE__*/React.createElement("text", {
    key: 't' + nl.n,
    x: nl.label[0],
    y: nl.label[1],
    textAnchor: "middle",
    dominantBaseline: "central",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 7.5,
      fill: ink
    }
  }, String(nl.n).padStart(2, '0'))), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: top - 4,
    x2: cx,
    y2: top - 14,
    style: {
      stroke: ink,
      strokeWidth: 1
    }
  }), /*#__PURE__*/React.createElement("polyline", {
    points: `${cx - 3},${top - 9} ${cx},${top - 14} ${cx + 3},${top - 9}`,
    style: {
      stroke: ink,
      strokeWidth: 1,
      fill: 'none'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: top - 22,
    textAnchor: "middle",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      fill: ink
    }
  }, "FRONT"), children);
}
function TentArrow({
  from,
  to
}) {
  const [x1, y1] = from,
    [x2, y2] = to;
  const a = Math.atan2(y2 - y1, x2 - x1),
    h = 5;
  const p1 = [x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)];
  const p2 = [x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)];
  return /*#__PURE__*/React.createElement("g", {
    style: {
      stroke: 'var(--ink)',
      strokeWidth: 1,
      fill: 'none'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  }), /*#__PURE__*/React.createElement("polyline", {
    points: `${p1} ${x2},${y2} ${p2}`
  }));
}
Object.assign(window, {
  tentGeometry,
  TentPlan,
  TentArrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/subardo/TentPlan.jsx", error: String((e && e.message) || e) }); }

// ui_kits/subardo/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/subardo/doc-page.js", error: String((e && e.message) || e) }); }

__ds_ns.AnnotationCallout = __ds_scope.AnnotationCallout;

__ds_ns.DimensionLine = __ds_scope.DimensionLine;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.RevisionStamp = __ds_scope.RevisionStamp;

__ds_ns.SheetFrame = __ds_scope.SheetFrame;

__ds_ns.TitleBlock = __ds_scope.TitleBlock;

})();
