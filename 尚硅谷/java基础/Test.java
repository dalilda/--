import java.util.Arrays;
import java.util.HashSet;

class Test{
    public static void main(String[] args) {
        String a = new String("123");
        String[] arr ={a,a,a};
        arr[0] = "321";
        System.out.println(Arrays.toString(arr));
        HashSet h = new HashSet();
        h.add(1);
    }
}