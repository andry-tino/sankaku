namespace Namespace1.Namespace2
{
    using System.Runtime.CompilerServices;

    [ScriptNamespace("SN")]
    public class SampleClass
    {
        private int privateField1;

        public SampleClass()
        {
            this.privateField1 = 100;
        }

        public string PublicProperty1
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

        public void PublicMethod1()
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
}
