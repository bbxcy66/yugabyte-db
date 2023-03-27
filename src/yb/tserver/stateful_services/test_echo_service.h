// Copyright (c) YugaByte, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.  You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License
// is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied.  See the License for the specific language governing permissions and limitations
// under the License.
//

#pragma once

#include "yb/tserver/stateful_services/stateful_service_base.h"
#include "yb/tserver/stateful_services/test_echo_service.service.h"

namespace yb {
namespace stateful_service {
class TestEchoService : public StatefulServiceBase, public TestEchoServiceIf {
 public:
  TestEchoService(const std::string& node_uuid, const scoped_refptr<MetricEntity>& metric_entity);
  void Shutdown() override;

 private:
  void Activate(const int64_t leader_term) override;
  void Deactivate() override;
  virtual Result<bool> RunPeriodicTask() override;

  STATEFUL_SERVICE_IMPL_METHODS((GetEcho));

 private:
  const std::string node_uuid_;
};

}  // namespace stateful_service
}  // namespace yb