/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_14032_26_MenuItemClickListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        androidx.appcompat.widget.Toolbar.OnMenuItemClickListener {
  public Object_vendor_14032_26_MenuItemClickListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public boolean onMenuItemClick(android.view.MenuItem param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onMenuItemClick", boolean.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
