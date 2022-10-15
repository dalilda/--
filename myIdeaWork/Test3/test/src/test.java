public class test {
    public static void main(String[] args) {
//        StringBuffer a = new StringBuffer("A");
//        StringBuffer b = new StringBuffer("B");
//        System.out.println("1."+a.hashCode());
//        System.out.println("2."+b.hashCode());
//        operator(a,b);
//        System.out.println(a+","+b);
//        System.out.println("7."+a.hashCode());
//        System.out.println("8."+b.hashCode());
        String c = "c";
        String d = "d";
        operato(c,d);
        System.out.println(c+","+d);


    }

    private static void operato(String c, String d) {
        c = c+d;
        d = c;
        System.out.println(c+","+d);
    }


    private static void operator(StringBuffer a, StringBuffer b) {
        System.out.println("3."+a.hashCode());
        System.out.println("4."+b.hashCode());
        a.append(b);
        b = a;
        System.out.println("5."+a.hashCode());
        System.out.println("6."+b.hashCode());

    }
}