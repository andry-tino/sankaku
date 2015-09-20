/**
 * Test file for types retrieval.
 * Features included:
 * - Private, protected, public members
 * - Class inheritance
 */

SN.SampleBaseClass = function SN_SampleBaseClass() {
    this._privateField1 = 100;
}
SN.SampleBaseClass.get_publicStaticProperty1 = function SN_SampleBaseClass$get_publicStaticProperty1() {
    return String.Empty;
}
SN.SampleBaseClass.set_publicStaticProperty1 = function SN_SampleBaseClass$set_publicStaticProperty1(value) {
    return value;
}
SN.SampleBaseClass.get_protectedStaticProperty1 = function SN_SampleBaseClass$get_protectedStaticProperty1() {
    return 1;
}
SN.SampleBaseClass.set_protectedStaticProperty1 = function SN_SampleBaseClass$set_protectedStaticProperty1(value) {
    return value;
}
SN.SampleBaseClass.get__privateStaticProperty1 = function SN_SampleBaseClass$get__privateStaticProperty1() {
    return 1;
}
SN.SampleBaseClass.set__privateStaticProperty1 = function SN_SampleBaseClass$set__privateStaticProperty1(value) {
    return value;
}
SN.SampleBaseClass.publicStaticMethod = function SN_SampleBaseClass$publicStaticMethod() {
}
SN.SampleBaseClass.protectedStaticMethod = function SN_SampleBaseClass$protectedStaticMethod() {
}
SN.SampleBaseClass._privateStaticMethod1 = function SN_SampleBaseClass$_privateStaticMethod1() {
}
SN.SampleBaseClass.prototype = {
    _privateField1: 0,
    
    get_publicProperty1: function SN_SampleBaseClass$get_publicProperty1() {
        return String.Empty;
    },
    set_publicProperty1: function SN_SampleBaseClass$set_publicProperty1(value) {
        return value;
    },
    
    get_protectedProperty1: function SN_SampleBaseClass$get_protectedProperty1() {
        return 1;
    },
    set_protectedProperty1: function SN_SampleBaseClass$set_protectedProperty1(value) {
        return value;
    },
    
    get__privateProperty1: function SN_SampleBaseClass$get__privateProperty1() {
        return this._privateField1;
    },
    set__privateProperty1: function SN_SampleBaseClass$set__privateProperty1(value) {
        this._privateField1 = value;
        return value;
    },
    
    publicMethod1: function SN_SampleBaseClass$publicMethod1() {
    },
    
    protectedMethod1: function SN_SampleBaseClass$protectedMethod1() {
    },
    
    _privateMethod1: function SN_SampleBaseClass$_privateMethod1() {
    }
}

SN.SampleClass = function SN_SampleClass() {
    SN.SampleClass.initializeBase(this);
    this._privateField1$1 = 100;
}
SN.SampleClass.get__privateStaticProperty1$1 = function SN_SampleClass$get__privateStaticProperty1$1() {
    return 1;
}
SN.SampleClass.set__privateStaticProperty1$1 = function SN_SampleClass$set__privateStaticProperty1$1(value) {
    return value;
}
SN.SampleClass._privateStaticMethod1$1 = function SN_SampleClass$_privateStaticMethod1$1() {
}
SN.SampleClass.prototype = {
    _privateField1$1: 0,
    
    get_publicProperty1: function SN_SampleClass$get_publicProperty1() {
        return String.Empty;
    },
    set_publicProperty1: function SN_SampleClass$set_publicProperty1(value) {
        return value;
    },
    
    get__privateProperty1$1: function SN_SampleClass$get__privateProperty1$1() {
        return this._privateField1$1;
    },
    set__privateProperty1$1: function SN_SampleClass$set__privateProperty1$1(value) {
        this._privateField1$1 = value;
        return value;
    },
    
    publicMethod1: function SN_SampleClass$publicMethod1() {
        SN.SampleClass.callBaseMethod(this, 'publicMethod1');
    },
    
    _privateMethod1$1: function SN_SampleClass$_privateMethod1$1() {
    }
}

SN.SampleBaseClass.registerClass('SN.SampleBaseClass');
SN.SampleClass.registerClass('SN.SampleClass', SN.SampleBaseClass);
