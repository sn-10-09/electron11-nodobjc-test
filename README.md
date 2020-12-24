# electron11-nodobjc-test

OS : Mac Catalina 10.15.7
Node : 12.18.3
Electron : 11.1.0

Trying to call a mac framework from electron js in electron 11 via nodobjc 

To run the code:

1. Clone the repo
2. cd electron-quick-start-master
2. run 'yarn' to compile
3. run 'yarn start' to execute

The 'test-framework' contains code for the MAC framework, which sends a callback to electron. 
The callback is done successfully when there are no arguments in the callback.
When the callback has a argument, the app crashes with the following error 


Exception Type:        EXC_BAD_INSTRUCTION (SIGILL)
Exception Codes:       0x0000000000000001, 0x0000000000000000
Exception Note:        EXC_CORPSE_NOTIFY

Termination Signal:    Illegal instruction: 4
Termination Reason:    Namespace SIGNAL, Code 0x4
Terminating Process:   exc handler [10980]

`Thread 0 Crashed:: CrBrowserMain  Dispatch queue: com.apple.main-thread
0   com.github.Electron.framework 	0x000000010e4fe6b2 v8::internal::compiler::ZoneStats::GetCurrentAllocatedBytes() const + 30625842
1   com.github.Electron.framework 	0x000000010e4fd3fe v8::internal::compiler::ZoneStats::GetCurrentAllocatedBytes() const + 30621054
2   com.github.Electron.framework 	0x000000010c3dd3e7 v8::internal::BackingStore::Reallocate(v8::internal::Isolate*, unsigned long) + 327
3   com.github.Electron.framework 	0x000000010c297bff v8::ArrayBuffer::New(v8::Isolate*, void*, unsigned long, v8::ArrayBufferCreationMode) + 463
4   com.github.Electron.framework 	0x000000010c297ae6 v8::ArrayBuffer::New(v8::Isolate*, void*, unsigned long, v8::ArrayBufferCreationMode) + 182
5   com.github.Electron.framework 	0x000000010b7d35f5 node::Buffer::New(v8::Isolate*, char*, unsigned long, void (*)(char*, void*), void*) + 597
6   com.github.Electron.framework 	0x000000010b7d3494 node::Buffer::New(v8::Isolate*, char*, unsigned long, void (*)(char*, void*), void*) + 244
7   com.github.Electron.framework 	0x000000010b7cd697 napi_create_external_buffer + 215
8   electron.napi.node            	0x0000000115d9f1fe (anonymous namespace)::WrapPointer(Napi::Env, char*, unsigned long) + 81
9   electron.napi.node            	0x0000000115d9f9fd (anonymous namespace)::ReadPointer(Napi::CallbackInfo const&) + 136
10  electron.napi.node            	0x0000000115d64dd7 napi_value__* Napi::details::WrapCallback<Napi::details::CallbackData<Napi::Value (*)(Napi::CallbackInfo const&), Napi::Value>::Wrapper(napi_env__*, napi_callback_info__*)::'lambda'()>(Napi::Value (*)(Napi::CallbackInfo const&)) + 47
11  electron.napi.node            	0x0000000115d64d8d Napi::details::CallbackData<Napi::Value (*)(Napi::CallbackInfo const&), Napi::Value>::Wrapper(napi_env__*, napi_callback_info__*) + 33
12  com.github.Electron.framework 	0x000000010b7b8ef3 napi_create_function + 947
13  com.github.Electron.framework 	0x000000010948826d v8::internal::ClassScope::ResolvePrivateNamesPartially() + 14509
14  com.github.Electron.framework 	0x0000000109487f62 v8::internal::ClassScope::ResolvePrivateNamesPartially() + 13730
15  com.github.Electron.framework 	0x0000000109487561 v8::internal::ClassScope::ResolvePrivateNamesPartially() + 11169
16  com.github.Electron.framework 	0x0000000109a67e38 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 484488
17  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
18  com.github.Electron.framework 	0x00000001099f2318 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2408
19  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
20  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
21  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
22  com.github.Electron.framework 	0x00000001099f79db v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 24619
23  com.github.Electron.framework 	0x00000001099f77b8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 24072
24  com.github.Electron.framework 	0x00000001094d9361 v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*) + 897
25  com.github.Electron.framework 	0x00000001094d907a v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*) + 154
26  com.github.Electron.framework 	0x000000010946524c v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*) + 332
27  com.github.Electron.framework 	0x000000010b76df96 node::CallbackScope::~CallbackScope() + 2518
28  com.github.Electron.framework 	0x000000010b76e205 node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, v8::Local<v8::Function>, int, v8::Local<v8::Value>*, node::async_context) + 181
29  com.github.Electron.framework 	0x000000010b7cd35f napi_make_callback + 271
30  ffi_bindings.node             	0x0000000115d7c631 Napi::FunctionReference::MakeCallback(napi_value__*, std::initializer_list<napi_value__*> const&, napi_async_context__*) const + 129 (napi-inl.h:2637)
31  ffi_bindings.node             	0x0000000115d7c167 FFI::CallbackInfo::DispatchToV8(FFI::callback_info*, void*, void**, bool) + 279
32  ffi_bindings.node             	0x0000000115d7d838 FFI::CallbackInfo::Invoke(ffi_cif*, void*, void**, void*) + 72 (callback_info.cc:160)
33  ffi_bindings.node             	0x0000000115d82002 ffi_closure_unix64_inner + 818
34  ffi_bindings.node             	0x0000000115d8253e ffi_closure_unix64 + 70 (darwin64.S:226)
35  abc.abc.SampleFramework       	0x0000000117f44e47 +[SampleFramework testCallbackToElectron:completion:] + 199 (SampleFramework.m:21)
36  ffi_bindings.node             	0x0000000115d823bc ffi_call_unix64 + 76 (darwin64.S:78)
37  ffi_bindings.node             	0x0000000115d81c04 ffi_call + 788
38  ffi_bindings.node             	0x0000000115d79b0d FFI::FFI::FFICall(Napi::CallbackInfo const&) + 781 (ffi.cc:254)
39  electron.napi.node            	0x0000000115d64fbd napi_value__* Napi::details::WrapCallback<Napi::details::CallbackData<void (*)(Napi::CallbackInfo const&), void>::Wrapper(napi_env__*, napi_callback_info__*)::'lambda'()>(void (*)(Napi::CallbackInfo const&)) + 47
40  electron.napi.node            	0x0000000115d64f73 Napi::details::CallbackData<void (*)(Napi::CallbackInfo const&), void>::Wrapper(napi_env__*, napi_callback_info__*) + 33
41  com.github.Electron.framework 	0x000000010b7b8ef3 napi_create_function + 947
42  com.github.Electron.framework 	0x000000010948826d v8::internal::ClassScope::ResolvePrivateNamesPartially() + 14509
43  com.github.Electron.framework 	0x0000000109487f62 v8::internal::ClassScope::ResolvePrivateNamesPartially() + 13730
44  com.github.Electron.framework 	0x0000000109487561 v8::internal::ClassScope::ResolvePrivateNamesPartially() + 11169
45  com.github.Electron.framework 	0x0000000109a67e38 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 484488
46  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
47  com.github.Electron.framework 	0x00000001099f2318 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2408
48  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
49  com.github.Electron.framework 	0x00000001099f2318 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2408
50  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
51  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
52  com.github.Electron.framework 	0x00000001099f2318 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2408
53  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
54  com.github.Electron.framework 	0x00000001099f2318 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2408
55  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
56  com.github.Electron.framework 	0x00000001099f2318 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2408
57  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
58  com.github.Electron.framework 	0x00000001099f9eb8 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 34056
59  com.github.Electron.framework 	0x00000001099f2318 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2408
60  com.github.Electron.framework 	0x0000000109ab757b v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 809931
61  com.github.Electron.framework 	0x0000000109a1a317 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 166247
62  com.github.Electron.framework 	0x00000001099f7938 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 24456
63  com.github.Electron.framework 	0x00000001094d9931 v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*) + 2385
64  com.github.Electron.framework 	0x00000001094da233 v8::internal::Execution::TryCall(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Execution::MessageHandling, v8::internal::MaybeHandle<v8::internal::Object>*, bool) + 355
65  com.github.Electron.framework 	0x00000001094da310 v8::internal::Execution::TryCall(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Execution::MessageHandling, v8::internal::MaybeHandle<v8::internal::Object>*, bool) + 576
66  com.github.Electron.framework 	0x00000001094ef85f v8::internal::MicrotaskQueue::RunMicrotasks(v8::internal::Isolate*) + 463
67  com.github.Electron.framework 	0x00000001094ef660 v8::internal::MicrotaskQueue::PerformCheckpoint(v8::Isolate*) + 32
68  com.github.Electron.framework 	0x000000010b76dae4 node::CallbackScope::~CallbackScope() + 1316
69  com.github.Electron.framework 	0x000000010b76dfaa node::CallbackScope::~CallbackScope() + 2538
70  com.github.Electron.framework 	0x000000010b76e205 node::MakeCallback(v8::Isolate*, v8::Local<v8::Object>, v8::Local<v8::Function>, int, v8::Local<v8::Value>*, node::async_context) + 181
71  com.github.Electron.framework 	0x0000000108fbae4c ElectronInitializeICUandStartNode + 1290764
72  com.github.Electron.framework 	0x0000000108e901d4 ElectronInitializeICUandStartNode + 66964
73  com.github.Electron.framework 	0x0000000108e85581 ElectronInitializeICUandStartNode + 22849
74  com.github.Electron.framework 	0x0000000108f33077 ElectronInitializeICUandStartNode + 734263
75  com.github.Electron.framework 	0x000000010900bcbf ElectronInitializeICUandStartNode + 1622143
76  com.apple.CoreFoundation      	0x00007fff333b180f __CFNOTIFICATIONCENTER_IS_CALLING_OUT_TO_AN_OBSERVER__ + 12
77  com.apple.CoreFoundation      	0x00007fff333b17a3 ___CFXRegistrationPost1_block_invoke + 63
78  com.apple.CoreFoundation      	0x00007fff333b1718 _CFXRegistrationPost1 + 372
79  com.apple.CoreFoundation      	0x00007fff333b1384 ___CFXNotificationPost_block_invoke + 80
80  com.apple.CoreFoundation      	0x00007fff333814fd -[_CFXNotificationRegistrar find:object:observer:enumerator:] + 1554
81  com.apple.CoreFoundation      	0x00007fff333809a9 _CFXNotificationPost + 1351
82  com.apple.Foundation          	0x00007fff359fe786 -[NSNotificationCenter postNotificationName:object:userInfo:] + 59
83  com.apple.AppKit              	0x00007fff306354f3 -[NSApplication _postDidFinishNotification] + 312
84  com.apple.AppKit              	0x00007fff30635232 -[NSApplication _sendFinishLaunchingNotification] + 208
85  com.apple.AppKit              	0x00007fff306322f3 -[NSApplication(NSAppleEventHandling) _handleAEOpenEvent:] + 549
86  com.apple.AppKit              	0x00007fff30631f38 -[NSApplication(NSAppleEventHandling) _handleCoreEvent:withReplyEvent:] + 688
87  com.apple.Foundation          	0x00007fff35a29a26 -[NSAppleEventManager dispatchRawAppleEvent:withRawReply:handlerRefCon:] + 308
88  com.apple.Foundation          	0x00007fff35a29890 _NSAppleEventManagerGenericHandler + 98
89  com.apple.AE                  	0x00007fff3472e203 0x7fff34721000 + 53763
90  com.apple.AE                  	0x00007fff3472d929 0x7fff34721000 + 51497
91  com.apple.AE                  	0x00007fff34725bd7 aeProcessAppleEvent + 449
92  com.apple.HIToolbox           	0x00007fff31ff87fa AEProcessAppleEvent + 54
93  com.apple.AppKit              	0x00007fff3062c2d1 _DPSNextEvent + 1547
94  com.apple.AppKit              	0x00007fff3062a880 -[NSApplication(NSEvent) _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 1352
95  com.apple.AppKit              	0x00007fff3061c58e -[NSApplication run] + 658
96  com.github.Electron.framework 	0x0000000109fcba86 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 6136022
97  com.github.Electron.framework 	0x0000000109fcaa62 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 6131890
98  com.github.Electron.framework 	0x0000000109f99ea1 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 5932273
99  com.github.Electron.framework 	0x0000000109f785d9 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 5794857
100 com.github.Electron.framework 	0x000000010c9bb914 v8::internal::compiler::ZoneStats::GetCurrentAllocatedBytes() const + 2040468
101 com.github.Electron.framework 	0x0000000109c18d02 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2257746
102 com.github.Electron.framework 	0x0000000109c147c9 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 2240025
103 com.github.Electron.framework 	0x0000000109bd9e21 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 1999985
104 com.github.Electron.framework 	0x0000000109bd9b46 v8::internal::SetupIsolateDelegate::SetupHeap(v8::internal::Heap*) + 1999254
105 com.github.Electron.framework 	0x0000000109423f0e ElectronInitializeICUandStartNode + 5915342
106 com.github.Electron.framework 	0x0000000109424412 ElectronInitializeICUandStartNode + 5916626
107 com.github.Electron.framework 	0x0000000108e7fc08 ElectronMain + 136
108 com.github.Electron           	0x0000000108e33edd 0x108e33000 + 3805
109 libdyld.dylib                 	0x00007fff6d472cc9 start + 1`
