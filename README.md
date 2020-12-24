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


`Exception Type:        EXC_BAD_INSTRUCTION (SIGILL)
Exception Codes:       0x0000000000000001, 0x0000000000000000
Exception Note:        EXC_CORPSE_NOTIFY

Termination Signal:    Illegal instruction: 4
Termination Reason:    Namespace SIGNAL, Code 0x4
Terminating Process:   exc handler [10980]
Thread 0 Crashed:: CrBrowserMain  Dispatch queue: com.apple.main-thread

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

41  com.github.Electron.framework 	0x000000010b7b8ef3 napi_create_function + 947`

