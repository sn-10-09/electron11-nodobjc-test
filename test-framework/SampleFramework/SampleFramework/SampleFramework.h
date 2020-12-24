//
//  SampleFramework.h
//  SampleFramework
//
//

#import <Foundation/Foundation.h>

//! Project version number for SampleFramework.
FOUNDATION_EXPORT double SampleFrameworkVersionNumber;

//! Project version string for SampleFramework.
FOUNDATION_EXPORT const unsigned char SampleFrameworkVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <SampleFramework/PublicHeader.h>

typedef void (^sampleCallback)(NSString *output);

@interface SampleFramework : NSObject

+ (void)testCallbackToElectron:(NSString *)input completion:(sampleCallback)completion;

@end

