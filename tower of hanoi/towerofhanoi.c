#include<stdio.h>

// Function to solve the Tower of Hanoi puzzle recursively
void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    // Base case: If there is only one disk, move it directly
    if (n == 1) {
        printf("Move disk 1 from rod %c to rod %c\n", from_rod, to_rod);
        return;
    }

    // Move n-1 disks from source to auxiliary rod using the destination rod
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);

    // Move the nth (largest) disk from source to destination rod
    printf("Move disk %d from rod %c to rod %c\n", n, from_rod, to_rod);

    // Move n-1 disks from auxiliary rod to destination rod using the source rod
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

int main() {
    int num_disks;

    printf("Enter the number of disks: ");
    scanf("%d", &num_disks);

    printf("The sequence of moves for %d disks is:\n", num_disks);
    // Call the function with initial rods 'A', 'B', 'C'
    towerOfHanoi(num_disks, 'A', 'C', 'B'); 

    return 0;
}
