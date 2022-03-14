#include <stdlib.h>
#include <time.h>
<<<<<<< HEAD
#include <stdio.h> 
/**
 * main-assigns a random number to int n every time
 * it executes and prints it
 * return:always 0
*/

=======
#include <stdio.h>
/**
 * main - assigns a random number to int n everytime
 * it executes, and prints it
 * Return: Always 0 (Success)
 */
>>>>>>> 602eaa9effdac28912f6dd359de43c5ab961c585
int main(void)
{
	int n;

<<<<<<< HEAD
        srand(time(0));
        n = rand() - RAND_MAX / 2;
        
        if (n > 0)
               printf("%d is positive\n",n);
        ifelse (n == 0)
                printf("%d is zero\n",n);
	ifelse (n < 0)
		printf("%d is negative\n", n;)
        return (0);
=======
	srand(time(0));
	n = rand() - RAND_MAX / 2;
	if (n > 0)
		printf("%d is positive\n", n);
	else if (n == 0)
		printf("%d is zero\n", n);
	else if (n < 0)
		printf("%d is negative\n", n);
	return (0);
>>>>>>> 602eaa9effdac28912f6dd359de43c5ab961c585
}
