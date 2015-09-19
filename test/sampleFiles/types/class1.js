/**
 * From file: class1.cs
 */

SN.SampleClass = function SN_SampleClass() {
    this._privateField1 = 100;
}
SN.SampleClass.get_publicStaticProperty1 = function SN_SampleClass$get_publicStaticProperty1() {
    return String.Empty;
}
SN.SampleClass.set_publicStaticProperty1 = function SN_SampleClass$set_publicStaticProperty1(value) {
    return value;
}
SN.SampleClass.get_protectedStaticProperty1 = function SN_SampleClass$get_protectedStaticProperty1() {
    return 1;
}
SN.SampleClass.set_protectedStaticProperty1 = function SN_SampleClass$set_protectedStaticProperty1(value) {
    return value;
}
SN.SampleClass.get__privateStaticProperty1 = function SN_SampleClass$get__privateStaticProperty1() {
    return 1;
}
SN.SampleClass.set__privateStaticProperty1 = function SN_SampleClass$set__privateStaticProperty1(value) {
    return value;
}
SN.SampleClass.publicStaticMethod = function SN_SampleClass$publicStaticMethod() {
}
SN.SampleClass.protectedStaticMethod = function SN_SampleClass$protectedStaticMethod() {
}
SN.SampleClass._privateStaticMethod1 = function SN_SampleClass$_privateStaticMethod1() {
}
SN.SampleClass.prototype = {
    _privateField1: 0,
    
    get_publicProperty1: function SN_SampleClass$get_publicProperty1() {
        return String.Empty;
    },
    set_publicProperty1: function SN_SampleClass$set_publicProperty1(value) {
        return value;
    },
    
    get_protectedProperty1: function SN_SampleClass$get_protectedProperty1() {
        return 1;
    },
    set_protectedProperty1: function SN_SampleClass$set_protectedProperty1(value) {
        return value;
    },
    
    get__privateProperty1: function SN_SampleClass$get__privateProperty1() {
        return this._privateField1;
    },
    set__privateProperty1: function SN_SampleClass$set__privateProperty1(value) {
        this._privateField1 = value;
        return value;
    },
    
    publicMethod1: function SN_SampleClass$publicMethod1() {
    },
    
    protectedMethod1: function SN_SampleClass$protectedMethod1() {
    },
    
    _privateMethod1: function SN_SampleClass$_privateMethod1() {
    }
}

SN.SampleClass.registerClass('SN.SampleClass');
