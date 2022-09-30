import java.util.Scanner;

public class MangosNaranjas {
	
	public static void main(String[] args) {
		System.out.println("Escribe el numero de Mangos: ");
		Scanner sc = new Scanner(System.in);
	    int mangos = sc.nextInt();  
	    System.out.println("Escribe el numero de Naranjas: ");
		Scanner ss = new Scanner(System.in);
		int naranjas = ss.nextInt(); 

		int a = Math.max(mangos, naranjas);
		int b = Math.min(mangos, naranjas);
		
		//Variable que guardará el resultado
		int res;
		do {
			res = b;
			b = a%b;
			a = res;
		} while (b != 0);
		
		int NumMangos = (mangos/res);
		int NumNaranjas = (naranjas/res);
	
		
		System.out.println("El número de cajas es: "+ res + " El número de mangos es una caja es: " + NumMangos + " .El número de naranjas en una caja es: " + NumNaranjas);

		sc.close();
		ss.close();
	}//main
	

}//class MangosNaranjas
