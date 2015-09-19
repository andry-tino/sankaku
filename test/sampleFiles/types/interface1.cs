namespace Namespace1.Namespace2
{
    using System.Runtime.CompilerServices;

    [ScriptNamespace("SN")]
    public interface ISampleInterface
    {
        void Method1();
        int Method2();
        void Method3(int parameter);
        int Method4(int parameter);

        int Property1 { get; set; }
    }
}
