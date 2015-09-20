namespace Namespace1.Namespace2
{
    using System.Runtime.CompilerServices;

    [ScriptNamespace("SN")]
    public class SampleBaseClass
    {
        private int privateField1;

        public SampleBaseClass()
        {
            this.privateField1 = 100;
        }

        public virtual string PublicProperty1
        {
            get { return string.Empty; }
            set { }
        }

        public int ProtectedProperty1
        {
            get { return 1; }
            set { }
        }

        private int PrivateProperty1
        {
            get { return this.privateField1; }
            set { this.privateField1 = value; }
        }

        public static string PublicStaticProperty1
        {
            get { return string.Empty; }
            set { }
        }

        public static int ProtectedStaticProperty1
        {
            get { return 1; }
            set { }
        }

        private static int PrivateStaticProperty1
        {
            get { return 1; }
            set { }
        }

        public virtual void PublicMethod1()
        {
        }

        protected void ProtectedMethod1()
        {
        }

        private void PrivateMethod1()
        {
        }

        public static void PublicStaticMethod()
        {
        }

        protected static void ProtectedStaticMethod()
        {
        }

        private static void PrivateStaticMethod1()
        {
        }
    }

    [ScriptNamespace("SN")]
    public class SampleClass : SampleBaseClass
    {
        private int privateField1;

        public SampleClass()
        {
            this.privateField1 = 100;
        }

        public override string PublicProperty1
        {
            get { return string.Empty; }
            set { }
        }

        private int PrivateProperty1
        {
            get { return this.privateField1; }
            set { this.privateField1 = value; }
        }

        private static int PrivateStaticProperty1
        {
            get { return 1; }
            set { }
        }

        public override void PublicMethod1()
        {
            base.PublicMethod1();
        }

        private void PrivateMethod1()
        {
        }

        private static void PrivateStaticMethod1()
        {
        }
    }
}
