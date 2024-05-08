

#include <stdio.h>


float fastInverseSquareRoot(float x)
{
    float xhalf = 0.5f * x;
    int i = *(int*)&x;
    i = 0x5f3759df - (i >> 1);
    x = *(float*)&i;
    x = x * (1.5f - xhalf * x * x);
    return x;
}

int main()
{
    float x = 0.15625f;
    float result = fastInverseSquareRoot(x);
    printf("The result is %f\n", result);
    return 0;
}
