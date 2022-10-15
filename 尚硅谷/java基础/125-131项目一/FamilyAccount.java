
public class FamilyAccount {
    public static void main(String[] args) {
       boolean flag = true;
       //用于记录用户的收支详情
       String details = "收支\t账户类型\t收支金额\t说明\n";
       //初始金额
       int balance = 10000;
       while(flag){
        System.out.println("----------家庭记账收支软件---------");
        System.out.println("            1.收支明细");
        System.out.println("            2.登记收入");
        System.out.println("            3.登记支出");
        System.out.println("            4.退    出\n");
        //获取用户的选择:1-4
        char selection = Utility.readMenuSelection();
        //
        switch(selection){
            case '1'://!!注意要加单引号
                // System.out.println("1.收支明细");
                System.out.println("---------当前收支明细记录----------");
                // System.out.println("收支\t账户类型\t收支金额\t说明\n");
                System.out.println(details);
                System.out.println("-----------------------------------");
                break;
            case '2':
                // System.out.println("2.登记收入");
                System.out.println("本次收入金额");
                int addMoney = Utility.readNumber();
                System.out.println("本次收入说明");
                String addInfo = Utility.readString();

                balance+=addMoney;
                //处理details变量
                details+="收入\t"+balance+"\t\t"+addMoney+"\t\t"+addInfo+"\n";
                

                System.out.println("---------------登记完成----------------");
                break;
            case '3':
                // System.out.println("3.登记支出");
                System.out.println("本次支出金额");
                int minusMoney = Utility.readNumber();
                System.out.println("本次支出说明");
                String minusInfo = Utility.readString();

                //处理balance
                if(balance>=minusMoney){
                    balance-=minusMoney;
                    //处理details变量
                    details+="收入\t"+balance+"\t\t"+minusMoney+"\t\t"+minusInfo+"\n";
                    System.out.println("---------------登记完成----------------");
                }else{
                    System.out.println("支出超过账户额度,支付失败");
                }
                
                
                

                
                break;
            case '4':
                // System.out.println("4.退出");
                System.out.println("确认是否退出?(Y/N)");
                char c = Utility.readConfirmSelection();
                if(c=='Y'){
                    flag = false;
                } 
                // break;
        }



       }
    }
}
