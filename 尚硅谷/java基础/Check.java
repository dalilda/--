import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
class Check{
    String[] mailList = new String[5];
    HashSet<String> mailSets = new HashSet<String>();
    public void checkMail(){
        String[] arr = new String[2];
        for(int i=0;i<mailList.length;i++){
            arr = mailList[i].split("@");
            //check .
            if(arr[0].indexOf('.')>=0){
                arr[0] = arr[0].substring(0,arr[0].indexOf("."));
            }
            //check +
            if(arr[0].indexOf('+')>=0){
                arr[0] = arr[0].substring(0,arr[0].indexOf("+"));
            }
            String newMail = arr[0]+'@'+arr[1];
            mailSets.add(newMail);
        }
    }
    public static void main(String[] args) {
        Check c = new Check();
        String[] mailList = new String[6];
        mailList[0] = "abcd+ab.ab@qq.com";
        mailList[1] = "abcd+ab.ab@qq.com";
        mailList[2] = "abcd1+ab.ab@qq.com";
        mailList[3] = "abcd1+ab.ab@qq.com";
        mailList[4] = "abcd2+ab.ab@qq.com";
        mailList[5] = "abcd2+ab.ab@qq.com";
        c.mailList = mailList;
        c.checkMail();
        List<String> list = new ArrayList<String>(c.mailSets);
        System.out.println(list);

    }
}