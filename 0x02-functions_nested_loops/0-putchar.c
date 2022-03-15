#include <stdio.h>
/**
 * _putchar outputs the result
 * Returns 0, Success
 */
int _putchar(char c)
{
	return(write(1, &c, 1));
}
