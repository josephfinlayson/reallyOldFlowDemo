Ext.data.JsonP.draw2d_layout_connection_CircuitConnectionRouter({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter' rel='draw2d.layout.connection.ManhattanConnectionRouter' class='docClass'>draw2d.layout.connection.ManhattanConnectionRouter</a><div class='subclass '><strong>draw2d.layout.connection.CircuitConnectionRouter</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter' target='_blank'>CircuitConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Provides a <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a> with an orthogonal route between the Connection's source\nand target anchors.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.CircuitConnectionRouter'>draw2d.layout.connection.CircuitConnectionRouter</span><br/><a href='source/CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.CircuitConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.CircuitConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.CircuitConnectionRouter\" rel=\"draw2d.layout.connection.CircuitConnectionRouter\" class=\"docClass\">draw2d.layout.connection.CircuitConnectionRouter</a></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.CircuitConnectionRouter\" rel=\"draw2d.layout.connection.CircuitConnectionRouter\" class=\"docClass\">draw2d.layout.connection.CircuitConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-constructor' rel='draw2d.layout.connection.ManhattanConnectionRouter-method-constructor' class='docClass'>draw2d.layout.connection.ManhattanConnectionRouter.constructor</a></p></div></div></div><div id='method-_route' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter' rel='draw2d.layout.connection.ManhattanConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ManhattanConnectionRouter</a><br/><a href='source/ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter-method-_route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-_route' class='name expandable'>_route</a>( <span class='pre'>conn, fromPt, fromDir, toPt, toDir</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal routing algorithm. ...</div><div class='long'><p>Internal routing algorithm.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromDir</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>toPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>toDir</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.CircuitConnectionRouter'>draw2d.layout.connection.CircuitConnectionRouter</span><br/><a href='source/CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.CircuitConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onInstall' rel='draw2d.layout.connection.ConnectionRouter-method-onInstall' class='docClass'>draw2d.layout.connection.ConnectionRouter.onInstall</a></p></div></div></div><div id='method-onUninstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.CircuitConnectionRouter'>draw2d.layout.connection.CircuitConnectionRouter</span><br/><a href='source/CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.CircuitConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection. In the case of the CircuitRouter\nall junction nodes will be removed from the canvas.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' rel='draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='docClass'>draw2d.layout.connection.ConnectionRouter.onUninstall</a></p></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.CircuitConnectionRouter'>draw2d.layout.connection.CircuitConnectionRouter</span><br/><a href='source/CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.CircuitConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>conn</span> )</div><div class='description'><div class='short'>Layout the hands over connection in a manhattan like layout ...</div><div class='long'><p>Layout the hands over connection in a manhattan like layout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection to layout</p>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-route' rel='draw2d.layout.connection.ManhattanConnectionRouter-method-route' class='docClass'>draw2d.layout.connection.ManhattanConnectionRouter.route</a></p></div></div></div><div id='method-setBridgeRadius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.CircuitConnectionRouter'>draw2d.layout.connection.CircuitConnectionRouter</span><br/><a href='source/CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter-method-setBridgeRadius' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.CircuitConnectionRouter-method-setBridgeRadius' class='name expandable'>setBridgeRadius</a>( <span class='pre'>radius</span> )</div><div class='description'><div class='short'>Set the radius or span of the bridge. ...</div><div class='long'><p>Set the radius or span of the bridge. A bridge will be drawn if two connections are crossing and didn't have any\ncommon port.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>radius</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setJunctionRadius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.CircuitConnectionRouter'>draw2d.layout.connection.CircuitConnectionRouter</span><br/><a href='source/CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter-method-setJunctionRadius' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.CircuitConnectionRouter-method-setJunctionRadius' class='name expandable'>setJunctionRadius</a>( <span class='pre'>radius</span> )</div><div class='description'><div class='short'>Set the radius of the junction node circle. ...</div><div class='long'><p>Set the radius of the junction node circle.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>radius</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"extends":"draw2d.layout.connection.ManhattanConnectionRouter","uses":[],"superclasses":["draw2d.layout.connection.ConnectionRouter","draw2d.layout.connection.ManhattanConnectionRouter"],"linenr":2,"meta":{"author":["Andreas Herz"]},"parentMixins":[],"requires":[],"subclasses":[],"files":[{"href":"CircuitConnectionRouter.html#draw2d-layout-connection-CircuitConnectionRouter","filename":"CircuitConnectionRouter.js"}],"members":{"cfg":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.layout.connection.CircuitConnectionRouter","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"private":true},"owner":"draw2d.layout.connection.ManhattanConnectionRouter","name":"_route","id":"method-_route","tagname":"method"},{"meta":{"template":true,"since":{"text":"","version":"2.7.2"}},"owner":"draw2d.layout.connection.CircuitConnectionRouter","name":"onInstall","id":"method-onInstall","tagname":"method"},{"meta":{"template":true,"since":{"text":"","version":"2.7.2"}},"owner":"draw2d.layout.connection.CircuitConnectionRouter","name":"onUninstall","id":"method-onUninstall","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.CircuitConnectionRouter","name":"route","id":"method-route","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.CircuitConnectionRouter","name":"setBridgeRadius","id":"method-setBridgeRadius","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.CircuitConnectionRouter","name":"setJunctionRadius","id":"method-setJunctionRadius","tagname":"method"}],"event":[],"css_mixin":[],"property":[]},"inheritdoc":null,"inheritable":true,"html_meta":{"author":null},"singleton":false,"override":null,"private":null,"name":"draw2d.layout.connection.CircuitConnectionRouter","mixins":[],"enum":null,"statics":{"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[],"property":[]},"id":"class-draw2d.layout.connection.CircuitConnectionRouter","tagname":"class","component":false,"alternateClassNames":[],"aliases":{}});