#include "main.h"
/**
 * _isupper - Function that checks for uppercase character
 * @c: Number to be checked
 * Return: 1 if c is uppercase and 0 otherwise
 */
int _isupper(int c)
{
  if (c >= 'A' && c <= 'Z')
  {
	  return (1);
	}
	else
	{
		return (0);
	}
}
