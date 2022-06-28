/**
 * @file mofron-event-focus/index.js
 * @brief focus event for mofron
 * ## event function parameter
 *  - component: event target component object
 *  - boolean: focus status
 *  - mixed: user specified parameter
 * @license MIT
 */
const Key     = require("mofron-event-key");
const Click   = require("mofron-event-click");
const comutl  = mofron.util.common;
const ConfArg = mofron.class.ConfArg;

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short listener
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("Focus");
            /* init config */
            this.confmng().add("status", { type: "boolean", init: false });
            /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     * 
     * @param (mofron.class.Dom) event target dom
     * @type private
     */
    contents (dom) {
        try {
	    mofron.window.event([
	        new Key(new ConfArg(this.keyevt, this),"Tab"),
	        new Click(new ConfArg(this.clkevt,this))
	    ]);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event function when window is clicked
     * 
     * @param (mofron.window) window object for mofron
     * @param (MouseEvent) mouse event object
     * @paarm (mofron-event-focus) this object
     * @type private
     */
    clkevt (p1,p2,p3) {
        try {
	    let is_cmp_clk = (document.activeElement.id === p3.component().childDom().id()) ? true : false;
	    if (is_cmp_clk !== p3.status()) {
                p3.execListener(is_cmp_clk);
                p3.status(is_cmp_clk);
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event function when Tab key is pressed
     * 
     * @param (mofron.window) window object for mofron
     * @param (string) event target key
     * @paarm (mofron-event-focus) this object
     * @type private
     */
    keyevt (p1,p2,p3) {
        try {
            let chk_sts = () => {
                try {
                    let ksts = (document.activeElement.id === p3.component().childDom().id()) ? true : false;
                    if (ksts !== p3.status()) {
                        p3.execListener(ksts);
                        p3.status(ksts);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            
            setTimeout(chk_sts,200);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * focus status getter
     * 
     * @param (boolean) focus status
     * @return (boolean) focus status
     * @type function
     */
    status (prm) {
        try {
            return this.confmng("status", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
