public class myArrayUtil{
    //求数组最大值
    public int getMax(int[] arr){
        int a = arr[0];

        for(int i = 1; i < arr.length; i++){
            if(a<arr[i]){
                a = arr[i];
            }
        }

        return a;
    }
    //求数组的最小值
    public int getMin(int[] arr){

        return 0;
    }
    //求数组的总和
    public int getSum(int[] arr){

        return 0;
    }
    //求数组的平均值
    public int getAvg(int[] arr){

        return 0;
    }
    //反转数组
    public void reverse(int[] arr){


    }
    //复制数组
    public int[] copy(int[]arr){

        return null;
    }
    //数组排序
    public void sort(int[]arr){


    }
    //查找指定元素
    public int find(int[] arr,int val){

        return 0;
    }

}