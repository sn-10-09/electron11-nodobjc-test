//
//  SampleFramework.m
//  SampleFramework
//
//

#import <Foundation/Foundation.h>
#import "SampleFramework.h"

@interface SampleFramework ()
@end

@implementation SampleFramework

+ (void)testCallbackToElectron:(NSString *)input completion:(sampleCallback)completion
{
    NSLog(@"inside testCallbackToElectron, input = %@, callback = %@ ", input, completion);
    NSString *myoutput;
    myoutput = @"This is from the MAC framework";
    NSLog(@"output = %@", myoutput);
    completion(myoutput);
}
@end
