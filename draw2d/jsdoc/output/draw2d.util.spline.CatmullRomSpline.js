Ext.data.JsonP.draw2d_util_spline_CatmullRomSpline({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.util.spline.Spline' rel='draw2d.util.spline.Spline' class='docClass'>draw2d.util.spline.Spline</a><div class='subclass '><a href='#!/api/draw2d.util.spline.CubicSpline' rel='draw2d.util.spline.CubicSpline' class='docClass'>draw2d.util.spline.CubicSpline</a><div class='subclass '><strong>draw2d.util.spline.CatmullRomSpline</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/CatmullRomSpline.html#draw2d-util-spline-CatmullRomSpline' target='_blank'>CatmullRomSpline.js</a></div></pre><div class='doc-contents'><p>A catmull-rom spline object.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.util.spline.CatmullRomSpline'>draw2d.util.spline.CatmullRomSpline</span><br/><a href='source/CatmullRomSpline.html#draw2d-util-spline-CatmullRomSpline-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.util.spline.CatmullRomSpline-method-constructor' class='name expandable'>draw2d.util.spline.CatmullRomSpline</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.util.spline.CatmullRomSpline\" rel=\"draw2d.util.spline.CatmullRomSpline\" class=\"docClass\">draw2d.util.spline.CatmullRomSpline</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.util.spline.CatmullRomSpline\" rel=\"draw2d.util.spline.CatmullRomSpline\" class=\"docClass\">draw2d.util.spline.CatmullRomSpline</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.util.spline.CubicSpline-method-constructor' rel='draw2d.util.spline.CubicSpline-method-constructor' class='docClass'>draw2d.util.spline.CubicSpline.constructor</a></p></div></div></div><div id='method-generate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.util.spline.CubicSpline' rel='draw2d.util.spline.CubicSpline' class='defined-in docClass'>draw2d.util.spline.CubicSpline</a><br/><a href='source/CubicSpline.html#draw2d-util-spline-CubicSpline-method-generate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.util.spline.CubicSpline-method-generate' class='name expandable'>generate</a>( <span class='pre'>controlPoints, parts</span> ) : Array</div><div class='description'><div class='short'>Create a spline based on the given control points. ...</div><div class='long'><p>Create a spline based on the given control points.\nThe generated curve starts in the first control point and ends\nin the last control point.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controlPoints</span> : Array<div class='sub-desc'><p>Control points of spline (x0,y0,z0,x1,y1,z1,...).</p>\n</div></li><li><span class='pre'>parts</span> : Number<div class='sub-desc'><p>Number of parts to divide each leg into.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>the new generated array with new <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></p>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.util.spline.Spline-method-generate' rel='draw2d.util.spline.Spline-method-generate' class='docClass'>draw2d.util.spline.Spline.generate</a></p></div></div></div></div></div></div></div>","mixedInto":[],"extends":"draw2d.util.spline.CubicSpline","uses":[],"superclasses":["draw2d.util.spline.Spline","draw2d.util.spline.CubicSpline"],"linenr":1,"meta":{"author":["Andreas Herz"]},"parentMixins":[],"requires":[],"subclasses":[],"files":[{"href":"CatmullRomSpline.html#draw2d-util-spline-CatmullRomSpline","filename":"CatmullRomSpline.js"}],"members":{"cfg":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.util.spline.CatmullRomSpline","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.util.spline.CubicSpline","name":"generate","id":"method-generate","tagname":"method"}],"event":[],"css_mixin":[],"property":[]},"inheritdoc":null,"inheritable":true,"html_meta":{"author":null},"singleton":false,"override":null,"private":null,"name":"draw2d.util.spline.CatmullRomSpline","mixins":[],"enum":null,"statics":{"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[],"property":[]},"id":"class-draw2d.util.spline.CatmullRomSpline","tagname":"class","component":false,"alternateClassNames":[],"aliases":{}});