import java.util.Scanner;

class Factura {
    private String nombreComprador;
    private double montoCompra;
    private double descuento;
    private double totalPagar;

    public Factura(String nombreComprador, double montoCompra) {
        this.nombreComprador = nombreComprador;
        this.montoCompra = montoCompra;
        calcularDescuento();
        calcularTotalPagar();
    }

    private void calcularDescuento() {
        if (montoCompra >= 200000) {
            descuento = montoCompra * 0.15;
        } else if (montoCompra >= 50000) {
            descuento = montoCompra * 0.02;
        } else if (montoCompra >= 20000) {
            descuento = montoCompra * 0.015;
        } else {
            descuento = 0;
        }
    }

    private void calcularTotalPagar() {
        totalPagar = montoCompra - descuento;
    }

    public void imprimirFactura() {
        System.out.println("\n---------- Factura de Compra ----------");
        System.out.println("Nombre del comprador: " + nombreComprador);
        System.out.println("Monto de la compra: $" + montoCompra);
        System.out.println("Descuento aplicado: $" + descuento);
        System.out.println("Total a pagar: $" + totalPagar);
        System.out.println("Gracias por su compra, " + nombreComprador + "!");
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ingrese su nombre: ");
        String nombre = scanner.nextLine();
        
        double montoCompra = 0;
        boolean entradaValida = false;
        
        while (!entradaValida) {
            System.out.print("Ingrese el monto de la compra: ");
            
            try {
                montoCompra = Double.parseDouble(scanner.nextLine());
                entradaValida = true;
            } catch (NumberFormatException e) {
                System.out.println("Por favor, ingrese un valor numérico válido.");
            }
        }

        Factura factura = new Factura(nombre, montoCompra);
        factura.imprimirFactura();
    }
}