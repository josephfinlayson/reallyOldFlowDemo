Ext.data.JsonP.draw2d_policy_figure_SelectionFeedbackPolicy({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='docClass'>draw2d.policy.EditPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='docClass'>draw2d.policy.figure.DragDropEditPolicy</a><div class='subclass '><strong>draw2d.policy.figure.SelectionFeedbackPolicy</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.policy.figure.AntSelectionFeedbackPolicy' rel='draw2d.policy.figure.AntSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.AntSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy' rel='draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.BusSelectionFeedbackPolicy' rel='draw2d.policy.figure.BusSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.BusSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.GlowSelectionFeedbackPolicy' rel='draw2d.policy.figure.GlowSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.GlowSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.LineSelectionFeedbackPolicy' rel='draw2d.policy.figure.LineSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.LineSelectionFeedbackPolicy</a></div><div class='dependency'><a href='#!/api/draw2d.policy.figure.RectangleSelectionFeedbackPolicy' rel='draw2d.policy.figure.RectangleSelectionFeedbackPolicy' class='docClass'>draw2d.policy.figure.RectangleSelectionFeedbackPolicy</a></div><h4>Files</h4><div class='dependency'><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy' target='_blank'>SelectionFeedbackPolicy.js</a></div></pre><div class='doc-contents'><p>A draw2d.policy.SelectionFeedbackPolicy that is sensitive to the canvas selection. Subclasses will typically\ndecorate the <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">figure</a> with things like selection handles and/or focus feedback.</p>\n\n<br>\n\n\n<p>If you want to change the handle visibility for a figure, then you should use SelectionFeedbackPolicy to do that.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-constructor' class='name expandable'>draw2d.policy.figure.SelectionFeedbackPolicy</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.policy.figure.SelectionFeedbackPolicy\" rel=\"draw2d.policy.figure.SelectionFeedbackPolicy\" class=\"docClass\">draw2d.policy.figure.SelectionFeedbackPolicy</a></div><div class='description'><div class='short'>Creates a new Router object ...</div><div class='long'><p>Creates a new Router object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.policy.figure.SelectionFeedbackPolicy\" rel=\"draw2d.policy.figure.SelectionFeedbackPolicy\" class=\"docClass\">draw2d.policy.figure.SelectionFeedbackPolicy</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-constructor' rel='draw2d.policy.figure.DragDropEditPolicy-method-constructor' class='docClass'>draw2d.policy.figure.DragDropEditPolicy.constructor</a></p></div></div></div><div id='method-adjustDimension' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustDimension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustDimension' class='name expandable'>adjustDimension</a>( <span class='pre'>figure, w, h</span> ) : <a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a></div><div class='description'><div class='short'>ensure that the dimension didn't goes outside the given restrictions ...</div><div class='long'><p>ensure that the dimension didn't goes outside the given restrictions</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>w</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-adjustPosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustPosition' class='name expandable'>adjustPosition</a>( <span class='pre'>figure, x, [y]</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><strong class='template signature' >template</strong></div><div class='description'><div class='short'>Adjust the coordinates to the rectangle/region of this constraint. ...</div><div class='long'><p>Adjust the coordinates to the rectangle/region of this constraint.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number|<a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : number (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-moved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-moved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-moved' class='name expandable'>moved</a>( <span class='pre'>canvas, figure</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Callback if the figure has been moved ...</div><div class='long'><p>Callback if the figure has been moved</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>canvas, figure</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Called by the framework during drag a figure. ...</div><div class='long'><p>Called by the framework during drag a figure.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDragEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDragEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragEnd' class='name expandable'>onDragEnd</a>( <span class='pre'>canvas, figure</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Called by the framework if the drag drop operation ends. ...</div><div class='long'><p>Called by the framework if the drag drop operation ends.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDragStart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDragStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragStart' class='name expandable'>onDragStart</a>( <span class='pre'>canvas, figure</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Called by the framework if the related shape has init a drag&amp;drop\noperation ...</div><div class='long'><p>Called by the framework if the related shape has init a drag&amp;drop\noperation</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>host</span> )</div><div class='description'><div class='short'>Called by the host if the policy has been installed. ...</div><div class='long'><p>Called by the host if the policy has been installed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>/<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-onSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-onSelect' class='name expandable'>onSelect</a>( <span class='pre'>figure, isPrimarySelection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>isPrimarySelection</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>host</span> )</div><div class='description'><div class='short'>Called by the host if the policy has been uninstalled. ...</div><div class='long'><p>Called by the host if the policy has been uninstalled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>/<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUnselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.figure.SelectionFeedbackPolicy'>draw2d.policy.figure.SelectionFeedbackPolicy</span><br/><a href='source/SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy-method-onUnselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.SelectionFeedbackPolicy-method-onUnselect' class='name expandable'>onUnselect</a>( <span class='pre'>figure</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>the unselected figure</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"extends":"draw2d.policy.figure.DragDropEditPolicy","uses":[],"superclasses":["draw2d.policy.EditPolicy","draw2d.policy.figure.DragDropEditPolicy"],"linenr":2,"meta":{"author":["Andreas Herz"]},"parentMixins":[],"requires":[],"subclasses":["draw2d.policy.figure.AntSelectionFeedbackPolicy","draw2d.policy.figure.BigRectangleSelectionFeedbackPolicy","draw2d.policy.figure.BusSelectionFeedbackPolicy","draw2d.policy.figure.GlowSelectionFeedbackPolicy","draw2d.policy.figure.LineSelectionFeedbackPolicy","draw2d.policy.figure.RectangleSelectionFeedbackPolicy"],"files":[{"href":"SelectionFeedbackPolicy.html#draw2d-policy-figure-SelectionFeedbackPolicy","filename":"SelectionFeedbackPolicy.js"}],"members":{"cfg":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.policy.figure.SelectionFeedbackPolicy","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.policy.figure.DragDropEditPolicy","name":"adjustDimension","id":"method-adjustDimension","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.policy.figure.DragDropEditPolicy","name":"adjustPosition","id":"method-adjustPosition","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.policy.figure.DragDropEditPolicy","name":"moved","id":"method-moved","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.policy.figure.DragDropEditPolicy","name":"onDrag","id":"method-onDrag","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.policy.figure.DragDropEditPolicy","name":"onDragEnd","id":"method-onDragEnd","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.policy.figure.DragDropEditPolicy","name":"onDragStart","id":"method-onDragStart","tagname":"method"},{"meta":{},"owner":"draw2d.policy.EditPolicy","name":"onInstall","id":"method-onInstall","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.policy.figure.SelectionFeedbackPolicy","name":"onSelect","id":"method-onSelect","tagname":"method"},{"meta":{},"owner":"draw2d.policy.EditPolicy","name":"onUninstall","id":"method-onUninstall","tagname":"method"},{"meta":{},"owner":"draw2d.policy.figure.SelectionFeedbackPolicy","name":"onUnselect","id":"method-onUnselect","tagname":"method"}],"event":[],"css_mixin":[],"property":[]},"inheritdoc":null,"inheritable":null,"html_meta":{"author":null},"singleton":false,"override":null,"private":null,"name":"draw2d.policy.figure.SelectionFeedbackPolicy","mixins":[],"enum":null,"statics":{"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[],"property":[]},"id":"class-draw2d.policy.figure.SelectionFeedbackPolicy","tagname":"class","component":false,"alternateClassNames":[],"aliases":{}});